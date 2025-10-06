import React from "react";
import { Github, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="bg-[#FF006E] py-20 lg:py-32 border-t-8 border-black"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Content Section */}
          <div className="space-y-8">
            <div className="space-y-6">
              {/* Title with Neo Brutalism Style */}
              <div className="inline-block bg-black text-[#FFEB3B] neo-border neo-shadow-lg px-8 py-4 -rotate-2">
                <h1 className="text-4xl lg:text-5xl font-black uppercase tracking-tight">
                  Contact Me
                </h1>
              </div>

              <div className="bg-[#FFEB3B] neo-border px-6 py-3 inline-block rotate-1">
                <span className="text-black text-xl font-black uppercase block">
                  Let&apos;s Connect! 👋
                </span>
              </div>

              <div className="bg-white neo-border neo-shadow p-6">
                <p className="text-black text-base sm:text-lg leading-relaxed font-medium">
                  Thank you for taking the time to visit my website! If you
                  would like to connect or have any questions, please feel free
                  to reach out using the contact information provided below. You
                  can also send a message directly to my Gmail at{" "}
                  <span className="bg-[#00F5FF] px-2 py-1 font-black">
                    riza80448@gmail.com
                  </span>
                  . I look forward to hearing from you!
                </p>
              </div>
            </div>

            {/* Social Links - Neo Brutalism Buttons */}
            <div className="flex gap-4 flex-wrap">
              <a
                href="https://www.instagram.com/rizamaulana04/"
                className="group bg-white neo-border neo-shadow-hover px-6 py-4 inline-flex items-center gap-3"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="w-6 h-6 text-[#FF006E]" />
                <span className="font-black uppercase text-sm text-[#FF006E]">
                  Instagram
                </span>
              </a>
              <a
                href="https://github.com/Notnoir"
                className="group bg-white neo-border neo-shadow-hover px-6 py-4 inline-flex items-center gap-3"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-6 h-6 text-black" />
                <span className="font-black uppercase text-sm text-black">
                  GitHub
                </span>
              </a>
              <div className="bg-gray-300 neo-border px-6 py-4 inline-flex items-center gap-3 opacity-60 cursor-not-allowed">
                <Linkedin className="w-6 h-6 text-gray-600" />
                <span className="font-black uppercase text-sm text-gray-600">
                  LinkedIn
                </span>
              </div>
            </div>
          </div>

          {/* Image Section - Neo Brutalism Frame */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="bg-[#00F5FF] neo-border-thick neo-shadow-lg p-3 rotate-3 hover:rotate-0 transition-transform">
                <Image
                  src="https://media.giphy.com/media/Mq4Trcf2D6FM0fiMUE/giphy.gif"
                  alt="Contact Animation"
                  width={320}
                  height={320}
                  unoptimized
                  className="w-72 h-72 lg:w-80 lg:h-80 object-cover neo-border"
                />
                <div className="absolute -top-4 -left-4 bg-[#FFEB3B] neo-border px-4 py-2 -rotate-6">
                  <p className="font-black text-black uppercase text-xs">
                    Say Hi!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
