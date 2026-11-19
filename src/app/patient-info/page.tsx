import type { Metadata } from "next";
import { Navbar } from "@/components/sites/simplesmile/Navbar";
import { FinancingOptions } from "@/components/sites/simplesmile/FinancingOptions";
import { PatientReviews } from "@/components/sites/simplesmile/PatientReviews";
import { FaqSection } from "@/components/sites/simplesmile/FaqSection";
import { ReferralBanner } from "@/components/sites/simplesmile/ReferralBanner";
import { ContactSection } from "@/components/sites/simplesmile/ContactSection";
import { Footer } from "@/components/sites/simplesmile/Footer";

export const metadata: Metadata = {
  title: "Patient Information & Payment Options",
  description:
    "Patient information, dental insurance coverage, CareCredit & Cherry financing, frequently asked questions, and 5-star patient reviews for Simple Smile Endodontics in Stillwater, MN.",
  alternates: { canonical: "https://www.simplesmileendo.com/patient-info" },
  openGraph: {
    title: "Patient Information & Payment Options | Simple Smile Endodontics",
    description: "Insurance, CareCredit, Cherry financing, FAQs, and patient reviews.",
    url: "https://www.simplesmileendo.com/patient-info",
  },
};

export default function PatientInfoPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <ReferralBanner />
        <FinancingOptions />
        <PatientReviews />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
