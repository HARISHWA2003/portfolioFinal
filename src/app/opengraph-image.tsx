import { ImageResponse } from "next/og";

export const alt = "Harishwa D Reddy — Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Keep these literal: this renders in the edge runtime at build time, so it
// avoids pulling the whole resume module (and lucide) into the OG bundle.
const NAME = "Harishwa D Reddy";
const ROLE = "Software Engineer · Bangalore, India";
const PITCH =
  "Backends, databases, and the AI features that sit on top of them.";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: "#121212",
          backgroundImage:
            "radial-gradient(ellipse 70% 60% at 50% 0%, #3d0000 0%, #121212 70%)",
          padding: "80px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            color: "#CF3A3A",
            fontSize: 24,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
          }}
        >
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: 99,
              backgroundColor: "#CF3A3A",
            }}
          />
          Available for freelance
        </div>

        <div
          style={{
            fontSize: 92,
            fontWeight: 700,
            color: "#ffffff",
            letterSpacing: "-0.035em",
            marginTop: 28,
          }}
        >
          {NAME}
        </div>

        <div style={{ fontSize: 34, color: "#C0C0C0", marginTop: 18 }}>
          {ROLE}
        </div>

        <div
          style={{
            fontSize: 30,
            color: "#8f8f8f",
            marginTop: 28,
            maxWidth: 900,
            lineHeight: 1.4,
          }}
        >
          {PITCH}
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 48,
            height: 4,
            width: 180,
            backgroundColor: "#8B0000",
          }}
        />
      </div>
    ),
    size
  );
}
