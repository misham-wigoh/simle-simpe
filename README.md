# Simple Smile Endodontics

> Official web application for **Simple Smile Endodontics**, a premier endodontic specialty practice led by Dr. Ernest Reeh, DDS, MSc, PhD in Stillwater, Minnesota.

[![Next.js](https://img.shields.io/badge/Next.js-16.3-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2-blue?style=flat-square&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)
[![GSAP](https://img.shields.io/badge/GSAP-3.15-88ce02?style=flat-square&logo=greensock)](https://greensock.com/)
[![Three.js](https://img.shields.io/badge/Three.js-r149-black?style=flat-square&logo=three.js)](https://threejs.org/)

---

## Practice Information

- **Clinic Name:** Simple Smile Endodontics
- **Doctor:** Dr. Ernest Reeh, DDS, MSc, PhD (*Top Dentist* recognized by *Mpls.St.Paul Magazine* and *topDentists* since 2007)
- **Specialty:** Root Canal Therapy, Endodontic Retreatment, Apicoectomy & Surgery, Traumatic Dental Injuries, Dental Implants, and 3D Cone Beam Imaging
- **Address:** 13941 60th St N, Stillwater, MN 55082
- **Phone:** [(651) 439-8085](tel:6514398085)
- **Hours:** Monday – Thursday: 7:30 AM – 4:30 PM
- **Location Link:** [Google Maps Directions](https://www.google.com/maps)
- **Service Area:** Stillwater, Oak Park Heights, Bayport, Lake Elmo, Grant, Mahtomedi, Marine on St. Croix, Afton, Hugo, Woodbury, Oakdale, and Cottage Grove, MN, plus Hudson, New Richmond, and Somerset, WI.

---

## Tech Stack & Architecture

| Layer | Technology | Details |
| :--- | :--- | :--- |
| **Framework** | **Next.js 16** | App Router, Server & Client Components, SSG across 33 routes |
| **Language** | **TypeScript 5 (Strict)** | Zero-error strict type checking (`tsc --noEmit`) |
| **UI & Styling** | **Tailwind CSS v4** | Custom color tokens, CSS variables, `@font-face` webfonts |
| **Typography** | **Web Fonts** | Trocchi (Editorial Serif), Lato (Body), IBM Plex Mono (Data & Numbers) |
| **3D Graphics** | **Three.js (r149)** | WebGL interactive 3D rotating cylinder office tour (`HeroCarousel.tsx`) |
| **Animation** | **GSAP 3 & ScrollTrigger** | Smooth scroll-scrubbed layers, parallax, and entrance reveals |
| **Icons** | **Lucide React & SVGs** | Ultra-clean iconography + custom vector brand badges |
| **Primitives** | **shadcn / Base UI** | Accessible, robust interactive component foundations |

---

## Key Features & Visual Systems

### 1. Asymmetric Left & Right Hero Section
- **Dynamic Background:** High-definition dental operatory video with dark navy gradient overlay and ambient floating orbs (`orb-a`, `orb-b`).
- **Left Column:** High-impact serif headline, community coverage overview, dual island CTA buttons with button-in-button icon wrappers, and live `5.0 ★ Google Reviews` badge.
- **Right Column:** Double-bezel glassmorphism clinic showcase card featuring Dr. Ernest Reeh's profile, live `🟢 Accepting Patients` status, modern operatory preview, and specialty highlights (3D CBCT, Same-Day Emergency, Direct Referrals).

### 2. Three.js 3D Interactive Carousel
- Custom WebGL cylinder rendering high-resolution clinic photography and operatory views with auto-rotation, depth sorting, and automatic off-screen performance throttling.

### 3. Scroll-Based Layer-by-Layer Feature Reveal (`WhyChooseUs`)
- Architectural sticky stacking animation displaying:
  1. `01 Advanced Technology`
  2. `02 Personalized Care`
  3. `03 Trusted Excellence`
- Solid GPU-accelerated layer transitions with custom arched image masks (`rounded-l-full`), ascending z-indices, and elevation drop shadows.

### 4. Interactive FAQ & Consultation Hub
- Split layout featuring an interactive accordion on the left and a sticky gradient-border consultation card on the right, providing direct access to office hours and phone booking.

### 5. Comprehensive Clinical Sub-Pages (24 Routes)
- Dynamic catch-all routing (`src/app/[...slug]/page.tsx`) rendering 24 in-depth treatment, technology, and patient care guides with procedural step breakdowns, diagnostic signs, and related clinical pathways.

### 6. Social Proof & Patient Trust
- Continuous infinite review marquee highlighting authentic 5-star patient testimonials.
- Trust badges honoring Dr. Reeh's 30+ years of practice and annual *Top Dentist* recognition since 2007.

---

## Project Structure

```
Simple Smile/
├── src/
│   ├── app/                              # Next.js App Router
│   │   ├── layout.tsx                    # Root layout, HTML skeleton, metadata & fonts
│   │   ├── page.tsx                      # Main homepage composing all 12 sections
│   │   ├── globals.css                   # Tailwind v4 theme, fonts, animations
│   │   ├── favicon.ico                   # Browser favicon
│   │   ├── [...slug]/                    # Dynamic catch-all SSG route (24 sub-pages)
│   │   │   └── page.tsx                  # Pre-renders services, procedures, & guides
│   │   ├── about/page.tsx                # About Dr. Reeh & clinic philosophy
│   │   ├── blog/page.tsx                 # Educational patient guides & articles
│   │   ├── contact-us/page.tsx           # Appointment form, map, and office hours
│   │   ├── patient-info/page.tsx         # Financing, CareCredit, Cherry & reviews
│   │   └── services/page.tsx             # Specialty procedures overview
│   │
│   ├── components/                       # Modular Component Hierarchy
│   │   ├── sites/simplesmile/            # Site section components
│   │   │   ├── Navbar.tsx                # Sticky navigation with desktop mega-menu & mobile drawer
│   │   │   ├── Hero.tsx                  # Left & Right split hero with video backdrop
│   │   │   ├── ReferralBanner.tsx        # "No Referral Needed" notification banner
│   │   │   ├── EmergencyBanner.tsx       # Same-day urgent dental care banner
│   │   │   ├── WhatIsEndodontist.tsx     # Endodontic specialty education & diagnosis
│   │   │   ├── MeetDoctor.tsx            # Dr. Reeh biography, photo & clinic tour modal
│   │   │   ├── StandardsTestimonials.tsx # 2-tab patient/dentist video stories
│   │   │   ├── WhyChooseUs.tsx           # 3-tier sticky layer reveal animation
│   │   │   ├── FeaturedServices.tsx      # 6-card bento grid with imagery
│   │   │   ├── FinancingOptions.tsx      # CareCredit, Cherry, & insurance options
│   │   │   ├── PatientReviews.tsx        # Infinite 5-star review marquee
│   │   │   ├── ClinicAtmosphere.tsx      # Multi-photo office gallery
│   │   │   ├── FaqSection.tsx            # Sticky right consultation card + FAQ list
│   │   │   ├── ContactSection.tsx        # Appointment request form & office info
│   │   │   ├── ContactHero.tsx           # Dedicated contact page hero
│   │   │   ├── ContactHours.tsx          # Office hours breakdown
│   │   │   ├── ContactLocation.tsx       # Location map & driving directions
│   │   │   ├── ContactFormSection.tsx    # Interactive contact submission form
│   │   │   ├── Footer.tsx                # 7-column footer with Google Maps & social links
│   │   │   └── VideoModal.tsx            # Reusable accessible YouTube video dialog
│   │   ├── sub/
│   │   │   └── SubPage.tsx               # Reusable template for all 24 sub-pages
│   │   ├── animations/
│   │   │   ├── HeroCarousel.tsx          # Three.js 3D rotating cylinder
│   │   │   └── SiteAnimations.tsx        # GSAP scroll/parallax controller
│   │   └── ui/
│   │       └── button.tsx                # shadcn UI button primitive
│   │
│   └── lib/                              # Data & Utilities
│       ├── utils.ts                      # clsx / twMerge helper (`cn`)
│       └── site-content.ts               # Structured database for 24 service pages
│
├── public/                               # Static Assets
│   ├── images/                           # Brand assets (logo.svg, logo-white.svg, award-badge.svg)
│   │   └── stock/                        # High-resolution clinic & doctor photography
│   ├── img/                              # WebP assets, background MP4 video, WOFF2 webfonts
│   └── sites/simplesmile -> ../img       # Symlink ensuring legacy asset path compatibility
│
├── components.json                       # shadcn UI configuration
├── next.config.ts                        # Next.js build configuration
├── package.json                          # Dependencies & NPM scripts
└── tsconfig.json                         # TypeScript configuration (`@/*` -> `./src/*`)
```

---

## Route Sitemap (33 Prerendered Pages)

- **Main Pages:**
  - `/` — Homepage
  - `/about` — About Simple Smile Endodontics
  - `/services` — Specialty Endodontic Services Overview
  - `/patient-info` — Patient Financing, Insurance & Care
  - `/contact-us` — Office Hours, Directions & Appointment Request
  - `/blog` — Dental Education & Patient Guidance
- **Endodontic Procedures (`/services/endodontics/...`):**
  - `/services/endodontics` — Endodontic Care Category
  - `/services/endodontics/root-canal-therapy` — Gentle Root Canal Therapy
  - `/services/endodontics/endodontic-retreatment` — Endodontic Retreatment
  - `/services/endodontics/cracked-teeth` — Cracked Tooth Diagnosis & Treatment
  - `/services/endodontics/traumatic-dental-injuries` — Dental Trauma & Urgent Care
  - `/services/endodontics/internal-bleaching` — Internal Bleaching
  - `/services/endodontics/vital-pulp-therapy` — Vital Pulp Therapy
  - `/services/endodontics/regenerative-endodontics` — Regenerative Procedures
- **Oral Surgery & Implants (`/services/oral-surgery/...` & `/services/general-dentistry/...`):**
  - `/services/oral-surgery` — Endodontic Surgery Overview
  - `/services/oral-surgery/apicoectomy` — Apicoectomy (Root-End Surgery)
  - `/services/oral-surgery/root-amputation` — Root Amputation & Hemisection
  - `/services/oral-surgery/intentional-replantation` — Intentional Replantation
  - `/services/general-dentistry/dental-implants` — Dental Implant Placement & Care
- **Advanced Technology & Patient Resources:**
  - `/services/technology` — 3D CBCT Imaging, Digital Radiography & Microscopes
  - `/about/meet-the-doctor` — Dr. Ernest Reeh Biography & Philosophy
  - `/about/testimonials` — Video & Written Patient Testimonials
  - `/about/office-tour` — Stillwater Clinic Atmosphere & Comfort
  - `/patient-info/insurance-financing` — CareCredit, Cherry & Insurance Guide
  - `/patient-info/faqs` — Frequently Asked Questions

---

## Getting Started

### Prerequisites
- **Node.js:** `>= 20.x` (Recommended: Node 22 or 24 LTS)
- **Package Manager:** `npm` (or `pnpm` / `yarn`)

### Installation
Clone the repository and install dependencies:
```bash
git clone <repository-url>
cd "Simple Smile"
npm install
```

### Development Server
Run the local development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the site.

### Production Build
Create an optimized production build:
```bash
npm run build
```

To run the production server locally after building:
```bash
npm run start
```

### Quality & Type Checking
To run static analysis and TypeScript validation:
```bash
npm run typecheck   # Validates all TypeScript types with zero emit
npm run lint        # Runs ESLint analysis
npm run check       # Runs lint, typecheck, and full production build sequentially
```

---

## License

This project is licensed under the [MIT License](LICENSE).
