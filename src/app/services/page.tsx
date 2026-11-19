import type { Metadata } from "next";
import { Navbar } from "@/components/sites/simplesmile/Navbar";
import { FeaturedServices } from "@/components/sites/simplesmile/FeaturedServices";
import { WhatIsEndodontist } from "@/components/sites/simplesmile/WhatIsEndodontist";
import { FinancingOptions } from "@/components/sites/simplesmile/FinancingOptions";
import { EmergencyBanner } from "@/components/sites/simplesmile/EmergencyBanner";
import { ContactSection } from "@/components/sites/simplesmile/ContactSection";
import { Footer } from "@/components/sites/simplesmile/Footer";

export const metadata: Metadata = {
  title: "Endodontic & Restorative Services",
  description:
    "Comprehensive endodontic services in Stillwater, MN: root canal therapy, endodontic retreatment, apicoectomy, dental implants, cracked tooth treatment, and same-day emergency dental care at Simple Smile Endodontics.",
  alternates: { canonical: "https://www.simplesmileendo.com/services" },
  openGraph: {
    title: "Endodontic & Restorative Services | Simple Smile Endodontics",
    description: "Root canal therapy, retreatment, apicoectomy, implants & emergency care in Stillwater, MN.",
    url: "https://www.simplesmileendo.com/services",
  },
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <FeaturedServices />
        <EmergencyBanner />
        <WhatIsEndodontist />
        <FinancingOptions />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
