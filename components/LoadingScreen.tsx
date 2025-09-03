import React, { useState, useEffect } from "react";

export default function LoadingScreen() {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "Initializing portfolio...";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 100); // Speed of typing effect
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50 p-4">
      <div className="mx-auto w-full max-w-[600px] sm:w-[500px] md:w-[600px] bg-gray-950 rounded-xl overflow-hidden drop-shadow-2xl">
        <div className="bg-[#333] flex items-center p-2 sm:p-[8px] text-white relative">
          <div className="flex absolute left-2 sm:left-4">
            <span className="h-3 w-3 sm:h-4 sm:w-4 bg-[#ff605c] rounded-full mr-1 sm:mr-2"></span>
            <span className="h-3 w-3 sm:h-4 sm:w-4 bg-[#ffbd44] rounded-full mr-1 sm:mr-2"></span>
            <span className="h-3 w-3 sm:h-4 sm:w-4 bg-[#00ca4e] rounded-full"></span>
          </div>
          <div className="flex-1 text-center text-white font-mono text-sm sm:text-base md:text-lg px-8">
            <span className="hidden sm:inline">
              Web Profile - Riza Maulana Tamsirin
            </span>
            <span className="sm:hidden">Riza Maulana</span>
          </div>
        </div>
        <div className="p-3 sm:p-4 md:p-6 text-[#0f0] bg-black font-mono">
          <div className="text-sm sm:text-base md:text-lg mb-2 sm:mb-3">
            <span className="mr-1 sm:mr-3 text-xs sm:text-sm md:text-base">
              <span className="hidden sm:inline">rizamaulana@portfolio:~$</span>
              <span className="sm:hidden">$</span>
            </span>
            <span className="text-xs sm:text-sm md:text-base">npm run dev</span>
            <span className="animate-[ping_1.5s_0.5s_ease-in-out_infinite] text-lg sm:text-xl">
              .
            </span>
            <span className="animate-[ping_1.5s_0.7s_ease-in-out_infinite] text-lg sm:text-xl">
              .
            </span>
            <span className="animate-[ping_1.5s_0.9s_ease-in-out_infinite] text-lg sm:text-xl">
              .
            </span>
          </div>
          <div className="text-xs sm:text-sm md:text-base text-cyan-300 mb-3 sm:mb-4">
            <span>{displayText}</span>
            <span className="animate-pulse">|</span>
          </div>
          <div className="text-xs sm:text-sm text-gray-400 space-y-1">
            <div className="flex items-center">
              <span className="text-green-400 mr-2 text-sm sm:text-base">
                ✓
              </span>
              <span className="truncate">Loading components...</span>
            </div>
            <div className="flex items-center">
              <span className="text-green-400 mr-2 text-sm sm:text-base">
                ✓
              </span>
              <span className="truncate">Setting up environment...</span>
            </div>
            <div className="flex items-center">
              <span className="text-yellow-400 mr-2 animate-spin text-sm sm:text-base">
                ⟳
              </span>
              <span className="truncate">Preparing user interface...</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
