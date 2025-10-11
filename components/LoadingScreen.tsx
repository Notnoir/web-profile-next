import React, { useState, useEffect } from "react";

export default function LoadingScreen() {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const fullText = "LOADING...";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 80);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        return prev + 2;
      });
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center z-50 p-4 overflow-hidden">
      {/* Geometric Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-[#7DD3FC] opacity-20 rotate-12 neo-border "></div>
        <div className="absolute top-20 right-20 w-24 h-24 bg-[#C4B5FD] opacity-20 -rotate-6 neo-border animate-bounce"></div>
        <div className="absolute bottom-20 left-32 w-40 h-40 bg-[#FDE68A] opacity-20 rotate-45 neo-border"></div>
        <div
          className="absolute bottom-32 right-40 w-28 h-28 bg-[#A78BFA] opacity-20 -rotate-12 neo-border animate-spin"
          style={{ animationDuration: "10s" }}
        ></div>
        <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-[#38BDF8] opacity-20 rotate-90 neo-border"></div>
      </div>

      {/* Main Loading Container */}
      <div className="relative z-10 w-full max-w-[700px]">
        {/* Title Box */}
        <div className="bg-[#0F172A] text-[#FCD34D] neo-border-thick neo-shadow-lg px-8 py-6 mb-6 -rotate-2 ">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-center tracking-tight">
            {displayText}
            <span className="">|</span>
          </h1>
        </div>

        {/* Progress Container */}
        <div className="bg-[#F1F5F9] neo-border-thick neo-shadow-lg p-6 sm:p-8 rotate-1">
          {/* Progress Bar */}
          <div className="mb-6">
            <div className="flex justify-between mb-2">
              <span className="font-black text-sm uppercase text-[#1E293B]">
                Loading...
              </span>
              <span className="font-black text-sm text-[#1E293B]">
                {progress}%
              </span>
            </div>
            <div className="w-full h-8 bg-white neo-border relative overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#38BDF8] via-[#A78BFA] to-[#7DD3FC] transition-all duration-300 neo-border-thick border-r-0"
                style={{ width: `${progress}%` }}
              >
                <div className="w-full h-full bg-black/10 "></div>
              </div>
            </div>
          </div>

          {/* Loading Steps */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-[#7DD3FC] neo-border flex items-center justify-center">
                <span className="text-[#0F172A] font-black text-xs">✓</span>
              </div>
              <span className="font-black uppercase text-sm text-[#1E293B]">
                Components Ready
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-[#C4B5FD] neo-border flex items-center justify-center">
                <span className="text-[#0F172A] font-black text-xs">✓</span>
              </div>
              <span className="font-black uppercase text-sm text-[#1E293B]">
                Environment Setup
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-[#FDE68A] neo-border flex items-center justify-center animate-spin">
                <span className="text-[#0F172A] font-black text-xs">⟳</span>
              </div>
              <span className="font-black uppercase text-sm text-[#1E293B]">
                Initializing Portfolio...
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Tag */}
        <div className="mt-6 flex justify-center">
          <div className="bg-[#A78BFA] text-white neo-border px-6 py-3 rotate-2 neo-shadow">
            <p className="font-black uppercase text-xs sm:text-sm">
              Riza Maulana Tamsirin
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
