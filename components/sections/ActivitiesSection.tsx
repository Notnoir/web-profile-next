"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

interface Activity {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
  category: string;
}

// Responsive position configurations
interface PositionConfig {
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  width: string;
  height: string;
  zIndex: number;
  transform: string;
}

export default function ActivitiesSection() {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const activities: Activity[] = [
    {
      id: 1,
      title: "BISA AI & STRIDE Malaysia Visit",
      description: "Official visit and collaboration discussion with BISA AI and STRIDE Malaysia on AI innovation and development.",
      image: "/images/gal4.jpeg",
      date: "2025",
      category: "Collaboration",
    },
    {
      id: 2,
      title: "Huawei Competition Champion",
      description: "Achieved first place in the Huawei Competition Cloud Track, showcasing excellence in cloud computing solutions.",
      image: "/images/gal7.jpeg",
      date: "2025",
      category: "Competition",
    },
    {
      id: 3,
      title: "Huawei Competition Champion",
      description: "Won first place in the Huawei Competition Cloud Track with an innovative and scalable cloud-based project.",
      image: "/images/gal2.jpeg",
      date: "2025",
      category: "Competition",
    },
    {
      id: 4,
      title: "Research and Development Visit",
      description: "Official visit from the Research and Development team to the Informatics Department for academic and research collaboration.",
      image: "/images/gal1.jpg",
      date: "2025",
      category: "Research",
    },
    {
      id: 5,
      title: "Web Development Competition – 2nd Place",
      description: "Secured second place in the Web Developer Competition at Switch Fest with a creative and functional web solution.",
      image: "/images/gal6.jpeg",
      date: "2025",
      category: "Competition",
    },
    {
      id: 6,
      title: "Appreciation Award from ITENAS",
      description: "Official appreciation awarded by ITENAS to the Informatics Department for outstanding achievements and contributions.",
      image: "/images/gal5.JPG",
      date: "2025",
      category: "Achievement",
    },
    {
      id: 7,
      title: "Visit to Huawei Indonesia",
      description: "Industrial visit to Huawei Indonesia office to gain insights into technology innovation and industry practices.",
      image: "/images/gal3.jpeg",
      date: "2025",
      category: "Industry Visit",
    },
  ];

  // Get responsive positions based on screen size
  const getPositions = (): PositionConfig[] => {
    // Mobile positions (larger cards, less overlap)
    if (isMobile) {
      return [
        { top: "2%", left: "5%", width: "40%", height: "22%", zIndex: 5, transform: "rotate(-3deg)" },
        { top: "8%", right: "5%", width: "45%", height: "28%", zIndex: 7, transform: "rotate(2deg)" },
        { top: "32%", left: "8%", width: "50%", height: "25%", zIndex: 4, transform: "rotate(-2deg)" },
        { top: "55%", right: "10%", width: "48%", height: "22%", zIndex: 6, transform: "rotate(3deg)" },
        { bottom: "18%", left: "5%", width: "45%", height: "20%", zIndex: 3, transform: "rotate(-4deg)" },
        { bottom: "2%", right: "8%", width: "42%", height: "18%", zIndex: 8, transform: "rotate(2deg)" },
        { top: "25%", left: "45%", width: "38%", height: "20%", zIndex: 2, transform: "rotate(4deg)" },
      ];
    }
    
    // Tablet positions (medium cards, moderate overlap)
    if (isTablet) {
      return [
        { top: "5%", left: "3%", width: "28%", height: "25%", zIndex: 5, transform: "rotate(-4deg)" },
        { top: "8%", left: "25%", width: "32%", height: "35%", zIndex: 7, transform: "rotate(2deg)" },
        { top: "3%", right: "5%", width: "30%", height: "28%", zIndex: 4, transform: "rotate(-2deg)" },
        { top: "42%", left: "35%", width: "40%", height: "32%", zIndex: 6, transform: "rotate(3deg)" },
        { bottom: "25%", left: "2%", width: "35%", height: "28%", zIndex: 3, transform: "rotate(5deg)" },
        { bottom: "5%", left: "25%", width: "38%", height: "25%", zIndex: 8, transform: "rotate(-3deg)" },
        { top: "35%", right: "8%", width: "32%", height: "30%", zIndex: 9, transform: "rotate(2deg)" },
      ];
    }
    
    // Desktop positions (original abstract layout)
    return [
      { top: "8%", left: "2%", width: "18%", height: "28%", zIndex: 5, transform: "rotate(-5deg)" },
      { top: "12%", left: "18%", width: "22%", height: "45%", zIndex: 7, transform: "rotate(3deg)" },
      { top: "5%", left: "38%", width: "28%", height: "35%", zIndex: 4, transform: "rotate(-2deg)" },
      { top: "45%", left: "42%", width: "35%", height: "38%", zIndex: 6, transform: "rotate(4deg)" },
      { top: "3%", right: "8%", width: "20%", height: "30%", zIndex: 3, transform: "rotate(6deg)" },
      { bottom: "6%", left: "4%", width: "34%", height: "35%", zIndex: 8, transform: "rotate(-4deg)" },
      { top: "38%", right: "6%", width: "22%", height: "32%", zIndex: 9, transform: "rotate(2deg)" },
    ];
  };

  const positions = getPositions();

  return (
    <section id="activities" className="py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-8 md:mb-10">
          <div className="inline-block bg-slate-900 dark:bg-zinc-800 text-white text-xs sm:text-sm font-semibold px-3 py-1 rounded-full mb-3 md:mb-4">
            Activities Gallery
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-zinc-100 mb-2 md:mb-3 px-4">
            My Journey & Experiences
          </h2>
          <p className="text-slate-500 dark:text-zinc-400 text-sm md:text-md max-w-lg mx-auto px-4">
            A showcase of memorable activities, events, and experiences throughout my academic and professional journey 📸
          </p>
        </div>

        {/* Gallery Container */}
        <div
          className="w-full relative overflow-hidden flex justify-center items-center bg-white dark:bg-black rounded-lg"
          style={{
            perspective: "1200px",
            minHeight: isMobile ? "100vh" : isTablet ? "90vh" : "80vh",
          }}
        >
          {/* Card Container */}
          <div
            className="relative w-full"
            style={{ 
              transformStyle: "preserve-3d",
              height: isMobile ? "100vh" : isTablet ? "90vh" : "80vh"
            }}
          >
          {activities.map((activity, index) => {
            const position = positions[index] || positions[0];

            return (
              <div
                key={activity.id}
                className="activity-card absolute overflow-hidden rounded-md md:rounded-lg shadow-xl md:shadow-2xl group cursor-pointer transition-transform hover:scale-105"
                style={{
                  ...position,
                  boxShadow: isMobile 
                    ? "0 3px 10px rgba(0,0,0,0.4)" 
                    : "0 5px 15px rgba(0,0,0,0.5)",
                }}
              >
                {/* Image */}
                <div className="relative w-full h-full">
                  <Image
                    src={activity.image}
                    alt={activity.title}
                    fill
                    className="object-cover grayscale-[80%] contrast-125 group-hover:grayscale-0 transition-all duration-500"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 40vw, 30vw"
                  />
                  
                  {/* Overlay with Info */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-2 sm:p-3 md:p-4">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <span className="text-[10px] sm:text-xs text-emerald-400 font-semibold uppercase tracking-wider">
                        {activity.category}
                      </span>
                      <h3 className="text-white font-bold text-xs sm:text-sm md:text-base lg:text-lg mt-0.5 md:mt-1 leading-tight">
                        {activity.title}
                      </h3>
                      <p className="text-white/80 text-[10px] sm:text-xs md:text-sm mt-0.5 md:mt-1 line-clamp-2">
                        {activity.description}
                      </p>
                      <span className="text-white/60 text-[10px] sm:text-xs mt-1 md:mt-2 block">
                        {activity.date}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          </div>
        </div>
      </div>
    </section>
  );
}
