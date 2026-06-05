import { CTA } from "@/components/sections/CTA";
import { FeatureSection } from "@/components/sections/FeatureSection";
import { Hero } from "@/components/sections/Hero";
import { PageMeta } from "@/components/sections/PageMeta";
import { StatsSection } from "@/components/sections/StatsSection";
import { WorkGrid } from "@/components/sections/WorkGrid";
import { Reveal } from "@/components/Reveal";
import { homeFeatures, impactStats, latestWork, pageMeta } from "@/data/pages";
import { site } from "@/data/site";

export function HomePage() {
	return (
		<>
			<PageMeta meta={pageMeta.home} />
			<Hero
				title="Empowering the Next Generation of STEM Leaders"
				body="Seed Initiative helps middle school students thrive in STEM competitions through classes, workshops, and financial support."
				image="/media/hero-1.webp"
				actions={[
					{ label: "Get Involved", href: "/get-involved" },
					{ label: "Donate Now", href: site.links.donation, external: true },
				]}
			/>
			{homeFeatures.slice(0, 1).map((feature) => (
				<FeatureSection key={feature.title} feature={feature} />
			))}
			<CTA
				title="Make a Difference"
				body="Please donate to help us provide resources, mentorship, and support to under-resourced students in STEM competitions."
				action={{ label: "Support Seed", href: "/sponsors" }}
			/>
			<Reveal>
				<StatsSection
					title="Current Impact Goals"
					body="Seed Initiative focuses on measurable growth that helps middle schoolers build confidence, access, and competition readiness."
					stats={impactStats}
				/>
			</Reveal>
			<Reveal>
				<WorkGrid title="Our Latest Work" items={latestWork} />
			</Reveal>
			{homeFeatures.slice(1).map((feature) => (
				<FeatureSection key={feature.title} feature={feature} />
			))}
		</>
	);
}
