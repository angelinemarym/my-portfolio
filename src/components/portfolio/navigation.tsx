"use client";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { navigation } from "@/content/portfolio";
import {
  TubelightNavbar,
  floatingNavigation,
} from "@/components/ui/tubelight-navbar";
export function Navigation({ projectPage = false }: { projectPage?: boolean }) {
  const homePrefix = projectPage ? "/" : "";
  const [open, setOpen] = useState(false);
  const [floating, setFloating] = useState(false);
  const [active, setActive] = useState("#home");
  const header = useRef<HTMLElement>(null);
  const floatingPanel = useRef<HTMLElement>(null);
  useEffect(() => {
    const element = header.current;
    if (!element) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        const hidden =
          !entry.isIntersecting && entry.boundingClientRect.bottom <= 0;
        setFloating(hidden);
        if (hidden) setOpen(false);
        else if (floatingPanel.current?.contains(document.activeElement))
          element
            .querySelector<HTMLAnchorElement>(".brand")
            ?.focus({ preventScroll: true });
      },
      { threshold: 0 },
    );
    observer.observe(element);
    let frame = 0;
    const update = () => {
      frame = 0;
      if (projectPage) {
        setActive("#projects");
        return;
      }
      const threshold = Math.min(innerHeight * 0.4, 300);
      let current = "#home";
      for (const item of floatingNavigation) {
        const section = document.getElementById(item.href.slice(1));
        if (section && section.getBoundingClientRect().top <= threshold)
          current = item.href;
      }
      if (scrollY + innerHeight >= document.documentElement.scrollHeight - 5)
        current = "#contact";
      setActive(current);
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    // Recheck when images/cards change section positions, even without scrolling.
    const layoutObserver = new ResizeObserver(schedule);
    for (const item of floatingNavigation) {
      const section = document.getElementById(item.href.slice(1));
      if (section) layoutObserver.observe(section);
    }
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    window.addEventListener("hashchange", schedule);
    window.addEventListener("pageshow", schedule);
    return () => {
      observer.disconnect();
      layoutObserver.disconnect();
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      window.removeEventListener("hashchange", schedule);
      window.removeEventListener("pageshow", schedule);
    };
  }, [projectPage, floatingNavigation]);
  const toggle = useRef<HTMLButtonElement>(null);
  const panel = useRef<HTMLElement>(null);
  useEffect(() => {
    if (open) panel.current?.querySelector<HTMLAnchorElement>("a")?.focus();
  }, [open]);
  return (
    <>
      <header ref={header} className="site-header">
        <a
          href={`${homePrefix}#home`}
          className="brand"
          aria-label="Angeline — home"
        >
          am<span>.</span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map((n) => (
            <a key={n.href} href={`${homePrefix}${n.href}`}>
              {n.label}
            </a>
          ))}
        </nav>
        <a className="header-contact" href={`${homePrefix}#contact`}>
          Let’s talk <ArrowUpRight size={15} aria-hidden="true" />
        </a>
        <button
          ref={toggle}
          className="menu-toggle"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
        {open && (
          <nav
            ref={panel}
            id="mobile-navigation"
            className="mobile-nav"
            aria-label="Mobile navigation"
            onKeyDown={(e) => {
              if (e.key === "Escape") {
                setOpen(false);
                toggle.current?.focus();
              }
            }}
          >
            {[...navigation, { label: "Contact", href: "#contact" }].map(
              (n) => (
                <a
                  key={n.href}
                  href={`${homePrefix}${n.href}`}
                  onClick={() => setOpen(false)}
                >
                  {n.label}
                  <ArrowUpRight size={18} aria-hidden="true" />
                </a>
              ),
            )}
          </nav>
        )}
      </header>
      <TubelightNavbar
        ref={floatingPanel}
        visible={floating}
        active={active}
        homePrefix={homePrefix}
      />
    </>
  );
}
