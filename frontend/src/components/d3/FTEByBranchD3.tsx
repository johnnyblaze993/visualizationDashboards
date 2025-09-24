"use client";

import * as d3 from "d3";
import { useEffect, useRef } from "react";

const fteByBranchData = [
    { branch: "SNWG", fte: 38 },
    { branch: "SNEM", fte: 28 },
    { branch: "SNGT", fte: 15 },
    { branch: "SNGF", fte: 12 },
    { branch: "SNWP", fte: 10 },
    { branch: "SNL", fte: 9 },
    { branch: "SZIS", fte: 8 },
];

export default function FTEByBranchD3() {
    const ref = useRef<SVGSVGElement | null>(null);
    const tooltipRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!ref.current || !tooltipRef.current) return;

        const width = 300;
        const height = 260; // ⬅️ match SVG
        const margin = { top: 20, right: 20, bottom: 30, left: 60 };

        const svg = d3.select(ref.current);
        svg.selectAll("*").remove();

        const tooltip = d3.select(tooltipRef.current);

        const y = d3.scaleBand()
            .domain(fteByBranchData.map((d) => d.branch))
            .range([margin.top, height - margin.bottom])
            .padding(0.2);

        const x = d3.scaleLinear()
            .domain([0, d3.max(fteByBranchData, (d) => d.fte)!])
            .nice()
            .range([margin.left, width - margin.right]);

        // Axes
        svg.append("g")
            .attr("transform", `translate(0,${height - margin.bottom})`)
            .call(d3.axisBottom(x).ticks(5).tickFormat(d3.format("d")));

        svg.append("g")
            .attr("transform", `translate(${margin.left},0)`)
            .call(d3.axisLeft(y));

        // Bars + Tooltip
        svg.append("g")
            .selectAll("rect")
            .data(fteByBranchData)
            .join("rect")
            .attr("y", (d) => y(d.branch)!)
            .attr("x", x(0))
            .attr("height", y.bandwidth())
            .attr("width", (d) => x(d.fte) - x(0))
            .attr("fill", "#A0522D")
            .on("mouseover", function (event, d) {
                tooltip
                    .style("opacity", 1)
                    .html(`<strong>${d.branch}</strong><br/>FTE: ${d.fte}`);
            })
            .on("mousemove", function (event) {
                const [xPos, yPos] = d3.pointer(event);
                tooltip.style("left", `${xPos + 20}px`).style("top", `${yPos}px`);
            })
            .on("mouseout", function () {
                tooltip.style("opacity", 0);
            });
    }, []);

    return (
        <div
            style={{
                position: "relative",
                width: 300,
                textAlign: "center",
            }}
        >
            <h3>FTE by Branch (D3)</h3>
            <svg ref={ref} width={300} height={260}></svg>
            <div
                ref={tooltipRef}
                style={{
                    position: "absolute",
                    background: "white",
                    border: "1px solid gray",
                    borderRadius: 4,
                    padding: "4px 8px",
                    pointerEvents: "none",
                    opacity: 0,
                    fontSize: "12px",
                    boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
                }}
            />
        </div>
    );
}
