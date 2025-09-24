"use client";

import * as d3 from "d3";
import { useEffect, useRef } from "react";

type EducationDatum = {
    level: string;
    Bachelors: number;
    Masters: number;
    Doctorate: number;
};

type SubgroupKey = "Bachelors" | "Masters" | "Doctorate";

const educationData: EducationDatum[] = [
    { level: "Jr Level", Bachelors: 2, Masters: 0, Doctorate: 0 },
    { level: "Journeyman", Bachelors: 67, Masters: 0, Doctorate: 0 },
    { level: "Senior", Bachelors: 0, Masters: 38, Doctorate: 0 },
    { level: "SME", Bachelors: 0, Masters: 0, Doctorate: 24 },
];

export default function EducationByLevelD3() {
    const ref = useRef<SVGSVGElement | null>(null);

    useEffect(() => {
        if (!ref.current) return;

        const width = 300;
        const height = 260; // ⬅️ match SVG
        const margin = { top: 20, right: 20, bottom: 40, left: 50 };

        const svg = d3.select(ref.current);
        svg.selectAll("*").remove();

        const subgroups: SubgroupKey[] = ["Bachelors", "Masters", "Doctorate"];
        const groups = educationData.map((d) => d.level);

        const x0 = d3.scaleBand()
            .domain(groups)
            .range([margin.left, width - margin.right])
            .padding(0.2);

        const x1 = d3.scaleBand()
            .domain(subgroups)
            .range([0, x0.bandwidth()])
            .padding(0.05);

        const y = d3.scaleLinear()
            .domain([0, d3.max(educationData, (d) => Math.max(d.Bachelors, d.Masters, d.Doctorate))!])
            .nice()
            .range([height - margin.bottom, margin.top]);

        const color = d3.scaleOrdinal<string>()
            .domain(subgroups)
            .range(["#2196F3", "#FF7043", "#1A237E"]);

        // Axes
        svg.append("g")
            .attr("transform", `translate(0,${height - margin.bottom})`)
            .call(d3.axisBottom(x0));

        svg.append("g")
            .attr("transform", `translate(${margin.left},0)`)
            .call(d3.axisLeft(y));

        // Bars
        svg.append("g")
            .selectAll("g")
            .data<EducationDatum>(educationData)
            .join("g")
            .attr("transform", (d) => `translate(${x0(d.level) ?? 0},0)`)
            .selectAll("rect")
            .data((d: EducationDatum) => subgroups.map((key) => ({ key, value: d[key] })))
            .join("rect")
            .attr("x", (d) => x1(d.key)!)
            .attr("y", (d) => y(d.value))
            .attr("width", x1.bandwidth())
            .attr("height", (d) => y(0) - y(d.value))
            .attr("fill", (d) => color(d.key)!);

        // Labels
        svg.append("g")
            .selectAll("g")
            .data<EducationDatum>(educationData)
            .join("g")
            .attr("transform", (d) => `translate(${x0(d.level) ?? 0},0)`)
            .selectAll("text")
            .data((d: EducationDatum) => subgroups.map((key) => ({ key, value: d[key] })))
            .join("text")
            .attr("x", (d) => (x1(d.key) ?? 0) + x1.bandwidth() / 2)
            .attr("y", (d) => y(d.value) - 4)
            .attr("text-anchor", "middle")
            .style("font-size", "10px")
            .text((d) => (d.value > 0 ? d.value : ""));
    }, []);

    return (
        <div style={{ width: 300, textAlign: "center" }}>
            <h3>Education By Level (D3)</h3>
            <svg ref={ref} width={300} height={260}></svg>
        </div>
    );
}
