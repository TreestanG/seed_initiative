export function SectionHeader({ eyebrow, title, body, align = "left" }: { eyebrow?: string; title: string; body?: string; align?: "left" | "center" }) {
  return (
    <div className={`section-header section-header--${align}`}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2>{title}</h2>
      {body ? <p>{body}</p> : null}
    </div>
  );
}
