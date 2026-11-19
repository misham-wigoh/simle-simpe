import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SiteAnimations } from "@/components/animations/SiteAnimations";
import { LocalBusinessJsonLd, WebSiteJsonLd } from "@/lib/structured-data";

const BASE_URL = "https://www.simplesmileendo.com";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#060b1f" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Top Endodontist in Stillwater, MN | Simple Smile Endodontics",
    template: "%s | Simple Smile Endodontics",
  },
  description:
    "Get expert root canal therapy & dental implants at Simple Smile Endodontics in Stillwater, MN. Dr. Ernest Reeh — 30+ years of gentle, precise endodontic care. Call (651) 439-8085.",
  keywords: [
    "endodontist Stillwater MN",
    "root canal therapy Stillwater",
    "root canal Stillwater MN",
    "dental implants Stillwater",
    "endodontic retreatment",
    "apicoectomy",
    "cracked tooth treatment",
    "emergency dentist Stillwater",
    "Dr Ernest Reeh",
    "Simple Smile Endodontics",
    "endodontist near me",
    "root canal specialist",
    "3D CBCT imaging",
    "dental implants Woodbury MN",
    "endodontist Oak Park Heights",
    "top dentist Minnesota",
  ],
  authors: [{ name: "Dr. Ernest Reeh, DDS" }],
  creator: "Simple Smile Endodontics",
  publisher: "Simple Smile Endodontics",
  formatDetection: {
    telephone: true,
    date: false,
    email: true,
    address: true,
  },
  icons: {
    icon: [{ url: "/images/favicon.svg", type: "image/svg+xml" }],
    apple: "/images/favicon.svg",
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "Simple Smile Endodontics",
    title: "Top Endodontist in Stillwater, MN | Simple Smile Endodontics",
    description:
      "Expert root canal therapy & dental implants. Dr. Ernest Reeh — 30+ years of gentle endodontic care in Stillwater, MN. Call (651) 439-8085.",
    images: [
      {
        url: `${BASE_URL}/images/stock/hero-poster.jpg`,
        width: 1200,
        height: 630,
        alt: "Simple Smile Endodontics — Stillwater, MN Dental Clinic",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Top Endodontist in Stillwater, MN | Simple Smile Endodontics",
    description:
      "Expert root canal therapy & dental implants. Dr. Ernest Reeh — 30+ years of gentle endodontic care. Call (651) 439-8085.",
    images: [`${BASE_URL}/images/stock/hero-poster.jpg`],
  },
  alternates: {
    canonical: BASE_URL,
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
  category: "health",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <head>
        <link
          rel="preload"
          href="/sites/simplesmile/67a88e29cb94fb7296962849_lato-regular-webfont.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/sites/simplesmile/67a88e6a3c7158693a9a144e_trocchi-regular-webfont.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-white text-[#14306b] selection:bg-[#cfe0ff] selection:text-[#060b1f]">
        <LocalBusinessJsonLd />
        <WebSiteJsonLd />
        {children}
        <SiteAnimations />
      </body>
    </html>
  );
}
