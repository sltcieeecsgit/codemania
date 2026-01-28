"use client";

import AnimationContainer from "./global/animation-container";
import Wrapper from "./global/wrapper";
import SectionBadge from "./ui/section-badge";

const Stats = () => {
    const stats = [
        {
            label: "Universities",
            value: "25+",
        },
        {
            label: "Teams",
            value: "200+",
        },
        {
            label: "Participants",
            value: "600+",
        },
    ];

    return (
        <Wrapper className="py-20">
            <div className="flex flex-col items-center justify-center text-center">
                <AnimationContainer animation="fadeUp" delay={0.2}>
                    <SectionBadge title="Event Scale" />
                </AnimationContainer>

                <AnimationContainer animation="fadeUp" delay={0.3}>
                    <h2 className="text-3xl md:text-5xl font-medium mt-4 text-transparent bg-clip-text bg-gradient-to-b from-foreground to-neutral-400">
                        Island-wide Exposure. A Platform for Top Talent.
                    </h2>
                </AnimationContainer>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 w-full max-w-4xl">
                    {stats.map((stat, index) => (
                        <AnimationContainer key={index} animation="fadeUp" delay={0.4 + index * 0.1}>
                            <div className="flex flex-col items-center justify-center p-8 rounded-3xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm">
                                <span className="text-5xl md:text-6xl font-black text-orange-500 mb-2">{stat.value}</span>
                                <span className="text-gray-400 text-lg uppercase tracking-widest">{stat.label}</span>
                            </div>
                        </AnimationContainer>
                    ))}
                </div>
            </div>
        </Wrapper>
    );
};

export default Stats;
