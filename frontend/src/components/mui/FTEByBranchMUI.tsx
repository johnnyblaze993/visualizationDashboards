"use client";

import { Box, Paper, Stack, Typography } from "@mui/material";

const fteByBranchData = [
    { branch: "SNWG", fte: 38 },
    { branch: "SNEM", fte: 28 },
    { branch: "SNGT", fte: 15 },
    { branch: "SNGF", fte: 12 },
    { branch: "SNWP", fte: 10 },
    { branch: "SNL", fte: 9 },
    { branch: "SZIS", fte: 8 },
];

export default function FTEByBranchMUI() {
    const max = Math.max(...fteByBranchData.map((d) => d.fte));

    return (
        <Paper elevation={1} sx={{ p: 2, minHeight: 300 }}>
            <Typography variant="h6" align="center" gutterBottom>
                FTE by Branch (Material UI)
            </Typography>
            <Stack spacing={1.25}>
                {fteByBranchData.map((d) => (
                    <Box key={d.branch}>
                        <Box sx={{ display: "flex", alignItems: "center", mb: 0.5 }}>
                            <Typography variant="body2" sx={{ flex: 0, width: 56 }}>
                                {d.branch}
                            </Typography>
                            <Typography variant="caption" color="text.secondary">
                                {d.fte}
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                height: 14,
                                bgcolor: "action.hover",
                                borderRadius: 1,
                                overflow: "hidden",
                            }}
                        >
                            <Box
                                sx={{
                                    height: 1,
                                    width: `${(d.fte / max) * 100}%`,
                                    bgcolor: "#A0522D",
                                }}
                            />
                        </Box>
                    </Box>
                ))}
            </Stack>
        </Paper>
    );
}

