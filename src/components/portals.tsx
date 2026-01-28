"use client";

import AnimationContainer from "./global/animation-container";
import Wrapper from "./global/wrapper";
import { Trophy, ShoppingBag, ArrowRight } from "lucide-react";
import Link from "next/link";

const Portals = () => {
    return (
        <Wrapper className="py-24 sm:py-32">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto px-4">

                {/* 01. Leaderboard Portal */}
                <AnimationContainer animation="fadeRight" delay={0.2}>
                    <div className="group relative p-8 sm:p-12 rounded-[3.5rem] bg-neutral-900/60 border border-white/5 backdrop-blur-2xl overflow-hidden h-[450px] flex flex-col justify-end transition-all duration-700 hover:border-orange-500/40 shadow-2xl">

                        {/* Background Design Element */}
                        <div className="absolute top-[-10%] right-[-10%] text-orange-500/5 rotate-12 transition-all duration-700 group-hover:scale-110 group-hover:text-orange-500/10">
                            <Trophy size={400} strokeWidth={1} />
                        </div>

                        {/* Animated Glow Grid Path */}
                        <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center opacity-[0.03] group-hover:opacity-[0.07] transition-opacity" />

                        {/* Decorative Badge */}
                        <div className="absolute top-10 left-10 py-1.5 px-4 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 text-[10px] font-bold uppercase tracking-[0.3em]">
                            Ranking Portal
                        </div>

                        <div className="relative z-10">
                            <h3 className="text-4xl sm:text-5xl font-folkra font-medium text-white mb-6 leading-tight">
                                See Who Rose <br /> to the <span className="text-orange-500">Top</span>
                            </h3>
                            <p className="text-gray-400 text-lg sm:text-xl font-medium mb-10 max-w-md">
                                Explore the final rankings and top-performing teams of Codemania v6.0.
                            </p>

                            <Link href="/leaderboard" className="group/btn inline-flex items-center gap-3 py-4 px-8 rounded-full bg-white text-black font-bold group-hover:bg-orange-500 group-hover:text-white transition-all duration-500">
                                View Leaderboard
                                <ArrowRight className="size-5 group-hover/btn:translate-x-2 transition-transform" />
                            </Link>
                        </div>

                        <div className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-transparent via-orange-500/40 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
                    </div>
                </AnimationContainer>

                {/* 02. Merchandise Portal */}
                <AnimationContainer animation="fadeLeft" delay={0.3}>
                    <div className="group relative p-8 sm:p-12 rounded-[3.5rem] bg-neutral-900/60 border border-white/5 backdrop-blur-2xl overflow-hidden h-[450px] flex flex-col justify-end transition-all duration-700 hover:border-orange-500/40 shadow-2xl">

                        {/* Background Design Element */}
                        <div className="absolute top-[-10%] right-[-10%] text-orange-500/5 -rotate-12 transition-all duration-700 group-hover:scale-110 group-hover:text-orange-500/10">
                            <ShoppingBag size={400} strokeWidth={1} />
                        </div>

                        {/* Animated Glow Grid Path */}
                        <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center opacity-[0.03] group-hover:opacity-[0.07] transition-opacity" />

                        {/* Decorative Badge */}
                        <div className="absolute top-10 left-10 py-1.5 px-4 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 text-[10px] font-bold uppercase tracking-[0.3em]">
                            Official Store
                        </div>

                        <div className="relative z-10">
                            <h3 className="text-4xl sm:text-5xl font-folkra font-medium text-white mb-6 leading-tight">
                                Codemania <br /> <span className="text-orange-500">Merchandise</span>
                            </h3>
                            <p className="text-gray-400 text-lg sm:text-xl font-medium mb-10 max-w-md">
                                Own exclusive Codemania v6.0 gear designed for competitors.
                            </p>

                            <Link href="/merchandise" className="group/btn inline-flex items-center gap-3 py-4 px-8 rounded-full bg-white text-black font-bold group-hover:bg-orange-500 group-hover:text-white transition-all duration-500">
                                Order Now
                                <ArrowRight className="size-5 group-hover/btn:translate-x-2 transition-transform" />
                            </Link>
                        </div>

                        <div className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-transparent via-orange-500/40 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
                    </div>
                </AnimationContainer>

            </div>
        </Wrapper>
    );
};

export default Portals;
