"use client";

import { Box, Paper, Typography, LinearProgress, Stack, Chip } from "@mui/material";

const utilizationData = [
    { branch: "SZIE", utilized: 85, capacity: 100, status: "High" },
    { branch: "TBD", utilized: 92, capacity: 100, status: "Critical" },
    { branch: "SZGZ", utilized: 45, capacity: 100, status: "Low" },
    { branch: "SNGT", utilized: 78, capacity: 100, status: "Optimal" },
    { branch: "SNEM", utilized: 63, capacity: 100, status: "Medium" },
];

const getStatusColor = (status: string) => {
    switch (status) {
        case "Critical": return "error";
        case "High": return "warning";
        case "Optimal": return "success";
        case "Medium": return "info";
        default: return "default";
    }
};

export default function CrewUtilizationMUI() {
    return (
        <Paper elevation={1} sx={{ p: 2, minHeight: 300 }}>
            <Typography variant="h6" align="center" gutterBottom>
                Crew Utilization by Branch
            </Typography>
            <Stack spacing={2.5} sx={{ mt: 2 }}>
                {utilizationData.map((item) => {
                    const utilizationPct = (item.utilized / item.capacity) * 100;

                    return (
                        <Box key={item.branch}>
                            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 1 }}>
                                <Typography variant="body2" fontWeight="medium">
                                    {item.branch}
                                </Typography>
                                <Chip
                                    size="small"
                                    label={item.status}
                                    color={getStatusColor(item.status) as any}
                                    variant="outlined"
                                />
                            </Box>
                            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                                <LinearProgress
                                    variant="determinate"
                                    value={utilizationPct}
                                    sx={{
                                        flex: 1,
                                        height: 8,
                                        borderRadius: 4,
                                        bgcolor: "action.hover",
                                        "& .MuiLinearProgress-bar": {
                                            bgcolor: utilizationPct > 90 ? "#f44336" :
                                                   utilizationPct > 75 ? "#ff9800" :
                                                   utilizationPct > 50 ? "#4caf50" : "#2196f3"
                                        }
                                    }}
                                />
                                <Typography variant="caption" color="text.secondary" sx={{ minWidth: 35 }}>
                                    {utilizationPct.toFixed(0)}%
                                </Typography>
                            </Box>
                            <Typography variant="caption" color="text.secondary">
                                {item.utilized}/{item.capacity} utilized
                            </Typography>
                        </Box>
                    );
                })}
            </Stack>
        </Paper>
    );
}