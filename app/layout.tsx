import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Harsh Kumar Mishra | AI, Robotics and Cybersecurity Portfolio",
  description:
    "Portfolio of Harsh Kumar Mishra, a University of Delhi B.Tech student focused on robotics, AI/ML, cybersecurity, IoT and scientific computing.",
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
