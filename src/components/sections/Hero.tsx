import type { LinkItem } from "@/types/content";
import type { CSSProperties } from "react";
import { backgroundUrls } from "@/lib/images";
import { LinkButton } from "./LinkButton";

type HeroProps = {
  eyebrow?: string;
  title: string;
  body?: string;
  image?: string;
  /** Width of the image's 1x variant. Set it to serve retina the base file only. */
  imageOneX?: number;
  actions?: LinkItem[];
  compact?: boolean;
};

/**
 * Supplies the raw files only. styles.css picks between them by viewport and
 * pixel ratio -- it has to own that choice, because an inline style would
 * outrank the media query that does the picking.
 *
 * Both are always set, even when there is only one file, so the stylesheet can
 * read either without a fallback.
 */
function heroStyle(image?: string, oneX?: number) {
  if (!image) return undefined;
  const full = `url("${image}")`;
  if (!oneX) return { "--hero-src-small": full, "--hero-src-large": full } as CSSProperties;
  const urls = backgroundUrls(image, oneX);
  return { "--hero-src-small": urls.oneX, "--hero-src-large": urls.twoX } as CSSProperties;
}

export function Hero({ eyebrow, title, body, image, imageOneX, actions = [], compact = false }: HeroProps) {
  return (
    <section className={`hero ${compact ? "hero--compact" : ""}`} style={heroStyle(image, imageOneX)}>
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
