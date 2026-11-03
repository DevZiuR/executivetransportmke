import ScrollVelocity from './ScrollVelocity';
import RevealOnScroll from './RevealOnScroll';

const EmergencyCall = () => {
    return (
        <RevealOnScroll className="overflow-hidden bg-[#07070a]">
            <section
                className="relative bg-[#07070a] border-t border-b border-[rgba(201,169,110,0.5)] py-[32px] overflow-hidden"
                style={{
                    backgroundColor: '#07070a',
                    borderTop: '1px solid rgba(201, 169, 110, 0.5)',
                    borderBottom: '1px solid rgba(201, 169, 110, 0.5)',
                    paddingTop: '32px',
                    paddingBottom: '32px',
                }}
            >
                <ScrollVelocity
                    texts={[
                        'AIRPORT TRANSFERS · DATE NIGHTS · BIRTHDAYS · PHOTOSHOOTS · MILWAUKEE · MADISON · CHICAGO'
                    ]}
                    velocity={17.5}
                />
            </section>
        </RevealOnScroll>
    );
};

export default EmergencyCall;
