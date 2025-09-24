"use client";

import { Box, Paper, Typography, Chip, Stack, CircularProgress } from "@mui/material";

const trainingData = [
    {
        category: "Basic Training",
        completed: 85,
        inProgress: 12,
        pending: 8,
        total: 105,
        priority: "Medium"
    },
    {
        category: "Advanced Skills",
        completed: 42,
        inProgress: 18,
        pending: 15,
        total: 75,
        priority: "High"
    },
    {
        category: "Leadership",
        completed: 28,
        inProgress: 8,
        pending: 4,
        total: 40,
        priority: "Low"
    },
    {
        category: "Technical Cert",
        completed: 67,
        inProgress: 23,
        pending: 18,
        total: 108,
        priority: "High"
    },
];

const getPriorityColor = (priority: string) => {
    switch (priority) {
        case "High": return "error";
        case "Medium": return "warning";
        case "Low": return "info";
        default: return "default";
    }
};

export default function TrainingStatusMUI() {
    return (
        <Paper elevation={1} sx={{ p: 2, minHeight: 300 }}>
            <Typography variant="h6" align="center" gutterBottom>
                Training Status Overview
            </Typography>
            <Stack spacing={2} sx={{ mt: 2 }}>
                {trainingData.map((item) => {
                    const completionRate = (item.completed / item.total) * 100;

                    return (
                        <Box key={item.category}>
                            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 1 }}>
                                <Typography variant="body2" fontWeight="medium">
                                    {item.category}
                                </Typography>
                                <Chip
                                    size="small"
                                    label={item.priority}
                                    color={getPriorityColor(item.priority) as any}
                                    variant="filled"
                                />
                            </Box>

                            <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 1 }}>
                                <Box sx={{ position: "relative", display: "inline-flex" }}>
                                    <CircularProgress
                                        variant="determinate"
                                        value={completionRate}
                                        size={40}
                                        thickness={4}
                                        sx={{
                                            color: completionRate >= 80 ? "success.main" :
                                                   completionRate >= 60 ? "warning.main" : "error.main"
                                        }}
                                    />
                                    <Box
                                        sx={{
                                            top: 0,
                                            left: 0,
                                            bottom: 0,
                                            right: 0,
                                            position: "absolute",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                        }}
                                    >
                                        <Typography variant="caption" component="div" color="text.secondary">
                                            {completionRate.toFixed(0)}%
                                        </Typography>
                                    </Box>
                                </Box>

                                <Box sx={{ flex: 1 }}>
                                    <Box sx={{ display: "flex", gap: 1, mb: 0.5 }}>
                                        <Typography variant="caption" color="success.main">
                                            ✓ {item.completed}
                                        </Typography>
                                        <Typography variant="caption" color="warning.main">
                                            ⏳ {item.inProgress}
                                        </Typography>
                                        <Typography variant="caption" color="text.secondary">
                                            ⏸ {item.pending}
                                        </Typography>
                                    </Box>
                                    <Typography variant="caption" color="text.secondary">
                                        Total: {item.total} personnel
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    );
                })}
            </Stack>
        </Paper>
    );
}