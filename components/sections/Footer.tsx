import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#FFEB3B] py-8 sm:py-12 border-t-8 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <div className="bg-black text-[#00FF85] neo-border px-6 py-3 rotate-1">
            <p className="text-sm sm:text-base font-black uppercase">
              © {new Date().getFullYear()} Riza Maulana
            </p>
          </div>

          {/* Made with love badge */}
          <div className="bg-[#FF006E] text-white neo-border px-6 py-3 -rotate-1">
            <p className="text-sm sm:text-base font-black uppercase">
              Made with Coffee ☕
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
