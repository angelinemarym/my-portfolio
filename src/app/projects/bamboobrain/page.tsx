import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowLeft,
  ArrowUpRight,
  Github,
  Play,
  Trophy,
} from "lucide-react";
import { Navigation } from "@/components/portfolio/navigation";
import { PortfolioFooter } from "@/components/portfolio/portfolio-footer";
import { ProjectGallery } from "@/components/portfolio/project-gallery";
import { BeamSection } from "@/components/portfolio/beam-hero";
import {
  bambooBenefits,
  bambooGoals,
  bambooLinks,
  bambooScreens,
  bambooStack,
  bambooWorkflow,
} from "@/content/bamboobrain";

export const metadata: Metadata = {
  title:
    "BambooBrain — Agentic Mandarin Study Companion | Angeline Mary Marchella",
  description:
    "The story, goals, learning experience, and Azure architecture behind BambooBrain, second-place winner at Code; Without Barriers Hackathon 2026.",
  openGraph: {
    title: "BambooBrain — Grow your Chinese. Break every barrier.",
    description:
      "A personal AI study companion for learning Mandarin, built around your content, goals, and progress.",
  },
};

function SectionLabel({
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

export default function BambooBrainPage() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navigation projectPage />
      <main id="main" className="case-study case-bamboo">
        <BeamSection
          className="case-hero"
          id="project-top"
          aria-labelledby="case-title"
        >
          <div className="container">
            <Link href="/#projects" className="case-back">
              <ArrowLeft size={16} aria-hidden="true" /> Back to projects
            </Link>
            <div className="case-hero-grid">
              <div>
                <p className="case-eyebrow">
                  PROJECT CASE STUDY / AI & LANGUAGE LEARNING
                </p>
                <h1 id="case-title">
                  BambooBrain<span>.</span>
                </h1>
                <p className="case-hero-statement">
                  Grow your Chinese.
                  <br />
                  <em>Break every barrier.</em>
                </p>
              </div>
              <div className="case-hero-copy">
                <p>
                  A personal AI scholar for learning Mandarin—turning your own
                  materials into vocabulary, practice, and an adaptive study
                  journey toward your goals.
                </p>
                <div className="case-hero-actions">
                  <a href="#product" className="case-primary-link">
                    Explore the product{" "}
                    <ArrowDown size={16} aria-hidden="true" />
                  </a>
                  <a
                    href={bambooLinks.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="case-source-link"
                  >
                    <Play size={16} aria-hidden="true" /> Watch demo{" "}
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
            <dl className="case-facts">
              <div>
                <dt>DOMAIN</dt>
                <dd>Language learning</dd>
              </div>
              <div>
                <dt>PRODUCT</dt>
                <dd>Personal AI study companion</dd>
              </div>
              <div>
                <dt>CORE IDEA</dt>
                <dd>Adaptive Mandarin learning</dd>
              </div>
              <div>
                <dt>BUILT WITH</dt>
                <dd>Next.js · .NET · Azure AI</dd>
              </div>
            </dl>
          </div>
        </BeamSection>

        <nav
          className="case-contents container"
          aria-label="Case study sections"
        >
          {[
            ["Background", "#background"],
            ["Goals", "#goals"],
            ["Product", "#product"],
            ["Benefits", "#benefits"],
            ["Tech stack", "#tech-stack"],
            ["Recognition", "#recognition"],
          ].map(([label, href], i) => (
            <a key={href} href={href}>
              <span>0{i + 1}</span>
              {label}
              <ArrowDown size={13} aria-hidden="true" />
            </a>
          ))}
        </nav>

        <section className="section container" id="background">
          <SectionLabel number="01">THE BACKGROUND</SectionLabel>
          <div className="case-editorial-grid">
            <h2>
              Living in the language.
              <br />
              <em>Still finding a way in.</em>
            </h2>
            <div className="case-prose">
              <p>
                BambooBrain began with a personal challenge: even while living
                in Beijing, the language barrier could still feel like a wall.
                Being surrounded by Mandarin did not automatically make the
                learning journey clear or personal.
              </p>
              <p>
                Static lessons can give learners the same path regardless of the
                documents they read, the conversations they need to have, or the
                exam they are preparing for. The question behind BambooBrain
                became: what does this particular learner need right now?
              </p>
              <p>
                The answer is an agentic study companion that learns alongside
                you. Your uploaded materials become the curriculum, your goals
                shape the plan, and your activity helps determine what comes
                next.
              </p>
            </div>
          </div>
        </section>

        <section className="case-tinted section" id="goals">
          <div className="container">
            <SectionLabel number="02">THE GOALS</SectionLabel>
            <h2>
              Personal content.
              <br />
              <em>Purposeful progress.</em>
            </h2>
            <div className="case-three-columns">
              {bambooGoals.map((goal, i) => (
                <article key={goal.title}>
                  <span className="case-item-number">0{i + 1}</span>
                  <h3>{goal.title}</h3>
                  <p>{goal.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section container" id="product">
          <SectionLabel number="03">INSIDE THE PRODUCT</SectionLabel>
          <div className="section-heading">
            <h2>
              From your materials
              <br />
              <em>to your next step.</em>
            </h2>
            <p>
              Read. Remember. Speak.
              <br />
              Then adapt the journey.
            </p>
          </div>
          <ol className="case-workflow">
            {bambooWorkflow.map((step, i) => (
              <li key={step.title}>
                <span>0{i + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </li>
            ))}
          </ol>
          <div className="case-gallery-heading">
            <h3>Inside the Scholar’s Pavilion</h3>
            <p>8 screens · Select a view to explore</p>
          </div>
          <ProjectGallery
            screens={bambooScreens}
            projectName="BambooBrain"
            basePath="/projects/bamboobrain"
          />
          <div className="case-feature-notes">
            <article>
              <h3>Remember with SM-2</h3>
              <p>
                Flashcards use spaced repetition to schedule the next review.
                Learners reveal an answer and rate recall with Again, Hard,
                Good, or Easy, making review timing part of the learning loop.
              </p>
            </article>
            <article>
              <h3>Speak with Master Ling</h3>
              <p>
                Speaking Studio combines natural Mandarin responses with speech
                transcription, pronunciation analysis, and targeted corrections.
                Pinyin and English explanations help make the conversation
                approachable.
              </p>
            </article>
            <article>
              <h3>Ask about your materials</h3>
              <p>
                The document chatbot retrieves relevant content before answering
                and can show citations. A Study Advisor supports broader
                questions about study habits, progress, and getting back on
                track.
              </p>
            </article>
          </div>
        </section>

        <BeamSection className="case-benefits section" id="benefits">
          <div className="container">
            <SectionLabel number="04">THE BENEFITS</SectionLabel>
            <div className="case-editorial-grid">
              <h2>
                A study companion
                <br />
                <em>that meets you where you are.</em>
              </h2>
              <p className="case-benefit-intro">
                The aim is meaningful progress in a real learning context: a
                path shaped by your content, your HSK target, and the time you
                can give.
              </p>
            </div>
            <div className="case-three-columns">
              {bambooBenefits.map((benefit, i) => (
                <article key={benefit.title}>
                  <span className="case-item-number">0{i + 1}</span>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </article>
              ))}
            </div>
            <div className="case-design-note">
              <span>THE DESIGN INTENT</span>
              <p>
                Planning is an ongoing loop. The system monitors recent
                progress, identifies when a plan needs adjustment, and
                recommends the next action so a missed session does not have to
                end the journey.
              </p>
            </div>
          </div>
        </BeamSection>

        <section className="section container" id="tech-stack">
          <SectionLabel number="05">THE TECH STACK</SectionLabel>
          <div className="section-heading">
            <h2>
              Personal on the surface.
              <br />
              <em>Connected underneath.</em>
            </h2>
            <p>
              The product architecture
              <br />
              presented in the project pitch.
            </p>
          </div>
          <div className="case-stack-grid">
            {bambooStack.map((stack) => (
              <article key={stack.layer}>
                <p className="case-stack-layer">{stack.layer}</p>
                <h3>{stack.title}</h3>
                <div className="case-stack-tags">
                  {stack.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <p>{stack.description}</p>
              </article>
            ))}
          </div>
          <div className="case-architecture">
            <p className="case-stack-layer">TWO CONNECTED LEARNING LOOPS</p>
            <p>
              Your materials <span>→</span> Extraction <span>→</span> Vocabulary
              & search <span>→</span> Flashcards, quizzes & grounded answers
            </p>
            <p>
              Your goal <span>→</span> Goal Agent <span>→</span> Study activity{" "}
              <span>→</span> Monitor Agent <span>→</span> Adapt Agent{" "}
              <span>→</span> Updated plan
            </p>
          </div>
          <p className="case-gallery-note">
            Product details and architecture are based on the{" "}
            <a
              className="case-inline-link"
              href={bambooLinks.deck}
              target="_blank"
              rel="noopener noreferrer"
            >
              BambooBrain pitch deck{" "}
              <ArrowUpRight size={12} aria-hidden="true" />
            </a>
            .
          </p>
        </section>

        <BeamSection
          className="case-benefits section case-award"
          id="recognition"
          aria-labelledby="recognition-title"
        >
          <div className="container">
            <SectionLabel number="06">RECOGNITION</SectionLabel>
            <div className="case-award-grid">
              <div>
                <div className="case-award-place">
                  <Trophy size={30} strokeWidth={1.3} aria-hidden="true" /> 2nd
                  place
                </div>
                <h2 id="recognition-title">
                  Code; Without
                  <br />
                  <em>Barriers 2026.</em>
                </h2>
                <p>
                  BambooBrain won <strong>2nd place</strong> at the{" "}
                  <strong>“Code; Without Barriers” Hackathon 2026</strong>,
                  organized by <strong>ID8NXT & Microsoft</strong>.
                </p>
                <p>
                  The project answered the challenge: build your agentic
                  personal assistant.
                </p>
                <Link href="/#projects" className="case-source-link">
                  <ArrowLeft size={16} aria-hidden="true" /> Back to all
                  projects
                </Link>
              </div>
              <a
                className="case-award-certificate"
                href="/projects/bamboobrain/certificate.jpeg"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View BambooBrain second-place hackathon certificate (opens in a new tab)"
              >
                <Image
                  src="/projects/bamboobrain/certificate.jpeg"
                  alt="Certificate recognizing Angeline Mary Marchella’s second place at Code; Without Barriers Hackathon 2026, sponsored by Microsoft and powered by ID8NXT"
                  width={1920}
                  height={1356}
                  sizes="(max-width: 700px) 100vw, 650px"
                />
                <span>
                  View certificate <ArrowUpRight size={14} aria-hidden="true" />
                </span>
              </a>
            </div>
          </div>
        </BeamSection>

        <section className="case-closing container">
          <div>
            <p className="case-stack-layer">EXPLORE THE PROJECT</p>
            <h2>
              See the idea
              <br />
              <em>in action.</em>
            </h2>
          </div>
          <div className="case-closing-actions">
            <a
              className="project-github project-detail-link"
              href={bambooLinks.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={18} aria-hidden="true" /> BambooBrain on GitHub{" "}
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
            <a
              className="text-link"
              href={bambooLinks.deck}
              target="_blank"
              rel="noopener noreferrer"
            >
              Read the pitch deck <ArrowUpRight size={16} aria-hidden="true" />
            </a>
            <a
              className="text-link"
              href={bambooLinks.pitch}
              target="_blank"
              rel="noopener noreferrer"
            >
              Watch the pitch <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
        </section>
      </main>
      <PortfolioFooter backToTop="#project-top" />
    </>
  );
}
