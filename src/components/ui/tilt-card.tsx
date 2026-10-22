"use client";

import * as React from "react";
import Image from "next/image";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useMotionTemplate,
} from "framer-motion";
import { cn } from "@/lib/utils";

type TiltCardProps = {
  image: { src: string; alt: string };
  tiltFactor?: number;
  perspective?: number;
  borderRadius?: number;
  backgroundColor?: string;
  shadowColor?: string;
  shadowIntensity?: number;
  transitionDuration?: number;
  hoverScale?: number;
  glareEffect?: boolean;
  glareIntensity?: number;
  glareSize?: number;
  className?: string;
  sizes?: string;
  objectPosition?: string;
};

/** Typed adaptation of the supplied InteractiveTiltCard, using spring values to avoid per-frame React renders. */
export function InteractiveTiltCard({
  image,
  tiltFactor = 15,
  perspective = 1000,
  borderRadius = 12,
  backgroundColor = "#FFFFFF",
  shadowColor = "rgba(0,0,0,0.2)",
  shadowIntensity = 0.5,
  transitionDuration = 0.2,
  hoverScale = 1.05,
  glareEffect = true,
  glareIntensity = 0.5,
  glareSize = 80,
  className,
  sizes = "(max-width: 900px) 80vw, 340px",
  objectPosition = "center",
}: TiltCardProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const [hovered, setHovered] = React.useState(false);
  const rotateX = useSpring(0, { stiffness: 220, damping: 25 });
  const rotateY = useSpring(0, { stiffness: 220, damping: 25 });
  const glareX = useMotionValue(50),
    glareY = useMotionValue(50);
  const background = useMotionTemplate`radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,${glareIntensity}) 0%, rgba(255,255,255,0) ${glareSize}%)`;
  const reset = React.useCallback(() => {
    setHovered(false);
    rotateX.set(0);
    rotateY.set(0);
  }, [rotateX, rotateY]);
  React.useEffect(() => {
    if (reduced) reset();
  }, [reduced, reset]);
  const move = (event: React.PointerEvent<HTMLDivElement>) => {
    if (reduced || event.pointerType !== "mouse" || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = Math.min(
      1,
      Math.max(0, (event.clientX - rect.left) / rect.width),
    );
    const y = Math.min(
      1,
      Math.max(0, (event.clientY - rect.top) / rect.height),
    );
    setHovered(true);
    rotateX.set(-(y - 0.5) * 2 * tiltFactor);
    rotateY.set((x - 0.5) * 2 * tiltFactor);
    glareX.set(x * 50 + 25);
    glareY.set(y * 50 + 25);
  };
  return (
    <div
      ref={ref}
      className={cn("tilt-card", className)}
      style={{ perspective }}
      onPointerMove={move}
      onPointerLeave={reset}
      onPointerCancel={reset}
    >
      <motion.div
        className="tilt-card-surface"
        style={{
          rotateX,
          rotateY,
          borderRadius,
          backgroundColor,
          transformStyle: "preserve-3d",
        }}
        animate={{
          scale: hovered && !reduced ? hoverScale : 1,
          boxShadow: hovered
            ? `0 25px 50px -12px rgba(0,0,0,${shadowIntensity})`
            : `0 10px 30px -10px ${shadowColor}`,
        }}
        transition={{
          duration: reduced ? 0 : transitionDuration,
          ease: "easeOut",
        }}
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes={sizes}
          preload
          style={{ objectFit: "cover", objectPosition }}
        />
        {glareEffect && (
          <motion.div
            className="tilt-card-glare"
            aria-hidden="true"
            style={{ background }}
            animate={{ opacity: hovered && !reduced ? 1 : 0 }}
            transition={{ duration: reduced ? 0 : transitionDuration }}
          />
        )}
      </motion.div>
    </div>
  );
}
