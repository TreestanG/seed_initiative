import { CTA } from "@/components/sections/CTA";
import { FeatureSection } from "@/components/sections/FeatureSection";
import { Hero } from "@/components/sections/Hero";
import { PageMeta } from "@/components/sections/PageMeta";
import { Reveal } from "@/components/Reveal";
import { TestimonialSection } from "@/components/sections/TestimonialSection";
import { WorkGrid } from "@/components/sections/WorkGrid";
import { pageMeta, programArchive, testimonials } from "@/data/pages";

export function ProgramsPage() {
	return (
		<>
			<PageMeta meta={pageMeta.programs} />
			<Hero
				compact
				title="Our Programs"
				body="Explore opportunities for learning, growth, and competition."
			/>
			<Reveal>
				<FeatureSection
					feature={{
						eyebrow: "Current Program",
						title: "Spring Science Bowl Prep",
						body: "An online program designed to boost Science Bowl knowledge, sharpen skills, and connect aspiring competitors. Program details and registration updates are shared here as they are finalized.",
						image: {
							src: "/media/group-picture.jpg",
							alt: "Seed Initiative group at an in-person event",
						},
						imageSide: "left",
						cta: { label: "Get Involved", href: "/get-involved" },
					}}
				/>
			</Reveal>
			<Reveal>
				<WorkGrid
					eyebrow="Highlights from previous programs"
					title="Program Archive"
					items={programArchive}
				/>
			</Reveal>
			<Reveal>
				<TestimonialSection testimonials={testimonials} />
			</Reveal>
			<CTA
				title="Support Our Students"
				body="Your involvement helps us create and sustain impactful programs like these for the next generation of scientists and innovators."
				action={{ label: "Get Involved", href: "/get-involved" }}
			/>
		</>
	);
}
