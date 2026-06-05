import { useEffect, useRef, useState, type ReactNode } from "react";

type RevealProps = {
	children: ReactNode;
	className?: string;
	delay?: number;
};

export function Reveal({ children, className = "", delay = 0 }: RevealProps) {
	const ref = useRef<HTMLDivElement>(null);
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const el = ref.current;
		if (!el) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setTimeout(() => setVisible(true), delay);
					observer.unobserve(el);
				}
			},
			{ threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
		);

		observer.observe(el);
		return () => observer.disconnect();
	}, [delay]);

	return (
		<div
			ref={ref}
			className={`reveal ${visible ? "reveal--visible" : ""} ${className}`}
		>
			{children}
		</div>
	);
}
