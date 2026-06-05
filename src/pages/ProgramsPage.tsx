import { CalendarDays, Clock, Globe, GraduationCap, Users } from "lucide-react";
import { CTA } from "@/components/sections/CTA";
import { FeatureSection } from "@/components/sections/FeatureSection";
import { Hero } from "@/components/sections/Hero";
import { PageMeta } from "@/components/sections/PageMeta";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { TestimonialSection } from "@/components/sections/TestimonialSection";
import { WorkGrid } from "@/components/sections/WorkGrid";
import { pageMeta, programArchive, testimonials } from "@/data/pages";
import { site } from "@/data/site";

export function ProgramsPage() {
	return (
		<>
			<PageMeta meta={pageMeta.programs} />
			<Hero
				compact
				title="Our Programs"
				body="Free online STEM programs for middle school students — Science Bowl prep, mentorship, and tournament experience."
			/>
			<Reveal>
				<FeatureSection
					feature={{
						eyebrow: "Current Program — Spring 2026",
						title: "Spring Science Bowl Prep",
						body: "Our upcoming online program helps students master Science Bowl topics through daily interactive classes, weekly buzzer practice, and a culminating tournament. Designed for students entering 6th, 7th, or 8th grade — no prior experience needed. All sessions are held online and are completely free for families.",
						image: {
							src: "/media/group-picture.webp",
							alt: "Seed Initiative group at an in-person event",
						},
						imageSide: "left",
						cta: {
							label: "Sign Up for Updates",
							href: site.links.studentForm,
							external: true,
						},
					}}
				/>
			</Reveal>

			{/* Program at a glance */}
			<Reveal>
				<section className="section section-muted">
					<div className="container">
						<SectionHeader
							eyebrow="At a glance"
							title="What to expect"
							align="center"
						/>
						<div className="program-highlights">
							{[
								{
									icon: <GraduationCap size={28} />,
									label: "Grades",
									value: "6th – 8th grade",
								},
								{
									icon: <Globe size={28} />,
									label: "Format",
									value: "Online (Discord + live video)",
								},
								{
									icon: <Clock size={28} />,
									label: "Schedule",
									value: "Daily classes, ~1 hour each",
								},
								{
									icon: <CalendarDays size={28} />,
									label: "Duration",
									value: "8–12 week programs",
								},
								{
									icon: <Users size={28} />,
									label: "Class Size",
									value: "Small groups for personal attention",
								},
							].map((item) => (
								<div key={item.label} className="program-highlight-card">
									<span className="program-highlight-icon">{item.icon}</span>
									<strong className="program-highlight-label">
										{item.label}
									</strong>
									<span className="program-highlight-value">{item.value}</span>
								</div>
							))}
						</div>
					</div>
				</section>
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
