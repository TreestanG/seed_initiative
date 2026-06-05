import {
	ArrowRight,
	GraduationCap,
	Handshake,
	HeartHandshake,
} from "lucide-react";
import { Link } from "react-router-dom";
import { site } from "@/data/site";

const cards = [
	{
		title: "Become a Student",
		body: "Join lessons, tryouts, tournaments, and newsletter updates for future program announcements.",
		Icon: GraduationCap,
		href: site.links.studentForm,
		external: true,
		bg: "var(--brand-700)",
	},
	{
		title: "Become a Volunteer",
		body: "Help teach, mentor, run events, or support student teams preparing for STEM competitions.",
		Icon: Handshake,
		href: site.links.volunteerForm,
		external: true,
		bg: "var(--brand-600)",
	},
	{
		title: "Become a Sponsor",
		body: "Fund materials, tournaments, lessons, travel support, and access for under-resourced students.",
		Icon: HeartHandshake,
		href: "/sponsors",
		external: false,
		bg: "var(--brand-400)",
	},
];

export function InvolvementCards() {
	return (
		<section className="section">
			<div className="container involvement-grid">
				{cards.map(({ title, body, Icon, href, external, bg }) => (
					<article
						className="involvement-card"
						key={title}
						style={{ backgroundColor: bg }}
					>
						<Icon size={56} strokeWidth={1.5} aria-hidden="true" />
						<h2>{title}</h2>
						<p>{body}</p>
						{external ? (
							<a
								className="involvement-btn"
								href={href}
								target="_blank"
								rel="noreferrer"
							>
								Learn More <ArrowRight size={16} />
							</a>
						) : (
							<Link className="involvement-btn" to={href}>
								Learn More <ArrowRight size={16} />
							</Link>
						)}
					</article>
				))}
			</div>
		</section>
	);
}
