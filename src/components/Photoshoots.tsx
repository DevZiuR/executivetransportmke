import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { BOOKING_URL } from "@/components/Header";
import { RevealOnScroll, StaggerContainer, StaggerItem } from "./RevealOnScroll";

const photoshootImages = [
  "https://etmbooking.com/cdn/shop/files/IMG_5613.jpg?v=1790449834&width=1750",
  "https://etmbooking.com/cdn/shop/files/IMG_5259.jpg?v=1790449831&width=1750",
  "https://etmbooking.com/cdn/shop/files/IMG_0392.jpg?v=1790449835&width=1750",
  "https://etmbooking.com/cdn/shop/files/IMG_5631.jpg?v=1790449834&width=1750",
];

const Photoshoots = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center" },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section id="photoshoots" className="py-20 md:py-32 bg-black text-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <RevealOnScroll isHeading>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end mb-12 sm:mb-16">
            <div className="lg:col-span-7 space-y-4">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal text-white leading-[1.05] tracking-tight">
                Every Detail, Handled.
              </h2>
            </div>

            <div className="lg:col-span-5 space-y-6">
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-sans md:hidden">
                Book a luxury black SUV by the hour for your next shoot. Choose your vehicle, bring your own photographer, and send us the address, date and time.
              </p>
              <div>
                <a
                  href={BOOKING_URL}
                  className="cta-btn btn-gold-champagne inline-flex items-center justify-center px-10 py-4 uppercase rounded-sm font-bold"
                >
                  Book Your Night
                </a>
              </div>
            </div>
          </div>
        </RevealOnScroll>

        {/* Mobile Auto Slider (screens < 640px) */}
        <div className="block sm:hidden">
          <div className="overflow-hidden rounded-2xl cursor-grab active:cursor-grabbing" ref={emblaRef}>
            <div className="flex -ml-4">
              {photoshootImages.map((imgSrc, idx) => (
                <div key={idx} className="flex-[0_0_85%] pl-4">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl bg-neutral-950">
                    <img
                      src={imgSrc}
                      alt={`Executive Transport MKE Photoshoot ${idx + 1}`}
                      loading="lazy"
                      className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none rounded-2xl" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center gap-2 mt-5">
            {photoshootImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => emblaApi?.scrollTo(idx)}
                aria-label={`Go to photoshoot photo ${idx + 1}`}
                className={`h-1.5 transition-all duration-300 rounded-full ${
                  selectedIndex === idx
                    ? "w-6 bg-[#C9A96E]"
                    : "w-1.5 bg-white/30"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Desktop Grid with Sequential Stagger (screens >= 640px) */}
        <div className="hidden sm:block">
          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {photoshootImages.map((imgSrc, idx) => (
              <StaggerItem key={idx}>
                <div className="group relative aspect-[3/4] overflow-hidden rounded-2xl shadow-2xl bg-neutral-950 transition-all duration-500 hover:-translate-y-2 hover:shadow-white/10">
                  <img
                    src={imgSrc}
                    alt="Executive Transport MKE Photoshoot"
                    loading="lazy"
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none rounded-2xl" />
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

      </div>
    </section>
  );
};

export default Photoshoots;
