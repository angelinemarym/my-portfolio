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

## Projects coverflow — 23 October 2026

Replaced the project placeholders with KuraCV, BambooBrain, and NOVA using the owner-supplied images and GitHub URLs. Added a responsive 3D coverflow with project selection, previous/next buttons, arrow-key navigation, swipe handling, and reduced-motion styles. Images retain their full 16:9 composition.

TypeScript and `next build --webpack` passed. The default Turbopack build encountered an environment port-binding restriction. Browser verified project selection, next and keyboard navigation, caption/link updates, and desktop/mobile rendering. No horizontal overflow at 375px, 812px, or 1456px. Browser warnings came from a Chrome extension. Touch swipe and OS reduced-motion preference were not manually exercised.

## KuraCV project detail — 23 October 2026

Added `/projects/kuracv`, linked through Explore project on the homepage carousel. Content covers background, goals, workflow, intended benefits, and the technology verified in `/Volumes/Lenovo/KuraCV/kuracv-app` and `kuracv-service`. No measured hiring outcomes are claimed. All 14 supplied screenshots are available through a desktop gallery and a native mobile selector, with original-size image links.

Extracted a shared portfolio footer and reused the navigation with homepage section destinations on the detail route. Browser verified the homepage detail link, route rendering, header/footer targets, mobile menu and Escape dismissal, screenshot selection, caption changes, and keyboard-operated next control. No horizontal overflow at 375px or 812px; desktop hero and gallery inspected visually.

TypeScript, `next build --webpack`, and diff whitespace checks passed. Build emits a metadataBase warning for the relative social preview image because a production domain has not been configured. No deployment performed.

## KuraCV burgundy backgrounds

Removed the overview image from the rendered detail page. Reused the existing hero animation through a shared BeamSection for the KuraCV intro and Benefits sections, including vertical bands, diagonal light, grain, and pointer glow. Each section tracks its own pointer and visibility; existing reduced-motion handling is preserved.

TypeScript, all 3 beam tests, and the Webpack production build passed. Browser confirmed no hero image, both animated sections, and changing pointer coordinates/glow in each section. At 375px there is no horizontal page overflow.

## BambooBrain project detail

Added `/projects/bamboobrain` and its homepage Explore project link. Product narrative and architecture come from the owner-supplied Canva pitch (design DAHHQBHVkyE), read through the Canva connector. The page includes background, goals, learning workflow, benefits, six technology layers, eight local screenshots, demo/pitch/deck links, and a final second-place recognition section with the supplied certificate. The award wording follows the owner’s brief: Code; Without Barriers Hackathon 2026, organized by ID8NXT & Microsoft.

Reused shared navigation, footer, burgundy beam effects, and a generalized screenshot gallery. TypeScript, Webpack production build, and whitespace checks passed. Browser verified desktop hero and recognition section, screenshot selection and original-image link, mobile selector, no overflow at 375px/812px, and homepage navigation to BambooBrain. KuraCV’s gallery still renders correctly. A stale development gallery export was resolved by restarting the local preview. Existing metadataBase warning remains for KuraCV’s social image.

## Activities & Awards photo stack

Added section 06 immediately before Let’s Connect (now 07), showing all eight owner-supplied photos from `public/activities`. Adapted the official Ruixen Card Stack registry source (`https://ruixen.com/r/card-stack.json`) to the existing Framer Motion dependency, responsive card dimensions, portfolio colors, Next Image rendering, larger navigation targets, previous/next controls, and keyboard semantics. Photos retain their full composition; the active caption includes a full-size photo link. Autoplay is off.

TypeScript, Webpack production build, and whitespace checks passed. Browser verified next/previous behavior, arrow-key navigation, direct selection of the eighth photo, looping back to the first, caption/image-link updates, and section order before contact. Desktop and mobile inspected visually; no horizontal overflow at 375px or 812px. Drag and OS reduced-motion mode were not manually exercised.

Gallery edge update: fitted card dimensions to the entire rotated fan and removed the gallery’s clipping. Phones show three visible cards; larger screens show five. TypeScript and whitespace checks passed. Browser measured the outer card bounds inside the gallery at 1456px and inside the viewport at 375px; both layouts were inspected visually without clipped left/right edges.

## Carousel autoplay

Enabled automatic rotation for Activities & Awards (4.5 seconds) and Projects (5 seconds), with Pause/Play buttons. A shared hook suspends rotation while hovered, focused, dragging, outside the viewport, in a hidden tab, or under the reduced-motion preference. Manual slide changes restart the delay. Activity hover/focus handling includes the caption and full-photo link.

Browser verified Projects advancing from BambooBrain to NOVA, no changes during a 5.5-second explicit pause, resumption with Play, activity advancement from 1/8 to 2/8, and no activity changes during a 5-second caption hover. TypeScript and production build passed; visibility/reduced-motion behavior is implemented but was not manually toggled during this check.

## Contact links and email form

Replaced the contact placeholder with email, LinkedIn, and ORCID links and related Lucide icons. Added name, email, subject, and message fields, native validation, sending/error/success states, honeypot, and direct-email fallback. Web3Forms free-plan integration submits from the browser, as required by its current API documentation. Configure `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` using `.env.example`; README documents inbox verification, local setup, and hosting rebuild. No live key is configured and no real email was sent during verification.

TypeScript, Webpack production build, and all 8 tests passed. New tests mock provider requests and cover missing configuration, invalid input, success payload, provider rejection, and network failure. Browser verified all three link destinations, required-field validation, desktop contact layout, and no horizontal overflow at 375px/812px. Live inbox delivery remains dependent on the owner’s Web3Forms access key.
