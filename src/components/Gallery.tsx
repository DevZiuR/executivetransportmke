import { ArrowUpRight } from "lucide-react";
import { RevealOnScroll, StaggerContainer, StaggerItem } from "@/components/RevealOnScroll";

const BOOKING_URL = "#book";

const signatureExperiences = [
  {
    title: "Arrive in Style",
    image: "/images/services/prom-luxury.jpg",
    description: "Prom drop-off and pick-up in a black SUV.",
  },
  {
    title: "Private Rides",
    image: "/images/services/private-rides.jpg",
    description: "Airport, concerts and hourly rides.",
  },
  {
    title: "Birthday Package",
    image: "/images/services/birthday-package.jpg",
    description: "Champagne, roses, balloons and LED ambiance.",
  },
  {
    title: "Date Night",
    image: "/images/services/date-night.jpg",
    description: "A decorated setup for two.",
  },
];

const Gallery = () => {
  return (
    <section id="fleet" className="py-20 md:py-32 bg-[#07070a] text-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        <RevealOnScroll isHeading>
          <div className="max-w-3xl mb-12 sm:mb-16">
            <span className="text-xs font-bold tracking-[0.25em] text-[#C9A96E] uppercase block font-mono mb-4">
              SIGNATURE EXPERIENCES
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal text-white leading-[1.05] tracking-tight">
              Every Occasion. Elevated.
            </h2>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-sans mt-5 max-w-2xl">
              From prom night to date night, birthdays to airport transfers — choose the experience and we handle every detail.
            </p>
          </div>
        </RevealOnScroll>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8 items-stretch">
          {signatureExperiences.map((experience) => (
            <StaggerItem key={experience.title} className="h-full">
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#121216] shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-[#C9A96E]/50 hover:shadow-[#C9A96E]/10">
                <div className="relative aspect-[3/4] overflow-hidden bg-neutral-950">
                  <img
                    src={experience.image}
                    alt={experience.title}
                    loading="lazy"
                    className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#121216] to-transparent pointer-events-none" />
                </div>

                <div className="flex flex-1 flex-col p-4 sm:p-5 justify-between">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold leading-tight text-white tracking-tight">
                      {experience.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm leading-relaxed text-zinc-400 font-sans">
                      {experience.description}
                    </p>
                  </div>

                  <div className="mt-auto pt-4">
                    <a
                      href={BOOKING_URL}
                      className="cta-btn btn-gold-champagne flex w-full items-center justify-center gap-2 rounded-lg px-4 py-2.5 uppercase font-bold"
                    >
                      BOOK NOW
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </div>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>

      </div>
    </section>
  );
};

export default Gallery;
