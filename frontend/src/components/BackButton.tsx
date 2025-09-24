"use client";
import { useRouter } from "next/navigation";

export default function BackButton() {
    const router = useRouter();

    return (
        <button
            onClick={() => router.back()}
            // NEW: use theme tokens instead of hard-coded colors
            style={{
                background: "var(--btn-muted-bg)",   // NEW
                color: "var(--btn-muted-fg)",        // NEW
                border: "1px solid var(--border)",   // NEW
                borderRadius: 8,
                padding: "10px 16px",
                cursor: "pointer",
                fontWeight: 500,
                marginBottom: 20,
            }}
        >
            ⬅ Back
        </button>
    );
}
