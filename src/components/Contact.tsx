import { useState } from "react";
import { Button } from "./ui/button";
import { CheckCircle2 } from "lucide-react";
import RevealOnScroll from "./RevealOnScroll";

const SERVICES = [
  "Chauffeur Service",
  "Airport Transfer",
  "Photoshoot / Content",
  "Special Event / Birthday",
  "Hourly / Private Ride",
  "Other Destinations",
];

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Chauffeur Service",
    pickupDate: "",
    pickupTime: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormState(prev => ({ ...prev, [field]: value }));
  };

  const inputClass = "w-full bg-[#eae8e3] border border-[#d2cfc7] h-12 min-h-[48px] px-4 py-3 text-[16px] text-black focus:outline-none focus:border-[#C9A96E] placeholder:text-zinc-500 transition-colors rounded-sm font-sans";
  const labelClass = "block text-xs font-mono uppercase tracking-widest text-zinc-300 mb-2";

  if (isSuccess) {
    return (
      <section id="book" className="py-24 bg-[#07070a] flex items-center justify-center min-h-[600px] overflow-hidden">
        <span id="contact" className="sr-only" />
        <div className="bg-black p-12 shadow-2xl text-center max-w-lg mx-4 border border-white/15 rounded-xl text-white">
          <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 text-green-400" />
          </div>
          <h3 className="text-3xl font-medium font-sans text-white mb-4 tracking-tight">Request Received</h3>
          <p className="text-zinc-300 font-sans mb-8 text-lg">
            Thank you! A member of our team will reach out shortly to confirm your reservation parameters.
          </p>
          <Button
            onClick={() => setIsSuccess(false)}
            className="btn-gold-champagne text-[#07070a] px-8 py-6 rounded-none font-bold tracking-widest uppercase text-xs"
          >
            Submit Another Request
          </Button>
        </div>
      </section>
    );
  }

  return (
    <section id="book" className="py-14 lg:py-20 bg-[#07070a] overflow-hidden relative">
      <span id="contact" className="sr-only" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto bg-black border border-white/15 p-6 sm:p-10 lg:p-14 shadow-2xl relative rounded-xl">

          {/* Header (Follows the section divider) */}
          <RevealOnScroll isHeading>
            <div className="mb-8">
              <p className="text-sm font-mono uppercase tracking-widest text-zinc-400 mb-4 font-medium">
                // GET IN TOUCH
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-normal leading-[1.1] text-white tracking-tight font-sans">
                For any inquiries or to secure the luxury vehicle of your choice, contact our team by filling out the form below.
              </h2>
            </div>
          </RevealOnScroll>

          <div className="w-full h-px bg-white/10 mb-6"></div>

          {/* Minimalist Form */}
          <RevealOnScroll delay={200}>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">

              {/* Name */}
              <div>
                <label className={labelClass}>Name *</label>
                <input
                  required
                  placeholder="John Smith"
                  className={inputClass}
                  value={formState.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                />
              </div>

              {/* Email */}
              <div>
                <label className={labelClass}>Email *</label>
                <input
                  required
                  type="email"
                  placeholder="john@gmail.com"
                  className={inputClass}
                  value={formState.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                />
              </div>

              {/* Phone */}
              <div>
                <label className={labelClass}>Phone *</label>
                <input
                  required
                  type="tel"
                  placeholder="(555) 000-0000"
                  className={inputClass}
                  value={formState.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                />
              </div>

              {/* Service */}
              <div>
                <label className={labelClass}>Service *</label>
                <select
                  value={formState.service}
                  onChange={(e) => handleInputChange('service', e.target.value)}
                  className={`${inputClass} cursor-pointer [&>option]:bg-[#eae8e3] [&>option]:text-black`}
                >
                  {SERVICES.map((srv) => (
                    <option key={srv} value={srv} className="bg-[#eae8e3] text-black">
                      {srv}
                    </option>
                  ))}
                </select>
              </div>

              {/* Pickup Date */}
              <div>
                <label className={labelClass}>Pickup Date *</label>
                <input
                  required
                  type="date"
                  min={new Date().toISOString().split("T")[0]}
                  className={`${inputClass} [color-scheme:light] cursor-pointer`}
                  value={formState.pickupDate}
                  onChange={(e) => handleInputChange('pickupDate', e.target.value)}
                />
              </div>

              {/* Pickup Time */}
              <div>
                <label className={labelClass}>Pickup Time *</label>
                <input
                  required
                  type="time"
                  className={`${inputClass} [color-scheme:light] cursor-pointer`}
                  value={formState.pickupTime}
                  onChange={(e) => handleInputChange('pickupTime', e.target.value)}
                />
              </div>

              {/* Message & Preferred Vehicle - Full width */}
              <div className="md:col-span-2 pt-2">
                <label className={labelClass}>Message &amp; Preferred Vehicle *</label>
                <textarea
                  required
                  placeholder="Hello, I'm interested in..."
                  className="w-full bg-[#eae8e3] text-black border border-[#d2cfc7] min-h-[120px] p-4 text-[16px] focus:outline-none focus:border-[#C9A96E] placeholder:text-zinc-500 transition-colors rounded-sm font-sans mt-1"
                  value={formState.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                />
              </div>

              {/* Submit Button - Centered & compact */}
              <div className="md:col-span-2 pt-4 flex justify-center">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-gold-champagne h-11 px-8 min-h-[44px] text-[#080602] text-xs font-mono font-bold tracking-[0.18em] uppercase rounded-sm flex items-center justify-center font-bold"
                >
                  {isSubmitting ? "Sending..." : "Submit Inquiry"}
                </Button>
              </div>

            </form>
          </RevealOnScroll>

        </div>
      </div>
    </section>
  );
};

export default Contact;
