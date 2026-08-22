import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { IBM_Plex_Mono, Space_Grotesk, Unbounded } from "next/font/google";
import "./globals.css";

const fontSans = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

const fontMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600"],
});

const fontDisplay = Unbounded({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: `${DATA.name} — ${DATA.tagline}`,
    template: `%s | ${DATA.name}`,
  },
  description: DATA.description,
  keywords: [
    "Software Engineer",
    "Backend Engineer",
    "Data Architecture",
    "LLM Engineer",
    "Freelance Developer",
    "Bangalore",
    DATA.name,
  ],
  openGraph: {
    title: `${DATA.name} — ${DATA.tagline}`,
    description: DATA.description,
    url: DATA.url,
    siteName: DATA.name,
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: `${DATA.name} — ${DATA.tagline}`,
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={cn(
          "min-h-screen bg-void font-sans text-chrome antialiased",
          fontSans.variable,
          fontMono.variable,
          fontDisplay.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
