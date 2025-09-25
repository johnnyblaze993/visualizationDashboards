import Link from "next/link";

export default function Home() {
  return (
    <main
      style={{
        padding: 24,
        display: "flex",
        flexDirection: "column",
        gap: 24,
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "sans-serif",
      }}
    >
      <h1 style={{ fontSize: "2rem", fontWeight: "bold" }}>Dashboard Visualizations</h1>
      {/* <p style={{ color: "#555" }}>Choose a dashboard to view:</p> */}
      <div style={{ display: "flex", gap: 16 }}>
        <Link
          href="/routes/crew-flex"
          style={{
            padding: "14px 20px",
            border: "1px solid var(--border)",      // CHANGED
            borderRadius: 10,
            textDecoration: "none",
            background: "var(--card)",               // CHANGED
            color: "var(--fg)",                      // NEW
            fontWeight: "500",
          }}
        >
          Crew Flex Dashboard
        </Link>
        <Link
          href="/routes/meridian"
          style={{
            padding: "14px 20px",
            border: "1px solid var(--border)",      // CHANGED
            borderRadius: 10,
            textDecoration: "none",
            background: "var(--card)",               // CHANGED
            color: "var(--fg)",                      // NEW
            fontWeight: "500",
          }}
        >
          MERIDIAN Dashboard
        </Link>
      </div>
    </main>
  );
}
