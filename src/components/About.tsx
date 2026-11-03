import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import RevealOnScroll from "./RevealOnScroll";

gsap.registerPlugin(ScrollTrigger);

const ABOUT_TEXT =
  "We built Executive Transport MKE around the arrival. Premium chauffeured black SUV service for airport transfers, date nights and special events across Milwaukee.";

const WORDS = ABOUT_TEXT.split(" ");

const About = () => {
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setReducedMotion(e.matches);
    };

    mediaQuery.addEventListener?.("change", handleChange);

    return () => {
      mediaQuery.removeEventListener?.("change", handleChange);
    };
  }, []);

  useEffect(() => {
    if (reducedMotion || !paragraphRef.current) return;

    const ctx = gsap.context(() => {
      const words = paragraphRef.current?.querySelectorAll<HTMLElement>(".about-word");
      if (!words || words.length === 0) return;

      gsap.fromTo(
        words,
        { opacity: 0.18 },
        {
          opacity: 1,
          stagger: 0.08,
          ease: "none",
          scrollTrigger: {
            trigger: paragraphRef.current,
            start: "top 85%",
            end: "bottom 55%",
            scrub: 0.5,
            invalidateOnRefresh: true,
          },
        }
      );
    }, paragraphRef);

    ScrollTrigger.refresh();
    const refreshTimer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 350);

    const handleResize = () => {
      ScrollTrigger.refresh();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(refreshTimer);
      window.removeEventListener("resize", handleResize);
      ctx.revert();
    };
  }, [reducedMotion]);

  return (
    <section
      id="about"
      className="relative bg-black text-white py-16 md:py-[120px] px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-white/10"
    >
      <div className="w-full max-w-[1400px] mx-auto flex flex-col items-center text-center">
        {/* Pill Badge */}
        <RevealOnScroll className="flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 shadow-sm mb-6 sm:mb-8">
            <span className="text-[#C9A96E] text-xs font-bold leading-none select-none" aria-hidden="true">✱</span>
            <span className="text-[11px] sm:text-xs font-mono font-bold uppercase tracking-[0.2em] text-white/80">
              ABOUT US
            </span>
          </div>
        </RevealOnScroll>

        {/* Large Editorial Statement with Scroll-Driven Word Reveal */}
        <p
          ref={paragraphRef}
          className="about-statement text-center max-w-[1400px] mx-auto text-white break-words"
        >
          {WORDS.map((word, index) => (
            <React.Fragment key={index}>
              <span
                className="about-word inline-block"
                style={{ opacity: reducedMotion ? 1 : 0.18 }}
              >
                {word}
              </span>
              {index < WORDS.length - 1 ? " " : ""}
            </React.Fragment>
          ))}
        </p>
      </div>
    </section>
  );
};

export default About;
