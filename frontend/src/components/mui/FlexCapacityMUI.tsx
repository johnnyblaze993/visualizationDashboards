"use client";

import { Box, Paper, Typography, Stack, Divider } from "@mui/material";

const capacityData = [
    { timeSlot: "0600-1200", available: 45, deployed: 38, surge: 12, max: 50 },
    { timeSlot: "1200-1800", available: 52, deployed: 41, surge: 8, max: 55 },
    { timeSlot: "1800-0000", available: 38, deployed: 32, surge: 15, max: 45 },
    { timeSlot: "0000-0600", available: 28, deployed: 22, surge: 5, max: 30 },
];

export default function FlexCapacityMUI() {
    return (
        <Paper elevation={1} sx={{ p: 2, minHeight: 300 }}>
            <Typography variant="h6" align="center" gutterBottom>
                Flexible Capacity by Time Slot
            </Typography>
            <Stack spacing={2} sx={{ mt: 2 }}>
                {capacityData.map((slot, index) => {
                    const utilizationRate = (slot.deployed / slot.available) * 100;
                    const surgeCapacity = ((slot.available - slot.deployed) / slot.available) * 100;

                    return (
                        <Box key={slot.timeSlot}>
                            <Box sx={{ mb: 1.5 }}>
                                <Typography variant="body2" fontWeight="medium" gutterBottom>
                                    {slot.timeSlot}
                                </Typography>

                                <Box sx={{ display: "flex", gap: 1, mb: 1 }}>
                                    <Box
                                        sx={{
                                            flex: 1,
                                            height: 20,
                                            bgcolor: "action.hover",
                                            borderRadius: 1,
                                            overflow: "hidden",
                                            display: "flex"
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                width: `${(slot.deployed / slot.max) * 100}%`,
                                                bgcolor: "primary.main",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center"
                                            }}
                                        />
                                        <Box
                                            sx={{
                                                width: `${((slot.available - slot.deployed) / slot.max) * 100}%`,
                                                bgcolor: "success.light",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center"
                                            }}
                                        />
                                        <Box
                                            sx={{
                                                width: `${(slot.surge / slot.max) * 100}%`,
                                                bgcolor: "warning.main",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center"
                                            }}
                                        />
                                    </Box>
                                </Box>

                                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                    <Box sx={{ display: "flex", gap: 2 }}>
                                        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                                            <Box sx={{ width: 8, height: 8, bgcolor: "primary.main", borderRadius: "50%" }} />
                                            <Typography variant="caption">
                                                Deployed: {slot.deployed}
                                            </Typography>
                                        </Box>
                                        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                                            <Box sx={{ width: 8, height: 8, bgcolor: "success.light", borderRadius: "50%" }} />
                                            <Typography variant="caption">
                                                Available: {slot.available - slot.deployed}
                                            </Typography>
                                        </Box>
                                        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                                            <Box sx={{ width: 8, height: 8, bgcolor: "warning.main", borderRadius: "50%" }} />
                                            <Typography variant="caption">
                                                Surge: {slot.surge}
                                            </Typography>
                                        </Box>
                                    </Box>
                                    <Typography variant="caption" color="text.secondary">
                                        {utilizationRate.toFixed(0)}% utilized
                                    </Typography>
                                </Box>
                            </Box>
                            {index < capacityData.length - 1 && <Divider />}
                        </Box>
                    );
                })}
            </Stack>
        </Paper>
    );
}