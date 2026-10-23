"use client";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Atom,
  Code2,
  Lightbulb,
  Plus,
} from "lucide-react";
import { profile, venture } from "@/content/portfolio";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { InteractiveTiltCard } from "@/components/ui/tilt-card";
import { GlassFolderCard } from "@/components/ui/glass-folder-card";
import { PortfolioFooter } from "./portfolio-footer";
import { BeamHero } from "./beam-hero";
import { Navigation } from "./navigation";
import { EducationExperience } from "./education-experience";
import { SkillsMarquee } from "./skills-marquee";
import { PublicationCards } from "./publication-cards";
import { ProjectCarousel } from "./project-carousel";
import { ActivitiesAwards } from "./activities-awards";
import { ContactSection } from "./contact-section";
function Label({
  number,
  children,
}: {
  number: string;
  children: React.ReactNode;
}) {
  return (
    <div className="section-label">
      <span>{number}</span>
      {children}
    </div>
  );
}
export function Portfolio() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navigation />
      <main id="main">
        <BeamHero paused={false}>
          <div className="hero-content container">
            <div className="hero-copy">
              <div className="eyebrow">
                <span className="small-cross" aria-hidden="true">
                  ✳
                </span>{" "}
                CURIOSITY. CODE. POSSIBILITY.
              </div>
              <p className="greeting">
                <span className="sr-only">{profile.greeting}</span>
                <span className="typewriter" aria-hidden="true">
                  <span>{profile.greeting}</span>
                </span>
              </p>
              <h1 aria-label={profile.headline}>
                Turning Ideas into
                <br /> <span>Intelligent</span> Systems
                <span className="headline-dot">.</span>
              </h1>
              <p className="hero-role">{profile.role}</p>
              <p className="hero-description">{profile.subheadline}</p>
              <div className="hero-actions">
                <Button asChild>
                  <a href="#projects">
                    Explore my work{" "}
                    <ArrowUpRight size={17} aria-hidden="true" />
                  </a>
                </Button>
                <a href="#contact" className="text-link">
                  Let’s connect <ArrowRight size={17} aria-hidden="true" />
                </a>
              </div>
            </div>
            <div className="hero-portrait">
              <InteractiveTiltCard
                image={{
                  src: "/hero_picture.jpg",
                  alt: "Angeline Mary Marchella beneath flowering trees",
                }}
                tiltFactor={12}
                hoverScale={1.035}
                borderRadius={18}
                backgroundColor="#381a2a"
                shadowColor="rgba(0,0,0,.4)"
                shadowIntensity={0.55}
                glareIntensity={0.25}
                objectPosition="50% 65%"
              />
              <div className="portrait-caption">
                <span>ANGELINE MARY MARCHELLA</span>
                <span>RESEARCH. BUILD. CREATE.</span>
              </div>
            </div>
          </div>
          <div className="hero-bottom container">
            <a href="#about">
              <ArrowDown size={14} aria-hidden="true" /> SCROLL TO DISCOVER
            </a>
            <span className="hero-note">RESEARCH-DRIVEN. HUMAN-FOCUSED.</span>
          </div>
        </BeamHero>
        <section className="about-section section" id="about">
          <div className="container">
            <Label number="01">A LITTLE ABOUT ME</Label>
            <div className="about-grid">
              <h2>
                Curious by nature.
                <br />A builder <em>at heart.</em>
              </h2>
              <div className="about-copy">
                <p>
                  I’m Angeline Mary Marchella — an AI Researcher, Software
                  Engineer, and Tech Founder.
                </p>
                <p>
                  I’m interested in what happens when ideas move beyond the
                  page: when research becomes software, and software becomes
                  something meaningful in the world.
                </p>
                <a
                  className="about-experience-link"
                  href="#education-experience"
                >
                  Education & Experience{" "}
                  <ArrowDown size={16} aria-hidden="true" />
                </a>
              </div>
            </div>
            <div className="pillars">
              {[
                {
                  icon: Atom,
                  title: "Explore",
                  label: "AI RESEARCH",
                  href: "#research",
                  linkLabel: "View research",
                  copy: "Ask better questions. Explore what intelligent technology can become.",
                },
                {
                  icon: Code2,
                  title: "Build",
                  label: "SOFTWARE ENGINEERING",
                  href: "#projects",
                  linkLabel: "View projects",
                  copy: "Turn complex ideas into thoughtful, usable systems.",
                },
                {
                  icon: Lightbulb,
                  title: "Create",
                  label: "TECH ENTREPRENEURSHIP",
                  href: "#ventures",
                  linkLabel: "View ventures",
                  copy: "Connect technical possibility with meaningful real-world needs.",
                },
              ].map((p, index) => (
                <GlassFolderCard
                  key={p.title}
                  title={p.title}
                  label={p.label}
                  description={p.copy}
                  icon={p.icon}
                  href={p.href}
                  linkLabel={p.linkLabel}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>
        <EducationExperience />
        <SkillsMarquee />
        <section className="research-section section" id="research">
          <div className="container">
            <Label number="03">RESEARCH & PUBLICATIONS</Label>
            <div className="section-heading">
              <h2>
                Good systems start
                <br />
                with <em>better questions.</em>
              </h2>
              <p>
                Exploring ideas.
                <br />
                Building understanding.
              </p>
            </div>
            <PublicationCards />
          </div>
        </section>
        <section className="projects-section section" id="projects">
          <div className="container">
            <Label number="04">PROJECTS</Label>
            <div className="section-heading">
              <h2>
                Ideas, made <em>tangible.</em>
              </h2>
              <p>
                A space for experiments
                <br />
                and things worth building.
              </p>
            </div>
            <ProjectCarousel />
          </div>
        </section>
        <section className="ventures-section section" id="ventures">
          <div className="container venture-grid">
            <div>
              <Label number="05">VENTURES</Label>
              <h2>
                From “what if”
                <br />
                to <em>what’s next.</em>
              </h2>
            </div>
            <div className="venture-card">
              <div className="venture-icon">
                <Plus size={32} strokeWidth={1} aria-hidden="true" />
              </div>
              <Badge>VENTURE PLACEHOLDER</Badge>
              <h3>{venture.title}</h3>
              <p>{venture.description}</p>
              <a href="#contact" className="text-link">
                Start a conversation{" "}
                <ArrowUpRight size={18} aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>
        <ActivitiesAwards />
        <ContactSection />
      </main>
      <PortfolioFooter />
    </>
  );
}
