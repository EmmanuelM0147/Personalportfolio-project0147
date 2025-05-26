"use client";

import { SectionHeading } from "@/components/ui/section-heading";
import { motion } from "framer-motion";
import { 
  VerticalTimeline, 
  VerticalTimelineElement 
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Briefcase, GraduationCap, Award } from "lucide-react";
import { useTheme } from "next-themes";

const experiences = [
  {
    title: "Senior Full-Stack Developer",
    company: "TechCorp Solutions",
    location: "San Francisco, CA",
    description: "Led development of multiple web applications using React, Node.js, and MongoDB. Implemented CI/CD pipelines and improved application performance by 40%.",
    date: "2022 - Present",
    icon: Briefcase,
    type: "work",
  },
  {
    title: "Full-Stack Developer",
    company: "Innovative Systems",
    location: "Austin, TX",
    description: "Developed and maintained e-commerce platforms. Created RESTful APIs and implemented responsive designs across various projects.",
    date: "2020 - 2022",
    icon: Briefcase,
    type: "work",
  },
  {
    title: "Frontend Developer",
    company: "Digital Creations",
    location: "Seattle, WA",
    description: "Designed and implemented user interfaces for web applications. Collaborated with design team to create pixel-perfect implementations.",
    date: "2018 - 2020",
    icon: Briefcase,
    type: "work",
  },
  {
    title: "Master's in Computer Science",
    company: "University of Technology",
    location: "Boston, MA",
    description: "Specialized in Web Technologies and Software Engineering. Graduated with honors.",
    date: "2016 - 2018",
    icon: GraduationCap,
    type: "education",
  },
  {
    title: "Excellence in Web Development",
    company: "Tech Industry Awards",
    location: "",
    description: "Recognized for outstanding contributions to web development projects and innovative solutions.",
    date: "2021",
    icon: Award,
    type: "award",
  },
];

export function ExperienceSection() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  
  return (
    <section id="experience" className="py-20 md:py-28">
      <div className="container px-4">
        <SectionHeading 
          title="Experience & Education" 
          subtitle="My professional journey, work history, and educational background"
        />
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <VerticalTimeline lineColor={isDark ? "#27272a" : "#e5e5e5"}>
            {experiences.map((experience, index) => (
              <VerticalTimelineElement
                key={index}
                date={experience.date}
                iconStyle={{ 
                  background: experience.type === "education" 
                    ? "hsl(var(--chart-3))" 
                    : experience.type === "award" 
                      ? "hsl(var(--chart-4))" 
                      : "hsl(var(--chart-1))",
                  color: "#fff" 
                }}
                contentStyle={{
                  background: isDark ? "hsl(var(--card))" : "hsl(var(--card))",
                  borderRadius: "0.5rem",
                  boxShadow: isDark 
                    ? "0 4px 6px -1px rgba(0, 0, 0, 0.2)" 
                    : "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                  border: isDark ? "1px solid hsl(var(--border))" : "1px solid hsl(var(--border))",
                }}
                contentArrowStyle={{
                  borderRight: isDark 
                    ? "7px solid hsl(var(--border))" 
                    : "7px solid hsl(var(--border))"
                }}
                icon={<experience.icon />}
              >
                <h3 className="font-semibold text-xl">{experience.title}</h3>
                <h4 className="font-medium text-muted-foreground">
                  {experience.company}
                  {experience.location && ` • ${experience.location}`}
                </h4>
                <p className="text-muted-foreground mt-3">
                  {experience.description}
                </p>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </motion.div>
      </div>
    </section>
  );
}