import { ArrowRight, Quote } from "lucide-react";
import type { Testimonial } from "@/types/content";
import { SectionHeader } from "./SectionHeader";

type Props = {
	testimonials: Testimonial[];
	eyebrow?: string;
	title?: string;
	body?: string;
	moreHref?: string;
	moreLabel?: string;
};

function initialsFor(name: string) {
	return name
		.split(/\s+/)
		.filter(Boolean)
		.slice(0, 2)
		.map((part) => part[0]?.toUpperCase() ?? "")
		.join("");
}

export function TestimonialSection({
	testimonials,
	eyebrow = "Words from families",
	title = "Trusted by Families",
	body,
	moreHref,
	moreLabel = "Read more stories",
}: Props) {
	if (testimonials.length === 0) return null;

	const [featured, ...rest] = testimonials;
	const secondary = rest.slice(0, 2);

	return (
		<section className="section">
			<div className="container">
				<SectionHeader eyebrow={eyebrow} title={title} body={body} />

				<div className="testimonial-feature">
					<figure className="testimonial testimonial--featured">
						<Quote
							className="testimonial-quote-mark"
							size={36}
							strokeWidth={1.5}
							aria-hidden="true"
						/>
						<blockquote>{featured.quote}</blockquote>
						<figcaption>
							<span className="testimonial-avatar" aria-hidden="true">
								{initialsFor(featured.name)}
							</span>
							<span className="testimonial-meta">
								<strong>{featured.name}</strong>
								<span>{featured.context}</span>
							</span>
						</figcaption>
					</figure>
				</div>

				{secondary.length > 0 ? (
					<div className="testimonial-secondary">
						{secondary.map((t) => (
							<figure className="testimonial testimonial--compact" key={t.name}>
								<blockquote>{t.quote}</blockquote>
								<figcaption>
									<span
										className="testimonial-avatar testimonial-avatar--sm"
										aria-hidden="true"
									>
										{initialsFor(t.name)}
									</span>
									<span className="testimonial-meta">
										<strong>{t.name}</strong>
										<span>{t.context}</span>
									</span>
								</figcaption>
							</figure>
						))}
					</div>
				) : null}

				{moreHref ? (
					<a className="testimonial-more" href={moreHref}>
						{moreLabel} <ArrowRight size={16} aria-hidden="true" />
					</a>
				) : null}
			</div>
		</section>
	);
}
