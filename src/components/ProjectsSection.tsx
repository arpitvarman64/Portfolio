
import React from "react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "E-Commerce Dashboard",
    description: "A comprehensive dashboard for e-commerce businesses with analytics, inventory management, and order processing features.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    tags: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
    link: "#",
  },
  {
    id: 2,
    title: "Finance Tracker App",
    description: "Personal finance application allowing users to track expenses, set budgets, and visualize spending patterns.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    tags: ["React", "Firebase", "CSS Modules"],
    link: "#",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "Personal portfolio site showcasing projects and skills with a minimalist, modern aesthetic.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    link: "#",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 md:py-32 bg-secondary/30 dark:bg-gray-800/30 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-medium text-primary mb-4">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight dark:text-white">
            Featured Projects
          </h2>
          <p className="text-muted-foreground dark:text-gray-300">
            Here are some of my recent projects that showcase my skills and experience in
            web development. Each project represents my ability to solve complex problems and create intuitive user experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    description: string;
    image: string;
    tags: string[];
    link: string;
  };
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <div 
      className="group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors dark:text-white">
          {project.title}
        </h3>
        <p className="text-muted-foreground dark:text-gray-400 text-sm mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium bg-secondary dark:bg-gray-800 dark:text-gray-300 px-2.5 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <a
          href={project.link}
          className="inline-flex items-center text-sm font-medium text-primary hover:underline"
        >
          View Project <ArrowUpRight className="ml-1 h-4 w-4" />
        </a>
      </div>
    </div>
  );
}
