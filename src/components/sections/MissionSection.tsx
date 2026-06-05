import type { ImageAsset, LinkItem } from "@/types/content";
import { LinkButton } from "./LinkButton";

type Props = {
	eyebrow: string;
	title: string;
	body: string;
	image: ImageAsset;
	imageSide?: "left" | "right";
	secondary?: { label: string; value: string }[];
	cta?: LinkItem;
};

/**
 * Editorial two-column mission / story block. Modeled on nature.org's
 * "Our Mission" pattern: large image one side, eyebrow + serif title +
 * body + a single primary CTA on the other. No card chrome, no shadow,
 * no hover lift — the imagery and the typography do the work.
 */
export function MissionSection({
	eyebrow,
	title,
	body,
	image,
	imageSide = "left",
	secondary,
	cta,
}: Props) {
	return (
		<section className="section">
			<div
				className={`container mission ${imageSide === "right" ? "mission--reverse" : ""}`}
			>
				<div className="mission-media">
					<img src={image.src} alt={image.alt} loading="lazy" />
				</div>
				<div className="mission-copy">
					<p className="eyebrow">{eyebrow}</p>
					<h2>{title}</h2>
					<p className="mission-body">{body}</p>

					{secondary && secondary.length > 0 ? (
						<dl className="mission-secondary">
							{secondary.map((item) => (
								<div className="mission-secondary-item" key={item.label}>
									<dt>{item.label}</dt>
									<dd>{item.value}</dd>
								</div>
							))}
						</dl>
					) : null}

					{cta ? <LinkButton item={cta} /> : null}
				</div>
			</div>
		</section>
	);
}
