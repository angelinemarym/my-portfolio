import { skills } from "@/content/skills";
export function SkillsMarquee() {
  return (
    <section className="skills-strip" aria-labelledby="skills-heading">
      <div className="skills-strip-heading container">
        <h2 id="skills-heading">SKILLS, LANGUAGES & TOOLS</h2>
      </div>
      <ul className="sr-only" aria-label="Skills and technologies">
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
      <div className="skills-marquee-window" aria-hidden="true">
        <div className="skills-marquee-track">
          {[0, 1].map((copy) => (
            <div className="skills-marquee-group" key={copy}>
              {skills.map((skill) => (
                <span className="skills-wordmark" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
