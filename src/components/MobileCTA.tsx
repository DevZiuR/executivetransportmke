import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

const BOOKING_URL = "#book";

const MobileCTA = () => {
    const navigate = useNavigate();

    const handleBookClick = () => {
        const el = document.getElementById("book");
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        } else {
            navigate("/#book");
        }
    };

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden flex h-16 bg-black shadow-[0_-1px_0_rgba(255,255,255,0.1)]">
            <Button
                onClick={handleBookClick}
                className="cta-btn btn-gold-champagne flex-1 uppercase h-full rounded-none border-r border-white/10 font-bold"
            >
                Book Now
            </Button>
            <Button
                onClick={() => navigate("/fleet")}
                className="cta-btn flex-1 bg-black hover:bg-gray-900 text-white uppercase h-full rounded-none"
            >
                View Fleet
            </Button>
        </div>
    );
};

export default MobileCTA;
