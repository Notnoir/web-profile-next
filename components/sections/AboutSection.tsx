"use client";

import React from "react";
import Image from "next/image";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiLaravel,
  SiPhp,
  SiExpress,
  SiTailwindcss,
} from "react-icons/si";
import { useRevealOnScroll, useStaggeredReveal } from "@/hooks/useAnimations";

export default function AboutSection() {
  const technologies = [
    { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
    { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
    { name: "React JS", icon: SiReact, color: "text-cyan-400" },
    { name: "Next JS", icon: SiNextdotjs, color: "text-white" },
    { name: "Laravel", icon: SiLaravel, color: "text-red-500" },
    { name: "PHP", icon: SiPhp, color: "text-purple-500" },
    { name: "Express JS", icon: SiExpress, color: "text-white" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-teal-400" },
  ];

  const { ref: titleRef, isVisible: titleVisible } = useRevealOnScroll(0.1, 0);
  const { ref: contentRef, isVisible: contentVisible } = useRevealOnScroll(
    0.1,
    200
  );
  const { ref: imageRef, isVisible: imageVisible } = useRevealOnScroll(
    0.1,
    300
  );
  const { ref: techRef, visibleItems } = useStaggeredReveal(
    technologies.length,
    500,
    100
  );

  return (
    <section
      id="about"
      className="min-h-screen bg-white relative py-12 sm:py-16 lg:py-20 border-t-4 border-[#F1F5F9]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="mb-12 sm:mb-16">
          <div className="inline-block bg-[#0F172A] text-[#FCD34D] neo-border neo-shadow-lg px-8 py-4 rotate-1">
            <h2
              ref={titleRef}
              className={`text-5xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight transition-all duration-800 ${
                titleVisible
                  ? "animate-slide-in-left"
                  : "opacity-0 -translate-x-8"
              }`}
            >
              About Me
            </h2>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-8 sm:gap-12 lg:gap-16">
          {/* Content Section */}
          <div className="flex-1 order-2 lg:order-1">
            <div
              ref={contentRef}
              className={`space-y-6 transition-all duration-800 ${
                contentVisible
                  ? "animate-fade-in-up"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <div className="bg-[#F1F5F9] neo-border neo-shadow p-6 sm:p-8 -rotate-1">
                <p className="text-[#1E293B] text-base sm:text-lg leading-relaxed font-medium">
                  I am an Informatics student at{" "}
                  <span className="bg-[#A78BFA] text-white px-2 py-1 font-black">
                    Bandung National Institute of Technology
                  </span>
                  , focusing on software development and web technologies. As a
                  Frontend Engineer, I am passionate about creating attractive
                  and functional user interfaces. I have experience building web
                  applications using modern technologies and frameworks.
                  Currently, I am expanding my skillset to become a{" "}
                  <span className="bg-[#38BDF8] text-[#0F172A] px-2 py-1 font-black">
                    Fullstack Developer
                  </span>
                  , learning backend development with various technologies and
                  databases.
                </p>
              </div>

              <div className="pt-6">
                <div className="bg-[#0F172A] text-[#FCD34D] neo-border px-6 py-3 inline-block mb-6 rotate-1">
                  <p className="text-lg font-black uppercase">
                    Technologies I Work With:
                  </p>
                </div>

                <div ref={techRef} className="flex flex-wrap gap-4">
                  {technologies.map((tech, index) => {
                    const IconComponent = tech.icon;
                    const isVisible = visibleItems.includes(index);
                    const colors = [
                      "bg-[#0F172A] text-[#FFEB3B]",
                      "bg-blue-600 text-white",
                      "bg-[#00F5FF]",
                      "bg-gray-900",
                      "bg-red-500 text-white",
                      "bg-[#B026FF] text-white",
                      "bg-black",
                      "bg-white text-cyan-400",
                    ];
                    return (
                      <div
                        key={index}
                        className={`flex items-center gap-2 ${
                          colors[index % colors.length]
                        } neo-border px-4 py-3 neo-shadow-hover font-black text-sm uppercase ${
                          isVisible
                            ? "animate-fade-in-up"
                            : "opacity-0 translate-y-4"
                        }`}
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <IconComponent className="text-xl" />
                        <span>{tech.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex-shrink-0 order-1 lg:order-2">
            <div
              ref={imageRef}
              className={`relative transition-all duration-800 ${
                imageVisible
                  ? "animate-slide-in-right"
                  : "opacity-0 translate-x-8"
              }`}
            >
              <div className="relative neo-border-thick neo-shadow-lg bg-[#A78BFA] p-2 rotate-2 hover:rotate-0 transition-transform">
                <Image
                  src="/prof.jpg"
                  alt="Profile Photo"
                  width={320}
                  height={400}
                  className="w-64 h-80 sm:w-72 sm:h-96 lg:w-80 lg:h-[400px] object-cover neo-border"
                />
                <div className="absolute -bottom-6 -right-6 bg-[#FCD34D] text-[#0F172A] neo-border px-4 py-2 rotate-3">
                  <p className="font-black uppercase text-sm">Frontend Dev</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
