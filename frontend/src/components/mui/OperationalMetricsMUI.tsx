"use client";

import { Box, Paper, Typography, Stack, Card, CardContent } from "@mui/material";

const metricsData = [
    {
        label: "Mission Success Rate",
        value: 94.2,
        unit: "%",
        change: "+2.1",
        trend: "up",
        color: "success.main"
    },
    {
        label: "Response Time",
        value: 12.5,
        unit: "min",
        change: "-1.3",
        trend: "down",
        color: "primary.main"
    },
    {
        label: "Crew Efficiency",
        value: 87.8,
        unit: "%",
        change: "+4.2",
        trend: "up",
        color: "warning.main"
    },
    {
        label: "Resource Utilization",
        value: 76.4,
        unit: "%",
        change: "-0.8",
        trend: "down",
        color: "info.main"
    }
];

export default function OperationalMetricsMUI() {
    return (
        <Paper elevation={1} sx={{ p: 2, minHeight: 300 }}>
            <Typography variant="h6" align="center" gutterBottom>
                Key Operational Metrics
            </Typography>
            <Stack spacing={2} sx={{ mt: 2 }}>
                {metricsData.map((metric, index) => (
                    <Card
                        key={metric.label}
                        variant="outlined"
                        sx={{
                            transition: "all 0.2s",
                            "&:hover": {
                                boxShadow: 2,
                                transform: "translateY(-2px)"
                            }
                        }}
                    >
                        <CardContent sx={{ p: 2, "&:last-child": { pb: 2 } }}>
                            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                                <Box>
                                    <Typography variant="caption" color="text.secondary" sx={{ textTransform: "uppercase" }}>
                                        {metric.label}
                                    </Typography>
                                    <Box sx={{ display: "flex", alignItems: "baseline", gap: 0.5 }}>
                                        <Typography
                                            variant="h5"
                                            fontWeight="bold"
                                            sx={{ color: metric.color }}
                                        >
                                            {metric.value}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {metric.unit}
                                        </Typography>
                                    </Box>
                                </Box>

                                <Box sx={{ textAlign: "right" }}>
                                    <Typography
                                        variant="caption"
                                        sx={{
                                            color: metric.trend === "up" ? "success.main" : "error.main",
                                            fontWeight: "medium"
                                        }}
                                    >
                                        {metric.trend === "up" ? "↗" : "↘"} {metric.change}
                                    </Typography>
                                    <Typography variant="caption" color="text.secondary" display="block">
                                        vs last period
                                    </Typography>
                                </Box>
                            </Box>

                            <Box
                                sx={{
                                    width: "100%",
                                    height: 4,
                                    bgcolor: "action.hover",
                                    borderRadius: 2,
                                    mt: 1.5,
                                    overflow: "hidden"
                                }}
                            >
                                <Box
                                    sx={{
                                        width: `${Math.min(metric.value, 100)}%`,
                                        height: "100%",
                                        bgcolor: metric.color,
                                        borderRadius: 2,
                                        transition: "width 0.5s ease-in-out"
                                    }}
                                />
                            </Box>
                        </CardContent>
                    </Card>
                ))}
            </Stack>
        </Paper>
    );
}