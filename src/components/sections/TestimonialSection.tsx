import type { Testimonial } from "@/types/content";
import { SectionHeader } from "./SectionHeader";

export function TestimonialSection({
	testimonials,
	eyebrow = "Words from past students",
	title = "What Participants Shared",
}: {
	testimonials: Testimonial[];
	eyebrow?: string;
	title?: string;
}) {
	return (
		<section className="section section-muted">
			<div className="container">
				<SectionHeader eyebrow={eyebrow} title={title} align="center" />
				<div className="testimonial-grid">
					{testimonials.map((testimonial) => (
						<figure className="testimonial" key={testimonial.name}>
							<blockquote>{testimonial.quote}</blockquote>
							<figcaption>
								<strong>{testimonial.name}</strong>
								<span>{testimonial.context}</span>
							</figcaption>
						</figure>
					))}
				</div>
			</div>
		</section>
	);
}
