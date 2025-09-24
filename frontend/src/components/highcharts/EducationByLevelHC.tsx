"use client";

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const data = [
    { level: "Jr Level", Bachelors: 2, Masters: 0, Doctorate: 0 },
    { level: "Journeyman", Bachelors: 67, Masters: 0, Doctorate: 0 },
    { level: "Senior", Bachelors: 0, Masters: 38, Doctorate: 0 },
    { level: "SME", Bachelors: 0, Masters: 0, Doctorate: 24 },
];

const options: Highcharts.Options = {
    chart: { type: "column" },
    title: { text: "Education by Level (Highcharts)" },
    xAxis: { categories: data.map(d => d.level) },
    yAxis: { min: 0, title: { text: "Count" } },
    series: [
        { name: "Bachelors", type: "column", data: data.map(d => d.Bachelors), color: "#2196F3" },
        { name: "Masters", type: "column", data: data.map(d => d.Masters), color: "#FF7043" },
        { name: "Doctorate", type: "column", data: data.map(d => d.Doctorate), color: "#1A237E" },
    ],
};

export default function EducationByLevelHC() {
    return <HighchartsReact highcharts={Highcharts} options={options} />;
}
