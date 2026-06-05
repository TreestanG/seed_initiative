import type { Feature } from "@/types/content";
import { LinkButton } from "./LinkButton";

export function FeatureSection({ feature }: { feature: Feature }) {
  const sectionClass = ["section", feature.spacing ? `section--${feature.spacing}` : ""].filter(Boolean).join(" ");
  const mediaClass = ["feature-media", feature.imageFit === "cover" ? "feature-media--cover" : ""].filter(Boolean).join(" ");

  return (
    <section className={sectionClass}>
      <div className={`container feature ${feature.imageSide === "right" ? "feature--reverse" : ""}`}>
        <div className={mediaClass}>
          <img src={feature.image.src} alt={feature.image.alt} loading="lazy" />
        </div>
        <div className="feature-copy">
          {feature.eyebrow ? <p className="eyebrow">{feature.eyebrow}</p> : null}
          <h2>{feature.title}</h2>
          <p>{feature.body}</p>
          {feature.cta ? <LinkButton item={feature.cta} /> : null}
        </div>
      </div>
    </section>
  );
}
