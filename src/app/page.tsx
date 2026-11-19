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
import { FaqJsonLd } from "@/lib/structured-data";

/** Plain-text FAQ data for JSON-LD schema (Google Rich Results) */
const homeFaqs = [
  {
    question: "Do I need a referral to see an endodontist in Stillwater?",
    answer:
      "No. You can call Simple Smile Endodontics directly at (651) 439-8085 and schedule an appointment. If your family dentist referred you, we coordinate directly with their office and send them a report after treatment.",
  },
  {
    question: "Do you treat dental emergencies and severe tooth pain the same day?",
    answer:
      "Yes. We reserve time in our daily schedule for emergency visits. If you are experiencing severe tooth pain, a knocked-out tooth, or dental trauma, call us immediately at (651) 439-8085 and we will see you as soon as possible — often the same day.",
  },
  {
    question: "Do you see patients from Wisconsin?",
    answer:
      "Absolutely. Many of our patients travel from Hudson, New Richmond, Somerset, and other western Wisconsin communities. Our Stillwater office is conveniently located near the Minnesota-Wisconsin border.",
  },
  {
    question: "Will I be comfortable during treatment?",
    answer:
      "Yes. Dr. Reeh uses modern local anesthesia and microscope-guided precision techniques to ensure your comfort. Many patients tell us their root canal was far easier than they expected.",
  },
  {
    question: "What insurance plans do you accept?",
    answer:
      "We accept most major dental insurance plans and also offer CareCredit and Cherry financing for flexible monthly payments. Contact our office to verify your specific coverage.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <FaqJsonLd faqs={homeFaqs} />
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
