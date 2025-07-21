import React from "react";
import { Github, Instagram, Linkedin } from "lucide-react";
import ClientProfile from "@/components/ClientProfile";
import Image from "next/image";

// Server Component - Main page
export default function ProfilePage() {
  const projects = [
    {
      id: 1,
      title: "SIMS",
      description:
        "Student Information Management System (SIMS) is a web-based platform that helps schools organize and access student data in real-time. It reduces paper usage by storing data digitally, while also improving productivity and efficiency for school staff.",
      image: "/sims.jpg",
      techStack: ["Laravel", "Tailwind", "ExpressJS"],
      status: null,
    },
    {
      id: 2,
      title: "CSecurity Blog",
      description:
        "Csecurity is a web blog that provides information and articles regarding cyber security. This blog covers various topics, from tips on protecting personal data, types of cyber threats to analysis of the latest threats in the world of cyber security.",
      image: "/csecurity.jpg",
      techStack: ["Laravel", "Tailwind"],
      status: null,
    },
    {
      id: 3,
      title: "Sport Ease",
      description:
        "Sport Ease is a web-based platform that connects sports enthusiasts with local sports facilities. It allows users to book sports venues, find training partners, and discover local sports events.",
      image: "/sport-ease.png",
      techStack: ["Spring Boot", "Nextjs", "Tailwind"],
      status: "On Progress",
    },
    {
      id: 4,
      title: "Waste Management System",
      description:
        "Waste Management System is a web-based platform designed to streamline waste collection and disposal processes. It aims to provide an efficient and user-friendly experience for both waste collectors and residents.",
      image: "/wastemanagement.png",
      techStack: ["Laravel", "Tailwind"],
      status: null,
    },
    {
      id: 5,
      title: "KlinKlin Laundry",
      description:
        "KlinKlin Laundry is a web-based platform that offers laundry services with a focus on convenience and efficiency. Users can schedule pickups and track their laundry status in real-time.",
      image: "/klinklin.png",
      techStack: ["Spring Boot", "Tailwind"],
      status: null,
    },
    {
      id: 6,
      title: "AgriMarket",
      description:
        "AgriMarket is a web-based platform that connects farmers with buyers, streamlining the process of selling and purchasing agricultural products. It aims to promote local farming and provide a marketplace for fresh produce.",
      image: "/agrimarket.png",
      techStack: ["React", "Tailwind", "ExpressJS"],
      status: null,
    },
  ];

  return (
    <div
      className="bg-black text-white"
      style={{ fontFamily: "Nunito, sans-serif" }}
    >
      {/* Pass projects data to client component */}
      <ClientProfile projects={projects} />

      {/* Static sections that don't need client-side interactivity */}
      <ProfileSection />
      <AboutSection />
      <ProjectsSection projects={projects} />
      <ContactSection />
      <Footer />
    </div>
  );
}

