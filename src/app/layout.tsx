import type { Metadata } from "next";
import "./globals.css";
import { SiteAnimations } from "@/components/animations/SiteAnimations";

export const metadata: Metadata = {
  title: "Top Endodontist in Stillwater, MN | Simple Smile Endodontics",
  description:
    "Get expert root canal therapy & dental implants at Simple Smile Endodontics in Stillwater, MN. Call (651) 439-8085 to schedule pain-free treatment today.",
  icons: {
    icon: "/images/favicon.svg",
    apple: "/images/favicon.svg",
  },
  openGraph: {
    title: "Top Endodontist in Stillwater, MN | Simple Smile Endodontics",
    description:
      "Get expert root canal therapy & dental implants at Simple Smile Endodontics in Stillwater, MN. Call (651) 439-8085 to schedule pain-free treatment today.",
    url: "https://www.simplesmileendo.com/",
    siteName: "Simple Smile Endodontics",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <body className="min-h-full flex flex-col font-sans bg-white text-[#14306b] selection:bg-[#cfe0ff] selection:text-[#060b1f]">
        {children}
        <SiteAnimations />
      </body>
    </html>
  );
}
