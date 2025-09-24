"use client";

import FTEByBranchSurgeHC from "@/components/highcharts/FTEByBranchSurgeHC";
import EducationByLevelHC from "@/components/highcharts/EducationByLevelHC";
import FTEByBranchHC from "@/components/highcharts/FTEByBranchHC";

export default function CrewFlexHighchartsPage() {
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
            <FTEByBranchSurgeHC />
            <EducationByLevelHC />
            <FTEByBranchHC />
        </div>
    );
}
