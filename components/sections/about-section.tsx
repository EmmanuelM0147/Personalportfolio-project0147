"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

const skills = [
  "JavaScript", "TypeScript", "React", "Next.js", 
  "Node.js", "Express", "MongoDB", "SQL",
  "GraphQL", "Tailwind CSS", "Redux", "Git",
  "Docker", "AWS", "CI/CD", "Unit Testing"
];

export function AboutSection() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Emmanuel-Okeowo-Resume.pdf';
    link.download = 'Emmanuel-Okeowo-Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="py-20 md:py-28">
      <div className="container px-4">
        <SectionHeading 
          title="About Me" 
          subtitle="My background, skills, and passion for creating exceptional digital experiences"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12 items-center">
          {/* Profile Image */}
          <motion.div 
            className="md:col-span-2 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative w-60 h-60 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20">
              <Image
                src="https://res.cloudinary.com/dtzv2ckwm/image/upload/v1747999130/IMG_0392_anncdb.jpg"
                alt="Emmanuel Okeowo"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 240px, 320px"
                priority
              />
            </div>
          </motion.div>
          
          {/* Bio */}
          <motion.div 
            className="md:col-span-3 space-y-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">
                Full-Stack Developer & Tech Enthusiast
              </h3>
              <p className="text-muted-foreground">
                With over 3 years of experience in web and mobile development, 
                I specialize in creating elegant, user-friendly, and high-performance
                applications using modern technologies.
              </p>
              <p className="text-muted-foreground">
                My expertise spans the entire development lifecycle, from conceptualization
                and design to deployment and maintenance. I'm passionate about writing clean,
                maintainable code and implementing best practices to deliver exceptional 
                digital experiences.
              </p>
              <p className="text-muted-foreground">
                When I'm not coding, you'll find me exploring new technologies, contributing
                to open-source projects, or sharing my knowledge through technical articles
                and mentoring junior developers.
              </p>
            </div>
            
            <Button variant="outline" className="gap-2" onClick={handleDownload}>
              <Download size={16} />
              Download Resume
            </Button>
          </motion.div>
        </div>
        
        {/* Skills Grid */}
        <motion.div 
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl font-semibold mb-6 text-center">Technical Skills</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                className="bg-accent/50 rounded-md px-4 py-3 text-center hover:bg-accent transition-colors"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.2, delay: index * 0.05 }}
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}