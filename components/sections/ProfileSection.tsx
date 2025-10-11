"use client";

import React from "react";
import Image from "next/image";
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
      className="min-h-screen bg-white relative overflow-hidden py-12 sm:py-16 lg:py-20"
    >
      {/* Neo Brutalism Icons Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* CreditCard Icon - Top Left */}
        <div className="absolute top-20 left-10 w-32 h-32 rotate-12">
          <Image
            src="/icons/CreditCard.png"
            alt="Credit Card"
            width={128}
            height={128}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Folder Icon - Top Right */}
        <div className="absolute top-40 right-20 w-24 h-24 -rotate-6">
          <Image
            src="/icons/Video.png"
            alt="Folder"
            width={96}
            height={96}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Message Icon - Bottom Left */}
        <div className="absolute bottom-40 left-32 w-40 h-40 rotate-45">
          <Image
            src="/icons/Message.png"
            alt="Message"
            width={160}
            height={160}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Photo Icon - Bottom Right */}
        <div className="absolute bottom-20 right-40 w-28 h-28 -rotate-12">
          <Image
            src="/icons/Photo.png"
            alt="Photo"
            width={112}
            height={112}
            className="w-full h-full object-contain"
          />
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full relative z-10">
        <div className="flex flex-col justify-center items-center min-h-screen py-12 sm:py-16 lg:py-20 gap-8 sm:gap-10 lg:gap-12">
          <div className="text-center px-2 sm:px-4">
            {/* Greeting with Neo Brutalism Badge */}
            <div className="inline-block mb-6">
              <div className="bg-[#0F172A] text-[#38BDF8] px-6 py-3 neo-border neo-shadow rotate-2 inline-block">
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
              className={`text-[#0F172A] text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight mb-4 transition-all duration-800 uppercase ${
                nameVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"
              }`}
              style={{
                textShadow: "4px 4px 0px #7dd3fc",
              }}
            >
              I&apos;m Riza
              <br />
              Maulana Tamsirin
            </h2>

            {/* Title with Highlight Box */}
            <div className="inline-block mb-8">
              <div className="bg-[#38BDF8] text-[#0F172A] px-8 py-4 neo-border neo-shadow-lg -rotate-1">
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
              <div className="bg-[#F1F5F9] neo-border neo-shadow p-6 sm:p-8">
                <p
                  ref={descRef}
                  className={`text-[#1E293B] text-base sm:text-lg font-medium leading-relaxed transition-all duration-800 ${
                    descVisible
                      ? "animate-fade-in-up"
                      : "opacity-0 translate-y-8"
                  }`}
                >
                  I am a student at{" "}
                  <span className="bg-[#C4B5FD] text-[#0F172A] px-2 py-1 font-black">
                    Bandung National Institute of Technology
                  </span>{" "}
                  majoring in Informatics, a Frontend Engineer, and currently
                  learning{" "}
                  <span className="bg-[#7DD3FC] text-[#0F172A] px-2 py-1 font-black">
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
                <div className="bg-[#0F172A] text-[#7dd3fc] neo-border neo-shadow-hover px-8 sm:px-12 py-4 sm:py-5 font-black text-xl sm:text-2xl uppercase cursor-pointer">
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
