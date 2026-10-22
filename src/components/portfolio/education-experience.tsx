"use client";
import { useState } from "react";
import Image from "next/image";
import { InteractiveTiltCard } from "@/components/ui/tilt-card";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Minus, Plus } from "lucide-react";
import { experience, experienceSource } from "@/content/experience";

export function EducationExperience() {
  const [active, setActive] = useState<string | null>(experience[0].id);
  const reduced = useReducedMotion();
  return (
    <section
      className="experience-section section"
      id="education-experience"
      aria-labelledby="experience-heading"
    >
      <div className="container">
        <div className="section-label">
          <span>02</span>EDUCATION & EXPERIENCE
        </div>
        <div className="experience-layout">
          <div className="experience-intro">
            <h2 id="experience-heading">
              A journey of
              <br />
              <em>learning & building.</em>
            </h2>
            <p>From computer science foundations to real-world engineering.</p>
            <figure className="experience-portrait">
              <InteractiveTiltCard
                image={{
                  src: "/experience/my-experience-picture.jpg",
                  alt: "Angeline Mary Marchella in front of traditional Chinese architecture",
                }}
                tiltFactor={12}
                hoverScale={1.035}
                borderRadius={18}
                backgroundColor="#381a2a"
                shadowColor="rgba(0,0,0,.4)"
                shadowIntensity={0.55}
                glareIntensity={0.25}
                sizes="(max-width: 700px) 85vw, (max-width: 1000px) 34vw, 330px"
                objectPosition="50% 60%"
              />
              <figcaption>
                <span>ALWAYS CURIOUS.</span>
                <span>ALWAYS GROWING.</span>
              </figcaption>
            </figure>
            <a
              href={experienceSource}
              target="_blank"
              rel="noreferrer"
              className="text-link experience-source"
            >
              More on LinkedIn <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
          <div className="experience-history">
            <p className="timeline-instruction">
              THE CHAPTERS SO FAR <ArrowDown size={13} aria-hidden="true" />
            </p>
            <ol className="education-timeline">
              {experience.map((item, index) => {
                const expanded = active === item.id;
                return (
                  <li
                    key={item.id}
                    className="timeline-entry"
                    data-active={expanded}
                  >
                    <span className="timeline-node" aria-hidden="true">
                      <span />
                    </span>
                    <div className="timeline-card">
                      <button
                        className="timeline-trigger"
                        type="button"
                        aria-expanded={expanded}
                        aria-controls={`${item.id}-content`}
                        onClick={() => setActive(expanded ? null : item.id)}
                        onKeyDown={(event) => {
                          if (event.key === "Escape") setActive(null);
                        }}
                      >
                        <span className="timeline-date">{item.dates}</span>
                        <span className="timeline-title">{item.title}</span>
                        <span className="timeline-organization">
                          {item.organization}
                        </span>
                        <span className="timeline-expand" aria-hidden="true">
                          {expanded ? <Minus size={17} /> : <Plus size={17} />}
                        </span>
                      </button>
                      <div id={`${item.id}-content`} hidden={!expanded}>
                        <motion.div
                          className="timeline-detail"
                          initial={false}
                          animate={{
                            opacity: expanded ? 1 : 0,
                            y: expanded ? 0 : 5,
                          }}
                          transition={{ duration: reduced ? 0 : 0.25 }}
                        >
                          <div className="timeline-meta">
                            <span className="timeline-type">{item.type}</span>
                            <span className="timeline-status">
                              {item.status}
                            </span>
                          </div>
                          <div className="timeline-logo">
                            <Image
                              src={item.logo}
                              alt={`${item.organization} logo`}
                              fill
                              sizes="160px"
                              style={{ objectFit: "contain" }}
                            />
                          </div>
                          <p>{item.description}</p>
                          <ul className="timeline-tags" aria-label="Highlights">
                            {item.tags.map((tag) => (
                              <li key={tag}>{tag}</li>
                            ))}
                          </ul>
                        </motion.div>
                      </div>
                    </div>
                    <span className="timeline-index" aria-hidden="true">
                      0{index + 1}
                    </span>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
