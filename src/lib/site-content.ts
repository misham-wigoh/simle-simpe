/**
 * Single source of truth for every sub page (services, technology, about,
 * patient info, blog). Routed by src/app/[...slug]/page.tsx.
 */

export type Faq = { q: string; a: string };
export type Step = { title: string; text: string };
export type Quote = { quote: string; name: string };

export type SubPage = {
  path: string; // e.g. "/services/endodontics/root-canal-therapy"
  kind: "category" | "treatment" | "about" | "info" | "blog";
  crumb: string; // parent label for the breadcrumb
  crumbHref: string;
  title: string; // h1
  metaTitle: string;
  description: string;
  lead: string;
  img: string;
  imgAlt: string;
  chip?: string; // short floating label on the hero image
  facts?: { label: string; value: string }[];
  overview: string[];
  overviewTitle?: string;
  signsTitle?: string;
  signs?: string[];
  stepsTitle?: string;
  steps?: Step[];
  faqs?: Faq[];
  related?: string[]; // paths
  children?: string[]; // category: child paths
  gallery?: string[];
  quotes?: Quote[];
  date?: string; // blog
  readTime?: string; // blog
};

export const PHONE = "(651) 439-8085";
export const PHONE_HREF = "tel:6514398085";

const I = (n: string) => `/images/stock/${n}.jpg`;

