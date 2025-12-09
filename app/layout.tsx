import type { Metadata } from "next";
import "./globals.css";
import { LenisProvider } from "@/components/providers/LenisProvider";
import { CursorBlob } from "@/components/ui";

const basePath = process.env.NODE_ENV === 'production' ? '/Portfolio' : '';

export const metadata: Metadata = {
  title: "Clarence Chomba",
  description:
    "Clarence Ng'ang'a Chomba - Software Engineering Student with practical IT support and business operations experience.",
  icons: {
    icon: `${basePath}/images/logo.webp`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <CursorBlob />
        <LenisProvider>{children}</LenisProvider>
        {/* Global SVG filter for neon glitch effect */}
        <svg style={{ width: 0, height: 0, position: "absolute", overflow: "hidden" }} aria-hidden="true">
          <defs>
            <filter id="noise">
              <feTurbulence
                baseFrequency="0.7,0.8"
                seed="0"
                type="fractalNoise"
                result="static"
              />
              <feDisplacementMap in="SourceGraphic" in2="static" scale="20" />
            </filter>
          </defs>
        </svg>
      </body>
    </html>
  );
}
