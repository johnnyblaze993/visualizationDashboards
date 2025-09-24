"use client";

import * as d3 from "d3";
import { useEffect, useRef } from "react";

type SurgeDatum = { branch: string; Y: number; N: number };

const mockData: SurgeDatum[] = [
    { branch: "SZIE", Y: 1, N: 0 },
    { branch: "TBD", Y: 1, N: 0 },
    { branch: "SZGZ", Y: 0, N: 1 },
    { branch: "SNGT", Y: 1, N: 0 },
    { branch: "SNEM", Y: 0, N: 1 },
];

export default function FTEByBranchSurgeD3() {
    const ref = useRef<SVGSVGElement | null>(null);

    useEffect(() => {
        if (!ref.current) return;

        const width = 300;
        const height = 260; // 🔹 Match SVG height
        const margin = { top: 20, right: 20, bottom: 40, left: 40 };

        const svg = d3.select(ref.current);
        svg.selectAll("*").remove();

        const x = d3
            .scaleBand()
            .domain(mockData.map((d) => d.branch))
            .range([margin.left, width - margin.right])
            .padding(0.2);

        const y = d3
            .scaleLinear()
            .domain([0, d3.max(mockData, (d) => d.Y + d.N)!])
            .nice()
            .range([height - margin.bottom, margin.top]);

        const color = d3
            .scaleOrdinal<string>()
            .domain(["Y", "N"])
            .range(["#4CAF50", "#F44336"]);

        type Key = "Y" | "N";
        const stack = d3.stack<SurgeDatum, Key>().keys(["Y", "N"]);
        const series = stack(mockData);

        // Axes
        svg
            .append("g")
            .attr("transform", `translate(0,${height - margin.bottom})`)
            .call(d3.axisBottom(x));

        svg
            .append("g")
            .attr("transform", `translate(${margin.left},0)`)
            .call(d3.axisLeft(y));

        // Bars
        svg
            .selectAll("g.layer")
            .data(series)
            .join("g")
            .attr("fill", (d) => color(d.key)!)
            .selectAll("rect")
            .data((d) => d)
            .join("rect")
            .attr("x", (d) => x(d.data.branch)!)
            .attr("y", (d) => y(d[1]))
            .attr("height", (d) => y(d[0]) - y(d[1]))
            .attr("width", x.bandwidth());
    }, []);

    return (
        <div style={{ width: "100%", height: 300, textAlign: "center" }}>
            <h3>FTE by Branch and Surge (D3)</h3>
            <svg ref={ref} width={300} height={260}></svg>
        </div>
    );
}
