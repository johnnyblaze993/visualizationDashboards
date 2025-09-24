"use client";

import FTEByBranchSurgeD3 from "@/components/d3/FTEByBranchSurgeD3";
import EducationByLevelD3 from "@/components/d3/EducationByLevelD3";
import FTEByBranchD3 from "@/components/d3/FTEByBranchD3";

export default function CrewFlexD3Page() {
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
            <FTEByBranchSurgeD3 />
            <EducationByLevelD3 />
            <FTEByBranchD3 />
        </div>
    );
}
