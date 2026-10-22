"use client";
import { useEffect, useRef, type ReactNode } from "react";
import { approach, beamTarget, drift } from "@/lib/beam";

/** Same layered wash, vertical bands, diagonal beam and pointer glow as the footer. */
export function BeamHero({
  children,
  paused,
}: {
  children: ReactNode;
  paused: boolean;
}) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const mq = matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0,
      visible = false,
      inside = false;
    let targetX = 50,
      targetY = 50,
      x = 50,
      y = 50,
      glow = 0;
    let beam = 58,
      last = 0,
      time = 0;
    const paint = () => {
      root.style.setProperty("--beam", `${beam.toFixed(2)}%`);
      root.style.setProperty("--px", `${x.toFixed(2)}%`);
      root.style.setProperty("--py", `${y.toFixed(2)}%`);
      root.style.setProperty("--glow", glow.toFixed(3));
    };
    const tick = (now: number) => {
      const dt = last ? Math.min((now - last) / 1000, 0.1) : 0;
      last = now;
      time += dt;
      const idle = drift(time);
      beam = approach(
        beam,
        inside ? beamTarget(targetX / 100) * 0.75 + idle * 0.25 : idle,
        0.035,
        dt,
      );
      x = approach(x, targetX, 0.16, dt);
      y = approach(y, targetY, 0.16, dt);
      glow = approach(glow, inside ? 1 : 0, 0.06, dt);
      paint();
      frame = requestAnimationFrame(tick);
    };
    const isStill = () => paused || mq.matches;
    const sync = () => {
      cancelAnimationFrame(frame);
      last = 0;
      if (isStill()) {
        beam = 58;
        paint();
      } else if (visible && !document.hidden)
        frame = requestAnimationFrame(tick);
    };
    const move = (event: PointerEvent) => {
      if (event.pointerType === "touch") return;
      const rect = root.getBoundingClientRect();
      targetX = ((event.clientX - rect.left) / rect.width) * 100;
      targetY = ((event.clientY - rect.top) / rect.height) * 100;
      inside = true;
      // Like the footer, paused/reduced mode holds the beam but still answers direct pointer input.
      if (isStill()) {
        x = targetX;
        y = targetY;
        glow = 1;
        paint();
      }
    };
    const leave = () => {
      inside = false;
      if (isStill()) {
        glow = 0;
        paint();
      }
    };
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      sync();
    });
    observer.observe(root);
    root.addEventListener("pointerenter", move);
    root.addEventListener("pointermove", move);
    root.addEventListener("pointerleave", leave);
    mq.addEventListener("change", sync);
    document.addEventListener("visibilitychange", sync);
    paint();
    sync();
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      root.removeEventListener("pointerenter", move);
      root.removeEventListener("pointermove", move);
      root.removeEventListener("pointerleave", leave);
      mq.removeEventListener("change", sync);
      document.removeEventListener("visibilitychange", sync);
    };
  }, [paused]);
  return (
    <section ref={ref} className="hero" id="home" aria-label="Introduction">
      <div className="hero-sky" aria-hidden="true">
        <div className="hero-wash" />
        <div className="hero-lines" />
        <div className="hero-beam" />
        <div className="hero-glow" />
        <div className="hero-grain" />
      </div>
      {children}
    </section>
  );
}
