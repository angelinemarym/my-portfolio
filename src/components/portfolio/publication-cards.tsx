import { ArrowDown, ArrowUpRight, FileText } from "lucide-react";
import { publications } from "@/content/publications";
import { CardSticky, CardsStack } from "@/components/ui/cards-stack";
function PublicationArt({ kind }: { kind: string }) {
  return (
    <div
      className={`publication-art publication-art-${kind}`}
      aria-hidden="true"
    >
      {kind === "table" ? (
        <>
          <div className="research-table">
            {Array.from({ length: 20 }, (_, i) => (
              <span key={i} />
            ))}
          </div>
          <div className="research-query">QUESTION → STRUCTURE → ANSWER</div>
        </>
      ) : kind === "voice" ? (
        <>
          <div className="research-wave">
            {[18, 35, 60, 30, 80, 100, 48, 70, 38, 90, 55, 25, 48, 20, 35].map(
              (height, i) => (
                <i key={i} style={{ height: `${height}%` }} />
              ),
            )}
          </div>
          <div className="research-query">
            VOICE → RETRIEVAL → UNDERSTANDING
          </div>
        </>
      ) : (
        <>
          <div className="research-vision">
            <span />
            <span />
            <span />
            <span />
            <i />
            <i />
            <i />
          </div>
          <div className="research-query">SEE → CLASSIFY → UNDERSTAND</div>
        </>
      )}
    </div>
  );
}
export function PublicationCards() {
  return (
    <>
      <div className="publication-stack-note">
        <span>
          SELECTED CO-AUTHORED RESEARCH · {publications.length} PAPERS
        </span>
        <span>
          SCROLL TO EXPLORE <ArrowDown size={13} aria-hidden="true" />
        </span>
      </div>
      <CardsStack>
        {publications.map((paper, index) => (
          <CardSticky
            key={paper.id}
            index={index}
            className={`publication-card publication-${paper.theme}`}
            aria-labelledby={`${paper.id}-title`}
          >
            <div className="publication-card-top">
              <span className="publication-kind">
                <FileText size={15} aria-hidden="true" />
                {paper.kind}
              </span>
              <span className="publication-year">
                {paper.year}
                <span className="publication-number"> / 0{index + 1}</span>
              </span>
            </div>
            <div className="publication-card-body">
              <div className="publication-copy">
                <p className="publication-venue">{paper.venue}</p>
                <h3 id={`${paper.id}-title`}>{paper.title}</h3>
                <p className="publication-summary">{paper.summary}</p>
                <ul className="publication-topics" aria-label="Research topics">
                  {paper.topics.map((topic) => (
                    <li key={topic}>{topic}</li>
                  ))}
                </ul>
                <a
                  href={paper.url}
                  className="publication-paper-link"
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Read paper: ${paper.title}`}
                >
                  {paper.linkLabel}
                  <ArrowUpRight size={17} aria-hidden="true" />
                </a>
              </div>
              <PublicationArt kind={paper.art} />
            </div>
          </CardSticky>
        ))}
      </CardsStack>
    </>
  );
}
