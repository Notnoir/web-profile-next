import React from "react";
import ClientProfile from "@/components/ClientProfile";
import {
  ProfileSection,
  AboutSection,
  ProjectsSection,
  ContactSection,
  Footer,
} from "@/components/sections";
import { Project } from "@/types/project";

// Server Component - Main page
export default function ProfilePage() {
  const projects: Project[] = [
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
