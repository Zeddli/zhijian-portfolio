import { HeroSection } from "@/components/portfolio/creative-hero-section"
import ProjectShowcase from "@/components/portfolio/project-showcase"
// import SkillsSection from "@/components/portfolio/skills-section"
// import ExperienceTimeline from "@/components/portfolio/experience-timeline"
import { SimpleCenteredContactForm } from "@/components/blocks/contact-forms/simple-centered-contact-form"
import { CenteredWithLogo } from "@/components/blocks/footers/centered-with-logo"
import { AboutMeSection } from "@/components/portfolio/creative-about-section"
import { SkillsShowcase } from "@/components/portfolio/interactive-skills-grid"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutMeSection />
      <ProjectShowcase />
      <SkillsShowcase />
      {/* <ExperienceTimeline /> */}
      <section id="contact">
        <SimpleCenteredContactForm />
      </section>
      <CenteredWithLogo />
    </main>
  )
}