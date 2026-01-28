"use client";

import AnimationContainer from "./global/animation-container";
import Wrapper from "./global/wrapper";
import SectionBadge from "./ui/section-badge";
import { Trophy } from "lucide-react";

const Prizes = () => {
    return (
        <Wrapper className="py-20">
            <div className="flex flex-col items-center justify-center text-center max-w-6xl mx-auto">
                <AnimationContainer animation="fadeUp" delay={0.2}>
                    <SectionBadge title="Prize Pool & Awards" />
                </AnimationContainer>

                <AnimationContainer animation="fadeUp" delay={0.3}>
                    <h2 className="text-3xl md:text-5xl font-medium mt-4 text-transparent bg-clip-text bg-gradient-to-b from-foreground to-neutral-400">
                        Over LKR 60,000 in Prizes & Recognition
                    </h2>
                </AnimationContainer>

                <AnimationContainer animation="fadeUp" delay={0.4}>
                    <div className="mt-12 p-10 rounded-[2.5rem] bg-gradient-to-br from-orange-600/20 to-orange-400/5 border border-orange-500/20 backdrop-blur-md relative overflow-hidden group">
                        <div className="absolute -right-10 -top-10 text-orange-500/10 group-hover:scale-110 transition-transform duration-500">
                            <Trophy size={300} />
                        </div>

                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold text-white mb-6 underline decoration-orange-500 underline-offset-8">What’s at Stake</h3>
                            <p className="text-gray-300 text-lg leading-relaxed">
                                Top-performing teams of Codemania v6.0 will be recognized for their analytical accuracy, innovation, and data-driven decision making. Winners will receive cash prizes, certificates, and island-wide recognition for their performance.
                            </p>
                        </div>
                    </div>
                </AnimationContainer>
            </div>
        </Wrapper>
    );
};

export default Prizes;
