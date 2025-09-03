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
      <section id="projects" className="bg-black py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          <div className="mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8">
              Projects
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                onClick={() => handleCardClick(project)}
                className={`relative group duration-500 cursor-pointer overflow-hidden text-gray-50 h-72 w-full rounded-2xl hover:duration-700 shadow-lg hover:shadow-2xl hover:shadow-cyan-500/10 border border-white/5 hover:border-cyan-400/30 transition-all hover:scale-105 ${
                  index === 0
                    ? "animate-[fadeInUp_1s_ease-out]"
                    : index === 1
                    ? "animate-[fadeInUp_1s_ease-out_0.2s_both]"
                    : "animate-[fadeInUp_1s_ease-out_0.4s_both]"
                }`}
              >
                {/* Background Image */}
                <div className="w-full h-72 relative overflow-hidden rounded-2xl">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:brightness-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/80 group-hover:from-black/20 group-hover:to-black/90 transition-all duration-500"></div>

                  {/* Overlay gradient for better text contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Top Icons */}
                  <div className="absolute top-0 left-0 right-0 flex justify-between p-3">
                    {/* Status Badge */}
                    {project.status && (
                      <div className="bg-yellow-400 text-black px-3 py-1 rounded-full font-bold text-xs">
                        {project.status}
                      </div>
                    )}
                  </div>
                </div>

                {/* Content that slides up on hover */}
                <div className="absolute bg-white/95 backdrop-blur-sm -bottom-24 w-full p-4 flex flex-col gap-2 group-hover:-bottom-0 group-hover:duration-600 duration-500 border-t border-white/20">
                  <div className="flex flex-wrap gap-1 mb-2">
                    {project.techStack.slice(0, 2).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-cyan-600 font-semibold text-xs uppercase tracking-wide"
                      >
                        {tech}
                        {techIndex <
                          Math.min(project.techStack.length, 2) - 1 && " • "}
                      </span>
                    ))}
                  </div>
                  <span className="text-gray-900 font-bold text-xl leading-tight">
                    {project.title}
                  </span>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* All Tech Stack */}
                  <div className="flex flex-wrap gap-1 mt-2">
                    {project.techStack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded-lg text-xs font-medium border border-gray-200"
                      >
                        {tech}
                      </span>
                    ))}
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
