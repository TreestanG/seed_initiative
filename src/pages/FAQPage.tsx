import { ChevronDown, HelpCircle } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useState } from "react";
import { Hero } from "@/components/sections/Hero";
import { PageMeta } from "@/components/sections/PageMeta";
import { Reveal } from "@/components/Reveal";
import { faqItems, pageMeta } from "@/data/pages";
import { site } from "@/data/site";

function FAQItem({
	item,
	index,
}: {
	item: { question: string; answer: string };
	index: number;
}) {
	const [open, setOpen] = useState(false);
	const shouldReduceMotion = useReducedMotion();

	return (
		<motion.div
			className="faq-item"
			initial={{ opacity: 0, y: 16 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: "-60px" }}
			transition={{
				duration: shouldReduceMotion ? 0 : 0.35,
				delay: shouldReduceMotion ? 0 : index * 0.06,
				ease: [0.22, 1, 0.36, 1],
			}}
		>
			<button
				type="button"
				className="faq-question"
				onClick={() => setOpen(!open)}
				aria-expanded={open}
			>
				<span>{item.question}</span>
				<motion.span
					className="faq-chevron"
					animate={{ rotate: open ? 180 : 0 }}
					transition={{ duration: shouldReduceMotion ? 0 : 0.22 }}
				>
					<ChevronDown size={20} />
				</motion.span>
			</button>
			<AnimatePresence initial={false}>
				{open && (
					<motion.div
						className="faq-answer"
						initial={{ height: 0, opacity: 0 }}
						animate={{ height: "auto", opacity: 1 }}
						exit={{ height: 0, opacity: 0 }}
						transition={{
							duration: shouldReduceMotion ? 0 : 0.28,
							ease: [0.22, 1, 0.36, 1],
						}}
					>
						<p>{item.answer}</p>
					</motion.div>
				)}
			</AnimatePresence>
		</motion.div>
	);
}

export function FAQPage() {
	return (
		<>
			<PageMeta meta={pageMeta.faq} />
			<Hero
				compact
				title="Frequently Asked Questions"
				body="Everything parents, students, and supporters need to know about Seed Initiative."
			/>

			<Reveal>
				<section className="section">
					<div className="container faq-container">
						<div className="faq-intro">
							<HelpCircle size={32} strokeWidth={1.5} aria-hidden="true" />
							<p>
								Can't find what you're looking for?{" "}
								<a href={`mailto:${site.contact.email}`}>Email us</a> and we'll
								be happy to help.
							</p>
						</div>
						<div className="faq-list">
							{faqItems.map((item, index) => (
								<FAQItem key={item.question} item={item} index={index} />
							))}
						</div>
					</div>
				</section>
			</Reveal>

			<section className="section section-brand">
				<div className="container sponsors-cta">
					<div>
						<h2>Still have questions?</h2>
						<p>
							We'd love to hear from you. Reach out anytime and a real person
							will get back to you.
						</p>
					</div>
					<a
						className="button button-white"
						href={`mailto:${site.contact.email}`}
					>
						Contact Us
					</a>
				</div>
			</section>
		</>
	);
}
