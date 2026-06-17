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
	function gradient(arg0: any, arg1: any) {
		throw new Error("Function not implemented.");
	}

	return (
		<>
			<PageMeta meta={pageMeta.programs} />
			<Hero
				
				title="Our Programs"
				image='/media/about-banner.webp'
				body="Free online STEM programs for middle school students — Science Bowl prep, mentorship, and tournament experience."
			/>
			<Reveal>
				<FeatureSection
					feature={{
						eyebrow: "Current Program — Summer 2026",
						title: "SEED Summer Enrichment Program",
						body: "Our upcoming online program helps students master Science Bowl topics through daily interactive classes, weekly buzzer practice, guest speaker sessions and a culminating tournament. We aim to expand our program, enriching and expanding students' knowledge as they learn more and apply different concepts. Designed for students entering 6th, 7th, 8th and even 9th grade — no prior experience needed. All sessions are held online.",
						image: {
							src: "/media/group-picture.webp",
							alt: "Seed Initiative group at an in-person event",
						},
						imageSide: "left",
						cta: {
							label: "Sign Up Now",
							href: "https://docs.google.com/forms/d/e/1FAIpQLSechnNNrAO67GXxVjVpSBX7yv0HxXye8-KkxXsY4GQsXYJb9Q/viewform",
							external: true,
						},
					}}
				/>
			</Reveal>

			{/* Program at a glance */}
			<Reveal>
				<section className="section section-muted" style={{ backgroundImage: "linear-gradient(rgb(0 0 0 / 0.75), rgb(0 0 0 / 0.6)), url('/media/tournament.webp')" , backgroundSize: 'cover'}}
>
					<div className="container">
				
							<div className="eyebrow" style={{display: "flex", justifyContent: "center", color: "#7ec5ee"}}> "At a glance" </div>
							<h2 style={{fontFamily: "Georgia, Times New Roman, serif", textAlign: "center", margin: "10px", color: "#ffffff"}}> What to expect</h2>
							
					
						<div className="program-highlights">
							{[
								{
									icon: <GraduationCap size={28} />,
									label: "Grades",
									value: "6th – 9th grade",
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
									value: "5 week program",
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
