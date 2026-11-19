import { Navbar } from "@/components/sites/simplesmile/Navbar";
import { Hero } from "@/components/sites/simplesmile/Hero";
import { ReferralBanner } from "@/components/sites/simplesmile/ReferralBanner";
import { EmergencyBanner } from "@/components/sites/simplesmile/EmergencyBanner";
import { WhatIsEndodontist } from "@/components/sites/simplesmile/WhatIsEndodontist";
import { MeetDoctor } from "@/components/sites/simplesmile/MeetDoctor";
import { StandardsTestimonials } from "@/components/sites/simplesmile/StandardsTestimonials";
import { WhyChooseUs } from "@/components/sites/simplesmile/WhyChooseUs";
import { FeaturedServices } from "@/components/sites/simplesmile/FeaturedServices";
import { FinancingOptions } from "@/components/sites/simplesmile/FinancingOptions";
import { PatientReviews } from "@/components/sites/simplesmile/PatientReviews";
import { ClinicAtmosphere } from "@/components/sites/simplesmile/ClinicAtmosphere";
import { FaqSection } from "@/components/sites/simplesmile/FaqSection";
import { ContactSection } from "@/components/sites/simplesmile/ContactSection";
import { Footer } from "@/components/sites/simplesmile/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ReferralBanner />
        <EmergencyBanner />
        <WhatIsEndodontist />
        <MeetDoctor />
        <StandardsTestimonials />
        <WhyChooseUs />
        <FeaturedServices />
        <FinancingOptions />
        <PatientReviews />
        <ClinicAtmosphere />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
