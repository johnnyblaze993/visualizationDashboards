"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export default function CrewFlexLayout({ children }: { children: ReactNode }) {
    const pathname = usePathname();

    const tabs = [
        { name: "Power BI", href: "/routes/crew-flex/powerbi" },
        { name: "Recharts", href: "/routes/crew-flex/recharts" },
        { name: "D3", href: "/routes/crew-flex/d3" },
        { name: "Highcharts", href: "/routes/crew-flex/highcharts" },
        { name: "Material UI", href: "/routes/crew-flex/mui" },
        { name: "Qlik", href: "/routes/crew-flex/qlik" },
    ];

    return (
        <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
            {/* Tabs at the top */}
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
                        style={{
                            fontWeight: pathname === tab.href ? "bold" : "normal",
                        }}
                    >
                        {tab.name}
                    </Link>
                ))}
            </nav>

            {/* Content fills remaining height */}
            <main style={{ flex: 1, overflow: "auto", paddingBottom: "1rem" }}>{children}</main>
        </div>
    );
}
