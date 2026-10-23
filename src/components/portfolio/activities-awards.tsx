"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { CardStack } from "@/components/ui/card-stack";
import { activities } from "@/content/activities";
import { BeamSection } from "./beam-hero";

export function ActivitiesAwards() {
  const galleryRef = useRef<HTMLDivElement>(null);
  const [selected, setSelected] = useState(0);
  const activity = activities[selected];

  return (
    <BeamSection
      className="activities-section section"
      id="activities"
      aria-labelledby="activities-title"
    >
      <div className="container">
        <div className="section-label">
          <span>06</span>ACTIVITIES & AWARDS
        </div>
        <div className="section-heading">
          <h2 id="activities-title">
            Beyond the work.
            <br />
            <em>Along the way.</em>
          </h2>
          <p>
            Moments of learning, connection,
            <br />
            and milestones worth remembering.
          </p>
        </div>
        <div
          ref={galleryRef}
          className="activity-gallery"
          role="region"
          aria-roledescription="carousel"
          aria-label="Activities and awards photo gallery"
        >
          <div className="activity-gallery-topline" aria-hidden="true">
            <span>A FEW MOMENTS, COLLECTED</span>
            <span>DRAG OR USE THE ARROWS</span>
          </div>
          <CardStack
            items={activities}
            cardWidth={560}
            cardHeight={370}
            maxVisible={5}
            overlap={0.7}
            spreadDeg={24}
            showDots
            autoAdvance
            intervalMs={4500}
            interactionRef={galleryRef}
            onChangeIndex={setSelected}
            renderCard={(item) => (
              <div className="activity-photo">
                <Image
                  src={item.imageSrc}
                  alt={`${item.title} — ${item.description}`}
                  fill
                  sizes="(max-width: 700px) 82vw, 560px"
                  draggable={false}
                />
              </div>
            )}
          />
          <div className="activity-caption">
            <div aria-live="off" aria-atomic="true">
              <p className="project-category">{activity.tag}</p>
              <h3>{activity.title}</h3>
              <p className="project-description">{activity.description}</p>
            </div>
            <a
              className="text-link"
              href={activity.imageSrc}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View full photo: ${activity.title} (opens in a new tab)`}
            >
              View full photo <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </BeamSection>
  );
}
