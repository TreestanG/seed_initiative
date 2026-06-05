import type { TeamGroup } from "@/types/content";

export function TeamGrid({ groups }: { groups: TeamGroup[] }) {
	return (
		<section className="section-team">
			<div className="container team-groups">
				{groups.map((group) => (
					<div key={group.title}>
						<h2 className="team-group-heading">{group.title}</h2>
						<div className="team-grid">
							{group.people.map((person) => (
								<article
									className="person-card"
									key={`${group.title}-${person.name}`}
								>
									<div className="person-image">
										<img
											src={person.image?.src ?? "/placeholder-team.webp"}
											alt={person.image?.alt ?? person.name}
											loading="lazy"
										/>
									</div>
									<p className="person-name">{person.name}</p>
									<p className="person-role">{person.role}</p>
								</article>
							))}
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