// Server Components for static content
function ProfileSection() {
  return (
    <section
      id="profile"
      className="min-h-screen bg-black relative overflow-hidden pt-4 sm:pt-6 lg:pt-10"
      style={{
        backgroundImage:
          "radial-gradient(circle at bottom, rgba(53, 255, 255, 0.15), transparent 70%)",
      }}
    >
      {/* Falling Stars Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="shooting-star"
            style={{
              left: `${Math.random() * 40}%`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${2 + Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex flex-col justify-center items-center min-h-screen py-12 sm:py-16 lg:py-20 gap-8 sm:gap-10 lg:gap-12">
          <div className="text-center px-2 sm:px-4">
            <h3 className="text-white text-2xl sm:text-3xl lg:text-4xl mb-2">
              Helloo,
            </h3>
            <h2 className="text-cyan-300 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-2 sm:mb-4">
              I&apos;m Riza Maulana Tamsirin
            </h2>
            <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl xl:text-7xl mb-6 sm:mb-8 leading-tight font-bold">
              Frontend Developer
            </h1>
            <p className="text-gray-300 text-base sm:text-lg lg:text-xl mb-8 sm:mb-10 max-w-2xl lg:max-w-4xl leading-relaxed mx-auto">
              I am a student at ITENAS majoring in Informatics, a Frontend
              Engineer, and currently learning Fullstack Engineer skills to
              enhance my ability to develop web applications comprehensively.
            </p>
            <a
              href="#about"
              className="inline-block text-cyan-300 font-bold border-2 border-cyan-300 px-6 sm:px-8 py-2 sm:py-3 rounded-full transition-all duration-300 hover:text-white hover:bg-cyan-500 hover:scale-105 no-underline text-base sm:text-lg"
            >
              About Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section
      id="about"
      className="min-h-screen bg-black relative py-12 sm:py-16 lg:py-20"
      style={{
        backgroundImage:
          "radial-gradient(circle at top, rgba(53, 255, 255, 0.15), transparent 70%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="flex items-center justify-center text-3xl sm:text-4xl lg:text-5xl font-bold mb-12 sm:mb-16 lg:mb-20">
          <div className="flex-1 border-b border-gray-700 mx-2 sm:mx-4"></div>
          <span className="text-cyan-300 px-3 sm:px-6 whitespace-nowrap">
            About
          </span>
          <div className="flex-1 border-b border-gray-700 mx-2 sm:mx-4"></div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 sm:gap-12 lg:gap-16">
          {/* Image Section */}
          <div className="flex-shrink-0 order-1 lg:order-none">
            <div className="relative animate-pulse">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-2xl sm:blur-3xl opacity-30"></div>
              <Image
                src="/reactjs.png"
                alt="React JS"
                width={288}
                height={288}
                className="relative w-48 h-48 sm:w-60 sm:h-60 lg:w-72 lg:h-72 rounded-2xl shadow-2xl mx-auto"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="flex-1 order-2 lg:order-none w-full">
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-gray-800">
              <p className="text-white text-base sm:text-lg lg:text-xl leading-relaxed">
                I am an Informatics student at ITENAS, focusing on software
                development. As a Frontend Engineer, I am skilled in creating
                attractive user interfaces using HTML, CSS, JavaScript, and
                various CSS frameworks such as Bootstrap and TailwindCSS. I am
                also learning Fullstack skills, including backend development
                with PHP, Laravel, and Express.js. My goal is to combine
                frontend and backend abilities to build scalable and
                comprehensive web applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  status: string | null;
}

function ProjectsSection({ projects }: { projects: Project[] }) {
  return (
    <section id="projects" className="bg-black py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="flex items-center justify-center text-3xl sm:text-4xl lg:text-5xl font-bold mb-12 sm:mb-16 lg:mb-20">
          <div className="flex-1 border-b border-gray-700 mx-2 sm:mx-4"></div>
          <span className="text-cyan-300 px-3 sm:px-6 whitespace-nowrap">
            Projects
          </span>
          <div className="flex-1 border-b border-gray-700 mx-2 sm:mx-4"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group bg-gray-900/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 hover:shadow-cyan-500/30 border border-gray-800 hover:scale-105 ${
                index === 0
                  ? "animate-[fadeInUp_1s_ease-out]"
                  : index === 1
                  ? "animate-[fadeInUp_1s_ease-out_0.2s_both]"
                  : "animate-[fadeInUp_1s_ease-out_0.4s_both]"
              }`}
            >
              <div className="relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={208}
                  className="w-full h-36 sm:h-48 lg:h-52 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {project.status && (
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-yellow-400 text-black px-2 sm:px-3 py-1 rounded-full font-bold text-xs sm:text-sm shadow-lg">
                    {project.status}
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-4 sm:p-6">
                <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-cyan-300 group-hover:text-white transition-colors">
                  {project.title}
                </h2>
                <p className="text-gray-400 text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed line-clamp-3 sm:line-clamp-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-gray-800 border border-gray-700 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm text-cyan-300 font-medium transition-colors hover:bg-cyan-500/20"
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
  );
}

function ContactSection() {
  return (
    <section id="contact" className="bg-black py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 sm:gap-12 lg:gap-16">
          {/* Content Section */}
          <div className="flex-1 order-2 lg:order-1 w-full">
            <div className="bg-gray-900/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 lg:p-12 shadow-2xl border border-gray-800">
              <h1 className="text-cyan-300 text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
                Contact Me
              </h1>
              <span className="text-white text-lg sm:text-xl mb-4 sm:mb-6 block">
                Let&apos;s go! Get in touch with me 👋
              </span>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
                Thank you for taking the time to visit my website! If you would
                like to connect or have any questions, please feel free to reach
                out using the contact information provided below. You can also
                send a message directly to my Gmail at riza80448@gmail.com. I
                look forward to hearing from you!
              </p>
              <div className="flex flex-wrap gap-3 sm:gap-4">
                <a
                  href="https://www.instagram.com/rizamaulana04/"
                  className="bg-gradient-to-r from-pink-500 to-purple-500 p-3 sm:p-4 rounded-full text-white font-medium no-underline hover:scale-105 transition-transform duration-300 shadow-lg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
                <a
                  href="https://github.com/Notnoir"
                  className="flex items-center justify-center bg-gradient-to-r from-gray-800 to-gray-900 p-3 sm:p-4 rounded-full text-white font-medium no-underline hover:scale-105 transition-transform duration-300 shadow-lg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
                <span className="bg-gradient-to-r from-blue-500 to-blue-700 p-3 sm:p-4 rounded-full text-white font-medium shadow-lg cursor-not-allowed">
                  <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
                </span>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex-shrink-0 order-1 lg:order-2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-xl opacity-30"></div>
              <Image
                src="https://media.giphy.com/media/Mq4Trcf2D6FM0fiMUE/giphy.gif"
                alt="Contact Animation"
                width={320}
                height={320}
                unoptimized
                className="relative w-48 h-48 sm:w-60 sm:h-60 lg:w-72 lg:h-72 xl:w-80 xl:h-80 rounded-full object-cover shadow-2xl border-4 border-cyan-300/30 mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
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
