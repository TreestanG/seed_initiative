import type { TimelineItem } from "@/types/content";
import { SectionHeader } from "./SectionHeader";

export function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <section className="section">
      <div className="container">
        <SectionHeader eyebrow="Key milestones" title="Our Journey So Far" align="center" />
        <ol className="timeline">
          {items.map((item) => (
            <li key={`${item.date}-${item.title}`}>
              <time>{item.date}</time>
              <div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
