import type { Testimonial } from "@/types/content";
import { SectionHeader } from "./SectionHeader";

export function TestimonialSection({ testimonials }: { testimonials: Testimonial[] }) {
  return (
    <section className="section section-muted">
      <div className="container">
        <SectionHeader eyebrow="Words from past students" title="What Participants Shared" align="center" />
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
