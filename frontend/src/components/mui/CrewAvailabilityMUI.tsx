"use client";

import { Box, Paper, Typography, Badge, Avatar, Stack } from "@mui/material";

const availabilityData = [
    { id: "C001", name: "Alpha Team", status: "available", count: 12, readiness: "high" },
    { id: "C002", name: "Bravo Team", status: "deployed", count: 8, readiness: "medium" },
    { id: "C003", name: "Charlie Team", status: "training", count: 15, readiness: "high" },
    { id: "C004", name: "Delta Team", status: "available", count: 10, readiness: "low" },
    { id: "C005", name: "Echo Team", status: "maintenance", count: 6, readiness: "medium" },
];

const getStatusIcon = (status: string) => {
    switch (status) {
        case "available":
            return (
                <Typography variant="caption" sx={{ color: "success.main", fontWeight: "bold" }}>
                    ✓
                </Typography>
            );
        case "deployed":
            return (
                <Typography variant="caption" sx={{ color: "error.main", fontWeight: "bold" }}>
                    ●
                </Typography>
            );
        case "training":
        case "maintenance":
            return (
                <Typography variant="caption" sx={{ color: "warning.main", fontWeight: "bold" }}>
                    ⏳
                </Typography>
            );
        default:
            return (
                <Typography variant="caption" sx={{ color: "grey.500", fontWeight: "bold" }}>
                    ⏸
                </Typography>
            );
    }
};

const getReadinessColor = (readiness: string) => {
    switch (readiness) {
        case "high": return "success.main";
        case "medium": return "warning.main";
        case "low": return "error.main";
        default: return "grey.500";
    }
};

export default function CrewAvailabilityMUI() {
    return (
        <Paper elevation={1} sx={{ p: 2, minHeight: 300 }}>
            <Typography variant="h6" align="center" gutterBottom>
                Real-time Crew Availability
            </Typography>
            <Stack spacing={1.5} sx={{ mt: 2 }}>
                {availabilityData.map((crew) => (
                    <Box
                        key={crew.id}
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 1.5,
                            p: 1.5,
                            borderRadius: 2,
                            border: 1,
                            borderColor: "divider",
                            "&:hover": {
                                bgcolor: "action.hover",
                                borderColor: "primary.main"
                            }
                        }}
                    >
                        <Badge
                            badgeContent={crew.count}
                            color={crew.status === "available" ? "success" : "error"}
                            max={99}
                        >
                            <Avatar
                                sx={{
                                    bgcolor: getReadinessColor(crew.readiness),
                                    width: 36,
                                    height: 36,
                                    fontSize: "0.75rem"
                                }}
                            >
                                {crew.name.charAt(0)}
                            </Avatar>
                        </Badge>

                        <Box sx={{ flex: 1 }}>
                            <Typography variant="body2" fontWeight="medium">
                                {crew.name}
                            </Typography>
                            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                                {getStatusIcon(crew.status)}
                                <Typography variant="caption" color="text.secondary">
                                    {crew.status.charAt(0).toUpperCase() + crew.status.slice(1)}
                                </Typography>
                            </Box>
                        </Box>

                        <Box sx={{ textAlign: "right" }}>
                            <Typography variant="body2" fontWeight="medium">
                                {crew.count}
                            </Typography>
                            <Typography variant="caption" color="text.secondary">
                                personnel
                            </Typography>
                        </Box>

                        <Box
                            sx={{
                                width: 8,
                                height: 8,
                                borderRadius: "50%",
                                bgcolor: getReadinessColor(crew.readiness),
                                ml: 1
                            }}
                            title={`${crew.readiness} readiness`}
                        />
                    </Box>
                ))}

                <Box sx={{ mt: 2, p: 1, bgcolor: "action.hover", borderRadius: 1 }}>
                    <Typography variant="caption" color="text.secondary" align="center" display="block">
                        Total Available: {availabilityData
                            .filter(c => c.status === "available")
                            .reduce((sum, c) => sum + c.count, 0)} personnel
                    </Typography>
                </Box>
            </Stack>
        </Paper>
    );
}