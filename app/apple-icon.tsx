import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "linear-gradient(145deg, #2F66F5 0%, #1E4ED8 100%)",
          borderRadius: 42,
          display: "flex",
          height: "100%",
          justifyContent: "center",
          position: "relative",
          width: "100%",
        }}
      >
        <div
          style={{
            color: "#FFFFFF",
            display: "flex",
            flexDirection: "column",
            fontFamily: "Georgia, Times New Roman, serif",
            fontSize: 78,
            fontStyle: "italic",
            fontWeight: 700,
            letterSpacing: "-0.1em",
            lineHeight: 1,
            marginTop: -6,
            textAlign: "center",
          }}
        >
          CT
        </div>
        <div
          style={{
            background: "rgba(255,255,255,0.55)",
            borderRadius: 999,
            bottom: 34,
            height: 4,
            position: "absolute",
            width: 64,
          }}
        />
      </div>
    ),
    size,
  );
}
