import { CTA } from "@/components/sections/CTA";
import { Hero } from "@/components/sections/Hero";
import { MissionSection } from "@/components/sections/MissionSection";
import { PageMeta } from "@/components/sections/PageMeta";
import { StatsSection } from "@/components/sections/StatsSection";
import { TestimonialSection } from "@/components/sections/TestimonialSection";
import { WorkGrid } from "@/components/sections/WorkGrid";
import { Reveal } from "@/components/Reveal";
import {
	impactStats,
	impactStatsIntro,
	latestWork,
	pageMeta,
	parentTestimonials,
} from "@/data/pages";
import { site } from "@/data/site";

export function HomePage() {
	return (
		<>
			<PageMeta meta={pageMeta.home} />

			<Hero
				title="Empowering the Next Generation of STEM Leaders"
				body="Free, student-led STEM programs helping middle schoolers thrive in competitions through classes, workshops, and mentorship — at no cost to families."
				image="/media/hero-1.webp"
				actions={[
					{ label: "Join a Program", href: "/programs" },
					{ label: "Donate Now", href: site.links.donation, external: true },
				]}
			/>

			<Reveal>
				<MissionSection
					eyebrow="Our mission"
					title="Every student who wants to compete should be able to."
					body="Seed Initiative removes the barriers that keep motivated middle schoolers out of Science Bowl — cost, geography, and access to coaching. Our high-school instructors and mentors run free, structured programs so any 6th–8th grader can learn, practice, and step onto the competition floor."
					image={{
						src: "/media/our-story.webp",
						alt: "Seed Initiative students working through STEM lessons together",
					}}
					imageSide="right"
					cta={{ label: "Learn How We Work", href: "/programs" }}
				/>
			</Reveal>

			<Reveal>
				<StatsSection
					eyebrow="Where we are in 2025–26"
					title="Current impact goals"
					intro={impactStatsIntro}
					stats={impactStats}
					cta={{ label: "See our impact in detail", href: "/about" }}
				/>
			</Reveal>

			<Reveal>
				<WorkGrid
					eyebrow="What's new"
					title="Our latest work"
					body="What we ran this term, what's coming next, and the people we reached."
					items={latestWork}
					moreHref="/programs"
					moreLabel="Browse all programs"
				/>
			</Reveal>

			<Reveal>
				<TestimonialSection
					testimonials={parentTestimonials}
					eyebrow="What parents say"
					title="Trusted by families across the Bay Area"
					body="Notes from parents whose students went through a Seed Initiative program."
					moreHref="/about"
					moreLabel="Read parent stories"
				/>
			</Reveal>

			<CTA
				title="Make a difference"
				body="Every dollar covers a student seat, a buzzer set, a tournament registration, or a transit ticket. 100% of program costs go directly to students."
				action={{
					label: "Donate to Seed",
					href: site.links.donation,
					external: true,
				}}
			/>
		</>
	);
}
