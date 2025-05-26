"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/ui/section-heading";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";

type ProjectCategory = "All" | "Web" | "Mobile" | "Backend";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with shopping cart, payment processing, and admin dashboard.",
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    demoUrl: "#",
    githubUrl: "#",
    category: "Web",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A productive birthday reminder application with data input interface, birthday notification , and real-time updates.",
    image: "https://images.pexels.com/photos/1509534/pexels-photo-1509534.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    tags: ["React", "TypeScript", "Firebase", "Material UI"],
    demoUrl: "https://birthday-reminder-app7.vercel.app/",
    githubUrl: "https://github.com/EmmanuelM0147/Birthday-Reminder-app7",
    category: "Web",
  },
  {
    id: 3,
    title: "Finance Multisig Wallet Mobile App",
    description: "A mobile application multisignature wallet solution designed to enhance the security, transparency, and governance of digital assets in decentralized environments. ",
    image: "https://images.pexels.com/photos/6802042/pexels-photo-6802042.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    tags: ["React Native", "Redux", "Firebase", "Chart.js"],
    demoUrl: "https://ecla-safewallet.vercel.app/",
    githubUrl: "https://github.com/EmmanuelM0147/Ecla-safewallet",
    category: "Mobile",
  },
  {
    id: 4,
    title: "Real-time Restaurant Chatbot",
    description: "A scalable real-time ordering system API with WebSocket support, user data management, and message persistence.",
    image: "https://images.pexels.com/photos/7516363/pexels-photo-7516363.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    tags: ["Node.js", "Express", "Socket.io", "MongoDB"],
    demoUrl: "https://restaurant-chatbot-pj.vercel.app/",
    githubUrl: "https://github.com/EmmanuelM0147/Restaurant-chatbot-pj",
    category: "Backend",
  },
  {
    id: 5,
    title: "Weather Dashboard",
    description: "An interactive weather dashboard showing current conditions and forecasts with beautiful visualizations.",
    image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    tags: ["React", "OpenWeather API", "D3.js", "Tailwind CSS"],
    demoUrl: "https://weather-app-kappa-khaki-70.vercel.app/",
    githubUrl: "https://github.com/EmmanuelM0147/Weather-app-",
    category: "Web",
  },
  {
    id: 6,
    title: "Content Management System",
    description: "A headless CMS with a modern admin interface, content modeling, and API-first architecture.",
    image: "https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    tags: ["Next.js", "GraphQL", "PostgreSQL", "AWS"],
    demoUrl: "https://headless-cms-project-two.vercel.app/",
    githubUrl: "https://github.com/EmmanuelM0147/Headless-cms-project",
    category: "Web",
  },
];

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>("All");
  
  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);
  
  const categories: ProjectCategory[] = ["All", "Web", "Mobile", "Backend"];
  
  return (
    <section id="projects" className="py-20 md:py-28 bg-accent/30">
      <div className="container px-4">
        <SectionHeading 
          title="My Projects" 
          subtitle="A selection of my recent work, personal projects, and open-source contributions"
        />
        
        {/* Category Filter */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                size="sm"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

interface ProjectCardProps {
  project: typeof projects[0];
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group bg-card rounded-lg overflow-hidden border shadow-sm hover:shadow-md transition-all duration-300">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform group-hover:scale-105 duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-5 space-y-4">
        <h3 className="text-xl font-semibold">{project.title}</h3>
        <p className="text-muted-foreground text-sm line-clamp-2">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 my-3">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="font-normal">
              {tag}
            </Badge>
          ))}
        </div>
        <div className="flex gap-3 pt-2">
          <Button asChild size="sm" variant="default">
            <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
              <ExternalLink size={14} />
              Live Demo
            </Link>
          </Button>
          <Button asChild size="sm" variant="outline">
            <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
              <Github size={14} />
              Code
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}