"use client";

import React from "react";
import { useRevealOnScroll } from "@/hooks/useAnimations";

export default function ProfileSection() {
  const { ref: greetingRef, isVisible: greetingVisible } = useRevealOnScroll(
    0.1,
    0
  );
  const { ref: nameRef, isVisible: nameVisible } = useRevealOnScroll(0.1, 200);
  const { ref: titleRef, isVisible: titleVisible } = useRevealOnScroll(
    0.1,
    400
  );
  const { ref: descRef, isVisible: descVisible } = useRevealOnScroll(0.1, 600);
  const { ref: buttonRef, isVisible: buttonVisible } = useRevealOnScroll(
    0.1,
    800
  );

  return (
    <section
      id="profile"
      className="min-h-screen bg-[#FFEB3B] relative overflow-hidden py-12 sm:py-16 lg:py-20"
    >
      {/* Neo Brutalism Geometric Shapes Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#FF006E] rotate-12 neo-border"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-[#00F5FF] -rotate-6 neo-border"></div>
        <div className="absolute bottom-40 left-32 w-40 h-40 bg-[#00FF85] rotate-45 neo-border"></div>
        <div className="absolute bottom-20 right-40 w-28 h-28 bg-[#FF6B00] -rotate-12 neo-border"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full relative z-10">
        <div className="flex flex-col justify-center items-center min-h-screen py-12 sm:py-16 lg:py-20 gap-8 sm:gap-10 lg:gap-12">
          <div className="text-center px-2 sm:px-4">
            {/* Greeting with Neo Brutalism Badge */}
            <div className="inline-block mb-6">
              <div className="bg-black text-[#00FF85] px-6 py-3 neo-border neo-shadow rotate-2 inline-block">
                <h3
                  ref={greetingRef}
                  className={`text-2xl sm:text-3xl font-black uppercase transition-all duration-800 ${
                    greetingVisible
                      ? "animate-fade-in-up"
                      : "opacity-0 translate-y-8"
                  }`}
                >
                  👋 Helloo!
                </h3>
              </div>
            </div>

            {/* Name with Bold Neo Style */}
            <h2
              ref={nameRef}
              className={`text-black text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight mb-4 transition-all duration-800 uppercase ${
                nameVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"
              }`}
            >
              I&apos;m Riza
              <br />
              Maulana Tamsirin
            </h2>

            {/* Title with Highlight Box */}
            <div className="inline-block mb-8">
              <div className="bg-[#FF006E] text-white px-8 py-4 neo-border neo-shadow-lg -rotate-1">
                <h1
                  ref={titleRef}
                  className={`text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black uppercase tracking-tight transition-all duration-800 ${
                    titleVisible
                      ? "animate-fade-in-up"
                      : "opacity-0 translate-y-8"
                  }`}
                >
                  Frontend Developer
                </h1>
              </div>
            </div>

            {/* Description in Neo Box */}
            <div className="max-w-3xl mx-auto mb-10">
              <div className="bg-white neo-border neo-shadow p-6 sm:p-8">
                <p
                  ref={descRef}
                  className={`text-black text-base sm:text-lg font-medium leading-relaxed transition-all duration-800 ${
                    descVisible
                      ? "animate-fade-in-up"
                      : "opacity-0 translate-y-8"
                  }`}
                >
                  I am a student at{" "}
                  <span className="bg-[#00F5FF] px-2 py-1 font-black">
                    Bandung National Institute of Technology
                  </span>{" "}
                  majoring in Informatics, a Frontend Engineer, and currently
                  learning{" "}
                  <span className="bg-[#00FF85] px-2 py-1 font-black">
                    Fullstack Engineer
                  </span>{" "}
                  skills to enhance my ability to develop web applications
                  comprehensively.
                </p>
              </div>
            </div>

            {/* CTA Button Neo Style */}
            <div
              ref={buttonRef}
              className={`transition-all duration-800 ${
                buttonVisible ? "animate-fade-in-scale" : "opacity-0 scale-90"
              }`}
            >
              <a href="#about" className="inline-block group">
                <div className="bg-black text-[#FFEB3B] neo-border neo-shadow-hover px-8 sm:px-12 py-4 sm:py-5 font-black text-xl sm:text-2xl uppercase cursor-pointer">
                  About Me →
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
