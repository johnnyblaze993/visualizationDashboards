import ResponsivePowerBIFrame from "@/components/ResponsivePowerBIFrame";

export default function CrewFlexPowerBIPage() {
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
                    title="Crew Flex (iframe)"
                    src="https://app.high.powerbigov.us/reportEmbed?reportId=9744f5bd-0f10-49e0-a975-a73264eadefd&autoAuth=true&ctid=6dbe736e-d3ea-4ca9-ba0c-7162cddcbc47"
                />
            </div>
        </div>
    );
}
