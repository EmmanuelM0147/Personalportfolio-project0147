import { HeroSection } from '@/components/sections/hero-section';
import { AboutSection } from '@/components/sections/about-section';
import { ProjectsSection } from '@/components/sections/projects-section';
import { ExperienceSection } from '@/components/sections/experience-section';
import { TechStackSection } from '@/components/sections/tech-stack-section';
import { ContactSection } from '@/components/sections/contact-section';

export default function Home() {
  return (
    <div className="w-full">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ExperienceSection />
      <TechStackSection />
      <ContactSection />
    </div>
  );
}