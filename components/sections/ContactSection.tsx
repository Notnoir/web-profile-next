"use client";

import React from "react";
import FadeInUp from "../FadeInUp";

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 text-center">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <FadeInUp delay={100}>
          <div className="inline-block bg-slate-900 dark:bg-zinc-800 text-white text-md font-semibold px-3 py-1 rounded-full mb-5">
            Contact
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-zinc-100 mb-3">
            Get in Touch
          </h2>
          <p className="text-slate-600 dark:text-zinc-400 text-md mb-6">
            Want to chat? Just shoot me an email at{" "}
            <a
              href="mailto:riza80448@gmail.com"
              className="text-slate-900 dark:text-zinc-100 underline"
            >
              riza80448@gmail.com
            </a>
          </p>
        </FadeInUp>
      </div>
    </section>
  );
}
