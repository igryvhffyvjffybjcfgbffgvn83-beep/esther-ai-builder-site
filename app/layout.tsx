import type { Metadata } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://estherbuilds.com"),
  title: "Esther — AI Product Builder",
  description:
    "10 products shipped in 2026. 1 live on the App Store. Full-stack AI product builder working across iOS, desktop, and web.",
  openGraph: {
    title: "Esther — AI Product Builder",
    description:
      "10 products shipped in 2026. 1 live on the App Store. Full-stack AI product builder working across iOS, desktop, and web.",
    url: "https://estherbuilds.com",
    siteName: "Esther — AI Product Builder",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Esther — AI Product Builder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Esther — AI Product Builder",
    description:
      "10 products shipped in 2026. 1 live on the App Store. Full-stack AI product builder working across iOS, desktop, and web.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} ${jetBrainsMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
