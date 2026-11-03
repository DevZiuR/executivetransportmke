import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { RevealOnScroll, StaggerContainer, StaggerItem } from "./RevealOnScroll";

const faqs = [
    {
        question: "How do I book a ride?",
        answer: "Booking is easy! Simply click on the envelope icon at the bottom of the screen and fill out our reservation form with your requested trip details. Once availability is confirmed our team will reach out to you via email or text. A deposit is required and once received, you'll receive a booking confirmation email with all of your reservation details."
    },
    {
        question: "Is a deposit required?",
        answer: "Yes. A $50 deposit is required to secure every reservation. Your reservation is not confirmed until your deposit has been received."
    },
    {
        question: "What forms of payment do you accept?",
        answer: "We accept Apple Pay and Cash App."
    },
    {
        question: "Do you accept same-day or last-minute bookings?",
        answer: "Yes! Same-day and last-minute reservations are accepted based on availability. Same-day surcharge fees will apply."
    },
    {
        question: "What areas do you serve?",
        answer: "Executive Transport MKE proudly serves Milwaukee and surrounding communities, including Brookfield, Wauwatosa, Franklin, Oak Creek, Greenfield, Mequon, Madison, Chicago, Detroit, Indiana, and other destinations by request."
    },
    {
        question: "What is your cancellation policy?",
        answer: "Reservations canceled at least 24 hours before pickup may have the deposit applied toward a future reservation within 90 days. Cancellations made less than 24 hours before pickup will result in the forfeiture of the deposit."
    },
];

const FAQ = () => {
    return (
        <section id="faq" className="py-24 lg:py-32 bg-black text-white overflow-hidden relative border-t border-white/10">
            {/* Subtle luxury glow */}
            <div className="absolute top-1/3 left-0 w-[450px] h-[300px] bg-[#C9A96E]/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

                    {/* Left Column: Heading */}
                    <div className="lg:col-span-4">
                        <RevealOnScroll isHeading className="space-y-6">
                            <span className="text-xs font-bold tracking-[0.2em] text-[#C9A96E] font-mono uppercase block">
                                FAQ
                            </span>

                            <h2 className="text-5xl md:text-6xl lg:text-6xl font-serif font-normal text-white leading-[1.1]">
                                Frequently<br />
                                Asked
                            </h2>

                            <p className="text-gray-400 text-sm md:text-base font-sans leading-relaxed pt-2">
                                Clear answers to common questions about reservations, deposits, payments, and service areas.
                            </p>
                        </RevealOnScroll>
                    </div>

                    {/* Right Column: Accordion with Luxury Sequential Stagger */}
                    <div className="lg:col-span-8">
                        <StaggerContainer staggerDelay={0.07} className="w-full">
                            <Accordion type="single" collapsible className="w-full">
                                {faqs.map((faq, index) => (
                                    <StaggerItem key={index} className="mb-3">
                                        <AccordionItem
                                            value={`item-${index}`}
                                            className="border border-white/10 bg-[#0c0c0e] hover:border-white/20 rounded-xl overflow-hidden transition-colors"
                                        >
                                            <AccordionTrigger className="bg-[#0c0c0e] hover:bg-white/[0.02] border-0 shadow-none px-6 py-5 rounded-xl text-sm md:text-base font-bold tracking-[0.05em] uppercase text-white text-left transition-colors [&[data-state=open]]:rounded-b-none [&[data-state=open]]:border-b [&[data-state=open]]:border-white/10 [&>svg]:text-[#C9A96E]">
                                                {faq.question}
                                            </AccordionTrigger>
                                            <AccordionContent className="bg-[#0c0c0e] border-0 shadow-none px-6 pb-6 pt-3 rounded-b-xl text-zinc-300 font-sans text-base leading-relaxed">
                                                {faq.answer}
                                            </AccordionContent>
                                        </AccordionItem>
                                    </StaggerItem>
                                ))}
                            </Accordion>
                        </StaggerContainer>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default FAQ;
