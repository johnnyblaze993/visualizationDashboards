"use client";

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    LabelList,
} from "recharts";

const fteByBranchData = [
    { branch: "SNWG", fte: 38 },
    { branch: "SNEM", fte: 28 },
    { branch: "SNGT", fte: 15 },
    { branch: "SNGF", fte: 12 },
    { branch: "SNWP", fte: 10 },
    { branch: "SNL", fte: 9 },
    { branch: "SZIS", fte: 8 },
];

export default function FTEByBranch() {
    return (
        <div style={{ width: "100%", height: 300 }}>
            <h3 style={{ textAlign: "center" }}>FTE by Branch</h3>
            <ResponsiveContainer>
                <BarChart
                    layout="vertical"
                    data={fteByBranchData}
                    margin={{ top: 10, right: 30, left: 40, bottom: 10 }}
                >
                    <XAxis type="number" allowDecimals={false} />
                    <YAxis dataKey="branch" type="category" width={80} />
                    <Tooltip />
                    <Bar dataKey="fte" fill="#A0522D">
                        <LabelList dataKey="fte" position="right" />
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}
