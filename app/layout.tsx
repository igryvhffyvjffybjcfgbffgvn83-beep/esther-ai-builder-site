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
  title: "Esther — AI Builder Lab",
  description:
    "I just turn the problems I run into into tools. A public lab of AI products, demos, and experiments built by a non-coder learning by shipping.",
  openGraph: {
    title: "Esther — AI Builder Lab",
    description:
      "I just turn the problems I run into into tools. A public lab of AI products, demos, and experiments built by a non-coder learning by shipping.",
    url: "https://estherbuilds.com",
    siteName: "Esther — AI Builder Lab",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Esther — AI Builder Lab",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Esther — AI Builder Lab",
    description:
      "I just turn the problems I run into into tools. A public lab of AI products, demos, and experiments built by a non-coder learning by shipping.",
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