export const pages: SubPage[] = [
  /* ------------------------------------------------------------------ */
  /* Service categories                                                  */
  /* ------------------------------------------------------------------ */
  {
    path: "/services/endodontics",
    kind: "category",
    crumb: "Services",
    crumbHref: "/services",
    title: "Endodontics",
    metaTitle: "Endodontics in Stillwater, MN | Simple Smile Endodontics",
    description:
      "Root canal therapy and endodontic retreatment from a specialist with over 30 years of experience in Stillwater, MN.",
    lead: "Endodontics is the care of the inside of your tooth. When the pulp is inflamed or infected, we relieve the pain and keep the tooth you were born with.",
    img: I("service-root-canal"),
    imgAlt: "Endodontic treatment at Simple Smile Endodontics",
    chip: "Same-day appointments",
    overview: [
      "The pulp is the soft tissue inside each tooth. Deep decay, a crack, repeated dental work or an injury can inflame or infect it. Endodontic treatment removes the damaged pulp, cleans the canals and seals the tooth so it can keep working.",
      "An endodontist is a dentist with additional specialty training in this area. Dr. Reeh has focused on it for more than 30 years, so root canal therapy is what we do all day, not one service among many.",
    ],
    overviewTitle: "Saving the tooth you already have",
    children: [
      "/services/endodontics/root-canal-therapy",
      "/services/endodontics/endodontic-retreatment",
    ],
    related: ["/services/oral-surgery", "/services/general-dentistry/emergency-dentist"],
  },
  {
    path: "/services/oral-surgery",
    kind: "category",
    crumb: "Services",
    crumbHref: "/services",
    title: "Oral Surgery",
    metaTitle: "Endodontic Oral Surgery in Stillwater, MN | Simple Smile Endodontics",
    description:
      "Apicoectomy and cracked tooth treatment in Stillwater, MN. Microsurgical care when a standard root canal is not enough.",
    lead: "Some problems sit beyond what a root canal can reach. Microsurgery lets us treat the root tip directly and still keep the tooth.",
    img: I("service-surgery"),
    imgAlt: "Microsurgical care at Simple Smile Endodontics",
    chip: "Microsurgical precision",
    overview: [
      "When infection persists at the tip of a root, or a tooth is cracked in a way that needs a closer look, the answer is sometimes a small surgical procedure instead of extraction.",
      "Magnification and 3D imaging let us work through a small opening and keep the surrounding bone and gum healthy.",
    ],
    overviewTitle: "When a root canal is not the whole answer",
    children: [
      "/services/oral-surgery/apicoectomy",
      "/services/oral-surgery/cracked-teeth-treatment",
    ],
    related: ["/services/endodontics", "/technology/cbct-imaging"],
  },
  {
    path: "/services/general-dentistry",
    kind: "category",
    crumb: "Services",
    crumbHref: "/services",
    title: "General Dentistry",
    metaTitle: "Emergency & Sedation Dentistry in Stillwater, MN | Simple Smile Endodontics",
    description:
      "Same-day emergency dental care, sedation options and traumatic injury treatment in Stillwater, MN.",
    lead: "Pain, swelling or a knocked-out tooth cannot wait. Our general services are built around getting you comfortable and seen quickly.",
    img: I("service-emergency"),
    imgAlt: "Emergency dental care in Stillwater",
    chip: "Emergency visits",
    overview: [
      "These are the services patients reach for when something is wrong right now, or when anxiety is the real obstacle to care.",
      "Call early in the day and tell us you are in pain. We will work to see you the same day.",
    ],
    overviewTitle: "Care for the urgent and the anxious",
    children: [
      "/services/general-dentistry/emergency-dentist",
      "/services/general-dentistry/sedation-dentistry",
      "/services/general-dentistry/traumatic-injury-treatment",
    ],
    related: ["/services/endodontics", "/patient-info/new-patient-experience"],
  },
  {
    path: "/services/restorative-dentistry",
    kind: "category",
    crumb: "Services",
    crumbHref: "/services",
    title: "Restorative Dentistry",
    metaTitle: "Dental Implants & Periodontics in Stillwater, MN | Simple Smile Endodontics",
    description:
      "Dental implants and periodontal care in Stillwater, MN, planned with 3D imaging for a durable, natural result.",
    lead: "When a tooth cannot be saved, or the gums that hold it have weakened, restorative care rebuilds function and comfort.",
    img: I("service-implants"),
    imgAlt: "Dental implant care in Stillwater",
    chip: "Planned with 3D imaging",
    overview: [
      "Saving a natural tooth is always the first goal. When that is not possible, an implant replaces both the root and the crown. Healthy gums and bone underneath are what keep either one stable, which is where periodontal care comes in.",
    ],
    overviewTitle: "Rebuilding what was lost",
    children: [
      "/services/restorative-dentistry/dental-implants",
      "/services/restorative-dentistry/periodontics",
    ],
    related: ["/services/oral-surgery", "/technology/cbct-imaging"],
  },
  {
    path: "/services/technology",
    kind: "category",
    crumb: "Services",
    crumbHref: "/services",
    title: "Dental Technology",
    metaTitle: "Dental Technology | Simple Smile Endodontics Stillwater",
    description:
      "Digital radiography and 3D cone beam CT imaging at Simple Smile Endodontics in Stillwater, MN.",
    lead: "Precise diagnosis comes first. We invest in imaging that shows us what a standard film cannot, so treatment is accurate and no more invasive than it needs to be.",
    img: I("why-tech"),
    imgAlt: "Digital imaging technology at Simple Smile Endodontics",
    chip: "Digital + 3D imaging",
    overview: [
      "Canals can be curved, narrow or hidden. Better images mean fewer surprises during treatment and a clearer conversation with you before it starts.",
    ],
    overviewTitle: "See the problem before we treat it",
    children: ["/technology/dental-radiology", "/technology/cbct-imaging"],
    related: ["/about/why-choose-us", "/services/endodontics"],
  },

  /* ------------------------------------------------------------------ */
  /* Treatments                                                          */
  /* ------------------------------------------------------------------ */
  {
    path: "/services/endodontics/root-canal-therapy",
    kind: "treatment",
    crumb: "Endodontics",
    crumbHref: "/services/endodontics",
    title: "Root Canal Therapy",
    metaTitle: "Root Canal Therapy in Stillwater, MN | Simple Smile Endodontics",
    description:
      "Gentle, precise root canal therapy in Stillwater, MN from an endodontist with 30+ years of experience. Same-day emergency visits available.",
    lead: "A root canal relieves the pain of an infected tooth and lets you keep it. With modern anesthesia and imaging, most patients describe it as no different from having a filling.",
    img: I("service-root-canal"),
    imgAlt: "Root canal therapy at Simple Smile Endodontics",
    chip: "No referral needed",
    facts: [
      { label: "Referral", value: "Not required" },
      { label: "Emergency", value: "Same-day when possible" },
      { label: "Comfort", value: "Sedation options" },
    ],
    overviewTitle: "What a root canal does",
    overview: [
      "Inside every tooth is a canal system holding nerves and blood vessels. When bacteria reach it through deep decay, a crack or an old restoration, the tissue becomes inflamed or infected and the tooth starts to hurt, swell or react to hot and cold.",
      "During a root canal we numb the area, remove the damaged pulp, clean and shape the canals, and seal them. Your dentist then places a permanent crown or filling to protect the tooth.",
      "The goal is simple: end the pain and keep your natural tooth, which almost always works better than any replacement.",
    ],
    signsTitle: "Signs you may need one",
    signs: [
      "Lingering pain when you bite or press on the tooth",
      "Sensitivity to hot or cold that stays after the temperature is gone",
      "Swelling or tenderness in the gum near the tooth",
      "A darkening tooth, or a pimple-like bump on the gum",
      "Throbbing pain that wakes you at night",
    ],
    stepsTitle: "What happens at your visit",
    steps: [
      { title: "Exam and imaging", text: "We take digital images, test the tooth and explain what we find before anything begins." },
      { title: "Numbing", text: "You are fully numbed. Nitrous oxide, oral sedation or IV sedation are available if you want help relaxing." },
      { title: "Clean and shape", text: "Using magnification, we remove the damaged pulp and clean every canal." },
      { title: "Seal and protect", text: "The canals are sealed and the tooth is closed. We send a report to your dentist for the final crown or filling." },
    ],
    faqs: [
      { q: "Does a root canal hurt?", a: "The pain people associate with root canals comes from the infection, not the treatment. You are numbed for the procedure, and most patients feel relief afterward." },
      { q: "How long does it take?", a: "Most visits last about an hour, depending on the tooth and the number of canals. We will give you an estimate when we see you." },
      { q: "Can I just have the tooth pulled instead?", a: "You can, but a missing tooth usually needs a bridge or implant to replace it. Saving the tooth is generally simpler and keeps your natural bite." },
    ],
    related: [
      "/services/endodontics/endodontic-retreatment",
      "/services/general-dentistry/sedation-dentistry",
      "/services/general-dentistry/emergency-dentist",
    ],
  },
  {
    path: "/services/endodontics/endodontic-retreatment",
    kind: "treatment",
    crumb: "Endodontics",
    crumbHref: "/services/endodontics",
    title: "Endodontic Retreatment",
    metaTitle: "Endodontic Retreatment in Stillwater, MN | Simple Smile Endodontics",
    description:
      "A second chance for a tooth that had a root canal before. Endodontic retreatment in Stillwater, MN with 3D imaging.",
    lead: "Sometimes a tooth that was treated before becomes painful or infected again. Retreatment gives it a second chance without extraction.",
    img: I("service-retreatment"),
    imgAlt: "Endodontic retreatment at Simple Smile Endodontics",
    chip: "A second chance",
    facts: [
      { label: "Best for", value: "Previously treated teeth" },
      { label: "Imaging", value: "Digital + 3D CBCT" },
      { label: "Referral", value: "Not required" },
    ],
    overviewTitle: "Why a treated tooth can fail",
    overview: [
      "A root canal can fail for several reasons: a canal that was narrow or hidden the first time, a new cavity that lets bacteria back in, a cracked or loose crown, or a long delay before the final restoration.",
      "In retreatment we reopen the tooth, remove the old filling material, look for what was missed and clean the canals again before resealing them.",
      "If retreatment is not the right option, we will tell you plainly and talk through alternatives such as a microsurgical procedure.",
    ],
    signsTitle: "Signs a treated tooth needs another look",
    signs: [
      "Pain or pressure returning months or years after treatment",
      "Swelling or a bump on the gum near the tooth",
      "Tenderness when biting",
      "A drainage taste or discharge near the tooth",
    ],
    stepsTitle: "How retreatment works",
    steps: [
      { title: "Find the cause", text: "Digital images and, when useful, a 3D scan show us what the earlier treatment could not." },
      { title: "Access the canals", text: "We remove the crown or filling as needed and the old canal material." },
      { title: "Clean and disinfect", text: "Every canal is cleaned again, including any that were missed before." },
      { title: "Seal and restore", text: "The tooth is resealed and your dentist completes the permanent restoration." },
    ],
    faqs: [
      { q: "Is retreatment more difficult than a first root canal?", a: "It can be, since we have to remove previous material first. That is why specialist training and magnification matter." },
      { q: "What if retreatment does not work?", a: "A small surgical procedure called an apicoectomy may be an option before considering extraction." },
    ],
    related: [
      "/services/endodontics/root-canal-therapy",
      "/services/oral-surgery/apicoectomy",
      "/technology/cbct-imaging",
    ],
  },
  {
    path: "/services/oral-surgery/apicoectomy",
    kind: "treatment",
    crumb: "Oral Surgery",
    crumbHref: "/services/oral-surgery",
    title: "Apicoectomy",
    metaTitle: "Apicoectomy in Stillwater, MN | Simple Smile Endodontics",
    description:
      "Precise microsurgical root-end treatment (apicoectomy) in Stillwater, MN, to preserve a tooth when a root canal alone has not healed it.",
    lead: "An apicoectomy treats the very tip of the root through a small opening in the gum. It is how we save a tooth that standard treatment could not heal.",
    img: I("service-surgery"),
    imgAlt: "Apicoectomy microsurgery at Simple Smile Endodontics",
    chip: "Microsurgery",
    facts: [
      { label: "Approach", value: "Under magnification" },
      { label: "Goal", value: "Keep the natural tooth" },
      { label: "Comfort", value: "Local anesthetic, sedation optional" },
    ],
    overviewTitle: "Treating the root tip directly",
    overview: [
      "If infection remains at the tip of a root after a root canal, or the canals cannot be retreated from above, we can reach the area surgically. We lift a small flap of gum, remove the infected tissue and the end of the root, place a small seal and close the site.",
      "Magnification and 3D imaging let us work precisely, so the opening is small and the surrounding tissue is disturbed as little as possible.",
    ],
    signsTitle: "When it is considered",
    signs: [
      "Persistent infection after a root canal or retreatment",
      "Canals blocked by calcification or a post that cannot be removed",
      "A cyst or lesion at the root tip seen on imaging",
    ],
    stepsTitle: "What to expect",
    steps: [
      { title: "Planning", text: "We review your 3D scan, explain the plan and answer your questions." },
      { title: "Numbing", text: "The area is fully numbed. Sedation is available if you would like it." },
      { title: "Treat the root end", text: "Through a small opening, we remove infected tissue and seal the root tip." },
      { title: "Healing", text: "You receive aftercare instructions, and we check healing at a follow-up visit." },
    ],
    faqs: [
      { q: "Is recovery difficult?", a: "Most patients have mild soreness and swelling for a few days. We will give you written aftercare instructions." },
      { q: "Will I lose the tooth?", a: "The point of the procedure is to keep it. We will tell you ahead of time if we think the outlook is uncertain." },
    ],
    related: [
      "/services/endodontics/endodontic-retreatment",
      "/services/oral-surgery/cracked-teeth-treatment",
      "/technology/cbct-imaging",
    ],
  },
  {
    path: "/services/oral-surgery/cracked-teeth-treatment",
    kind: "treatment",
    crumb: "Oral Surgery",
    crumbHref: "/services/oral-surgery",
    title: "Cracked Teeth Treatment",
    metaTitle: "Cracked Tooth Treatment in Stillwater, MN | Simple Smile Endodontics",
    description:
      "Diagnosis and treatment of cracked teeth in Stillwater, MN, to stop pain and prevent further damage and tooth loss.",
    lead: "Cracks are hard to see and easy to miss, yet they are a common cause of pain when you bite or release. Early diagnosis is what keeps the tooth.",
    img: I("service-cracked-teeth"),
    imgAlt: "Cracked tooth treatment at Simple Smile Endodontics",
    chip: "Early diagnosis",
    facts: [
      { label: "Common symptom", value: "Pain on release" },
      { label: "Key tool", value: "Magnification + imaging" },
      { label: "Referral", value: "Not required" },
    ],
    overviewTitle: "Why cracks need a specialist's eye",
    overview: [
      "Chewing, grinding, large old fillings and sudden temperature changes can all stress a tooth until it cracks. Some cracks stay shallow. Others travel toward the root and let bacteria reach the pulp.",
      "We locate the crack, judge how deep it runs, and recommend the least invasive treatment that protects the tooth. That may be a crown, a root canal, or in some cases extraction if the crack cannot be saved.",
    ],
    signsTitle: "Symptoms to watch for",
    signs: [
      "Sharp pain when you bite, especially when you release",
      "Pain with cold that comes and goes",
      "A tooth that is difficult to pinpoint",
      "Visible hairline lines or a chipped cusp",
    ],
    stepsTitle: "How we handle it",
    steps: [
      { title: "Locate the crack", text: "Bite tests, magnification and imaging help us find and map it." },
      { title: "Assess the depth", text: "We determine whether the pulp is affected and whether the tooth is restorable." },
      { title: "Choose treatment", text: "We explain each option, including what happens if you wait." },
      { title: "Protect the tooth", text: "Most cracked teeth need a crown afterward to hold them together. We coordinate with your dentist." },
    ],
    faqs: [
      { q: "Can a cracked tooth heal on its own?", a: "No. Unlike bone, tooth structure does not repair itself, so a crack that causes symptoms needs evaluation." },
      { q: "Can every cracked tooth be saved?", a: "Not always. A crack that extends below the bone may not be treatable, and we will tell you honestly if that is the case." },
    ],
    related: [
      "/services/endodontics/root-canal-therapy",
      "/services/general-dentistry/emergency-dentist",
      "/services/restorative-dentistry/dental-implants",
    ],
  },
  {
    path: "/services/general-dentistry/emergency-dentist",
    kind: "treatment",
    crumb: "General Dentistry",
    crumbHref: "/services/general-dentistry",
    title: "Emergency Dentist",
    metaTitle: "Emergency Dentist in Stillwater, MN | Same-Day Care",
    description:
      "Same-day emergency dental care in Stillwater, MN for severe tooth pain, swelling and tooth injuries. Call (651) 439-8085.",
    lead: "Severe tooth pain, swelling or an injury needs attention today. Call us first thing and we will work to get you in the same day.",
    img: I("service-emergency"),
    imgAlt: "Emergency dental care at Simple Smile Endodontics",
    chip: "Call early for same-day",
    facts: [
      { label: "Call", value: PHONE },
      { label: "Referral", value: "Not required" },
      { label: "Comfort", value: "Sedation options" },
    ],
    overviewTitle: "Pain should not wait for next week",
    overview: [
      "Most dental emergencies involve an infected or injured tooth, which is exactly what an endodontist treats. You do not need a referral from your dentist, and you do not need to wait for a routine opening.",
      "Tell us what is happening when you call. We will tell you whether to come in right away and what to do until you arrive.",
    ],
    signsTitle: "Call us the same day if you have",
    signs: [
      "Severe or throbbing tooth pain",
      "Swelling in the face, jaw or gums",
      "A tooth that was knocked out, loosened or broken",
      "Pain that keeps you from sleeping or eating",
    ],
    stepsTitle: "What happens when you call",
    steps: [
      { title: "Call early", text: `Phone ${PHONE} and tell us you are in pain.` },
      { title: "Quick triage", text: "We ask a few questions and give you advice for the time before your visit." },
      { title: "Prompt exam", text: "We see you the same day when possible and take images to find the cause." },
      { title: "Relief first", text: "We treat the source of the pain and explain any further steps." },
    ],
    faqs: [
      { q: "What if swelling spreads to my face or I have trouble breathing or swallowing?", a: "Go to an emergency room immediately. That can be a serious infection." },
      { q: "What if my tooth was knocked out?", a: "Keep it moist, handle it by the crown and call us right away. Time matters." },
    ],
    related: [
      "/services/general-dentistry/traumatic-injury-treatment",
      "/services/endodontics/root-canal-therapy",
      "/contact-us",
    ],
  },
  {
    path: "/services/general-dentistry/sedation-dentistry",
    kind: "treatment",
    crumb: "General Dentistry",
    crumbHref: "/services/general-dentistry",
    title: "Sedation Dentistry",
    metaTitle: "Sedation Dentistry in Stillwater, MN | Simple Smile Endodontics",
    description:
      "Nitrous oxide, oral sedation and IV sedation options in Stillwater, MN for patients with dental anxiety.",
    lead: "Fear of the dentist keeps people in pain longer than they need to be. Sedation options let you relax while we do the work.",
    img: I("why-comfort"),
    imgAlt: "A calm treatment room at Simple Smile Endodontics",
    chip: "Three options",
    facts: [
      { label: "Nitrous oxide", value: "Light, wears off quickly" },
      { label: "Oral sedation", value: "Taken before the visit" },
      { label: "IV sedation", value: "Deepest relaxation" },
    ],
    overviewTitle: "Choose the level of calm you need",
    overview: [
      "Nitrous oxide takes the edge off and wears off soon after the visit. Oral sedation is a prescribed medication taken beforehand. IV sedation provides deeper relaxation for longer procedures or higher anxiety.",
      "We will talk with you ahead of time about your health history and which option fits. Anxiety is common and nothing to apologise for.",
    ],
    stepsTitle: "How we plan a sedated visit",
    steps: [
      { title: "Talk it through", text: "We discuss your concerns, medical history and medications." },
      { title: "Choose an option", text: "Together we pick the level of sedation that suits you and the procedure." },
      { title: "Prepare", text: "You receive instructions on eating, medication and getting a ride home if needed." },
      { title: "Rest and recover", text: "You relax during treatment and we guide you through recovery." },
    ],
    faqs: [
      { q: "Will I need someone to drive me home?", a: "For oral and IV sedation, yes. We will confirm what applies to your option at your consultation." },
      { q: "Is sedation safe?", a: "Sedation is carefully matched to your health history and monitored during treatment. We will review the details with you beforehand." },
    ],
    related: [
      "/services/endodontics/root-canal-therapy",
      "/patient-info/new-patient-experience",
      "/about/tour-the-office",
    ],
  },
  {
    path: "/services/general-dentistry/traumatic-injury-treatment",
    kind: "treatment",
    crumb: "General Dentistry",
    crumbHref: "/services/general-dentistry",
    title: "Traumatic Injury Treatment",
    metaTitle: "Traumatic Tooth Injury Treatment in Stillwater, MN",
    description:
      "Treatment for knocked-out, chipped, broken and displaced teeth in Stillwater, MN. Call right away for same-day care.",
    lead: "A blow to the mouth can damage a tooth even when it looks fine. Prompt care gives an injured tooth its best chance.",
    img: I("service-emergency"),
    imgAlt: "Traumatic injury care at Simple Smile Endodontics",
    chip: "Time matters",
    facts: [
      { label: "Act within", value: "As soon as possible" },
      { label: "Call", value: PHONE },
      { label: "Referral", value: "Not required" },
    ],
    overviewTitle: "Why injured teeth need follow-up",
    overview: [
      "Sports, falls and accidents can chip, loosen, push in or knock out teeth. Even a tooth that seems unharmed may have damage to the nerve that shows up weeks later as discoloration or pain.",
      "We stabilise the tooth, treat the pulp if needed and monitor healing over time.",
    ],
    signsTitle: "What counts as an injury",
    signs: [
      "A tooth knocked out or pushed out of position",
      "A chipped or fractured tooth",
      "A loose tooth after a blow",
      "A tooth that darkens after an impact",
    ],
    stepsTitle: "If it happens",
    steps: [
      { title: "Save the tooth", text: "Pick up a knocked-out tooth by the crown, rinse gently and keep it moist in milk or saline." },
      { title: "Call immediately", text: `Phone ${PHONE}. Time is the biggest factor.` },
      { title: "Stabilise", text: "We reposition and splint the tooth if appropriate." },
      { title: "Follow up", text: "We check the tooth over the following months to confirm it is healing." },
    ],
    faqs: [
      { q: "Should I put the tooth back in myself?", a: "Only if you can do so gently and it is an adult tooth. Otherwise keep it moist and bring it with you." },
      { q: "Can a tooth fail long after an injury?", a: "Yes, which is why we recommend follow-up visits." },
    ],
    related: [
      "/services/general-dentistry/emergency-dentist",
      "/services/endodontics/root-canal-therapy",
      "/services/restorative-dentistry/dental-implants",
    ],
  },
  {
    path: "/services/restorative-dentistry/dental-implants",
    kind: "treatment",
    crumb: "Restorative Dentistry",
    crumbHref: "/services/restorative-dentistry",
    title: "Dental Implants",
    metaTitle: "Dental Implants in Stillwater, MN | Simple Smile Endodontics",
    description:
      "Durable, natural-looking dental implants in Stillwater, MN, planned with 3D cone beam imaging.",
    lead: "When a tooth cannot be saved, an implant replaces the root as well as the crown, so the new tooth looks, feels and works like your own.",
    img: I("service-implants"),
    imgAlt: "Dental implant treatment at Simple Smile Endodontics",
    chip: "3D-guided planning",
    facts: [
      { label: "Replaces", value: "Root and crown" },
      { label: "Planning", value: "3D CBCT scan" },
      { label: "Referral", value: "Not required" },
    ],
    overviewTitle: "A replacement built from the root up",
    overview: [
      "A dental implant is a small titanium post placed in the jawbone. Over a few months the bone bonds with it, creating a stable base for a crown.",
      "A 3D scan lets us measure the bone, locate nerves and sinuses and plan placement before surgery begins. Your restorative dentist can complete the crown, and we coordinate with them throughout.",
    ],
    signsTitle: "Implants may be an option if",
    signs: [
      "A tooth was lost to injury, infection or decay",
      "A tooth cannot be saved by root canal or retreatment",
      "You want a fixed alternative to a removable denture",
      "Neighbouring teeth should not be reshaped for a bridge",
    ],
    stepsTitle: "The implant journey",
    steps: [
      { title: "Consult and scan", text: "We examine the site and take a 3D scan to plan placement." },
      { title: "Place the implant", text: "The implant is placed under local anesthetic, with sedation available." },
      { title: "Heal", text: "The bone integrates with the implant over the following months." },
      { title: "Restore", text: "A crown is attached, completing the new tooth." },
    ],
    faqs: [
      { q: "How long does an implant take?", a: "Healing takes several months. We will give you a timeline based on your bone and the site." },
      { q: "Am I a candidate?", a: "That depends on your bone, gums and general health. A scan and exam will tell us." },
    ],
    related: [
      "/services/restorative-dentistry/periodontics",
      "/technology/cbct-imaging",
      "/services/general-dentistry/sedation-dentistry",
    ],
  },
  {
    path: "/services/restorative-dentistry/periodontics",
    kind: "treatment",
    crumb: "Restorative Dentistry",
    crumbHref: "/services/restorative-dentistry",
    title: "Periodontics",
    metaTitle: "Periodontics in Stillwater, MN | Simple Smile Endodontics",
    description:
      "Gum and bone health care in Stillwater, MN that supports your natural teeth and dental implants.",
    lead: "Teeth are only as stable as the gums and bone that hold them. Periodontal care protects that foundation.",
    img: I("why-expertise"),
    imgAlt: "Periodontal care at Simple Smile Endodontics",
    chip: "Gum and bone health",
    facts: [
      { label: "Focus", value: "Gums and supporting bone" },
      { label: "Supports", value: "Natural teeth and implants" },
      { label: "Referral", value: "Not required" },
    ],
    overviewTitle: "The foundation under every tooth",
    overview: [
      "Gum disease can loosen teeth and, if untreated, lead to tooth loss. It can also affect whether an implant will succeed.",
      "We evaluate your gums and bone, treat what we find and coordinate with your dentist so the results last.",
    ],
    signsTitle: "Signs of gum problems",
    signs: [
      "Gums that bleed when you brush or floss",
      "Red, swollen or receding gums",
      "Persistent bad breath",
      "Teeth that feel loose or are shifting",
    ],
    stepsTitle: "Our approach",
    steps: [
      { title: "Evaluate", text: "We check gum pockets, bone levels and bite using exam and imaging." },
      { title: "Treat", text: "We clean below the gumline and address deeper problems as needed." },
      { title: "Protect", text: "We plan maintenance with your dentist to keep the gains." },
    ],
    faqs: [
      { q: "Is gum disease reversible?", a: "Early gum inflammation often is. Advanced disease can be controlled but the lost bone does not simply grow back on its own." },
    ],
    related: [
      "/services/restorative-dentistry/dental-implants",
      "/services/endodontics/root-canal-therapy",
    ],
  },

  /* ------------------------------------------------------------------ */
  /* Technology                                                          */
  /* ------------------------------------------------------------------ */
  {
    path: "/technology/dental-radiology",
    kind: "treatment",
    crumb: "Dental Technology",
    crumbHref: "/services/technology",
    title: "Dental Radiology & Digital X-Rays",
    metaTitle: "Digital Dental X-Rays in Stillwater, MN | Simple Smile Endodontics",
    description:
      "Digital dental radiography at Simple Smile Endodontics in Stillwater, MN for fast, accurate diagnosis.",
    lead: "Digital X-rays appear within seconds, can be enlarged for detail and use lower radiation than traditional film.",
    img: I("why-tech"),
    imgAlt: "Digital radiography at Simple Smile Endodontics",
    chip: "Instant images",
    facts: [
      { label: "Results", value: "On screen in seconds" },
      { label: "Benefit", value: "Lower radiation than film" },
      { label: "Shared", value: "Easy to send to your dentist" },
    ],
    overviewTitle: "Why digital imaging matters",
    overview: [
      "A clear image is the starting point for every diagnosis. Digital sensors let us see the tooth, canals and surrounding bone right away and zoom in on fine detail.",
      "We can show you the image on screen so you can see exactly what we see, and we can send copies to your dentist.",
    ],
    stepsTitle: "What it looks like",
    steps: [
      { title: "Position", text: "A small sensor is placed in your mouth." },
      { title: "Capture", text: "The image appears on our screen within seconds." },
      { title: "Review together", text: "We walk you through what the image shows." },
    ],
    faqs: [
      { q: "Is it safe?", a: "Digital radiography uses lower radiation than film, and we only take the images needed for diagnosis and treatment." },
    ],
    related: ["/technology/cbct-imaging", "/about/why-choose-us"],
  },
  {
    path: "/technology/cbct-imaging",
    kind: "treatment",
    crumb: "Dental Technology",
    crumbHref: "/services/technology",
    title: "3D Cone Beam CT (CBCT)",
    metaTitle: "3D Cone Beam CT (CBCT) in Stillwater, MN | Simple Smile Endodontics",
    description:
      "3D cone beam CT imaging at Simple Smile Endodontics in Stillwater, MN for complex diagnosis and implant planning.",
    lead: "A flat X-ray compresses a three-dimensional tooth into two dimensions. A CBCT scan shows the whole picture.",
    img: I("why-tech"),
    imgAlt: "3D cone beam CT imaging at Simple Smile Endodontics",
    chip: "Full 3D view",
    facts: [
      { label: "Shows", value: "Teeth, bone, nerves, sinuses" },
      { label: "Used for", value: "Hard diagnoses, implants, surgery" },
      { label: "Scan time", value: "Brief" },
    ],
    overviewTitle: "Seeing in three dimensions",
    overview: [
      "A cone beam scan rotates around your head once and builds a 3D model that we can slice from any angle. It can reveal hidden canals, small cracks, lesions at the root tip and the exact amount of bone available for an implant.",
      "We use it when the answer is not clear from standard images, so treatment can be precise and no more invasive than needed.",
    ],
    stepsTitle: "Your scan",
    steps: [
      { title: "Get comfortable", text: "You stand or sit still while the scanner rotates." },
      { title: "Scan", text: "The scan takes a short time." },
      { title: "Explain", text: "We review the 3D images with you and plan treatment." },
    ],
    faqs: [
      { q: "Does everyone need a CBCT scan?", a: "No. We recommend one only when it will meaningfully improve diagnosis or treatment planning." },
    ],
    related: [
      "/services/restorative-dentistry/dental-implants",
      "/services/oral-surgery/apicoectomy",
      "/technology/dental-radiology",
    ],
  },

  /* ------------------------------------------------------------------ */
  /* About                                                               */
  /* ------------------------------------------------------------------ */
  {
    path: "/about/meet-the-doctor",
    kind: "about",
    crumb: "About",
    crumbHref: "/about",
    title: "Meet Dr. Ernest Reeh",
    metaTitle: "Meet Dr. Ernest Reeh | Simple Smile Endodontics Stillwater",
    description:
      "Dr. Ernest Reeh has over 30 years of experience in endodontics and a reputation for calm, clear, comfortable care in Stillwater, MN.",
    lead: "Over 30 years of endodontics, and a habit of explaining things so you actually understand them.",
    img: I("doctor"),
    imgAlt: "Dr. Ernest Reeh",
    chip: "30+ years in endodontics",
    facts: [
      { label: "Experience", value: "30+ years" },
      { label: "Focus", value: "Endodontics" },
      { label: "Style", value: "Calm, clear, unhurried" },
    ],
    overviewTitle: "Care and comfort come first",
    overview: [
      "Our patients’ care and comfort are Dr. Reeh’s primary concerns. He explains what is going on in a calming way and enjoys the conversations he has with patients, using humor when it helps them relax.",
      "He has even been known to draw pictures or write upside down so he can talk face to face about a treatment plan.",
      "He has built a calm, soothing office and hired team members who are understanding and compassionate. Many patients tell us the visit was easier than they feared.",
    ],
    related: ["/about/why-choose-us", "/about/testimonials", "/about/tour-the-office"],
  },
  {
    path: "/about/why-choose-us",
    kind: "about",
    crumb: "About",
    crumbHref: "/about",
    title: "Why Choose Simple Smile Endodontics",
    metaTitle: "Why Choose Us | Simple Smile Endodontics Stillwater",
    description:
      "Advanced technology, deep specialist experience and a comfort-first approach to endodontic care in Stillwater, MN.",
    lead: "Three things set us apart: the technology we use to diagnose, the experience of the person treating you, and how comfortable the visit feels.",
    img: I("why-expertise"),
    imgAlt: "Specialist care at Simple Smile Endodontics",
    chip: "Technology, expertise, comfort",
    facts: [
      { label: "Technology", value: "Digital + 3D imaging" },
      { label: "Expertise", value: "30+ years" },
      { label: "Comfort", value: "Sedation options" },
    ],
    overviewTitle: "What you can count on",
    overview: [
      "Technology: digital imaging and modern techniques support accurate diagnoses and minimally invasive treatment.",
      "Expertise: endodontics is our focus, not one service among many, so you are treated by someone who does this every day.",
      "Comfort: we explain every step, offer nitrous oxide, oral and IV sedation, and see urgent cases quickly.",
    ],
    related: ["/technology/cbct-imaging", "/services/general-dentistry/sedation-dentistry", "/about/meet-the-doctor"],
  },
  {
    path: "/about/tour-the-office",
    kind: "about",
    crumb: "About",
    crumbHref: "/about",
    title: "Tour the Office",
    metaTitle: "Tour the Office | Simple Smile Endodontics Stillwater",
    description:
      "Take a look inside Simple Smile Endodontics in Stillwater, MN before your visit.",
    lead: "Knowing what the room looks like takes some of the nerves out of the first visit. Here is a look around.",
    img: I("clinic-1"),
    imgAlt: "Inside Simple Smile Endodontics",
    chip: "Bright and calm",
    overviewTitle: "A calm place to be treated",
    overview: [
      "We designed the office to feel bright and quiet rather than clinical. Patients often tell us they expected something far more intimidating.",
    ],
    gallery: [I("clinic-1"), I("clinic-2"), I("clinic-3"), I("clinic-4"), I("clinic-5"), I("contact-building")],
    related: ["/about/meet-the-doctor", "/patient-info/new-patient-experience", "/contact-us"],
  },
  {
    path: "/about/testimonials",
    kind: "about",
    crumb: "About",
    crumbHref: "/about",
    title: "Patient Testimonials",
    metaTitle: "Patient Testimonials | Simple Smile Endodontics Stillwater",
    description:
      "Read what patients say about their care at Simple Smile Endodontics in Stillwater, MN.",
    lead: "The best way to know what a visit is like is to hear from the people who have had one.",
    img: I("testimonial-1"),
    imgAlt: "Patients at Simple Smile Endodontics",
    chip: "5.0 rated",
    overviewTitle: "In their words",
    overview: [],
    quotes: [
      { quote: "I have been visiting Simple Smile Endodontics for several years now and am very pleased of the service they provide. Dr. Ernest Reeh is extremely knowledgeable of his craft, he takes time to not only investigate the problem and if necessary, adds state of the art technology on circular x-ray machines and other devices and explains in full details of his plan and procedure.", name: "Rita M." },
      { quote: "My husband has had two visits to Simple Smile Endodontics, and both were positive experiences. Dr. Reeh and his staff are professional, yet caring and friendly. It was very easy to schedule an appointment quickly, and my husband’s procedures went smoothly and without any issues. We highly recommend Dr. Reeh!", name: "Susan S." },
      { quote: "I was pretty apprehensive as I arrived for a molar root canal treatment. I was immediately met by the friendly and professional staff persons. I was envisioning some kind of torture chamber but instead was greeted by a bright and pleasant room.", name: "Everson D." },
      { quote: "I had never had a root canal and was feeling a bit anxious. It turns out it was a “non-event.” Outside of getting numbed up, there wasn’t an ounce of pain. They were able to squeeze me in on short notice and did a great job on the actual dental work.", name: "Jeff H." },
      { quote: "After suffering a few days over the weekend with a BAD toothache, I went to Dr. Reeh and had a root canal. It was a really nice office and he and his staff were wonderful.", name: "Debra G." },
    ],
    related: ["/about/meet-the-doctor", "/services/endodontics/root-canal-therapy", "/contact-us"],
  },

  /* ------------------------------------------------------------------ */
  /* Patient info                                                        */
  /* ------------------------------------------------------------------ */
  {
    path: "/patient-info/new-patient-experience",
    kind: "info",
    crumb: "Patient Info",
    crumbHref: "/patient-info",
    title: "New Patient Experience",
    metaTitle: "New Patient Experience | Simple Smile Endodontics Stillwater",
    description:
      "What to expect at your first visit to Simple Smile Endodontics in Stillwater, MN: scheduling, what to bring and how treatment works.",
    lead: "A first visit should not be a mystery. Here is exactly what happens, from the phone call to the follow-up.",
    img: I("clinic-2"),
    imgAlt: "Welcoming reception at Simple Smile Endodontics",
    chip: "No referral needed",
    facts: [
      { label: "Referral", value: "Not required" },
      { label: "Phone", value: PHONE },
      { label: "Emergencies", value: "Same-day when possible" },
    ],
    overviewTitle: "Before you arrive",
    overview: [
      "You do not need a referral from your dentist or physician. Call us, tell us what is going on and whether you are in pain, and we will find the earliest suitable time.",
      "Bring a list of your medications, your insurance information and any recent X-rays if you have them. If your dentist referred you, we send them a report after treatment.",
    ],
    stepsTitle: "Your first visit",
    steps: [
      { title: "Call or request online", text: `Reach us at ${PHONE} or use the contact form.` },
      { title: "Check in", text: "Our team will welcome you and go over your health history." },
      { title: "Exam and imaging", text: "Dr. Reeh examines the tooth, takes images and explains what he finds." },
      { title: "Plan and treat", text: "We discuss options, comfort choices and cost, and treat the same day when appropriate." },
    ],
    faqs: [
      { q: "Will I be comfortable?", a: "That is our priority. We explain each step and offer nitrous oxide, oral sedation and IV sedation." },
      { q: "How do I pay?", a: "We work with insurance and offer financing options. See our Patient Info page for details." },
    ],
    related: ["/patient-info", "/about/tour-the-office", "/contact-us"],
  },

  /* ------------------------------------------------------------------ */
  /* Blog                                                                */
  /* ------------------------------------------------------------------ */
  {
    path: "/blog/endodontist-vs-dentist-who-should-do-your-root-canal",
    kind: "blog",
    crumb: "Blog",
    crumbHref: "/blog",
    title: "Endodontist vs. Dentist: Who Should Do Your Root Canal?",
    metaTitle: "Endodontist vs. Dentist: Who Should Do Your Root Canal? | Simple Smile Endodontics",
    description:
      "General dentists and endodontists can both perform root canals. Here is how to decide who is right for your tooth.",
    lead: "Both can do the procedure. The difference is training, volume and the tools used for hard cases.",
    img: I("why-expertise"),
    imgAlt: "Endodontist at work",
    date: "2025",
    readTime: "3 min read",
    overview: [
      "A general dentist can perform many root canals, particularly on front teeth with simple anatomy. An endodontist is a dentist who completed additional specialty training in diagnosing and treating tooth pain and the inside of the tooth, and who performs these procedures every day.",
      "Consider an endodontist when the tooth has several or curved canals, when the tooth has been treated before, when the diagnosis is unclear, or when you are in pain and need to be seen quickly. Specialist tools such as magnification and 3D imaging are standard in an endodontic office.",
      "You do not need a referral to see us. If your dentist referred you, we send a report after treatment so they can complete the permanent restoration.",
    ],
    related: [
      "/services/endodontics/root-canal-therapy",
      "/services/endodontics/endodontic-retreatment",
      "/blog/what-to-expect-after-a-root-canal",
    ],
  },
  {
    path: "/blog/what-to-expect-after-a-root-canal",
    kind: "blog",
    crumb: "Blog",
    crumbHref: "/blog",
    title: "What to Expect After a Root Canal",
    metaTitle: "What to Expect After a Root Canal | Simple Smile Endodontics",
    description:
      "Recovery after a root canal is usually straightforward. Here is what is normal, and when to call.",
    lead: "Most people are back to normal within a few days. Here is what to expect and what to watch for.",
    img: I("service-root-canal"),
    imgAlt: "Root canal recovery",
    date: "2025",
    readTime: "3 min read",
    overview: [
      "Your mouth will be numb for a few hours, so avoid chewing until the feeling returns to protect your cheek and tongue. Mild tenderness for a few days is normal, and over-the-counter pain relievers usually manage it.",
      "Avoid biting hard foods on the treated tooth until your dentist places the permanent crown or filling. That final restoration is important because it protects the tooth from re-infection.",
      "Call us if you have severe pain that is not improving, swelling, a reaction to medication, or if the temporary filling comes out.",
    ],
    related: [
      "/services/endodontics/root-canal-therapy",
      "/services/general-dentistry/emergency-dentist",
      "/blog/endodontist-vs-dentist-who-should-do-your-root-canal",
    ],
  },
  {
    path: "/blog/is-a-toothache-an-emergency",
    kind: "blog",
    crumb: "Blog",
    crumbHref: "/blog",
    title: "Is a Toothache a Dental Emergency?",
    metaTitle: "Is a Toothache a Dental Emergency? | Simple Smile Endodontics",
    description: "How to tell when tooth pain can wait for an appointment and when to call right away.",
    lead: "Not every toothache is an emergency, but some should never wait.",
    img: I("service-emergency"),
    imgAlt: "Toothache emergency",
    date: "2025",
    readTime: "2 min read",
    overview: [
      "Call the same day for severe or throbbing pain, pain that wakes you at night, swelling in the gums or face, or an injured tooth. These are signs the tooth or the tissue around it may be infected.",
      "Brief sensitivity to cold that fades quickly is less urgent, but it is still worth an exam, since small problems are easier to treat than big ones.",
      "If swelling spreads to your face or neck, or you have difficulty breathing or swallowing, go to an emergency room.",
    ],
    related: [
      "/services/general-dentistry/emergency-dentist",
      "/services/endodontics/root-canal-therapy",
      "/contact-us",
    ],
  },
];

export const byPath = new Map(pages.map((p) => [p.path, p]));
export const getPage = (path: string) => byPath.get(path);
export const blogPosts = pages.filter((p) => p.kind === "blog");
