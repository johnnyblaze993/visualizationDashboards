"use client";

import { Box, Paper, Typography, Avatar, Stack, Rating } from "@mui/material";

const performanceData = [
    { branch: "SZIE", score: 4.2, trend: "up", efficiency: 89, missions: 24 },
    { branch: "TBD", score: 4.8, trend: "up", efficiency: 95, missions: 18 },
    { branch: "SZGZ", score: 3.1, trend: "down", efficiency: 72, missions: 8 },
    { branch: "SNGT", score: 4.5, trend: "up", efficiency: 91, missions: 31 },
    { branch: "SNEM", score: 3.7, trend: "down", efficiency: 78, missions: 15 },
];

export default function BranchPerformanceMUI() {
    return (
        <Paper elevation={1} sx={{ p: 2, minHeight: 300 }}>
            <Typography variant="h6" align="center" gutterBottom>
                Branch Performance Metrics
            </Typography>
            <Stack spacing={1.5} sx={{ mt: 2 }}>
                {performanceData.map((item) => (
                    <Box
                        key={item.branch}
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 2,
                            p: 1.5,
                            borderRadius: 1,
                            bgcolor: "action.hover",
                            "&:hover": { bgcolor: "action.selected" }
                        }}
                    >
                        <Avatar
                            sx={{
                                bgcolor: item.score >= 4 ? "success.main" :
                                       item.score >= 3.5 ? "warning.main" : "error.main",
                                width: 32,
                                height: 32,
                                fontSize: "0.75rem"
                            }}
                        >
                            {item.branch.substring(0, 2)}
                        </Avatar>

                        <Box sx={{ flex: 1 }}>
                            <Typography variant="body2" fontWeight="medium">
                                {item.branch}
                            </Typography>
                            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                                <Rating
                                    value={item.score}
                                    precision={0.1}
                                    size="small"
                                    readOnly
                                    sx={{ "& .MuiRating-icon": { fontSize: "1rem" } }}
                                />
                                <Typography variant="caption">
                                    {item.score}
                                </Typography>
                            </Box>
                        </Box>

                        <Box sx={{ textAlign: "right" }}>
                            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                                <Typography
                                    variant="caption"
                                    sx={{
                                        color: item.trend === "up" ? "success.main" : "error.main",
                                        fontWeight: "bold"
                                    }}
                                >
                                    {item.trend === "up" ? "↗" : "↘"}
                                </Typography>
                                <Typography variant="caption" fontWeight="medium">
                                    {item.efficiency}%
                                </Typography>
                            </Box>
                            <Typography variant="caption" color="text.secondary">
                                {item.missions} missions
                            </Typography>
                        </Box>
                    </Box>
                ))}
            </Stack>
        </Paper>
    );
}