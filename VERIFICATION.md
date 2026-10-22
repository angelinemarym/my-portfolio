# Verification — 22 October 2026

- Next.js 16.4.2 production build: passed; home, not-found, and icon routes generated.
- TypeScript strict check: passed.
- npm test: 3 passed (pointer bounds, frame-rate independent easing, drift bounds).
- Production page rendered in browser after npm start.
- Browser console check during preview: no error/warning entries.
- Checked overflow at 375px, 812px landscape, and 1440px: none.
- Mobile menu opens, focuses its first link, navigates, and closes; Escape returns focus to toggle.
- Pause control switches to Play state.
- Reduced-motion behavior is implemented in CSS and JavaScript; OS preference was not toggled during browser QA.
- Contact remains a clearly labeled placeholder until the verified address is configured.

Build required permission to launch local processes outside the restricted sandbox. No application compilation errors remain. No deployment was performed.

## Hero background update

Project moved to `/Users/angelinemarym/Documents/angeline-portfolio`. TypeScript, 3 animation tests, and production build passed after the move. Browser pointer check confirmed glow opacity and both pointer coordinates change when moving across the hero. Vertical bands and dual diagonal beams verified visually.

## Hero photo card

Added the owner-supplied `public/hero_picture.jpg` in a typed InteractiveTiltCard. Production build and TypeScript passed. Browser verified image load, pointer tilt (rotateX/rotateY), glare opacity, and no console errors. At 375px the portrait sits below the copy, with no horizontal overflow.

## About glass folder cards

Replaced Explore, Build, Create pillars with burgundy layered folder cards inspired by the supplied 21st.dev reference. Click opens the paper stack and reveals the related section link. Keyboard Escape collapses it. Production build and TypeScript passed. Browser verified open/close and 375px single-column layout without horizontal overflow. Browser extension warnings were observed from a Chrome extension, unrelated to the application.

## Education & Experience

TypeScript and production build passed. About link navigates to the new anchor. Browser verified all five requested date ranges, expanded BINUS IT and Coding Studio descriptions, expected July 2027 status, image/logo loading, Escape collapse, and 375px layout without horizontal overflow. Details sourced from the owner's LinkedIn profile; dates follow the owner's brief.

## Floating tubelight navigation

TypeScript and production build passed. Browser verified no floating nav at page top, appearance after the main header exits, Research/Projects active section detection, and disappearance after returning Home. At 375px the fixed bottom icon bar fits without overflow. Header visibility uses IntersectionObserver; scroll tracking is throttled with requestAnimationFrame.

## Publication cards stack

Replaced the research placeholder with all three publications listed on the owner's LinkedIn Publications page. Publisher links match the LinkedIn Show publication targets. TypeScript and production build passed. Browser verified native sticky overlap, three external paper buttons, and 375px layout without horizontal overflow (cards approximately 433–494px high). IEEE endpoints were not retrievable via the web fetch tool; their URLs were verified against the signed-in LinkedIn profile.
