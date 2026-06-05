import { Check, Info, X } from "lucide-react";
import { Hero } from "@/components/sections/Hero";
import { PageMeta } from "@/components/sections/PageMeta";
import { Reveal } from "@/components/Reveal";
import { pageMeta, sponsorshipBenefits, sponsorTiers } from "@/data/pages";
import { site } from "@/data/site";

function Tick() {
	return (
		<span className="benefit-icon benefit-icon--yes">
			<Check size={20} />
		</span>
	);
}

function Cross() {
	return (
		<span className="benefit-icon benefit-icon--no">
			<X size={20} />
		</span>
	);
}

export function SponsorsPage() {
	return (
		<>
			<PageMeta meta={pageMeta.sponsors} />
			<Hero
				compact
				title="Our Supporters"
				body="Sponsors, partners, and donors help Seed Initiative reach more students."
			/>

			{/* Program Sponsors */}
			<Reveal>
				<section className="section">
					<div className="container sponsors-section">
						<div className="sponsors-heading">
							<h2>Program Sponsors</h2>
							<p>
								We are extremely thankful to every sponsor who has helped us
								come this far.
							</p>
						</div>

						<div className="sponsor-logo-grid">
							<a
								href="https://www.codeninjas.com"
								target="_blank"
								rel="noreferrer"
								className="sponsor-logo-card"
							>
								<img
									src="/media/code-ninjas.webp"
									alt="Code Ninjas sponsor logo"
									loading="lazy"
								/>
							</a>
						</div>

						<p className="sponsors-become">
							Want to support our mission?{" "}
							<a href={`mailto:${site.contact.email}`}>Become a sponsor</a>
						</p>
					</div>
				</section>
			</Reveal>

			{/* Partnership Benefits Table */}
			<Reveal delay={100}>
				<section className="section section-muted">
					<div className="container sponsors-section">
						<div className="sponsors-heading">
							<h2>Partnership Benefits</h2>
							<p>
								Sponsor support helps Seed Initiative provide resources for
								under-resourced students. In return, sponsors can receive
								recognition across platforms and events.
							</p>
						</div>

						<div className="benefit-table-wrapper">
							<table className="benefit-table">
								<thead>
									<tr>
										<th className="sticky-left" scope="col">
											<span className="sr-only">Benefit</span>
										</th>
										{sponsorTiers.map((tier) => (
											<th key={tier.name} scope="col">
												{tier.name}
												<div className="tier-amount">{tier.amount}</div>
											</th>
										))}
									</tr>
								</thead>
								<tbody>
									{sponsorshipBenefits.map((benefit) => (
										<tr key={benefit.label}>
											<td className="sticky-left">
												<span className="benefit-label">
													{benefit.label}
													{benefit.description ? (
														<span
															className="benefit-info"
															title={benefit.description}
														>
															<Info size={14} />
														</span>
													) : null}
												</span>
											</td>
											{benefit.tiers.map((has, j) => (
												<td key={`${benefit.label}-${j}`}>
													{has ? <Tick /> : <Cross />}
												</td>
											))}
										</tr>
									))}
								</tbody>
							</table>
						</div>

						<p className="sponsors-become">
							Have questions? Email{" "}
							<a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
						</p>
					</div>
				</section>
			</Reveal>

			{/* CTA */}
			<section className="section section-brand">
				<div className="container sponsors-cta">
					<div>
						<h2>Every Donation Makes a Difference</h2>
						<p>
							Every gift helps make STEM education more accessible, from
							hands-on tournament materials to competition support.
						</p>
					</div>
					<a
						className="button button-white"
						href={site.links.donation}
						target="_blank"
						rel="noreferrer"
					>
						Donate Now
					</a>
				</div>
			</section>
		</>
	);
}
