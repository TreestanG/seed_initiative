import type { LinkItem } from "@/types/content";
import type { CSSProperties } from "react";
import { LinkButton } from "./LinkButton";

type HeroProps = {
  eyebrow?: string;
  title: string;
  body?: string;
  image?: string;
  actions?: LinkItem[];
  compact?: boolean;
};

export function Hero({ eyebrow, title, body, image, actions = [], compact = false }: HeroProps) {
  return (
    <section className={`hero ${compact ? "hero--compact" : ""}`} style={image ? ({ "--hero-image": `url(${image})` } as CSSProperties) : undefined}>
      <div className="hero-overlay" aria-hidden="true" />
      <div className="container hero-inner">
        <div className="hero-copy">
          {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
          <h1>{title}</h1>
          {body ? <p>{body}</p> : null}
          {actions.length ? (
            <div className="button-row">
              {actions.map((action, index) => (
                <LinkButton key={action.href} item={action} variant={index === 0 ? "primary" : "secondary"} />
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
