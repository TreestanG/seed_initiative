import { CTA } from "@/components/sections/CTA";
import { Hero } from "@/components/sections/Hero";
import { PageMeta } from "@/components/sections/PageMeta";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { StatsSection } from "@/components/sections/StatsSection";
import { Timeline } from "@/components/sections/Timeline";
import { aboutStats, pageMeta, timeline } from "@/data/pages";

export function AboutPage() {
	return (
		<>
			<PageMeta meta={pageMeta.about} />
			<Hero
				compact
				title="About Us"
				body="Seed Initiative is a nonprofit organization dedicated to empowering middle school students in STEM competitions."
			/>
			<Reveal>
				<section className="section">
					<div className="container story-grid">
						<img
							src="/media/our-story.jpg"
							alt="Seed Initiative students and volunteers"
							loading="lazy"
						/>
						<div>
							<SectionHeader
								eyebrow="Our story"
								title="From a club substitute to a student-led nonprofit"
							/>
							<p>
								Seed started as a substitute for a middle school Science Bowl
								club. After Horner Middle School students struggled to form a
								club due to a lack of support from the school, members of the
								Irvington High School Science Bowl club stepped in to teach
								biology, chemistry, physics, earth and space science, and math.
							</p>
							<p>
								Over summer 2024, the Bay Area Science Bowl Initiative taught
								online classes to more than 100 Horner students and hosted an
								in-person tournament. The program became Seed Initiative, short
								for Science Engagement and Educational Development, to bring
								advanced science knowledge and competition support to more
								middle school students.
							</p>
						</div>
					</div>
				</section>
			</Reveal>
			<Reveal>
				<Timeline items={timeline} />
			</Reveal>
			<CTA
				title="See Examples of Our Focused Initiatives"
				body="Our summer program and winter bootcamp show how structured learning, practical skill-building, and competition experience come together."
				action={{ label: "Explore Programs", href: "/programs" }}
			/>
			<Reveal>
				<StatsSection
					title="Our Collective Impact"
					body="Every class, tryout, and tournament builds a stronger pathway for students who want to compete in STEM."
					stats={aboutStats}
				/>
			</Reveal>
			<CTA
				title="Join Our Mission"
				body="Volunteer, spread the word, make a donation, or help students access the resources they need."
				action={{ label: "Get Involved", href: "/get-involved" }}
			/>
		</>
	);
}
