import type { Metadata } from "next";
import { Navbar } from "@/components/sites/simplesmile/Navbar";
import { FinancingOptions } from "@/components/sites/simplesmile/FinancingOptions";
import { PatientReviews } from "@/components/sites/simplesmile/PatientReviews";
import { FaqSection } from "@/components/sites/simplesmile/FaqSection";
import { ReferralBanner } from "@/components/sites/simplesmile/ReferralBanner";
import { ContactSection } from "@/components/sites/simplesmile/ContactSection";
import { Footer } from "@/components/sites/simplesmile/Footer";

export const metadata: Metadata = {
  title: "Patient Information & Payment Options | Simple Smile Endodontics",
  description:
    "Patient information, insurance coverage, financing options, CareCredit, Cherry, and frequently asked questions for Simple Smile Endodontics.",
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
