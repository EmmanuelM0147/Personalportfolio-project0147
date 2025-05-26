"use client";

import { SectionHeading } from "@/components/ui/section-heading";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { 
  Globe, 
  Server, 
  Database, 
  Laptop, 
  Smartphone, 
  Layers, 
  PenTool, 
  Terminal 
} from "lucide-react";

interface TechSkill {
  name: string;
  level: "Beginner" | "Intermediate" | "Advanced" | "Expert";
  icon?: string;
}

interface TechCategory {
  name: string;
  icon: React.ReactNode;
  skills: TechSkill[];
}

const techStack: TechCategory[] = [
  {
    name: "Frontend",
    icon: <Globe className="h-5 w-5" />,
    skills: [
      { name: "HTML/CSS", level: "Expert" },
      { name: "JavaScript", level: "Expert" },
      { name: "TypeScript", level: "Advanced" },
      { name: "React", level: "Expert" },
      { name: "Next.js", level: "Advanced" },
      { name: "Redux", level: "Advanced" },
      { name: "Tailwind CSS", level: "Expert" },
      { name: "Framer Motion", level: "Intermediate" },
      { name: "Storybook", level: "Advanced" },
      { name: "Jest", level: "Advanced" },
      { name: "Webpack", level: "Intermediate" },
      { name: "Vite", level: "Advanced" },
    ],
  },
  {
    name: "Backend",
    icon: <Server className="h-5 w-5" />,
    skills: [
      { name: "Node.js", level: "Expert" },
      { name: "Express", level: "Expert" },
      { name: "NestJS", level: "Intermediate" },
      { name: "REST APIs", level: "Expert" },
      { name: "GraphQL", level: "Advanced" },
      { name: "Authentication", level: "Advanced" },
      { name: "Microservices", level: "Intermediate" },
      { name: "Socket.io", level: "Advanced" },
      { name: "Serverless", level: "Intermediate" },
    ],
  },
  {
    name: "Database",
    icon: <Database className="h-5 w-5" />,
    skills: [
      { name: "MongoDB", level: "Expert" },
      { name: "PostgreSQL", level: "Advanced" },
      { name: "MySQL", level: "Advanced" },
      { name: "Redis", level: "Intermediate" },
      { name: "Mongoose", level: "Expert" },
      { name: "Prisma", level: "Advanced" },
      { name: "SQL", level: "Advanced" },
    ],
  },
  {
    name: "Mobile",
    icon: <Smartphone className="h-5 w-5" />,
    skills: [
      { name: "React Native", level: "Advanced" },
      { name: "Expo", level: "Advanced" },
      { name: "iOS Development", level: "Intermediate" },
      { name: "Android Development", level: "Intermediate" },
      { name: "Mobile UI Design", level: "Advanced" },
      { name: "Push Notifications", level: "Intermediate" },
    ],
  },
  {
    name: "DevOps",
    icon: <Terminal className="h-5 w-5" />,
    skills: [
      { name: "Git", level: "Expert" },
      { name: "GitHub Actions", level: "Advanced" },
      { name: "Docker", level: "Advanced" },
      { name: "AWS", level: "Intermediate" },
      { name: "Vercel", level: "Expert" },
      { name: "Netlify", level: "Expert" },
      { name: "CI/CD", level: "Advanced" },
      { name: "Linux", level: "Advanced" },
    ],
  },
  {
    name: "Design",
    icon: <PenTool className="h-5 w-5" />,
    skills: [
      
      { name: "Sketch", level: "Intermediate" },
      { name: "UI/UX Design", level: "Advanced" },
      { name: "Wireframing", level: "Advanced" },
      { name: "Prototyping", level: "Advanced" },
    ],
  },
];

export function TechStackSection() {
  return (
    <section id="skills" className="py-20 md:py-28 bg-accent/30">
      <div className="container px-4">
        <SectionHeading 
          title="Technology Stack" 
          subtitle="Tools, languages, and technologies I use to bring products to life"
        />
        
        <Tabs defaultValue="Frontend" className="max-w-4xl mx-auto">
          <TabsList className="flex flex-wrap justify-center gap-2 mb-8">
            {techStack.map((category) => (
              <TabsTrigger 
                key={category.name} 
                value={category.name}
                className="flex items-center gap-1"
              >
                {category.icon}
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {techStack.map((category) => (
            <TabsContent key={category.name} value={category.name}>
              <motion.div 
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="bg-card border rounded-lg p-4 flex flex-col items-center justify-center text-center gap-2 hover:shadow-md transition-all"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, delay: index * 0.05 }}
                  >
                    <span className="text-lg font-medium">{skill.name}</span>
                    <Badge 
                      variant={
                        skill.level === "Expert" ? "default" :
                        skill.level === "Advanced" ? "secondary" :
                        skill.level === "Intermediate" ? "outline" : "outline"
                      }
                    >
                      {skill.level}
                    </Badge>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}