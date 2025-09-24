"use client";

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const data = [
    { branch: "SNWG", fte: 38 },
    { branch: "SNEM", fte: 28 },
    { branch: "SNGT", fte: 15 },
    { branch: "SNGF", fte: 12 },
    { branch: "SNWP", fte: 10 },
    { branch: "SNL", fte: 9 },
    { branch: "SZIS", fte: 8 },
];

const options: Highcharts.Options = {
    chart: { type: "bar" },
    title: { text: "FTE by Branch (Highcharts)" },
    xAxis: { categories: data.map(d => d.branch) },
    yAxis: {
        min: 0,
        title: { text: "FTE" },
        allowDecimals: false,
    },
    series: [
        {
            name: "FTE",
            type: "bar",
            data: data.map(d => d.fte),
            color: "#A0522D",
        },
    ],
};

export default function FTEByBranchHC() {
    return <HighchartsReact highcharts={Highcharts} options={options} />;
}
