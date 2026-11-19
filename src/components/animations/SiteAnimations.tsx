"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Site-wide scroll animations for Simple Smile Endodontics
 * (GSAP + ScrollTrigger custom code and the Webflow IX2 "Layout 421" scroll scene).
 *
 *  [data-animate-text]   words slide up from a mask, staggered (top 60%, once)
 *  [data-animate-image]  scale .8 -> 1 + fade in (top 70%, once)
 *  [data-fade-words]     words scrub from 25% opacity as the section scrolls (scrub 2)
 *  [data-scatter]        content fades/scales out while 4 images fly outward + rotate
 */
export function SiteAnimations() {
  const pathname = usePathname();

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const splitEls: { el: HTMLElement; html: string }[] = [];
    const cleanups: (() => void)[] = [];

    const ctx = gsap.context(() => {
      // 1. Text stagger -----------------------------------------------------
      document.querySelectorAll<HTMLElement>("[data-animate-text]").forEach((el) => {
        if (el.dataset.split === "1" || el.children.length > 0) {
          el.classList.add("is-split");
          return;
        }
        const original = el.innerHTML;
        const words = (el.textContent ?? "").trim().split(/\s+/);
        el.setAttribute("aria-label", words.join(" "));
        el.innerHTML = words
          .map(
            (w) =>
              `<span class="word" aria-hidden="true" style="display:inline-block;overflow:hidden;vertical-align:top"><span class="inner" style="display:inline-block">${w}</span></span>`,
          )
          .join(" ");
        el.dataset.split = "1";
        el.classList.add("is-split");
        splitEls.push({ el, html: original });
        if (reduce) return;
        gsap.fromTo(
          el.querySelectorAll(".inner"),
          { y: "100%", opacity: 0 },
          {
            y: "0%",
            opacity: 1,
            duration: 1,
            ease: "power2.out",
            stagger: 0.02,
            scrollTrigger: { trigger: el, start: "top 60%", once: true },
          },
        );
      });

      // 2. Image pop-in -------------------------------------------------------
      document.querySelectorAll<HTMLElement>("[data-animate-image]").forEach((img) => {
        img.classList.add("is-ready");
        if (reduce) return;
        gsap.fromTo(
          img,
          { scale: 0.8, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 1.5,
            ease: "power2.out",
            scrollTrigger: { trigger: img, start: "top 70%", once: true },
          },
        );
      });

      // 2b. Blur-and-rise entrances (GradientDeck "enter-up") ------------------
      const revealFrom = { opacity: 0, y: 14, filter: "blur(6px)" };
      const revealTo = {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 0.8,
        ease: "power3.out",
        clearProps: "filter,transform",
      };
      document.querySelectorAll<HTMLElement>("[data-reveal-group]").forEach((group) => {
        const kids = Array.from(group.children) as HTMLElement[];
        kids.forEach((k) => k.setAttribute("data-reveal-item", ""));
        if (reduce) return kids.forEach((k) => k.classList.add("is-revealed"));
        gsap.fromTo(kids, revealFrom, {
          ...revealTo,
          stagger: 0.09,
          onStart: () => kids.forEach((k) => k.classList.add("is-revealed")),
          scrollTrigger: { trigger: group, start: "top 85%", once: true },
        });
      });
      document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => {
        if (reduce) return el.classList.add("is-revealed");
        gsap.fromTo(el, revealFrom, {
          ...revealTo,
          onStart: () => el.classList.add("is-revealed"),
          scrollTrigger: { trigger: el, start: "top 88%", once: true },
        });
      });

      if (reduce) return;

      // 2c. Header pill on scroll ---------------------------------------------
      const header = document.querySelector<HTMLElement>(".site-header");
      ScrollTrigger.create({
        start: 0,
        end: "max",
        onUpdate: (self) => {
          if (header) {
            if (self.scroll() > 24) header.setAttribute("data-scrolled", "");
            else header.removeAttribute("data-scrolled");
          }
        },
      });

      // 2d. Parallax on gradient orbs ------------------------------------------
      document.querySelectorAll<HTMLElement>("[data-parallax]").forEach((el) => {
        const amt = Number(el.dataset.parallax) || 40;
        gsap.to(el, {
          y: amt * 3,
          ease: "none",
          scrollTrigger: { trigger: el.parentElement ?? el, start: "top bottom", end: "bottom top", scrub: 1 },
        });
      });

      const mm = gsap.matchMedia();

      // 3. Scrubbed word reveal (hero mission statement) ----------------------
      document.querySelectorAll<HTMLElement>("[data-fade-words]").forEach((el) => {
        const trigger = (el.closest("[data-fade-trigger]") as HTMLElement) ?? el;
        const original = el.innerHTML;
        const words = (el.textContent ?? "").trim().split(/\s+/);
        mm.add({ isMobile: "(max-width: 767px)", isDesktop: "(min-width: 768px)" }, (c) => {
          const { isMobile } = c.conditions as { isMobile: boolean };
          el.innerHTML = words
            .map((w) => `<span class="fw" style="display:inline-block">${w}</span>`)
            .join(" ");
          gsap
            .timeline({
              scrollTrigger: {
                trigger,
                start: isMobile ? "top 35%" : "top center",
                end: isMobile ? "bottom 90%" : "bottom center",
                scrub: 2,
              },
            })
            .from(el.querySelectorAll(".fw"), { opacity: 0.25, stagger: 0.1 });
          return () => {
            el.innerHTML = original;
          };
        });
      });

      // 4. Layout 421 scatter scene (Webflow IX2 scroll-progress) -------------
      document.querySelectorAll<HTMLElement>("[data-scatter]").forEach((root) => {
        const content = root.querySelector<HTMLElement>("[data-scatter-content]");
        const q = (n: number) => root.querySelector<HTMLElement>(`[data-scatter-img="${n}"]`);
        const [i2, i3, i4, i5] = [q(2), q(3), q(4), q(5)];
        if (!content || !i2 || !i3 || !i4 || !i5) return;

        mm.add("(min-width: 768px)", () => {
          gsap.set(i5, { rotation: 8 });
          gsap.set(i3, { rotation: 4 });
          const tl = gsap.timeline({
            defaults: { ease: "none" },
            scrollTrigger: { trigger: root, start: "top 15%", end: "bottom 40%", scrub: 0.5 },
          });
          tl.to(content, { opacity: 0, scale: 0.95, duration: 0.3 }, 0)
            .to(i5, { xPercent: -140, yPercent: 60, rotation: 8, duration: 1 }, 0)
            .to(i4, { xPercent: 140, yPercent: -40, rotation: -12, duration: 1 }, 0)
            .to(i3, { xPercent: -50, yPercent: -90, rotation: 4, duration: 1 }, 0)
            .to(i2, { xPercent: 100, yPercent: 60, rotation: -4, duration: 1 }, 0);
        });
        mm.add("(max-width: 767px)", () => {
          gsap.set(i5, { rotation: 4 });
          gsap.set(i3, { rotation: -4 });
          const tl = gsap.timeline({
            defaults: { ease: "none" },
            scrollTrigger: { trigger: root, start: "top 15%", end: "bottom 40%", scrub: 0.5 },
          });
          tl.to(content, { opacity: 0, scale: 0.95, duration: 0.3 }, 0)
            .to(i5, { xPercent: -120, yPercent: 60, rotation: 8, duration: 1 }, 0)
            .to(i4, { xPercent: 120, yPercent: -40, rotation: -4, duration: 1 }, 0)
            .to(i3, { xPercent: -80, yPercent: -80, rotation: 4, duration: 1 }, 0)
            .to(i2, { xPercent: 90, yPercent: 80, rotation: 4, duration: 1 }, 0);
        });
      });
    });

    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    const t = window.setTimeout(refresh, 400);

    return () => {
      cleanups.forEach((fn) => fn());
      window.clearTimeout(t);
      window.removeEventListener("load", refresh);
      ctx.revert();
      splitEls.forEach(({ el, html }) => {
        el.innerHTML = html;
        delete el.dataset.split;
        el.classList.remove("is-split");
      });
    };
  }, [pathname]);

  return null;
}
