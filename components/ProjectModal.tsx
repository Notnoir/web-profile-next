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
        className={`fixed inset-0 bg-black/70 backdrop-blur-md z-50 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className={`fixed inset-0 flex items-center justify-center z-50 p-4 transition-all duration-300 ${
          isOpen
            ? "scale-100 opacity-100"
            : "scale-95 opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="bg-white rounded-xl max-w-3xl w-full max-h-[88vh] overflow-hidden shadow-2xl transform transition-all duration-300 border border-gray-100"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="relative">
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 bg-white/95 hover:bg-white text-gray-600 hover:text-gray-900 p-2.5 rounded-full transition-all duration-200 shadow-lg backdrop-blur-sm cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Project Image */}
            <div className="relative h-60 overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />

              {/* Status Badge */}
              {project.status && (
                <div className="absolute bottom-4 left-6 bg-amber-400 text-amber-900 px-3 py-1.5 rounded-full font-semibold text-sm shadow-lg">
                  {project.status}
                </div>
              )}
            </div>
          </div>

          {/* Content */}
          <div className="p-6 sm:p-8 overflow-y-auto max-h-[calc(88vh-15rem)]">
            {/* Title */}
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 leading-tight">
              {project.title}
            </h2>

            {/* Description */}
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-gray-50 text-gray-700 px-4 py-2 rounded-full text-sm font-medium border border-gray-200 hover:bg-gray-100 transition-colors duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
