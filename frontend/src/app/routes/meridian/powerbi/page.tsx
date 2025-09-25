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
                    src="https://app.high.powerbigov.us/reportEmbed?reportId=28d542d1-28e2-41c2-8ada-2db9226a7953&autoAuth=true&ctid=6dbe736e-d3ea-4ca9-ba0c-7162cddcbc47"
                />
            </div>
        </div>
    );
}
