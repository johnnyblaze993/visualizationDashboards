"use client";

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    ResponsiveContainer,
    LabelList,
} from "recharts";

const educationData = [
    { level: "Jr Level", Bachelors: 2, Masters: 4, Doctorate: 0 },
    { level: "Journeyman", Bachelors: 40, Masters: 12, Doctorate: 0 },
    { level: "Senior", Bachelors: 0, Masters: 38, Doctorate: 0 },
    { level: "SME", Bachelors: 0, Masters: 0, Doctorate: 23 },
];

export default function EducationByLevel() {
    return (
        <div style={{ width: "100%", height: 300 }}>
            <h3 style={{ textAlign: "center" }}>Education By Level</h3>
            <ResponsiveContainer>
                <BarChart data={educationData}>
                    <XAxis dataKey="level" />
                    <YAxis allowDecimals={false} />
                    <Tooltip
                        formatter={(value) =>
                            typeof value === "number" ? Math.round(value) : value
                        }
                    />
                    <Legend />
                    <Bar dataKey="Bachelors" fill="#2196F3">
                        <LabelList
                            dataKey="Bachelors"
                            position="top"
                            formatter={(v) =>
                                typeof v === "number" ? Math.round(v) : v
                            }
                        />
                    </Bar>
                    <Bar dataKey="Masters" fill="#FF7043">
                        <LabelList
                            dataKey="Masters"
                            position="top"
                            formatter={(v) =>
                                typeof v === "number" ? Math.round(v) : v
                            }
                        />
                    </Bar>
                    <Bar dataKey="Doctorate" fill="#1A237E">
                        <LabelList
                            dataKey="Doctorate"
                            position="top"
                            formatter={(v) =>
                                typeof v === "number" ? Math.round(v) : v
                            }
                        />
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}
