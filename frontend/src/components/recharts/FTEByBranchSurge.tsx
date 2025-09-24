"use client";

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";

const mockData = [
    { branch: "SZIE", Y: 6, N: 0 },
    { branch: "TBD", Y: 8, N: 5 },
    { branch: "SZGZ", Y: 0, N: 1 },
    { branch: "SNGT", Y: 9, N: 7 },
    { branch: "SNEM", Y: 0, N: 1 },
];

export default function FTEByBranchSurge() {
    return (
        <div style={{ width: "100%", height: 300 }}>
            <h3 style={{ textAlign: "center" }}>FTE by Branch and Surge</h3>
            <ResponsiveContainer>
                <BarChart data={mockData}>
                    <XAxis dataKey="branch" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="Y" stackId="a" fill="#4CAF50" name="Surge: Y" />
                    <Bar dataKey="N" stackId="a" fill="#F44336" name="Surge: N" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}
