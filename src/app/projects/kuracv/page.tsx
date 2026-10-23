import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDown, ArrowLeft, ArrowUpRight, Github } from "lucide-react";
import { Navigation } from "@/components/portfolio/navigation";
import { PortfolioFooter } from "@/components/portfolio/portfolio-footer";
import { KuraCVGallery } from "@/components/portfolio/project-gallery";
import { BeamSection } from "@/components/portfolio/beam-hero";
import {
  kuracvBenefits,
  kuracvGoals,
  kuracvStack,
  kuracvWorkflow,
} from "@/content/kuracv";

export const metadata: Metadata = {
  title: "KuraCV — AI Recruitment Platform | Angeline Mary Marchella",
  description:
    "A closer look at KuraCV: the background, goals, benefits, product workflow, and technology behind an AI-assisted recruitment workspace.",
  openGraph: {
    title: "KuraCV — From CVs to clearer hiring context",
    description:
      "An AI-assisted recruitment platform case study by Angeline Mary Marchella.",
    images: [
      {
        url: "/projects/kuracv-project.jpg",
        width: 1920,
        height: 1080,
        alt: "KuraCV recruitment workspace",
      },
    ],
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

export default function KuraCVPage() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navigation projectPage />
      <main id="main" className="case-study">
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
                  PROJECT CASE STUDY / AI & RECRUITMENT
                </p>
                <h1 id="case-title">
                  KuraCV<span>.</span>
                </h1>
                <p className="case-hero-statement">
                  From CVs to <em>clearer hiring context.</em>
                </p>
              </div>
              <div className="case-hero-copy">
                <p>
                  An AI-assisted recruitment workspace that brings job
                  management, CV analysis, candidate review, and interview
                  outreach into one connected flow.
                </p>
                <div className="case-hero-actions">
                  <a href="#product" className="case-primary-link">
                    Explore the product{" "}
                    <ArrowDown size={16} aria-hidden="true" />
                  </a>
                  <a
                    href="https://github.com/KuraCV"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="case-source-link"
                  >
                    <Github size={17} aria-hidden="true" /> GitHub{" "}
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
            <dl className="case-facts">
              <div>
                <dt>DOMAIN</dt>
                <dd>Recruitment technology</dd>
              </div>
              <div>
                <dt>PRODUCT</dt>
                <dd>Recruiter web application</dd>
              </div>
              <div>
                <dt>CORE IDEA</dt>
                <dd>AI-assisted CV screening</dd>
              </div>
              <div>
                <dt>BUILT WITH</dt>
                <dd>Next.js · Django · Gemini</dd>
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
              A CV is a starting point.
              <br />
              <em>Context comes next.</em>
            </h2>
            <div className="case-prose">
              <p>
                Reviewing applications means more than collecting files. A
                recruiter needs to connect each CV with a particular role,
                understand the relevant experience, organize the applicant pool,
                and prepare the next conversation.
              </p>
              <p>
                KuraCV addresses that workflow with a shared workspace for jobs
                and candidates. The job requirements become the reference for AI
                analysis, so the resulting summary sits beside the role it was
                written for.
              </p>
              <p>
                The product connects a familiar application channel—Google
                Forms—with a custom screening and review interface. This lets
                the workflow move from a submitted PDF to an organized candidate
                record.
              </p>
            </div>
          </div>
        </section>

        <section className="case-tinted section" id="goals">
          <div className="container">
            <SectionLabel number="02">THE GOALS</SectionLabel>
            <h2>
              Less friction.
              <br />
              <em>More useful information.</em>
            </h2>
            <div className="case-three-columns">
              {kuracvGoals.map((goal, i) => (
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
              One role.
              <br />
              <em>A connected workflow.</em>
            </h2>
            <p>
              From defining the requirements
              <br />
              to preparing the first conversation.
            </p>
          </div>
          <ol className="case-workflow">
            {kuracvWorkflow.map((step, i) => (
              <li key={step.title}>
                <span>0{i + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </li>
            ))}
          </ol>
          <div className="case-gallery-heading">
            <h3>A closer look at the workspace</h3>
            <p>14 screens · Select a view to explore</p>
          </div>
          <KuraCVGallery />
          <p className="case-gallery-note">
            Product screenshots use demonstration data.
          </p>
        </section>

        <BeamSection className="case-benefits section" id="benefits">
          <div className="container">
            <SectionLabel number="04">THE BENEFITS</SectionLabel>
            <div className="case-editorial-grid">
              <h2>
                Designed to support
                <br />
                <em>the recruiter’s work.</em>
              </h2>
              <p className="case-benefit-intro">
                The intended value is a more organized path through recruitment:
                less repetitive reading, clearer context, and an easier
                transition into outreach.
              </p>
            </div>
            <div className="case-three-columns">
              {kuracvBenefits.map((benefit, i) => (
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
                Scores and summaries serve as review aids. Recruiters can return
                to the original CV, inspect the explanation, and edit the
                interview draft before using it.
              </p>
            </div>
          </div>
        </BeamSection>

        <section className="section container" id="tech-stack">
          <SectionLabel number="05">THE TECH STACK</SectionLabel>
          <div className="section-heading">
            <h2>
              A thoughtful interface.
              <br />
              <em>A connected system.</em>
            </h2>
            <p>
              The technology behind
              <br />
              the product workflow.
            </p>
          </div>
          <div className="case-stack-grid">
            {kuracvStack.map((stack) => (
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
            <p className="case-stack-layer">HOW THE PIECES CONNECT</p>
            <p>
              Recruiter UI <span>→</span> Django REST API <span>→</span> Jobs &
              accounts database
            </p>
            <p>
              Form submission <span>→</span> PDF extraction <span>→</span>{" "}
              Gemini analysis <span>→</span> Firestore <span>→</span> Candidate
              review
            </p>
          </div>
        </section>

        <section className="case-closing container">
          <div>
            <p className="case-stack-layer">EXPLORE THE CODE</p>
            <h2>
              See how it
              <br />
              <em>comes together.</em>
            </h2>
          </div>
          <div className="case-closing-actions">
            <a
              className="project-github project-detail-link"
              href="https://github.com/KuraCV"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={18} aria-hidden="true" /> KuraCV on GitHub{" "}
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
            <Link href="/#projects" className="text-link">
              <ArrowLeft size={16} aria-hidden="true" /> Back to all projects
            </Link>
          </div>
        </section>
      </main>
      <PortfolioFooter backToTop="#project-top" />
    </>
  );
}
