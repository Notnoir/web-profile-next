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
      className="min-h-screen bg-black relative py-12 sm:py-16 lg:py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <h2
            ref={titleRef}
            className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 transition-all duration-800 ${
              titleVisible
                ? "animate-slide-in-left"
                : "opacity-0 -translate-x-8"
            }`}
          >
            About Me
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-8 sm:gap-12 lg:gap-16">
          {/* Content Section */}
          <div className="flex-1 order-2 lg:order-1">
            <div 
              ref={contentRef}
              className={`space-y-6 transition-all duration-800 ${
                contentVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"
              }`}
            >
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                I am an Informatics student at{" "}
                <span className="text-cyan-400 font-semibold">
                  Bandung National Institute of Technology
                </span>
                , focusing on software development and web technologies. As a
                Frontend Engineer, I am passionate about creating attractive and
                functional user interfaces. I have experience building web
                applications using modern technologies and frameworks.
                Currently, I am expanding my skillset to become a{" "}
                <span className="text-green-400 font-semibold">
                  Fullstack Developer
                </span>
                , learning backend development with various technologies and
                databases.
              </p>

              <div className="pt-4">
                <p className="text-gray-300 text-base sm:text-lg mb-6">
                  Here are some of the technologies I&apos;ve been working with:
                </p>

                <div 
                  ref={techRef}
                  className="flex flex-wrap gap-4"
                >
                  {technologies.map((tech, index) => {
                    const IconComponent = tech.icon;
                    const isVisible = visibleItems.includes(index);
                    return (
                      <div
                        key={index}
                        className={`flex items-center gap-2 bg-gray-800/50 backdrop-blur-sm border border-gray-700 px-3 py-2 rounded-lg hover:bg-gray-700/50 transition-all duration-300 ${
                          isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-4"
                        }`}
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <IconComponent className={`text-lg ${tech.color}`} />
                        <span className={`text-sm font-medium ${tech.color}`}>
                          {tech.name}
                        </span>
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
                imageVisible ? "animate-slide-in-right" : "opacity-0 translate-x-8"
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur-xl opacity-20"></div>
              <div className="relative rounded-2xl p-4 shadow-2xl">
                <Image
                  src="/prof.jpg"
                  alt="Profile Photo"
                  width={320}
                  height={400}
                  className="w-64 h-80 sm:w-72 sm:h-96 lg:w-80 lg:h-[400px] object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
