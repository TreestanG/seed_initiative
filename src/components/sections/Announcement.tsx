import { ArrowRight } from "lucide-react";

const REGISTRATION_URL =
	"https://docs.google.com/forms/d/e/1FAIpQLSd0qMZbQr0Oityb_eD7d51e_7DTgYt0nLLIVT2dfL7e59sHwQ/viewform?usp=header";

/**
 * Site-wide announcement strip, shown under the header on every page.
 *
 * Three parts, each doing one job: the deadline flag creates the urgency, the
 * message says who it is for, and the button is the only thing that looks
 * clickable. Update or remove this when the deadline passes.
 */
/** 
export function Announcement() {
	return (
		<aside className="announcement" aria-label="Site announcement">
			<div className="announcement-inner">
				<p className="announcement-message">
					<span className="announcement-flag">Closes Aug 5th</span>
					End of Summer Tournament — open to all rising 6th–9th graders.
				</p>
				<a
					className="announcement-cta"
					href={REGISTRATION_URL}
					target="_blank"
					rel="noopener noreferrer"
				>
					Sign up
					<ArrowRight size={16} aria-hidden="true" />
				</a>
			</div>
		</aside>
	);
}
**/