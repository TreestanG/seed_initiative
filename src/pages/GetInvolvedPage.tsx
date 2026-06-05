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
				title="Get Involved"
				body="Make a difference, belong to a community, and help us inspire the next generation of STEM students."
			/>
			<Reveal>
				<InvolvementCards />
			</Reveal>
		</>
	);
}
