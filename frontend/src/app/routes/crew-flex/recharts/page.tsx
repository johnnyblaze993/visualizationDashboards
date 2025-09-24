"use client";

import FTEByBranchSurge from "@/components/recharts/FTEByBranchSurge";
import PlaceholderChart from "@/components/recharts/EducationByLevel";
import PlaceholderPie from "@/components/recharts/FTEByBranch";

export default function CrewFlexRechartsPage() {
    return (
        <div
            style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "1rem",
                width: "100%",
                padding: "1rem",
            }}
        >
            <FTEByBranchSurge />
            <PlaceholderChart />
            <PlaceholderPie />
        </div>
    );
}
