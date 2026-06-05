import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import type { LinkItem } from "@/types/content";

export function LinkButton({ item, variant = "primary" }: { item: LinkItem; variant?: "primary" | "secondary" | "ghost" }) {
  const className = `button button-${variant}`;
  const icon = item.external ? <ExternalLink size={13} aria-hidden="true" /> : null;

  if (item.external || item.href.startsWith("http") || item.href.startsWith("mailto:")) {
    return (
      <a className={className} href={item.href} target={item.external ? "_blank" : undefined} rel={item.external ? "noreferrer" : undefined}>
        {item.label}
        {icon}
      </a>
    );
  }

  return (
    <Link className={className} to={item.href}>
      {item.label}
      {icon}
    </Link>
  );
}
