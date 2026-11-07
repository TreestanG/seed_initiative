import { ArrowRight } from "lucide-react";

const REGISTRATION_URL =
	"https://docs.google.com/forms/d/e/1FAIpQLScitmuqCOkWg5fVUOTQbGyj0NWOXIxRAGZgdFIzuIySefOQAw/viewform?usp=header";

const TRYOUT_URL = "https://docs.google.com/forms/d/13iGqwSKiqgyCw1SWf0QUW0GQ3LAsVEyBGdo3xdLEpiQ/edit" 

/**
 * Site-wide announcement strip, shown under the header on every page.
 *
 * Three parts, each doing one job: the deadline flag creates the urgency, the
 * message says who it is for, and the button is the only thing that looks
 * clickable. Update or remove this when the deadline passes.
 */

export function Announcement() {
	return (
		<aside className="announcement" aria-label="Site announcement">
			<div className="announcement-inner">
				<p className="announcement-message">
					<span className="announcement-flag">Registrations for science bowl tryouts</span>
					Open to rising 6th–8th graders attending Horner Middle School
				</p>
				<a
					className="announcement-cta"
					href={TRYOUT_URL}
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
