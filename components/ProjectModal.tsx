"use client";

import React from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { Project } from "@/types/project";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({
  project,
  isOpen,
  onClose,
}: ProjectModalProps) {
  if (!project || !isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/80 z-50 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Modal - Neo Brutalism Style */}
      <div
        className={`fixed inset-0 flex items-center justify-center z-50 p-4 transition-all duration-300 ${
          isOpen
            ? "scale-100 opacity-100"
            : "scale-95 opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="bg-white neo-border-thick neo-shadow-lg max-w-3xl w-full max-h-[88vh] overflow-hidden transform transition-all duration-300 rotate-0 hover:-rotate-1"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="relative">
            {/* Close Button - Neo Style */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 bg-[#FF006E] hover:bg-[#FFEB3B] text-white hover:text-black p-3 neo-border neo-shadow transition-all duration-200 cursor-pointer font-black text-xl"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Project Image */}
            <div className="relative h-60 overflow-hidden border-b-6 border-black">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />

              {/* Status Badge */}
              {project.status && (
                <div className="absolute bottom-4 left-6 bg-[#FFEB3B] text-black px-4 py-2 neo-border font-black text-sm uppercase rotate-2">
                  {project.status}
                </div>
              )}
            </div>
          </div>

          {/* Content */}
          <div className="p-6 sm:p-8 overflow-y-auto max-h-[calc(88vh-15rem)] bg-[#00F5FF]">
            {/* Title Box */}
            <div className="bg-black text-[#FFEB3B] neo-border neo-shadow px-6 py-4 mb-6 -rotate-1">
              <h2 className="text-2xl sm:text-3xl font-black uppercase leading-tight">
                {project.title}
              </h2>
            </div>

            {/* Description */}
            <div className="bg-white neo-border neo-shadow p-6 mb-6">
              <p className="text-black text-base sm:text-lg leading-relaxed font-medium">
                {project.description}
              </p>
            </div>

            {/* Tech Stack */}
            <div>
              <div className="bg-[#FF006E] text-white neo-border px-6 py-3 inline-block mb-4 rotate-1">
                <h3 className="text-lg font-black uppercase">Technologies</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {project.techStack.map((tech, index) => {
                  const colors = [
                    "bg-[#FFEB3B]",
                    "bg-[#00FF85]",
                    "bg-white",
                    "bg-[#FF6B00] text-white",
                    "bg-[#B026FF] text-white",
                    "bg-black text-[#00FF85]",
                  ];
                  return (
                    <span
                      key={index}
                      className={`${
                        colors[index % colors.length]
                      } neo-border px-4 py-2 text-sm font-black uppercase neo-shadow-hover`}
                    >
                      {tech}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
