"use client";

import React from "react";
import Image from "next/image";
import FadeInUp from "../FadeInUp";

export default function AboutSection() {
  const experiences: {
    company: string;
    role: string;
    date: string;
    logo: string;
  }[] = [];

  const education = [
    {
      school: "Bandung National Institute of Technology",
      degree: "Bachelor of Science in Informatics",
      date: "2023 - Now",
      logo: "/icons/itenas.jpg",
    },
  ];

  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Laravel",
    "Python",
    "Postgres",
    "Docker",
    "PHP",
    "Java",
    "Git",
    "Tailwind CSS",
  ];

  return (
    <section id="about" className="py-8">
      <div className="max-w-3xl mx-auto px-6 lg:px-8 space-y-12">
        {/* About */}
        <FadeInUp delay={100}>
          <div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-zinc-100 mb-3">
              About
            </h2>
            <p className="text-slate-600 dark:text-zinc-400 text-md leading-relaxed">
              I am a student at Bandung National Institute of Technology
              majoring in Informatics and I am currently exploring the
              integration of Artificial Intelligence (AI) to create innovative
              technological solutions.
            </p>
          </div>
        </FadeInUp>

        {/* Work Experience */}
        <FadeInUp delay={200}>
          <div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-zinc-100 mb-5">
              Work Experience
            </h2>
            {experiences.length > 0 ? (
              <div className="space-y-5">
                {experiences.map((exp, index) => (
                  <div key={index} className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-zinc-800 flex items-center justify-center shrink-0">
                        {/* Placeholder for logo */}
                        <div className="w-5 h-5 bg-slate-400 dark:bg-zinc-600 rounded-full"></div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 dark:text-zinc-100 text-md leading-tight">
                          {exp.company}
                        </h3>
                        <p className="text-slate-500 dark:text-zinc-400 text-xs mt-0.5">
                          {exp.role}
                        </p>
                      </div>
                    </div>
                    <span className="text-xs text-slate-400 dark:text-zinc-500 whitespace-nowrap ml-4">
                      {exp.date}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-slate-500 dark:text-zinc-400 text-md italic">
                Still waiting for my first &quot;real job&quot; arc. Stay tuned
                😄
              </p>
            )}
          </div>
        </FadeInUp>

        {/* Education */}
        <FadeInUp delay={300}>
          <div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-zinc-100 mb-5">
              Education
            </h2>
            <div className="space-y-5">
              {education.map((edu, index) => (
                <div key={index} className="flex items-start justify-between">
                  <div className="flex items-center gap-5">
                    <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-zinc-800 flex items-center justify-center shrink-0">
                      <Image
                        src={edu.logo}
                        alt={edu.school}
                        width={40}
                        height={40}
                        className="rounded-full object-cover"
                        priority
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-zinc-100 text-md leading-tight">
                        {edu.school}
                      </h3>
                      <p className="text-slate-500 dark:text-zinc-400 text-xs mt-0.5">
                        {edu.degree}
                      </p>
                    </div>
                  </div>
                  <span className="text-xs text-slate-400 dark:text-zinc-500 whitespace-nowrap ml-4">
                    {edu.date}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </FadeInUp>

        {/* Skills */}
        <FadeInUp delay={400}>
          <div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-zinc-100 mb-5">
              Skills
            </h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-slate-900 dark:bg-zinc-800 text-white text-sm font-medium rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}
