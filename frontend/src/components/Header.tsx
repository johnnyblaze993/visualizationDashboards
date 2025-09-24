"use client";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
    return (
        <header
            style={{
                position: "sticky",
                top: 0,
                zIndex: 10,
                backdropFilter: "saturate(180%) blur(6px)",
                background: "color-mix(in oklab, var(--bg) 85%, transparent)",
                borderBottom: `1px solid var(--border)`,
            }}
        >
            <div
                style={{
                    maxWidth: 1280,
                    margin: "0 auto",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "10px 16px",
                    gap: 12,
                }}
            >
                <nav style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                    <Link href="/" style={linkStyle}>Home</Link>
                    <Link href="/routes/crew-flex" style={linkStyle}>Crew Flex</Link>
                    <Link href="/routes/meridian" style={linkStyle}>MERIDIAN</Link>
                    <Link href="/routes/feature-comparison" style={linkStyle}>Feature Comparison</Link>
                    {/* <Link href="/routes/meridian-tile" style={linkStyle}>MERIDIAN Tile</Link> */}
                </nav>
                <ThemeToggle />
            </div>
        </header>
    );
}

const linkStyle: React.CSSProperties = {
    padding: "8px 12px",
    border: "1px solid var(--border)",    // NEW
    borderRadius: 8,
    background: "var(--card)",            // NEW (was transparent)
    color: "var(--fg)",                   // NEW
    textDecoration: "none",
};
