import { useEffect, useRef, useState, type ReactNode } from "react";

type RevealProps = {
	children: ReactNode;
	className?: string;
	delay?: number;
	/**
	 * Disables the entrance animation entirely. The wrapper still mounts
	 * (so layout stays consistent) but no opacity/transform is applied.
	 * Use this for above-the-fold content where the user shouldn't wait.
	 */
	static?: boolean;
};

/**
 * Reveal adds a small fade-in entrance to its children on first scroll into view.
 *
 * It is *never* a content gate. Before the component has mounted, before the
 * IntersectionObserver has fired, and when the user prefers reduced motion,
 * children render fully visible. The animation is a thin enhancement, not a
 * prerequisite for content.
 */
export function Reveal({
	children,
	className = "",
	delay = 0,
	static: isStatic = false,
}: RevealProps) {
	const ref = useRef<HTMLDivElement>(null);
	// Start true so SSR / pre-hydration / disabled-JS users always see content.
	// We only ever set this to false once we know JS is running AND the
	// element is below the fold.
	const [visible, setVisible] = useState(true);
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		if (isStatic) return;
		const el = ref.current;
		if (!el) return;

		// Respect reduced motion: skip animation, stay visible.
		const prefersReduced =
			typeof window !== "undefined" &&
			window.matchMedia &&
			window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		if (prefersReduced) return;

		// If the element is already in the viewport on mount, don't hide it
		// (no point animating something the user can already see).
		const rect = el.getBoundingClientRect();
		const inView = rect.top < (window.innerHeight || 0) && rect.bottom > 0;
		if (inView) return;

		// Below the fold: hide it and let the observer reveal it.
		setVisible(false);
		setMounted(true);

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					window.setTimeout(() => setVisible(true), delay);
					observer.unobserve(el);
				}
			},
			{ threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
		);

		observer.observe(el);

		// Failsafe: if the observer never fires (some browsers/extensions
		// block it, or the page is rendered into a screenshot tool), reveal
		// the content after a short delay so it is never permanently hidden.
		const failsafe = window.setTimeout(() => setVisible(true), 1200);

		return () => {
			observer.disconnect();
			window.clearTimeout(failsafe);
		};
	}, [delay, isStatic]);

	const classes = [
		"reveal",
		mounted ? "reveal--mounted" : "",
		visible ? "reveal--visible" : "",
		className,
	]
		.filter(Boolean)
		.join(" ");

	return (
		<div ref={ref} className={classes}>
			{children}
		</div>
	);
}
