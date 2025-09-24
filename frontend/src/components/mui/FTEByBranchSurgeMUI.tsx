"use client";

import { Box, Paper, Stack, Typography } from "@mui/material";

const data = [
    { branch: "SZIE", Y: 1, N: 18 },
    { branch: "TBD", Y: 5, N: 0 },
    { branch: "SZGZ", Y: 0, N: 1 },
    { branch: "SNGT", Y: 1, N: 2 },
    { branch: "SNEM", Y: 0, N: 3 },
];

export default function FTEByBranchSurgeMUI() {
    const totals = data.map((d) => d.Y + d.N);
    const max = Math.max(...totals);

    return (
        <Paper elevation={1} sx={{ p: 2, minHeight: 300 }}>
            <Typography variant="h6" align="center" gutterBottom>
                FTE by Branch and Surge (Material UI)
            </Typography>
            <Stack spacing={1.25}>
                {data.map((d, idx) => {
                    const total = totals[idx] || 1;
                    const scale = (total / max) * 100;
                    // Normalize widths so the largest row fills container
                    const totalPct = ((d.Y / total) * scale) + ((d.N / total) * scale);
                    const normalize = totalPct > 0 ? scale / totalPct : 1;

                    return (
                        <Box key={d.branch}>
                            <Box sx={{ display: "flex", alignItems: "center", mb: 0.5 }}>
                                <Typography variant="body2" sx={{ flex: 0, width: 56 }}>
                                    {d.branch}
                                </Typography>
                                <Typography variant="caption" color="text.secondary">
                                    Y: {d.Y} · N: {d.N}
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    height: 14,
                                    bgcolor: "action.hover",
                                    borderRadius: 1,
                                    overflow: "hidden",
                                    display: "flex",
                                }}
                            >
                                {d.Y > 0 && (
                                    <Box
                                        title={`Surge: Y = ${d.Y}`}
                                        sx={{
                                            height: 1,
                                            width: `${(((d.Y / total) * scale) * normalize).toFixed(2)}%`,
                                            bgcolor: "#4CAF50",
                                        }}
                                    />
                                )}
                                {d.N > 0 && (
                                    <Box
                                        title={`Surge: N = ${d.N}`}
                                        sx={{
                                            height: 1,
                                            width: `${(((d.N / total) * scale) * normalize).toFixed(2)}%`,
                                            bgcolor: "#F44336",
                                        }}
                                    />
                                )}
                            </Box>
                        </Box>
                    );
                })}
            </Stack>
        </Paper>
    );
}

