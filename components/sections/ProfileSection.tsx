"use client";

import React from "react";
import Image from "next/image";
import FadeInUp from "../FadeInUp";

export default function ProfileSection() {
  return (
    <section
      id="profile"
      className="pt-24 pb-12 flex flex-col justify-center items-center"
    >
      <div className="max-w-3xl mx-auto px-6 lg:px-8 w-full">
        <FadeInUp duration={800}>
          <div className="flex flex-col-reverse md:flex-row items-start justify-between gap-8">
            <div className="text-left flex-1">
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-zinc-100 mb-3 tracking-tight">
                Hi, I&apos;m Riza <span className="inline-block">👋</span>
              </h1>
              <p className="text-base font-semibold md:text-xl text-slate-800 dark:text-zinc-400">
                Just a builder who enjoys turning ideas into code and challenges
                into solutions.
              </p>
            </div>

            <div className="relative w-24 h-24 md:w-28 md:h-28 shrink-0">
              <Image
                src="/prof2.jpeg"
                alt="Riza Maulana"
                fill
                className="rounded-full object-cover"
                priority
              />
            </div>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}
