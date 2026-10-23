"use client";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  FlaskConical,
  FolderCode,
  GraduationCap,
  Home,
  Lightbulb,
  Mail,
  Trophy,
  UserRound,
} from "lucide-react";
import { forwardRef } from "react";
export const floatingNavigation = [
  { label: "Home", href: "#home", icon: Home },
  { label: "About", href: "#about", icon: UserRound },
  { label: "Journey", href: "#education-experience", icon: GraduationCap },
  { label: "Research", href: "#research", icon: FlaskConical },
  { label: "Projects", href: "#projects", icon: FolderCode },
  { label: "Ventures", href: "#ventures", icon: Lightbulb },
  { label: "Activities", href: "#activities", icon: Trophy },
  { label: "Contact", href: "#contact", icon: Mail },
];
export const TubelightNavbar = forwardRef<
  HTMLElement,
  { visible: boolean; active: string; homePrefix?: string }
>(function TubelightNavbar({ visible, active, homePrefix = "" }, ref) {
  const reduced = useReducedMotion();
  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          ref={ref}
          className="tubelight-nav"
          aria-label="Floating navigation"
          initial={{ opacity: 0, y: reduced ? 0 : -12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: reduced ? 0 : -12 }}
          transition={{ duration: reduced ? 0 : 0.22 }}
        >
          {floatingNavigation.map(({ label, href, icon: Icon }) => (
            <a
              key={href}
              href={`${homePrefix}${href}`}
              className="tubelight-link"
              aria-label={label}
              title={label === "Journey" ? "Education & Experience" : label}
              aria-current={active === href ? "location" : undefined}
            >
              {active === href && (
                <motion.span
                  className="tubelight-active"
                  layoutId="portfolio-tubelight"
                  transition={
                    reduced
                      ? { duration: 0 }
                      : { type: "spring", stiffness: 350, damping: 32 }
                  }
                  aria-hidden="true"
                >
                  <span className="tubelight-lamp" />
                </motion.span>
              )}
              <Icon size={18} strokeWidth={1.6} aria-hidden="true" />
              <span className="tubelight-label">{label}</span>
            </a>
          ))}
        </motion.nav>
      )}
    </AnimatePresence>
  );
});
