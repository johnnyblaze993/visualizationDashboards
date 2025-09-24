"use client";

import dynamic from "next/dynamic";

// Dynamically import only on client
const QlikEmbed = dynamic(
    () => import("@qlik/embed-react").then((mod) => mod.QlikEmbed),
    { ssr: false }
);

export default function CrewFlexQlikEmbed() {
    return (
        <div style={{ width: "100%", height: "100%", padding: "1rem" }}>
            <div style={{ width: "100%", height: "100%" }}>
                <QlikEmbed
                    ui="analytics/sheet"
                    appId="faedaa4b-50d8-44eb-959e-9675867124c7"
                    objectId="FcSwdUt"
                    hostConfig={{
                        host: "https://75gmst3g9at7y8i.us.qlikcloud.com",
                    }}
                />
            </div>
        </div>
    );
}
