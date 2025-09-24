export default function FeatureComparisonPage() {
  return (
    <main style={{ padding: 16, flex: 1, overflow: "auto" }}>
      <h1 style={{ marginBottom: 12 }}>Feature Comparison:</h1>
      <div
        className="card"
        style={{ overflowX: "auto", padding: 16 }}
        aria-label="Feature comparison table wrapper"
      >
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            minWidth: 900,
          }}
        >
          <thead>
            <tr>
              <th style={th}>Chart Type</th>
              <th style={th}>Recharts</th>
              <th style={th}>D3.js (custom)</th>
              <th style={th}>Highcharts</th>
              <th style={th}>Qlik</th>
              <th style={th}>Power BI</th>
              <th style={th}>MUI X Charts</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r[0]}>
                {r.map((cell, i) => (
                  <td key={i} style={td}>
                    <span>{cell}</span>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="small" style={{ marginTop: 8 }}>
        Notes: “Custom” indicates available via bespoke D3; “Planned” reflects roadmap or preview status.
      </p>
    </main>
  );
}

const th: React.CSSProperties = {
  textAlign: "left",
  padding: "10px 12px",
  borderBottom: "1px solid var(--border)",
  whiteSpace: "nowrap",
};

const td: React.CSSProperties = {
  padding: "10px 12px",
  borderBottom: "1px solid var(--border)",
  verticalAlign: "top",
  whiteSpace: "nowrap",
};

const rows: string[][] = [
  ["Bar / Column", "✔️", "Custom", "✔️ (Bar/Column)", "✔️ (Bar)", "✔️", "✔️ (Bar)"],
  ["Line", "✔️", "Custom", "✔️ (Line/Spline)", "✔️ (Line)", "✔️", "✔️ (Line)"],
  ["Area", "✔️", "Custom", "✔️ (Area/Areaspline)", "❌", "✔️", "✔️ (Area)"],
  ["Pie / Donut", "✔️", "Custom", "✔️ (Pie/Donut)", "✔️ (Pie)", "✔️", "✔️ (Pie/Donut)"],
  ["Radar / Spider", "✔️ (Radar)", "Custom", "✔️ (Polar/Radar)", "✔️ (Radar)", "❌", "✔️ (Radar)"],
  ["Scatter / Bubble", "✔️ (Scatter)", "Custom", "✔️ (Scatter/Bubble)", "✔️ (Scatter/Grid)", "✔️ (Scatter/Bubble/Dot)", "✔️ (Scatter)"],
  ["Heatmap", "❌", "Custom", "✔️ (Heatmap)", "❌", "❓ (custom)", "✔️ (Heatmap)"],
  ["Funnel", "✔️", "Custom", "✔️ (Funnel/Pyramid)", "✔️ (Funnel)", "✔️", "✔️ (Funnel)"],
  ["Gauge / Radial", "Radial bar (no full gauge)", "Custom", "✔️ (Gauge)", "✔️ (Gauge)", "✔️ (Gauge)", "✔️ (Gauge)"],
  ["Treemap / Block", "✔️ (Treemap)", "Custom", "✔️ (Treemap)", "✔️ (Block Chart)", "✔️ (Treemap)", "🔜 Planned (Treemap)"],
  ["Sankey", "✔️ (Sankey)", "Custom", "✔️ (Sankey / Dependency wheel)", "❌", "❓ (custom)", "✔️ (Sankey preview)"],
  ["Map / Geo", "❌", "Custom", "✔️ (needs Maps add‑on)", "✔️ (Map)", "✔️ (Maps: Basic, ArcGIS, Azure, Filled, Shape)", "🔜 Planned (Maps)"],
  ["Table / Pivot", "❌", "Custom", "Limited support (no pivot table)", "✔️ (Pivot & Straight table)", "✔️ (Table/Matrix)", "❌"],
  ["Combo / Combo Chart", "✔️ (Composed chart)", "Custom", "✔️ (Combination)", "✔️ (Combo)", "✔️ (Combo)", "❌"],
  ["Histogram", "❌", "Custom", "✔️ (Histogram/Bell curve)", "✔️ (Histogram)", "✔️ (built‑in)", "🔜 Planned (?)"],
  ["Box Plot", "❌", "Custom", "✔️ (Box plot)", "✔️ (Box plot)", "❓ (custom)", "🔜 Planned"],
  ["Bullet Chart", "❌", "Custom", "✔️ (Bullet)", "✔️ (Bullet)", "❓ (custom)", "❌"],
  ["Waterfall", "❌", "Custom", "✔️ (Waterfall)", "❓ (extension)", "✔️ (Waterfall)", "🔜 Planned"],
  ["Gantt", "❌", "Custom", "✔️ (Gantt)", "❌", "❓ (custom)", "🔜 Planned"],
  ["Candlestick / Stock", "❌", "Custom", "✔️ (Stock / Candlestick)", "❌", "❓ (custom)", "🔜 Planned"],
  ["Sunburst", "❌", "Custom", "✔️ (Sunburst)", "❌", "❓ (custom)", "🔜 Planned"],
  ["Network Graph / Chord", "❌", "Custom", "✔️ (Network/Organization)", "❌", "❓ (custom)", "🔜 Planned (Chord/Network)"],
  ["3D Charts", "❌", "Custom", "✔️ (3D charts)", "❌", "❌", "🔜 Planned (3D)"],
  ["Word Cloud", "❌", "Custom", "✔️ (Word Cloud)", "❌", "✔️ (via custom visual)", "❌"],
];
