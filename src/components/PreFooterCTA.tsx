import RevealOnScroll from "./RevealOnScroll";
import { ArrowUpRight } from "lucide-react";

const PreFooterCTA = () => {
    return (
        <section className="relative h-[480px] sm:h-[560px] md:h-[600px] w-full py-12 sm:py-16 overflow-hidden bg-black">
            {/* Background Image Container with fixed height and rounded corners */}
            <div className="container mx-auto px-4 h-full rounded-3xl ">
                <div className="relative h-full w-full rounded-3xl overflow-hidden">
                    {/* Image */}
                    <img
                        src="/images/herov2.png"
                        alt="Executive Transport MKE"
                        loading="lazy"
                        className="absolute inset-0 w-full h-full object-cover object-[54%_35%]"
                    />

                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-black/40" />

                    {/* Content Centered */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                        <RevealOnScroll isHeading className="flex flex-col items-center">
                            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-[76px] text-white font-serif leading-tight mb-8 drop-shadow-lg">
                                YOUR RIDE.<br />
                                <span className="italic">YOUR NIGHT.</span>
                            </h2>

                            <a
                                href="#book"
                                className="cta-btn btn-gold-champagne inline-flex items-center justify-center gap-2 px-8 py-4 min-h-[48px] rounded-full uppercase font-bold"
                            >
                                Book Your Ride
                                <ArrowUpRight className="w-4 h-4" />
                            </a>
                        </RevealOnScroll>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PreFooterCTA;
