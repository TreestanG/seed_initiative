import { ArrowRight } from "lucide-react";
import type { WorkItem } from "@/types/content";
import { SectionHeader } from "./SectionHeader";

type Props = {
	eyebrow?: string;
	title: string;
	body?: string;
	items: WorkItem[];
	moreHref?: string;
	moreLabel?: string;
};

function formatDate(date: string) {
	// Accept "November 1, 2025" or "November 18, 2024 - February 28, 2025".
	// If we can't parse, return the input untouched so we never lose data.
	const trimmed = date.trim();
	const dashIdx = trimmed.indexOf(" - ");
	const first = dashIdx >= 0 ? trimmed.slice(0, dashIdx).trim() : trimmed;
	const parsed = new Date(first);
	if (Number.isNaN(parsed.getTime())) return trimmed;
	return parsed.toLocaleDateString("en-US", {
		month: "long",
		day: "numeric",
		year: "numeric",
	});
}

export function WorkGrid({
	eyebrow,
	title,
	body,
	items,
	moreHref,
	moreLabel = "See all updates",
}: Props) {
	if (items.length === 0) return null;
	const [featured, ...rest] = items;
	const list = rest.slice(0, 4);

	return (
		<section className="section">
			<div className="container">
				<SectionHeader eyebrow={eyebrow} title={title} body={body} />

				<div className="work-feature">
					<a
						className="work-feature-media"
						href={moreHref ?? "#"}
						aria-label={featured.title}
					>
						<img
							src={featured.image.src}
							alt={featured.image.alt}
							loading="lazy"
						/>
					</a>
					<div className="work-feature-copy">
						<p className="work-feature-date">{formatDate(featured.date)}</p>
						<h3 className="work-feature-title">
							<a href={moreHref ?? "#"}>{featured.title}</a>
						</h3>
						<p className="work-feature-body">{featured.body}</p>
						{moreHref ? (
							<a className="work-feature-cta" href={moreHref}>
								Read the update <ArrowRight size={16} aria-hidden="true" />
							</a>
						) : null}
					</div>
				</div>

				{list.length > 0 ? (
					<ul className="work-list">
						{list.map((item) => (
							<li className="work-list-item" key={item.title}>
								<a className="work-list-link" href={moreHref ?? "#"}>
									<span className="work-list-date">
										{formatDate(item.date)}
									</span>
									<span className="work-list-title">{item.title}</span>
									<span className="work-list-body">{item.body}</span>
									<span className="work-list-arrow" aria-hidden="true">
										<ArrowRight size={16} />
									</span>
								</a>
							</li>
						))}
					</ul>
				) : null}

				{moreHref ? (
					<a className="work-more" href={moreHref}>
						{moreLabel} <ArrowRight size={16} aria-hidden="true" />
					</a>
				) : null}
			</div>
		</section>
	);
}
