"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowLeft, ArrowRight, Expand } from "lucide-react";
import { kuracvScreens } from "@/content/kuracv";

export type ProjectScreen = {
  file: string;
  title: string;
  group: string;
  description: string;
  width: number;
  height: number;
};

export function KuraCVGallery() {
  return (
    <ProjectGallery
      screens={kuracvScreens}
      projectName="KuraCV"
      basePath="/projects/kuracv"
    />
  );
}

export function ProjectGallery({
  screens,
  projectName,
  basePath,
}: {
  screens: ProjectScreen[];
  projectName: string;
  basePath: string;
}) {
  const [selected, setSelected] = useState(0);
  const screen = screens[selected];
  const groups = [...new Set(screens.map((item) => item.group))];
  const step = (direction: number) =>
    setSelected(
      (current) => (current + direction + screens.length) % screens.length,
    );

  return (
    <div className="case-gallery">
      <label className="case-gallery-mobile-picker">
        Explore screens
        <select
          value={selected}
          onChange={(event) => setSelected(Number(event.target.value))}
          aria-controls="case-screenshot"
        >
          {groups.map((group) => (
            <optgroup key={group} label={group}>
              {screens.map(
                (item, index) =>
                  item.group === group && (
                    <option key={item.file} value={index}>
                      {String(index + 1).padStart(2, "0")} · {item.title}
                    </option>
                  ),
              )}
            </optgroup>
          ))}
        </select>
      </label>
      <div
        className="case-gallery-picker"
        aria-label={`Choose a ${projectName} screenshot`}
      >
        {groups.map((group) => (
          <div className="case-gallery-group" key={group}>
            <p>{group}</p>
            {screens.map(
              (item, index) =>
                item.group === group && (
                  <button
                    key={item.file}
                    type="button"
                    aria-pressed={selected === index}
                    onClick={() => setSelected(index)}
                    aria-controls="case-screenshot"
                  >
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    {item.title}
                  </button>
                ),
            )}
          </div>
        ))}
      </div>
      <div className="case-gallery-main" id="case-screenshot">
        <div className="case-gallery-toolbar">
          <span>
            {String(selected + 1).padStart(2, "0")} / {screens.length} SCREENS
          </span>
          <a
            href={`${basePath}/${screen.file}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open full-size screenshot: ${screen.title} (opens in a new tab)`}
          >
            Full size <Expand size={14} aria-hidden="true" />
          </a>
        </div>
        <figure>
          <div className="case-gallery-image">
            <Image
              src={`${basePath}/${screen.file}`}
              alt={`${projectName} — ${screen.title}. ${screen.description}`}
              width={screen.width}
              height={screen.height}
              sizes="(max-width: 700px) 100vw, 900px"
            />
          </div>
          <figcaption>
            <div aria-live="polite" aria-atomic="true">
              <h3>{screen.title}</h3>
              <p>{screen.description}</p>
            </div>
            <div className="case-gallery-arrows">
              <button
                type="button"
                className="project-arrow"
                aria-label="Previous screenshot"
                onClick={() => step(-1)}
              >
                <ArrowLeft size={18} aria-hidden="true" />
              </button>
              <button
                type="button"
                className="project-arrow"
                aria-label="Next screenshot"
                onClick={() => step(1)}
              >
                <ArrowRight size={18} aria-hidden="true" />
              </button>
            </div>
          </figcaption>
        </figure>
      </div>
    </div>
  );
}
