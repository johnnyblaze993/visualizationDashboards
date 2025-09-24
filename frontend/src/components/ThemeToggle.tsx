"use client";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
    const [theme, setTheme] = useState<"light" | "dark">("light");

    useEffect(() => {
        const saved = (localStorage.getItem("theme") as "light" | "dark") || "light";
        setTheme(saved);
        document.documentElement.setAttribute("data-theme", saved);
    }, []);

    const toggle = () => {
        const next = theme === "light" ? "dark" : "light";
        setTheme(next);
        localStorage.setItem("theme", next);
        document.documentElement.setAttribute("data-theme", next);
    };

    return (
        <button
            onClick={toggle}
            style={{
                padding: "8px 12px",
                border: "1px solid var(--border)",
                borderRadius: 8,
                background: "var(--card)",         // NEW
                color: "var(--fg)",                // NEW
                cursor: "pointer",
            }}

            aria-label="Toggle theme"
        >
            {theme === "light" ? "🌙 Dark" : "☀️ Light"}
        </button>
    );
}
