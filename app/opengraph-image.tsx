import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { site } from "@/data/site";

export const alt = `${site.name} — ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const geistBold = await readFile(join(process.cwd(), "app/fonts/Geist-Bold.ttf"));
  const geistMono = await readFile(join(process.cwd(), "app/fonts/GeistMono-Regular.ttf"));

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#000000",
          color: "#ffffff",
          fontFamily: "Geist",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            fontFamily: "Geist Mono",
            fontSize: 22,
            color: "#3d6bff",
            textTransform: "uppercase",
            letterSpacing: 2,
          }}
        >
          <div style={{ width: 10, height: 10, borderRadius: 99, background: "#3d6bff", display: "flex" }} />
          Portfólio
        </div>
        <div style={{ display: "flex", fontSize: 88, fontWeight: 700, marginTop: 24, lineHeight: 1.05 }}>
          {site.name}
        </div>
        <div style={{ display: "flex", fontSize: 32, color: "#9a9a9a", marginTop: 20 }}>
          {site.role}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Geist", data: geistBold, style: "normal", weight: 700 },
        { name: "Geist Mono", data: geistMono, style: "normal", weight: 400 },
      ],
    }
  );
}
