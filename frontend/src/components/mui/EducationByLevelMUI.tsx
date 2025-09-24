"use client";

import { Box, Chip, Divider, Paper, Stack, Typography } from "@mui/material";

const educationData = [
    { level: "Jr Level", Bachelors: 2, Masters: 0, Doctorate: 0 },
    { level: "Journeyman", Bachelors: 67, Masters: 0, Doctorate: 0 },
    { level: "Senior", Bachelors: 0, Masters: 38, Doctorate: 0 },
    { level: "SME", Bachelors: 0, Masters: 0, Doctorate: 24 },
];

const colors = {
    Bachelors: "#2196F3",
    Masters: "#FF7043",
    Doctorate: "#1A237E",
};

export default function EducationByLevelMUI() {
    const totals = educationData.map((d) => d.Bachelors + d.Masters + d.Doctorate);
    const max = Math.max(...totals);

    return (
        <Paper elevation={1} sx={{ p: 2, minHeight: 300 }}>
            <Typography variant="h6" align="center" gutterBottom>
                Education By Level (Material UI)
            </Typography>

            <Stack direction="row" spacing={1} sx={{ justifyContent: "center", mb: 1 }}>
                <Chip size="small" label="Bachelors" sx={{ bgcolor: colors.Bachelors, color: "white" }} />
                <Chip size="small" label="Masters" sx={{ bgcolor: colors.Masters, color: "white" }} />
                <Chip size="small" label="Doctorate" sx={{ bgcolor: colors.Doctorate, color: "white" }} />
            </Stack>
            <Divider sx={{ mb: 1 }} />

            <Stack spacing={1.25}>
                {educationData.map((d, idx) => {
                    const total = totals[idx] || 1;
                    const scale = (total / max) * 100;
                    const segments = [
                        { key: "Bachelors", value: d.Bachelors, color: colors.Bachelors },
                        { key: "Masters", value: d.Masters, color: colors.Masters },
                        { key: "Doctorate", value: d.Doctorate, color: colors.Doctorate },
                    ];

                    const totalPct = segments.reduce((acc, s) => acc + (s.value / total) * scale, 0);
                    const normalize = totalPct > 0 ? scale / totalPct : 1;

                    return (
                        <Box key={d.level}>
                            <Box sx={{ display: "flex", alignItems: "center", mb: 0.5 }}>
                                <Typography variant="body2" sx={{ flex: 1 }}>{d.level}</Typography>
                                <Typography variant="caption" color="text.secondary">
                                    {total}
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
                                {segments.map((s) =>
                                    s.value > 0 ? (
                                        <Box
                                            key={s.key}
                                            title={`${s.key}: ${s.value}`}
                                            sx={{
                                                height: 1,
                                                width: `${((s.value / total) * scale * normalize).toFixed(2)}%`,
                                                bgcolor: s.color,
                                            }}
                                        />
                                    ) : null
                                )}
                            </Box>
                        </Box>
                    );
                })}
            </Stack>
        </Paper>
    );
}

