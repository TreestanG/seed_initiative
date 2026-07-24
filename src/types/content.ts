import type { LucideIcon } from "lucide-react";

export type NavItem = {
	label: string;
	href: string;
	children?: NavItem[];
};

export type LinkItem = {
	label: string;
	href: string;
	external?: boolean;
};

export type PageMeta = {
	title: string;
	description: string;
	path: string;
};

export type ImageAsset = {
	src: string;
	alt: string;
};

export type VideoAsset = {
	src: string;
	alt: string;
};

export type Stat = {
	label: string;
	value: string;
	Icon: LucideIcon;
};

export type Feature = {
	eyebrow?: string;
	title: string;
	body: string;
	image: ImageAsset;
	imageFit?: "contain" | "cover";
	spacing?: "standard" | "tight" | "closing";
	imageSide?: "left" | "right";
	cta?: LinkItem;
};

export type WorkItem = {
	title: string;
	date: string;
	body: string;
	image: ImageAsset | VideoAsset;
	poster?: string;
};

export type TimelineItem = {
	date: string;
	title: string;
	body: string;
};

export type Person = {
	name: string;
	role: string;
	image?: ImageAsset;
};

export type TeamGroup = {
	title: string;
	people: Person[];
};

export type Testimonial = {
	quote: string;
	name: string;
	context: string;
};

export type SponsorshipTier = {
	name: string;
	amount: string;
};

export type SponsorshipBenefit = {
	label: string;
	description?: string;
	tiers: [boolean, boolean, boolean, boolean]; // [Seed, Sapling, Tree, Forest]
};
