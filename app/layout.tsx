import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Your Name | Portfolio",
  description:
    "A modern personal portfolio built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.",
  metadataBase: new URL("https://example.com")
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#171817"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
