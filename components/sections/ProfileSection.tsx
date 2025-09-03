"use client";

import React, { useState, useEffect } from "react";
import { useRevealOnScroll } from "@/hooks/useAnimations";

export default function ProfileSection() {
  const [stars, setStars] = useState<
    Array<{ left: string; delay: string; duration: string }>
  >([]);
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

  useEffect(() => {
    // Generate stars only on client side to avoid hydration mismatch
    const generatedStars = [...Array(8)].map(() => ({
      left: `${Math.random() * 40}%`,
      delay: `${Math.random() * 20}s`,
      duration: `${2 + Math.random() * 5}s`,
    }));
    setStars(generatedStars);
  }, []);

  return (
    <section
      id="profile"
      className="min-h-screen bg-black relative overflow-hidden py-12 sm:py-16 lg:py-20"
    >
      {/* Falling Stars Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {stars.map((star, i) => (
          <div
            key={i}
            className="shooting-star"
            style={{
              left: star.left,
              animationDelay: star.delay,
              animationDuration: star.duration,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex flex-col justify-center items-center min-h-screen py-12 sm:py-16 lg:py-20 gap-8 sm:gap-10 lg:gap-12">
          <div className="text-center px-2 sm:px-4">
            <h3
              ref={greetingRef}
              className={`text-white text-2xl sm:text-3xl lg:text-4xl mb-2 transition-all duration-800 ${
                greetingVisible
                  ? "animate-fade-in-up"
                  : "opacity-0 translate-y-8"
              }`}
            >
              Helloo,
            </h3>
            <h2
              ref={nameRef}
              className={`text-cyan-300 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-2 sm:mb-4 transition-all duration-800 ${
                nameVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"
              }`}
            >
              I&apos;m Riza Maulana Tamsirin
            </h2>
            <h1
              ref={titleRef}
              className={`text-white text-4xl sm:text-5xl lg:text-6xl xl:text-7xl mb-6 sm:mb-8 leading-tight font-bold transition-all duration-800 ${
                titleVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"
              }`}
            >
              Frontend Developer
            </h1>
            <p
              ref={descRef}
              className={`text-gray-300 text-base sm:text-lg lg:text-xl mb-8 sm:mb-10 max-w-2xl lg:max-w-4xl leading-relaxed mx-auto transition-all duration-800 ${
                descVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"
              }`}
            >
              I am a student at Bandung National Institute of Technology
              majoring in Informatics, a Frontend Engineer, and currently
              learning Fullstack Engineer skills to enhance my ability to
              develop web applications comprehensively.
            </p>
            <div
              ref={buttonRef}
              className={`transition-all duration-800 ${
                buttonVisible ? "animate-fade-in-scale" : "opacity-0 scale-90"
              }`}
            >
              <button className="bg-gray-950 text-cyan-400 border border-cyan-400 border-b-4 font-medium overflow-hidden relative px-6 sm:px-8 py-2 sm:py-3 rounded-lg hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group text-base sm:text-lg">
                <span className="bg-cyan-400 shadow-cyan-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,255,255,0.3)]"></span>
                <a href="#about" className="no-underline text-inherit">
                  About Me
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
