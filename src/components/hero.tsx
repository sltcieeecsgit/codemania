"use client";

import { useEffect, useState } from "react";
import AnimationContainer from "./global/animation-container";
import Images from "./global/images";
import Wrapper from "./global/wrapper";
import Marquee from "./ui/marquee";
import SectionBadge from "./ui/section-badge";

interface TimeLeft {
  days?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
}

const Countdown = () => {
  // Initialize target date once
  const [targetDate] = useState(() => {
    const date = new Date();
    date.setDate(date.getDate() + 60);
    return date;
  });

  const calculateTimeLeft = (): TimeLeft => {
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    let timeLeft: TimeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const format = (num: number | undefined) => {
    return num !== undefined ? num.toString().padStart(2, "0") : "00";
  };

  if (!mounted) return null;

  return (
    // RESPONSIVE UPDATES:
    // 1. text-3xl (mobile) -> text-5xl (tablet) -> text-7xl (desktop)
    // 2. gap-3 (mobile) -> gap-8 (desktop)
    // 3. justify-start (desktop) -> justify-center (optional for mobile, kept start here for alignment)
    <div className="font-mono text-3xl sm:text-5xl md:text-7xl flex flex-wrap items-center gap-3 sm:gap-6 md:gap-8 tracking-widest text-orange-500 drop-shadow-lg select-none">
      {Object.keys(timeLeft).length > 0 ? (
        <>
          <div className="flex flex-col items-center">
            <span>{format(timeLeft.days)}</span>
            <span className="text-[10px] sm:text-sm md:text-base text-gray-500 tracking-normal mt-1 md:mt-2 uppercase">
              days
            </span>
          </div>
          
          <span className="opacity-50 mb-4 sm:mb-6 md:mb-8">:</span>
          
          <div className="flex flex-col items-center">
            <span>{format(timeLeft.hours)}</span>
            <span className="text-[10px] sm:text-sm md:text-base text-gray-500 tracking-normal mt-1 md:mt-2 uppercase">
              hours
            </span>
          </div>
          
          <span className="opacity-50 mb-4 sm:mb-6 md:mb-8">:</span>
          
          <div className="flex flex-col items-center">
            <span>{format(timeLeft.minutes)}</span>
            <span className="text-[10px] sm:text-sm md:text-base text-gray-500 tracking-normal mt-1 md:mt-2 uppercase">
              mins
            </span>
          </div>
          
          <span className="opacity-50 mb-4 sm:mb-6 md:mb-8">:</span>
          
          <div className="flex flex-col items-center">
            <span>{format(timeLeft.seconds)}</span>
            <span className="text-[10px] sm:text-sm md:text-base text-gray-500 tracking-normal mt-1 md:mt-2 uppercase">
              secs
            </span>
          </div>
        </>
      ) : (
        <div className="text-2xl md:text-5xl">Hackathon Started!</div>
      )}
    </div>
  );
};

const Hero = () => {
  const companies = [
    Images.comp1,
    Images.comp2,
    Images.comp3,
    Images.comp4,
    Images.comp5,
    Images.comp6,
  ];

  return (
    <Wrapper className="pt-20 lg:pt-32 relative min-h-screen w-full flex-1 bg-black overflow-hidden">
      <div className="flex flex-col lg:flex-row w-full h-full lg:gap-16 px-4 sm:px-6 lg:px-0">
        {/* Added items-center for mobile centering, lg:items-start for desktop left-align */}
        <div className="flex flex-col items-start justify-center gap-8 sm:gap-10 py-10 lg:py-16 w-full max-w-4xl mx-auto lg:mx-0">
          
          <AnimationContainer animation="fadeUp" delay={0.2}>
            <SectionBadge title="THINK TWICE, CODE ONCE" />
          </AnimationContainer>

          <AnimationContainer animation="fadeUp" delay={0.4}>
            {/* RESPONSIVE TEXT: text-4xl (mobile) -> text-6xl (tablet) -> text-7xl (desktop) */}
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold !leading-[1.1] text-transparent bg-clip-text bg-gradient-to-r from-foreground to-neutral-500">
              Welcome to <br className="hidden sm:block" /> Hackathon 2025
            </h1>
          </AnimationContainer>

          <AnimationContainer animation="fadeUp" delay={0.6}>
            <p className="text-base sm:text-lg text-gray-400 max-w-lg leading-relaxed">
              Join the brightest minds to innovate, build, and revolutionize
              tech. Don’t miss out on the most exciting hackathon of the year.
            </p>
          </AnimationContainer>

          <AnimationContainer animation="fadeUp" delay={0.8}>
            <Countdown />
          </AnimationContainer>

          <AnimationContainer animation="fadeUp" delay={1} className="w-full">
            <p className="text-sm md:text-base text-gray-500 mb-4">
              Trusted by Industry Leaders
            </p>

            <div className="w-full relative max-w-[90vw] sm:max-w-lg">
              <Marquee className="[--duration:40s] select-none [--gap:1.5rem] sm:[--gap:2rem]">
                {[...Array(10)].map((_, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center text-gray-500 h-12 sm:h-16"
                  >
                    {companies[index % companies.length]({
                      className: "w-auto h-5 sm:h-6 opacity-75 hover:opacity-100 transition-opacity",
                    })}
                  </div>
                ))}
              </Marquee>

              {/* Gradients for Marquee Fade Effect */}
              <div className="pointer-events-none absolute inset-y-0 -right-1 w-1/6 sm:w-1/3 bg-gradient-to-l from-black z-40"></div>
              <div className="pointer-events-none absolute inset-y-0 -left-1 w-1/6 sm:w-1/3 bg-gradient-to-r from-black z-40"></div>
            </div>
          </AnimationContainer>
        </div>
      </div>
    </Wrapper>
  );
};

export default Hero;