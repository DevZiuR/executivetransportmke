import {
  CircleDollarSign,
  Car,
  Cigarette,
  Clock,
  CalendarX2,
  UserX,
  MapPin,
} from "lucide-react";
import { BOOKING_URL } from "@/components/Header";
import { RevealOnScroll, StaggerContainer, StaggerItem } from "./RevealOnScroll";

interface PolicyItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  content: React.ReactNode;
}

const policies: PolicyItem[] = [
  {
    id: "wait-time",
    icon: <Clock className="w-6 h-6 text-[#C9A96E]" />,
    title: "Wait Time Policy",
    content: (
      <div className="space-y-1.5 text-gray-300 text-sm leading-relaxed">
        <p>
          <span className="text-white font-medium">First 15 minutes:</span> Complimentary
        </p>
        <p>
          <span className="text-white font-medium">After 15 minutes:</span> $2.00 per minute
        </p>
      </div>
    ),
  },
  {
    id: "deposit-acknowledgment",
    icon: <CircleDollarSign className="w-6 h-6 text-[#C9A96E]" />,
    title: "Deposit & Acknowledgment",
    content: (
      <p className="text-gray-300 text-sm leading-relaxed">
        Payment of the required deposit constitutes full agreement to all booking terms and policies outlined in your confirmation email for your scheduled transportation.
      </p>
    ),
  },
  {
    id: "ride-details",
    icon: <Car className="w-6 h-6 text-[#C9A96E]" />,
    title: "Ride Details",
    content: (
      <div className="space-y-2 text-gray-300 text-sm leading-relaxed">
        <p>
          <span className="text-white font-medium">Extra Passengers:</span> Subject to capacity and an additional passenger fee.
        </p>
        <p>
          <span className="text-white font-medium">Modifications:</span> Services cannot be shortened or changed once the trip begins.
        </p>
        <p>
          <span className="text-white font-medium">Round Trips:</span> No refunds for unused return legs once the ride starts.
        </p>
      </div>
    ),
  },
  {
    id: "cancellations",
    icon: <CalendarX2 className="w-6 h-6 text-[#C9A96E]" />,
    title: "Cancellations",
    content: (
      <div className="space-y-1.5 text-gray-300 text-sm leading-relaxed">
        <p>
          <span className="text-white font-medium">More than 24 hours:</span> Deposit transferable to a future booking.
        </p>
        <p>
          <span className="text-white font-medium">Less than 24 hours:</span> Deposit is non-refundable.
        </p>
      </div>
    ),
  },
  {
    id: "no-shows",
    icon: <UserX className="w-6 h-6 text-[#C9A96E]" />,
    title: "No Shows",
    content: (
      <p className="text-gray-300 text-sm leading-relaxed">
        Failure to arrive within the scheduled pickup window without communication results in immediate cancellation and forfeiture of payment, including round-trip reservations.
      </p>
    ),
  },
  {
    id: "additional-stops",
    icon: <MapPin className="w-6 h-6 text-[#C9A96E]" />,
    title: "Additional Stops",
    content: (
      <p className="text-gray-300 text-sm leading-relaxed">
        Additional stops must be requested in advance. Any in-ride route extensions or extra stops are subject to driver availability and additional charges.
      </p>
    ),
  },
  {
    id: "smoking",
    icon: <Cigarette className="w-6 h-6 text-[#C9A96E]" />,
    title: "Smoking Policy",
    content: (
      <p className="text-gray-300 text-sm leading-relaxed">
        Smoking is only permitted for guests who book the Smoker's Lounge Ride package. Excessive ash, burns, or spills will incur an additional cleaning or detailing fee.
      </p>
    ),
  },
];

const Policies = () => {
  return (
    <section id="policies" className="py-20 md:py-28 bg-black text-white overflow-hidden relative">

      {/* Background ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#C9A96E]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <RevealOnScroll isHeading>
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14 md:mb-16">
            <span className="text-xs font-bold tracking-[0.25em] text-[#C9A96E] uppercase block font-mono mb-3">
              GUIDELINES &amp; TERMS
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white uppercase tracking-wide leading-tight">
              Important Policies
            </h2>

            <div className="w-16 h-[2px] bg-[#C9A96E] mt-5" />
          </div>
        </RevealOnScroll>

        {/* Policies Grid with Centered Last Item */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto items-stretch">
          {policies.map((policy, index) => {
            const isLast = index === policies.length - 1;
            return (
              <StaggerItem
                key={policy.id}
                className={`h-full ${
                  isLast
                    ? "md:col-span-2 md:max-w-md md:mx-auto lg:col-span-1 lg:col-start-2 lg:max-w-none w-full"
                    : ""
                }`}
              >
                <div
                  className="group relative bg-[#0b0b0b] border border-white/10 rounded-2xl p-6 sm:p-7 transition-all duration-300 hover:border-white/30 hover:bg-[#111111] hover:shadow-2xl hover:-translate-y-1 flex flex-col h-full"
                >
                  <div className="flex items-center gap-3.5 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-black border border-white/10 flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:border-[#C9A96E]/40">
                      {policy.icon}
                    </div>
                    <h3 className="text-base sm:text-lg font-bold font-onest text-white tracking-tight leading-snug">
                      {policy.title}
                    </h3>
                  </div>

                  <div className="pt-1">
                    {policy.content}
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Note / Disclaimer */}
        <RevealOnScroll delay={250} className="mt-12 max-w-3xl mx-auto text-center pt-2">
          <p className="text-xs sm:text-sm text-gray-400 font-sans leading-relaxed">
            Please review all policies prior to booking. For special inquiries, custom routes, or corporate arrangements,
            feel free to reach out to our team at{" "}
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white underline hover:text-[#C9A96E] transition-colors"
            >
              our scheduling portal
            </a>.
          </p>
        </RevealOnScroll>

      </div>
    </section>
  );
};

export default Policies;
