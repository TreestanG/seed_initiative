import type { Stat } from "@/types/content";
import { SectionHeader } from "./SectionHeader";

type Props = {
	title: string;
	body?: string;
	eyebrow?: string;
	stats: Stat[];
	/**
	 * Optional kicker paragraph that frames *why* the numbers matter.
	 * Rendered as a two-column block with the section header to give the
	 * section real substance — not just a row of numbers.
	 */
	intro?: string;
	/**
	 * Optional CTA shown to the right of the section header.
	 */
	cta?: { label: string; href: string; external?: boolean };
};

export function StatsSection({
	eyebrow,
	title,
	body,
	intro,
	stats,
	cta,
}: Props) {
	return (
		<section className="section section-muted">
			<div className="container">
				<div className="stats-header">
					<SectionHeader eyebrow={eyebrow} title={title} body={body} />
					{intro || cta ? (
						<div className="stats-header-aside">
							{intro ? <p className="stats-intro">{intro}</p> : null}
							{cta ? (
								<a
									className="stats-header-link"
									href={cta.href}
									target={cta.external ? "_blank" : undefined}
									rel={cta.external ? "noreferrer" : undefined}
								>
									{cta.label} <span aria-hidden="true">→</span>
								</a>
							) : null}
						</div>
					) : null}
				</div>

				<ul className="stats-list">
					{stats.map(({ label, value, Icon }) => (
						<li className="stat" key={label}>
							<Icon
								className="stat-icon"
								size={40}
								strokeWidth={1.5}
								aria-hidden="true"
							/>
							<strong className="stat-value">{value}</strong>
							<span className="stat-label">{label}</span>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}
