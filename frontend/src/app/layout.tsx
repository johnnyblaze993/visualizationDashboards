import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Power BI Demo",
  description: "Crew Flex / MERIDIAN embeds",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" style={{ height: "100%" }}>
      <body
        style={{
          margin: 0,
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden", // prevents unnecessary global scroll
        }}
      >
        <Header />
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            overflow: "hidden", // children manage their own scroll
          }}
        >
          {children}
        </div>
      </body>
    </html>
  );
}
