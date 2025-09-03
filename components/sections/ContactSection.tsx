import React from "react";
import { Github, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";

export default function ContactSection() {
  return (
    <section id="contact" className="bg-black py-20 lg:py-32">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Content Section */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-white text-4xl lg:text-5xl font-bold leading-tight">
                Contact Me
              </h1>
              <span className="text-cyan-400 text-xl font-medium block">
                Let&apos;s go! Get in touch with me 👋
              </span>
              <p className="text-gray-400 text-lg leading-relaxed max-w-lg">
                Thank you for taking the time to visit my website! If you would
                like to connect or have any questions, please feel free to reach
                out using the contact information provided below. You can also
                send a message directly to my Gmail at riza80448@gmail.com. I
                look forward to hearing from you!
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/rizamaulana04/"
                className="group relative flex items-center justify-center w-14 h-14 bg-white/5 hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 rounded-xl transition-all duration-300 hover:scale-105 border border-white/10 hover:border-transparent"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="w-6 h-6 text-white group-hover:text-white transition-colors" />
              </a>
              <a
                href="https://github.com/Notnoir"
                className="group relative flex items-center justify-center w-14 h-14 bg-white/5 hover:bg-white rounded-xl transition-all duration-300 hover:scale-105 border border-white/10 hover:border-transparent"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-6 h-6 text-white group-hover:text-black transition-colors" />
              </a>
              <span className="group relative flex items-center justify-center w-14 h-14 bg-white/5 rounded-xl border border-white/10 cursor-not-allowed opacity-50">
                <Linkedin className="w-6 h-6 text-white" />
              </span>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-2xl scale-110"></div>
              {/* Image */}
              <div className="relative overflow-hidden rounded-full border border-white/10">
                <Image
                  src="https://media.giphy.com/media/Mq4Trcf2D6FM0fiMUE/giphy.gif"
                  alt="Contact Animation"
                  width={320}
                  height={320}
                  unoptimized
                  className="w-72 h-72 lg:w-80 lg:h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
