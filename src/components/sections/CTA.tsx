import type { LinkItem } from "@/types/content";
import { LinkButton } from "./LinkButton";

export function CTA({ title, body, action }: { title: string; body: string; action: LinkItem }) {
  return (
    <section className="section">
      <div className="container cta-band">
        <div>
          <h2>{title}</h2>
          <p>{body}</p>
        </div>
        <LinkButton item={action} />
      </div>
    </section>
  );
}
