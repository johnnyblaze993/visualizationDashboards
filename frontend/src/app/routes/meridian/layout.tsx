"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export default function MeridianLayout({ children }: { children: ReactNode }) {
    const pathname = usePathname();

    const tabs = [
        { name: "Power BI", href: "/routes/meridian/powerbi" },
        { name: "Recharts", href: "/routes/meridian/recharts" },
        { name: "D3", href: "/routes/meridian/d3" },
        { name: "Highcharts", href: "/routes/meridian/highcharts" },
        { name: "Material UI", href: "/routes/meridian/mui" },
        { name: "Qlik", href: "/routes/meridian/qlik" },
    ];

    return (
        <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
            <nav
                style={{
                    display: "flex",
                    gap: "1rem",
                    padding: "0.75rem 1rem",
                    borderBottom: "1px solid var(--border)",
                    flexShrink: 0,
                }}
            >
                {tabs.map((tab) => (
                    <Link
                        key={tab.href}
                        href={tab.href}
                        style={{ fontWeight: pathname === tab.href ? "bold" : "normal" }}
                    >
                        {tab.name}
                    </Link>
                ))}
            </nav>
            <main style={{ flex: 1, overflow: "auto", paddingBottom: "1rem" }}>{children}</main>
        </div>
    );
}
