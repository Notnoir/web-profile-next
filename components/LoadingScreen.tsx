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
    <div className="fixed inset-0 bg-[#FFEB3B] flex items-center justify-center z-50 p-4 overflow-hidden">
      {/* Geometric Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-[#FF006E] rotate-12 neo-border animate-pulse"></div>
        <div className="absolute top-20 right-20 w-24 h-24 bg-[#00F5FF] -rotate-6 neo-border animate-bounce"></div>
        <div className="absolute bottom-20 left-32 w-40 h-40 bg-[#00FF85] rotate-45 neo-border"></div>
        <div
          className="absolute bottom-32 right-40 w-28 h-28 bg-[#FF6B00] -rotate-12 neo-border animate-spin"
          style={{ animationDuration: "10s" }}
        ></div>
        <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-[#B026FF] rotate-90 neo-border"></div>
      </div>

      {/* Main Loading Container */}
      <div className="relative z-10 w-full max-w-[700px]">
        {/* Title Box */}
        <div className="bg-black text-[#00FF85] neo-border-thick neo-shadow-lg px-8 py-6 mb-6 -rotate-2 animate-pulse">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-center tracking-tight">
            {displayText}
            <span className="animate-pulse">|</span>
          </h1>
        </div>

        {/* Progress Container */}
        <div className="bg-white neo-border-thick neo-shadow-lg p-6 sm:p-8 rotate-1">
          {/* Progress Bar */}
          <div className="mb-6">
            <div className="flex justify-between mb-2">
              <span className="font-black text-sm uppercase">Loading...</span>
              <span className="font-black text-sm">{progress}%</span>
            </div>
            <div className="w-full h-8 bg-gray-200 neo-border relative overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#FF006E] via-[#00F5FF] to-[#00FF85] transition-all duration-300 neo-border-thick border-r-0"
                style={{ width: `${progress}%` }}
              >
                <div className="w-full h-full bg-black/10 animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Loading Steps */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-[#00FF85] neo-border flex items-center justify-center">
                <span className="text-black font-black text-xs">✓</span>
              </div>
              <span className="font-black uppercase text-sm">
                Components Ready
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-[#00F5FF] neo-border flex items-center justify-center">
                <span className="text-black font-black text-xs">✓</span>
              </div>
              <span className="font-black uppercase text-sm">
                Environment Setup
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-[#FFEB3B] neo-border flex items-center justify-center animate-spin">
                <span className="text-black font-black text-xs">⟳</span>
              </div>
              <span className="font-black uppercase text-sm">
                Initializing Portfolio...
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Tag */}
        <div className="mt-6 flex justify-center">
          <div className="bg-[#FF006E] text-white neo-border px-6 py-3 rotate-2 neo-shadow">
            <p className="font-black uppercase text-xs sm:text-sm">
              Riza Maulana Tamsirin
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
