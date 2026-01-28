"use client";

import AnimationContainer from "./global/animation-container";
import Wrapper from "./global/wrapper";
import { Trophy, ShoppingBag, ArrowRight } from "lucide-react";
import Link from "next/link";

const Portals = () => {
    return (
        <Wrapper className="py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {/* Leaderboard */}
                <AnimationContainer animation="fadeRight" delay={0.2}>
                    <div className="group p-10 rounded-[2.5rem] bg-gradient-to-br from-blue-600/10 to-blue-400/5 border border-blue-500/20 backdrop-blur-sm hover:border-blue-500/40 transition-all duration-300 relative overflow-hidden h-full">
                        <div className="absolute -right-8 -bottom-8 text-blue-500/10 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                            <Trophy size={200} />
                        </div>
                        <div className="relative z-10">
                            <h3 className="text-3xl font-bold text-white mb-4">See Who Rose to the Top</h3>
                            <p className="text-gray-400 text-lg mb-8">
                                Explore the final rankings and top-performing teams of Codemania v6.0.
                            </p>
                            <Link href="/leaderboard" className="inline-flex items-center text-blue-400 font-bold hover:text-blue-300 transition-colors gap-2 group/link text-lg">
                                [ View Leaderboard ]
                                <ArrowRight className="size-5 group-hover/link:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </AnimationContainer>

                {/* Merchandise */}
                <AnimationContainer animation="fadeLeft" delay={0.3}>
                    <div className="group p-10 rounded-[2.5rem] bg-gradient-to-br from-purple-600/10 to-purple-400/5 border border-purple-500/20 backdrop-blur-sm hover:border-purple-500/40 transition-all duration-300 relative overflow-hidden h-full">
                        <div className="absolute -right-8 -bottom-8 text-purple-500/10 group-hover:scale-110 group-hover:-rotate-12 transition-all duration-500">
                            <ShoppingBag size={200} />
                        </div>
                        <div className="relative z-10">
                            <h3 className="text-3xl font-bold text-white mb-4">Official Codemania Merchandise</h3>
                            <p className="text-gray-400 text-lg mb-8">
                                Own exclusive Codemania v6.0 merchandise designed for competitors and tech enthusiasts.
                            </p>
                            <Link href="/merchandise" className="inline-flex items-center text-purple-400 font-bold hover:text-purple-300 transition-colors gap-2 group/link text-lg">
                                [ Order Now ]
                                <ArrowRight className="size-5 group-hover/link:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </AnimationContainer>
            </div>
        </Wrapper>
    );
};

export default Portals;
