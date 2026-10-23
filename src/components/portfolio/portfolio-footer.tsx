import BeamWordmarkFooter from "@/components/ui/beam-wordmark-footer";
import { profile } from "@/content/portfolio";

export function PortfolioFooter({
  backToTop = "/#home",
}: {
  backToTop?: string;
}) {
  return (
    <BeamWordmarkFooter
      brand="Angeline"
      company={profile.name}
      wordmark="ANGELINE"
      background="#16090f"
      ink="#f6edef"
      muted="#c8aab4"
      accent="#be537a"
      wordTop="#9b3b5a"
      wordFoot="#2e1020"
      animate={true}
      socials={[]}
      credits={[{ label: "Research. Build. Create." }]}
      columns={[
        {
          title: "Explore",
          links: [
            { label: "About", href: "/#about" },
            {
              label: "Education & Experience",
              href: "/#education-experience",
            },
            { label: "Research", href: "/#research" },
            { label: "Projects", href: "/#projects" },
          ],
        },
        {
          title: "Keep in touch",
          links: [
            { label: "Ventures", href: "/#ventures" },
            { label: "Contact", href: "/#contact" },
            { label: "Back to top", href: backToTop },
          ],
        },
      ]}
    />
  );
}
