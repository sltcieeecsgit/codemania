import AnimationContainer from './global/animation-container';
import Wrapper from "./global/wrapper";
import SectionBadge from './ui/section-badge';

const TIMELINE = () => {
    const timelineData = [
        {
            title: "Registrations & Promotions",
            date: "January 30",
            phase: "Phase 01"
        },
        {
            title: "Training Workshops",
            date: "February 11",
            phase: "Phase 02"
        },
        {
            title: "Virtual Datathon (Qualifier)",
            date: "February 21",
            phase: "Phase 03"
        },
        {
            title: "Physical Grand Finale",
            date: "Feb 28 – Mar 1",
            phase: "Phase 04"
        },
        {
            title: "Award Ceremony",
            date: "March 1",
            phase: "Phase 05"
        }
    ];

    return (
        <Wrapper className="py-20 lg:py-32">
            {/* Header */}
            <div className="flex flex-col items-center text-center gap-4 mb-24">
                <AnimationContainer animation="fadeUp" delay={0.2}>
                    <SectionBadge title="Event Timeline" />
                </AnimationContainer>

                <AnimationContainer animation="fadeUp" delay={0.3}>
                    <h2 className="text-3xl md:text-5xl font-medium mt-4 text-transparent bg-clip-text bg-gradient-to-b from-foreground to-neutral-400">
                        From Learning to the Final Datathon.
                    </h2>
                </AnimationContainer>
            </div>

            {/* Timeline pipeline */}
            <div className="relative flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-0">

                {/* Horizontal connecting line for large screens */}
                <div className="hidden lg:block absolute top-1/2 left-4 right-4 h-1 bg-gradient-to-r from-primary to-orange-400 -z-10 rounded-full"></div>

                {timelineData.map((item, index) => (
                    <AnimationContainer key={index} animation="fadeUp" delay={0.5 + index * 0.2}>
                        <div className="flex flex-col items-center text-center relative lg:flex-1">
                            {/* Dot / marker */}
                            <div className="w-8 h-8 rounded-full bg-gradient-to-b from-primary to-orange-400 border-4 border-neutral-900 mb-4 shadow-lg"></div>

                            {/* Card / info box */}
                            <div className="bg-[#191919] border border-white/5 backdrop-blur-3xl rounded-3xl p-6 md:p-8 min-h-[160px] flex flex-col justify-center items-center text-center shadow-lg max-w-xs hover:border-orange-500/30 transition-colors duration-300">
                                <span className="text-orange-500 text-xs font-bold uppercase mb-2">{item.phase}</span>
                                <h3 className="text-lg md:text-xl font-medium text-white">{item.title}</h3>
                                <p className="text-sm md:text-base text-muted-foreground mt-2">{item.date}</p>
                            </div>

                            {/* Vertical line between dots for mobile */}
                            {index < timelineData.length - 1 && (
                                <div className="lg:hidden w-1 h-16 bg-gradient-to-b from-primary to-orange-400 mt-4 rounded-full shadow-md"></div>
                            )}
                        </div>
                    </AnimationContainer>
                ))}
            </div>
        </Wrapper>
    );
};

export default TIMELINE;
