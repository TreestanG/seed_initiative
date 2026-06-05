import { Hero } from "@/components/sections/Hero";
import { InvolvementCards } from "@/components/sections/InvolvementCards";
import { PageMeta } from "@/components/sections/PageMeta";
import { Reveal } from "@/components/Reveal";
import { pageMeta } from "@/data/pages";

export function GetInvolvedPage() {
	return (
		<>
			<PageMeta meta={pageMeta.getInvolved} />
			<Hero
				compact
				title="Join Us"
				body="Whether you're a student, parent, volunteer, or sponsor — there's a place for you in the Seed Initiative community."
			/>
			<Reveal>
				<InvolvementCards />
			</Reveal>
		</>
	);
}
