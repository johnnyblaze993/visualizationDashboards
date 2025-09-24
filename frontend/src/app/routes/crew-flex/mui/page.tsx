"use client";

import FTEByBranchSurgeMUI from "@/components/mui/FTEByBranchSurgeMUI";
import EducationByLevelMUI from "@/components/mui/EducationByLevelMUI";
import FTEByBranchMUI from "@/components/mui/FTEByBranchMUI";
import CrewUtilizationMUI from "@/components/mui/CrewUtilizationMUI";
import BranchPerformanceMUI from "@/components/mui/BranchPerformanceMUI";
import TrainingStatusMUI from "@/components/mui/TrainingStatusMUI";
import FlexCapacityMUI from "@/components/mui/FlexCapacityMUI";
import CrewAvailabilityMUI from "@/components/mui/CrewAvailabilityMUI";
import OperationalMetricsMUI from "@/components/mui/OperationalMetricsMUI";
import { Box, Container, Typography } from "@mui/material";

export default function CrewFlexMUICardsPage() {
    return (
        <div style={{
            width: "100%",
            padding: "24px",
            paddingBottom: "50px"
        }}>
            <Typography variant="h4" component="h1" gutterBottom align="center" sx={{ mb: 4 }}>
                Crew Flex Dashboard - Material UI
            </Typography>
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gap: "24px",
                    width: "100%",
                    maxWidth: "1400px",
                    margin: "0 auto"
                }}
            >
                <FTEByBranchSurgeMUI />
                <EducationByLevelMUI />
                <FTEByBranchMUI />
                <CrewUtilizationMUI />
                <BranchPerformanceMUI />
                <TrainingStatusMUI />
                <FlexCapacityMUI />
                <CrewAvailabilityMUI />
                <OperationalMetricsMUI />
            </div>
        </div>
    );
}
