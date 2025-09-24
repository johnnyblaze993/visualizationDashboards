"use client";

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const data = [
    { branch: "SZIE", Y: 1, N: 0 },
    { branch: "TBD", Y: 1, N: 0 },
    { branch: "SZGZ", Y: 0, N: 1 },
    { branch: "SNGT", Y: 1, N: 0 },
    { branch: "SNEM", Y: 0, N: 1 },
];

const options: Highcharts.Options = {
    chart: { type: "column" },
    title: { text: "FTE by Branch and Surge (Highcharts)" },
    xAxis: { categories: data.map(d => d.branch) },
    yAxis: { min: 0, title: { text: "FTE" } },
    plotOptions: { column: { stacking: "normal" } },
    series: [
        { name: "Surge: Y", type: "column", data: data.map(d => d.Y), color: "#4CAF50" },
        { name: "Surge: N", type: "column", data: data.map(d => d.N), color: "#F44336" },
    ],
};

export default function FTEByBranchSurgeHC() {
    return <HighchartsReact highcharts={Highcharts} options={options} />;
}
