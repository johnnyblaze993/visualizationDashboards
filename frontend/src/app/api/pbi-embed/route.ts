import axios from "axios";

export async function POST() {
  const tenantId = process.env.AZURE_TENANT_ID!;
  const clientId = process.env.AZURE_CLIENT_ID!;
  const clientSecret = process.env.AZURE_CLIENT_SECRET!;
  const workspaceId = process.env.PBI_WORKSPACE_ID!;
  const reportId = process.env.PBI_REPORT_ID!;
  const authority = process.env.OAUTH_AUTHORITY ?? "https://login.microsoftonline.com";
  const resource = process.env.PBI_RESOURCE ?? "https://analysis.windows.net/powerbi/api";

  try {
    // 1) Azure AD access token (client credentials)
    const tokenRes = await axios.post(
      `${authority}/${tenantId}/oauth2/v2.0/token`,
      new URLSearchParams({
        client_id: clientId,
        client_secret: clientSecret,
        scope: `${resource}/.default`,
        grant_type: "client_credentials",
      }).toString(),
      { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
    );
    const aadToken = tokenRes.data.access_token as string;

    // 2) Embed token for report
    const embedRes = await axios.post(
      `https://api.powerbi.com/v1.0/myorg/groups/${workspaceId}/reports/${reportId}/GenerateToken`,
      { accessLevel: "View" },
      { headers: { Authorization: `Bearer ${aadToken}` } }
    );

    // 3) Get embed URL for report
    const reportRes = await axios.get(
      `https://api.powerbi.com/v1.0/myorg/groups/${workspaceId}/reports/${reportId}`,
      { headers: { Authorization: `Bearer ${aadToken}` } }
    );

    return new Response(JSON.stringify({
      embedUrl: reportRes.data.embedUrl,
      reportId,
      accessToken: embedRes.data.token,
    }), { status: 200, headers: { "Content-Type": "application/json" }});
  } catch (err: unknown) {
    let msg: string | unknown = "Unknown error";
    if (axios.isAxiosError(err)) {
      msg = err.response?.data ?? err.message;
    } else if (err instanceof Error) {
      msg = err.message;
    } else if (typeof err === "object" && err !== null) {
      try {
        msg = JSON.stringify(err);
      } catch {
        msg = String(err);
      }
    }
    return new Response(
      JSON.stringify({ error: msg }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
