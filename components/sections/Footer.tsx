import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black py-8 sm:py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-gray-500 text-sm sm:text-base">
          © {new Date().getFullYear()} Riza Maulana Tamsirin. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
