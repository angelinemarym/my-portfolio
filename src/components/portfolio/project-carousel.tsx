"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState, type CSSProperties } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Github,
  Pause,
  Play,
} from "lucide-react";
import { useCarouselAutoplay } from "@/lib/use-carousel-autoplay";
import { projects } from "@/content/portfolio";

export function ProjectCarousel() {
  const root = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const pointerStart = useRef<{ x: number; y: number } | null>(null);
  const suppressClick = useRef(false);
  const project = projects[active];

  function step(direction: number) {
    setActive(
      (current) => (current + direction + projects.length) % projects.length,
    );
  }

  const autoplay = useCarouselAutoplay({
    root,
    advance: () => step(1),
    active,
    intervalMs: 5000,
  });

  return (
    <div
      ref={root}
      className="project-carousel"
      role="region"
      aria-roledescription="carousel"
      aria-label="Projects"
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
          event.preventDefault();
          step(event.key === "ArrowLeft" ? -1 : 1);
        }
      }}
    >
      <div className="project-carousel-topline" aria-hidden="true">
        <span>SELECTED BUILDS</span>
        <span>RESEARCH INTO REALITY</span>
      </div>
      <div
        className="project-coverflow"
        onPointerDown={(event) => {
          if (!event.isPrimary || event.button !== 0) return;
          pointerStart.current = { x: event.clientX, y: event.clientY };
          suppressClick.current = false;
        }}
        onPointerUp={(event) => {
          const start = pointerStart.current;
          pointerStart.current = null;
          if (!start) return;
          const dx = event.clientX - start.x;
          const dy = event.clientY - start.y;
          if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) {
            suppressClick.current = true;
            step(dx < 0 ? 1 : -1);
          }
        }}
        onPointerCancel={() => {
          pointerStart.current = null;
        }}
        onPointerLeave={() => {
          pointerStart.current = null;
        }}
      >
        {projects.map((item, index) => {
          const offset =
            ((index - active + projects.length + 1) % projects.length) - 1;
          return (
            <button
              key={item.title}
              type="button"
              className="project-cover"
              data-active={index === active}
              style={
                {
                  "--cover-offset": offset,
                  "--cover-distance": Math.abs(offset),
                  zIndex: 3 - Math.abs(offset),
                } as CSSProperties
              }
              tabIndex={index === active ? 0 : -1}
              aria-label={`${item.title}, project ${index + 1} of ${projects.length}${index === active ? ", selected. Use arrow keys to browse" : ". Select project"}`}
              aria-pressed={index === active}
              onClick={() => {
                if (suppressClick.current) {
                  suppressClick.current = false;
                  return;
                }
                setActive(index);
              }}
            >
              <Image
                src={item.image}
                alt={item.alt}
                fill
                loading={index === 0 ? "eager" : "lazy"}
                sizes="(max-width: 700px) 78vw, (max-width: 1100px) 55vw, 640px"
                draggable={false}
              />
              <span className="project-cover-label" aria-hidden="true">
                {item.title}
              </span>
            </button>
          );
        })}
      </div>
      <div className="project-carousel-controls">
        <button
          type="button"
          className="project-arrow"
          aria-label="Previous project"
          onClick={() => step(-1)}
        >
          <ArrowLeft size={19} aria-hidden="true" />
        </button>
        <div className="project-pagination" aria-label="Choose a project">
          {projects.map((item, index) => (
            <button
              key={item.title}
              type="button"
              aria-label={`Show ${item.title}`}
              aria-current={index === active ? "true" : undefined}
              onClick={() => setActive(index)}
            >
              <span />
            </button>
          ))}
        </div>
        <button
          type="button"
          className="project-arrow"
          aria-label="Next project"
          onClick={() => step(1)}
        >
          <ArrowRight size={19} aria-hidden="true" />
        </button>
        <button
          type="button"
          className="project-arrow"
          aria-label={
            autoplay.paused
              ? "Play project slideshow"
              : "Pause project slideshow"
          }
          onClick={autoplay.toggle}
        >
          {autoplay.paused ? (
            <Play size={17} aria-hidden="true" />
          ) : (
            <Pause size={17} aria-hidden="true" />
          )}
        </button>
      </div>
      <div className="project-caption">
        <div
          className="project-caption-copy"
          aria-live={autoplay.running ? "off" : "polite"}
          aria-atomic="true"
        >
          <p className="project-category">{project.category}</p>
          <h3>{project.title}</h3>
          <p className="project-description">{project.description}</p>
        </div>
        <div className="project-caption-actions">
          {project.detail && (
            <Link
              className="project-github project-detail-link"
              href={project.detail}
              target={
                project.detail.startsWith("https://") ? "_blank" : undefined
              }
              rel={
                project.detail.startsWith("https://")
                  ? "noopener noreferrer"
                  : undefined
              }
            >
              Explore project <ArrowUpRight size={17} aria-hidden="true" />
            </Link>
          )}
          <a
            className="project-github"
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title} on GitHub (opens in a new tab)`}
          >
            <Github size={18} aria-hidden="true" />
            View on GitHub
            <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  );
}
