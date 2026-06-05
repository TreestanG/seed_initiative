import type { Stat } from "@/types/content";
import { SectionHeader } from "./SectionHeader";

export function StatsSection({ title, body, stats }: { title: string; body: string; stats: Stat[] }) {
  return (
    <section className="section section-muted">
      <div className="container">
        <SectionHeader title={title} body={body} align="center" />
        <div className="stats-grid">
          {stats.map(({ label, value, Icon }) => (
            <div className="stat-card" key={label}>
              <Icon size={34} aria-hidden="true" />
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
