import QlikFrame from "@/components/qlik/QlikFrame";

export default function CrewFlexQlikPage() {
    return (
        <div style={{ height: "100%", padding: "1rem" }}>
            <QlikFrame
                title="CrewFlex Qlik Dashboard"
                src="https://75gmst3g9at7y8i.us.qlikcloud.com/single/?appid=faedaa4b-50d8-44eb-959e-9675867124c7&sheet=FcSwdUt&theme=horizon&opt=ctxmenu,currsel"
            />
        </div>
    );
}

// import CrewFlexQlikEmbed from "@/components/qlik/QlikEmbed";

// export default function CrewFlexQlikPage() {
//     return (
//         <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
//             <h1 style={{ padding: "1rem" }}>CrewFlex Qlik Dashboard</h1>
//             <div style={{ flex: 1 }}>
//                 <CrewFlexQlikEmbed />
//             </div>
//         </div>
//     );
// }
