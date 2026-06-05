import type { WorkItem } from "@/types/content";
import { SectionHeader } from "./SectionHeader";

export function WorkGrid({ eyebrow, title, body, items }: { eyebrow?: string; title: string; body?: string; items: WorkItem[] }) {
  return (
    <section className="section">
      <div className="container">
        <SectionHeader eyebrow={eyebrow} title={title} body={body} />
        <div className="work-grid">
          {items.map((item) => (
            <article className="work-card" key={item.title}>
              <img src={item.image.src} alt={item.image.alt} loading="lazy" />
              <div>
                <p>{item.date}</p>
                <h3>{item.title}</h3>
                <span>{item.body}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
