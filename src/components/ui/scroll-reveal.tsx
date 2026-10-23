"use client";

import { useEffect } from "react";

// Reveal visual units without adding wrappers around sticky layouts or replacing
// the transforms already used by card fans, pointer tilt, and carousels.
const targets = [
  "h1",
  "h2",
  "h3",
  "p",
  "article",
  "figure",
  "form",
  "dl",
  ".section-label",
  ".eyebrow",
  ".hero-actions",
  ".hero-portrait",
  ".hero-bottom",
  ".glass-folder-card",
  ".timeline-entry",
  ".skills-marquee",
  ".project-coverflow",
  ".project-carousel-controls",
  ".project-carousel-topline",
  ".project-caption-actions",
  ".contact-method",
  ".activity-gallery-topline",
  ".ruixen-card-stack",
  ".activity-caption",
  ".case-contents",
  ".case-workflow > li",
  ".case-gallery",
  ".case-design-note",
  ".case-architecture",
  ".case-closing-actions",
  ".case-award-place",
  ".case-award-certificate",
  ".text-link",
  ".case-back",
  ".case-hero-actions",
  ".case-source-link",
  ".case-gallery-heading",
  ".case-feature-notes",
  ".contact-methods",
  ".bwf-inner",
].join(",");

const excluded =
  ".sr-only, [hidden], [aria-hidden='true'], .hero-sky, .folder-scene, .publication-art, .project-cover, .card-stack-stage";

export function ScrollReveal() {
  useEffect(() => {
    const reduced = matchMedia("(prefers-reduced-motion: reduce)");
    const elements = new Set<HTMLElement>();
    const visible = (element: HTMLElement) => {
      const rect = element.getBoundingClientRect();
      return rect.bottom > 24 && rect.top < innerHeight - 36;
    };
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          (entry.target as HTMLElement).dataset.revealState =
            reduced.matches || entry.isIntersecting ? "visible" : "hidden";
        }
      },
      { rootMargin: "-24px 0px -36px 0px", threshold: 0 },
    );

    function register(root: Element) {
      const candidates = [
        ...(root.matches(targets) ? [root] : []),
        ...root.querySelectorAll(targets),
      ];
      for (const candidate of candidates) {
        if (
          !(candidate instanceof HTMLElement) ||
          !candidate.closest("main, footer") ||
          candidate.closest(excluded) ||
          elements.has(candidate)
        )
          continue;
        // Animate a card/form as one unit, rather than multiplying motion on
        // every nested heading, paragraph, icon, and control.
        if (candidate.parentElement?.closest("[data-scroll-reveal]")) continue;
        candidate.dataset.scrollReveal = "";
        candidate.dataset.revealState =
          reduced.matches || visible(candidate) ? "visible" : "hidden";
        elements.add(candidate);
        observer.observe(candidate);
      }
    }

    register(document.body);
    const mutations = new MutationObserver((records) => {
      for (const element of elements) {
        if (!element.isConnected) {
          observer.unobserve(element);
          elements.delete(element);
        }
      }
      for (const record of records) {
        for (const node of record.addedNodes) {
          if (node instanceof Element) register(node);
        }
      }
    });
    mutations.observe(document.body, { childList: true, subtree: true });
    const syncMotion = () => {
      for (const element of elements) {
        element.dataset.revealState =
          reduced.matches || visible(element) ? "visible" : "hidden";
      }
    };
    reduced.addEventListener("change", syncMotion);
    return () => {
      observer.disconnect();
      mutations.disconnect();
      reduced.removeEventListener("change", syncMotion);
      for (const element of elements) {
        delete element.dataset.scrollReveal;
        delete element.dataset.revealState;
      }
    };
  }, []);

  return null;
}
