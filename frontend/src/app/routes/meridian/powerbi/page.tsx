import ResponsivePowerBIFrame from "@/components/ResponsivePowerBIFrame";

export default function MeridianPowerBIPage() {
    return (
        <div style={{ height: "100%", padding: "1rem" }}>
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    border: "1px solid var(--border)",
                    borderRadius: 12,
                    background: "var(--card)",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <ResponsivePowerBIFrame
                    title="MERIDIAN (iframe)"
                    src="https://app.high.powerbigov.us/reportEmbed?reportId=5ada55b5-8c2d-4fb8-8840-ae5525c1c746&autoAuth=true&ctid=6dbe736e-d3ea-4ca9-ba0c-7162cddcbc47"
                />
            </div>
        </div>
    );
}
