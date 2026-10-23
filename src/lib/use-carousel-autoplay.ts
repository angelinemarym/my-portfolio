"use client";

import { useEffect, useRef, useState, type RefObject } from "react";

export function useCarouselAutoplay({
  root,
  advance,
  active,
  enabled = true,
  intervalMs = 4500,
  pauseOnHover = true,
}: {
  root: RefObject<HTMLElement | null>;
  advance: () => void;
  active: number;
  enabled?: boolean;
  intervalMs?: number;
  pauseOnHover?: boolean;
}) {
  const [paused, setPaused] = useState(false);
  const [visible, setVisible] = useState(false);
  const [hidden, setHidden] = useState(true);
  const [reduced, setReduced] = useState(true);
  const [hovering, setHovering] = useState(false);
  const [focused, setFocused] = useState(false);
  const [dragging, setDragging] = useState(false);
  const latestAdvance = useRef(advance);
  useEffect(() => {
    latestAdvance.current = advance;
  }, [advance]);

  useEffect(() => {
    const element = root.current;
    if (!element) return;
    const preference = matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => {
      setHidden(document.hidden);
      setReduced(preference.matches);
    };
    const enter = (event: PointerEvent) => {
      if (event.pointerType !== "touch") setHovering(true);
    };
    const leave = () => {
      setHovering(false);
      setDragging(false);
    };
    const focus = () => setFocused(true);
    const blur = (event: FocusEvent) => {
      if (!element.contains(event.relatedTarget as Node | null))
        setFocused(false);
    };
    const down = () => setDragging(true);
    const up = () => setDragging(false);
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.25 },
    );
    observer.observe(element);
    setHovering(element.matches(":hover"));
    setFocused(element.contains(document.activeElement));
    sync();
    element.addEventListener("pointerenter", enter);
    element.addEventListener("pointerleave", leave);
    element.addEventListener("pointerdown", down);
    element.addEventListener("focusin", focus);
    element.addEventListener("focusout", blur);
    window.addEventListener("pointerup", up);
    window.addEventListener("pointercancel", up);
    document.addEventListener("visibilitychange", sync);
    preference.addEventListener("change", sync);
    return () => {
      observer.disconnect();
      element.removeEventListener("pointerenter", enter);
      element.removeEventListener("pointerleave", leave);
      element.removeEventListener("pointerdown", down);
      element.removeEventListener("focusin", focus);
      element.removeEventListener("focusout", blur);
      window.removeEventListener("pointerup", up);
      window.removeEventListener("pointercancel", up);
      document.removeEventListener("visibilitychange", sync);
      preference.removeEventListener("change", sync);
    };
  }, [root]);

  const running =
    enabled &&
    !paused &&
    visible &&
    !hidden &&
    !reduced &&
    !focused &&
    !dragging &&
    !(pauseOnHover && hovering);
  useEffect(() => {
    if (!running) return;
    const timer = window.setTimeout(
      () => latestAdvance.current(),
      Math.max(1000, intervalMs),
    );
    return () => window.clearTimeout(timer);
  }, [running, intervalMs, active]);

  return { paused, running, toggle: () => setPaused((value) => !value) };
}
