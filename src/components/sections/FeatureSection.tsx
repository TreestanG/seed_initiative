import type { Feature } from "@/types/content";
import { buildSrcSet } from "@/lib/images";
import { LinkButton } from "./LinkButton";

// Half of the 1120px container above the 880px breakpoint, full-bleed below it.
const SIZES = "(max-width: 880px) 100vw, 520px";

export function FeatureSection({ feature }: { feature: Feature }) {
  const sectionClass = ["section", feature.spacing ? `section--${feature.spacing}` : ""].filter(Boolean).join(" ");
  const mediaClass = ["feature-media", feature.imageFit === "cover" ? "feature-media--cover" : ""].filter(Boolean).join(" ");

  return (
    <section className={sectionClass}>
      <div className={`container feature ${feature.imageSide === "right" ? "feature--reverse" : ""}`}>
        <div className={mediaClass}>
          <img
            src={feature.image.src}
            srcSet={buildSrcSet(feature.image.src, feature.image.widths)}
            sizes={SIZES}
            alt={feature.image.alt}
            loading="lazy"
          />
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
