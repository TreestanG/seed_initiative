import type { LinkItem, NavItem } from "@/types/content";

export const site = {
	name: "Seed Initiative",
	origin: "https://www.seedinitiative.net",
	description:
		"Seed Initiative is a 501(c)(3) nonprofit organization created by passionate high schoolers dedicated to providing resources for students to compete in academic competitions.",
	contact: {
		email: "sucseedinitiative@gmail.com",
		location: "Bay Area, California",
	},
	links: {
		donation:
			"https://hcb.hackclub.com/donations/start/seed-science-engagement-and-educational-development-initiative",
		studentForm:
			"https://docs.google.com/forms/d/e/1FAIpQLSdAdKJ3kqArb8ZwdS5LtYyIE2rKsfdvX9_52SCUxaKbsh929A/viewform",
		volunteerForm:
			"https://docs.google.com/forms/d/e/1FAIpQLSeRcqfGBX4IFjdRZ6mfIY7_Fv6r2ekKzqcGZyvMzm9CgK4M5w/viewform",
		instagram: "https://www.instagram.com/seedinitiative1",
		hackFoundation: "https://hackclub.com/",
		designer: "https://www.tristangee.com",
	},
};

export const navItems: NavItem[] = [
	{
		label: "Our Work",
		href: "/programs",
		children: [
			{ label: "All Programs", href: "/programs" },
			{ label: "FAQ", href: "/faq" },
		],
	},
	{
		label: "About Us",
		href: "/about",
		children: [
			{ label: "Our Story", href: "/about" },
			{ label: "Our Team", href: "/team" },
		],
	},
	{ label: "Sponsors", href: "/sponsors" },
	{ label: "Join Us", href: "/get-involved" },
];

export const footerLinks: LinkItem[] = [
	{ label: "Home", href: "/" },
	{ label: "Programs", href: "/programs" },
	{ label: "About", href: "/about" },
	{ label: "Team", href: "/team" },
	{ label: "Sponsors", href: "/sponsors" },
	{ label: "Join Us", href: "/get-involved" },
	{ label: "FAQ", href: "/faq" },
];

export const resourceLinks: LinkItem[] = [
	{ label: "Donate", href: site.links.donation, external: true },
	{ label: "Student Sign-Up", href: site.links.studentForm, external: true },
	{ label: "Volunteer", href: site.links.volunteerForm, external: true },
	{ label: "Sponsor", href: "/sponsors" },
	{ label: "FAQ", href: "/faq" },
];
