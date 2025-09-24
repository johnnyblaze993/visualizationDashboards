"use client";

import { useRef } from "react";

type Props = {
    title: string;
    src: string;
};

export default function QlikFrame({ title, src }: Props) {
    const ref = useRef<HTMLIFrameElement | null>(null);

    const requestFullscreen = () => {
        const el = ref.current;
        if (!el) return;
        const container = el.parentElement as HTMLElement;
        if (container?.requestFullscreen) container.requestFullscreen();
    };

    return (
        <div
            style={{
                width: "100%",
                height: "100%",
                border: "1px solid var(--border)",
                borderRadius: 12,
                background: "var(--card)",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
            }}
        >
            {/* Header */}
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "10px 12px",
                    borderBottom: `1px solid var(--border)`,
                    flexShrink: 0,
                }}
            >
                <strong>{title}</strong>
                <button
                    onClick={requestFullscreen}
                    style={{
                        padding: "6px 10px",
                        border: "1px solid var(--border)",
                        borderRadius: 8,
                        background: "var(--card)",
                        color: "var(--fg)",
                        cursor: "pointer",
                    }}
                    title="Fullscreen"
                >
                    ⛶
                </button>
            </div>

            {/* Qlik iframe */}
            <iframe
                ref={ref}
                title={title}
                src={src}
                allowFullScreen
                style={{
                    flex: 1,
                    width: "100%",
                    border: 0,
                }}
            />
        </div>
    );
}
