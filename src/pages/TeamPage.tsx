import { Hero } from "@/components/sections/Hero";
import { PageMeta } from "@/components/sections/PageMeta";
import { TeamGrid } from "@/components/sections/TeamGrid";
import { Reveal } from "@/components/Reveal";
import { pageMeta, teamGroups } from "@/data/pages";

export function TeamPage() {
	return (
		<>
			<PageMeta meta={pageMeta.team} />
			<Hero
				compact
				title="Meet the Team"
				body="Student leaders, mentors, and teachers making STEM competition support more accessible."
			/>
			<Reveal>
				<TeamGrid groups={teamGroups} />
			</Reveal>
		</>
	);
}
