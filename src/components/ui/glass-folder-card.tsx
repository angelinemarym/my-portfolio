"use client";
import { useId, useState, type CSSProperties } from "react";
import { ArrowUpRight, Plus, type LucideIcon } from "lucide-react";

type GlassFolderCardProps = {
  title: string;
  label: string;
  description: string;
  icon: LucideIcon;
  href: string;
  linkLabel: string;
  index: number;
};
/** Folder silhouette and layered glass treatment inspired by the linked Glass Folder Cards demo. */
export function GlassFolderCard({
  title,
  label,
  description,
  icon: Icon,
  href,
  linkLabel,
  index,
}: GlassFolderCardProps) {
  const [open, setOpen] = useState(false);
  const id = useId().replace(/:/g, "");
  return (
    <article
      className="glass-folder-card"
      data-open={open}
      style={
        {
          "--folder-hue": index === 0 ? "336" : index === 1 ? "324" : "350",
        } as CSSProperties
      }
    >
      <h3 className="sr-only">{title}</h3>
      <button
        className="glass-folder-trigger"
        type="button"
        aria-expanded={open}
        aria-controls={`${id}-details`}
        aria-label={`${open ? "Close" : "Open"} ${title} folder`}
        onClick={() => setOpen(!open)}
        onKeyDown={(e) => {
          if (e.key === "Escape") setOpen(false);
        }}
      >
        <span className="folder-scene" aria-hidden="true">
          <svg
            className="folder-back"
            viewBox="0 0 360 280"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id={`${id}-back`} x1="0" y1="0" x2="1" y2="1">
                <stop stopColor="var(--folder-deep)" />
                <stop offset=".5" stopColor="var(--folder-bright)" />
                <stop offset="1" stopColor="#4e2036" />
              </linearGradient>
            </defs>
            <path
              d="M22 38H149C170 38 170 8 193 8H338Q360 8 360 30V258Q360 280 338 280H22Q0 280 0 258V60Q0 38 22 38Z"
              fill={`url(#${id}-back)`}
            />
            <path
              d="M22 38H149C170 38 170 8 193 8H338Q360 8 360 30"
              fill="none"
              stroke="#fff"
              strokeOpacity=".35"
            />
          </svg>
          <span className="folder-paper folder-paper-back">
            <span className="paper-kicker">RESEARCH. BUILD. CREATE.</span>
            <span className="paper-art" />
          </span>
          <span className="folder-paper folder-paper-middle">
            <Icon size={30} strokeWidth={1.2} />
            <span className="paper-line" />
            <span className="paper-line short" />
          </span>
          <span className="folder-paper folder-paper-front">
            <span className="paper-kicker">{label}</span>
            <span className="paper-title">{title} what’s next.</span>
            <span className="paper-line" />
            <span className="paper-line" />
            <span className="paper-line short" />
          </span>
          <span className="folder-face">
            <svg
              className="folder-front"
              viewBox="0 0 360 230"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id={`${id}-glass`} x1="0" y1="0" x2=".6" y2="1">
                  <stop stopColor="#fff" stopOpacity=".70" />
                  <stop offset=".5" stopColor="#f8edf2" stopOpacity=".91" />
                  <stop offset="1" stopColor="#e9cfdb" stopOpacity=".97" />
                </linearGradient>
              </defs>
              <path
                d="M22 1H119C140 1 145 33 165 33H338Q359 33 359 55V208Q359 229 338 229H22Q1 229 1 208V23Q1 1 22 1Z"
                fill={`url(#${id}-glass)`}
                stroke="#fff"
                strokeOpacity=".85"
              />
            </svg>
            <span className="folder-face-content">
              <Icon className="folder-icon" size={24} strokeWidth={1.25} />
              <span className="folder-category">{label}</span>
              <span className="folder-title">{title}</span>
              <span className="folder-open-hint">
                {open ? "CLOSE FOLDER" : "CLICK TO EXPLORE"}
              </span>
            </span>
            <span className="folder-toggle">
              <Plus size={21} strokeWidth={1.4} />
            </span>
          </span>
        </span>
      </button>
      <p className="folder-description">{description}</p>
      <div id={`${id}-details`} className="folder-details" hidden={!open}>
        <a href={href}>
          {linkLabel}
          <ArrowUpRight size={16} aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}
