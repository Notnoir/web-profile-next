"use client";

import React, { useState, useEffect } from "react";
import { Project } from "@/types/project";
import LoadingScreen from "./LoadingScreen";
import { useLoading } from "@/hooks/useLoading";

interface ClientProfileProps {
  projects: Project[];
}

export default function ClientProfile({ projects }: ClientProfileProps) {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [activeSection, setActiveSection] = useState("profile");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isLoading = useLoading(3000); // 3 seconds loading time

  // Remove the unused projects parameter since it's only needed for props type checking
  // The projects data is managed by the parent component
  console.log("Projects data available:", projects.length); // Optional: for debugging

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setShowBackToTop(scrollTop > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Show loading screen
  if (isLoading) {
    return <LoadingScreen />;
  }

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false); // Close mobile menu after clicking
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Navigation - Neo Brutalism */}
      <nav className="fixed top-0 left-0 right-0 z-50 pt-3 sm:pt-4">
        <div className="max-w-5xl mx-auto px-2 sm:px-6 lg:px-8">
          {/* Desktop Navigation */}
          <div className="hidden sm:flex justify-center items-center bg-white neo-border neo-shadow py-3 px-4 gap-2">
            {["profile", "about", "projects", "contact"].map((section) => (
              <a
                key={section}
                href={`#${section}`}
                onClick={(e) => scrollToSection(e, section)}
                className={`text-sm lg:text-base font-black uppercase px-5 lg:px-8 py-3 transition-all duration-200 neo-border ${
                  activeSection === section
                    ? "bg-[#38BDF8] text-white neo-shadow scale-105"
                    : "bg-[#F1F5F9] text-[#0F172A] hover:bg-[#A78BFA] hover:text-white hover:scale-105"
                }`}
              >
                {section}
              </a>
            ))}
          </div>

          {/* Mobile Navigation */}
          <div className="sm:hidden">
            {/* Mobile Menu Button */}
            <div className="flex justify-between items-center bg-white neo-border neo-shadow py-3 px-6">
              <span className="text-[#0F172A] font-black text-lg uppercase">
                {activeSection}
              </span>
              <button
                onClick={toggleMobileMenu}
                className="text-[#0F172A] hover:text-[#38BDF8] p-1 transition-colors duration-300"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isMobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMobileMenuOpen && (
              <div className="mt-3 bg-white neo-border neo-shadow py-2 px-2">
                {["profile", "about", "projects", "contact"].map((section) => (
                  <a
                    key={section}
                    href={`#${section}`}
                    onClick={(e) => scrollToSection(e, section)}
                    className={`block text-center font-black py-3 px-4 my-2 uppercase transition-all duration-200 neo-border ${
                      activeSection === section
                        ? "bg-[#38BDF8] text-white"
                        : "bg-[#F1F5F9] text-[#0F172A] hover:bg-[#A78BFA] hover:text-white"
                    }`}
                  >
                    {section}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Back to Top Button - Neo Brutalism */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 bg-[#FCD34D] text-[#0F172A] neo-border neo-shadow-hover p-4 font-black uppercase text-xs hover:bg-[#38BDF8] hover:text-white transition-all duration-300 rotate-0 hover:-rotate-12"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      )}

      {/* Global Styles */}
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Dancing+Script:wght@400;500;600;700&display=swap");

        .font-cursive {
          font-family: "Dancing Script", cursive;
        }

        .rounded-4xl {
          border-radius: 2rem;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.3s ease-out;
        }

        .line-clamp-4 {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .shooting-star {
          position: absolute;
          top: -5px;
          height: 2px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.8),
            transparent
          );
          border-radius: 999px;
          filter: drop-shadow(0 0 6px rgba(255, 255, 255, 0.6));
          animation: shooting 4s linear infinite;
        }

        .shooting-star::after {
          content: "";
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 6px;
          height: 6px;
          background: radial-gradient(
            circle,
            rgba(255, 255, 255, 1),
            rgba(0, 255, 255, 0.8)
          );
          border-radius: 50%;
          filter: blur(1px);
        }

        @keyframes shooting {
          0% {
            transform: translateX(-100px) translateY(-100px);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateX(calc(100vw + 100px))
              translateY(calc(100vh + 100px));
            opacity: 0;
          }
        }

        /* Hide scrollbar when mobile menu is open */
        body.menu-open {
          overflow: hidden;
        }
      `}</style>
    </>
  );
}
