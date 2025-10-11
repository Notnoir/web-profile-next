"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Project } from "@/types/project";
import ProjectModal from "@/components/ProjectModal";

interface ProjectsSectionProps {
  projects: Project[];
}

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300); // Wait for animation to finish
  };
  return (
    <>
      <section
        id="projects"
        className="bg-white py-16 sm:py-20 lg:py-24 border-t-4 border-[#F1F5F9]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title - Neo Brutalism Style */}
          <div className="mb-12 sm:mb-16">
            <div className="inline-block bg-[#FCD34D] text-[#0F172A] neo-border neo-shadow-lg px-8 py-4 -rotate-1 mb-8">
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight">
                Projects
              </h2>
            </div>
            <p className="text-[#64748B] text-xl font-bold max-w-2xl font-mono">
              Check out my latest work →
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {projects.map((project, index) => (
              <div
                key={project.id}
                onClick={() => handleCardClick(project)}
                className={`bg-[#F1F5F9] neo-border neo-shadow-hover cursor-pointer overflow-hidden transform transition-all hover:-rotate-1 ${
                  index % 3 === 0
                    ? "rotate-1"
                    : index % 3 === 1
                    ? "-rotate-1"
                    : "rotate-0"
                }`}
              >
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden border-b-4 border-black">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-110"
                  />

                  {/* Status Badge */}
                  {project.status && (
                    <div className="absolute top-4 right-4 bg-[#A78BFA] text-white px-4 py-2 font-black text-xs uppercase neo-border rotate-3">
                      {project.status}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 bg-[#F1F5F9]">
                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`px-3 py-1 text-xs font-black uppercase neo-border ${
                          techIndex === 0
                            ? "bg-[#7DD3FC] text-[#0F172A]"
                            : techIndex === 1
                            ? "bg-[#FDE68A] text-[#0F172A]"
                            : "bg-[#C4B5FD] text-[#0F172A]"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-black text-[#0F172A] mb-3 leading-tight uppercase">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#334155] text-sm leading-relaxed line-clamp-3 font-medium">
                    {project.description}
                  </p>

                  {/* View More Button */}
                  <div className="mt-6">
                    <div className="inline-block bg-[#0F172A] text-[#FCD34D] px-6 py-3 font-black uppercase text-sm hover:bg-[#38BDF8] hover:text-[#0F172A] transition-colors neo-border">
                      View Details →
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
}
