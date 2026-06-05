import {
	Coins,
	HandHeart,
	School,
	Trophy,
	Users,
	Waypoints,
} from "lucide-react";
import type {
	Feature,
	PageMeta,
	Person,
	SponsorshipBenefit,
	SponsorshipTier,
	Stat,
	TeamGroup,
	Testimonial,
	TimelineItem,
	WorkItem,
} from "@/types/content";
import { site } from "./site";

export const pageMeta: Record<string, PageMeta> = {
	home: {
		title: "Home | Seed Initiative",
		description:
			"STEM competition classes, workshops, mentorship, and financial support for middle school students.",
		path: "/",
	},
	about: {
		title: "About Us | Seed Initiative",
		description:
			"Learn how Seed Initiative grew from a student-led Science Bowl program into a nonprofit supporting middle school STEM competitors.",
		path: "/about",
	},
	team: {
		title: "Team | Seed Initiative",
		description:
			"Meet the student founders, officers, and teachers behind Seed Initiative.",
		path: "/team",
	},
	sponsors: {
		title: "Sponsors | Seed Initiative",
		description:
			"Support Seed Initiative and help make STEM competition resources more accessible.",
		path: "/sponsors",
	},
	getInvolved: {
		title: "Get Involved | Seed Initiative",
		description:
			"Join Seed Initiative as a student, volunteer, sponsor, or donor.",
		path: "/get-involved",
	},
	programs: {
		title: "Our Programs | Seed Initiative",
		description:
			"Explore Seed Initiative programs, past bootcamps, tournaments, and student impact.",
		path: "/programs",
	},
};

export const impactStats: Stat[] = [
	{ label: "Funds Raised", value: "$25,000+", Icon: Coins },
	{ label: "Students Reached", value: "400+", Icon: HandHeart },
	{ label: "Schools Supported", value: "10+", Icon: School },
];

export const aboutStats: Stat[] = [
	{ label: "Students Sponsored", value: "100+", Icon: Users },
	{ label: "Competition Programs", value: "4+", Icon: Trophy },
	{ label: "Chapters Started", value: "3+", Icon: Waypoints },
];

export const homeFeatures: Feature[] = [
	{
		eyebrow: "Get Ready for Spring 2026!",
		title: "Announcing 2026 spring program",
		body: "Ignite your curiosity this school year! Join us for an engaging online program designed to boost your Science Bowl knowledge, sharpen your skills, and connect with fellow science enthusiasts. Perfect for aspiring competitors entering 6th, 7th or 8th grade, this program will cover key topics in a fun, interactive format.",
		image: {
			src: "/media/new-feature.jpg",
			alt: "Seed Initiative students working through STEM lessons",
		},
		imageFit: "contain",
		spacing: "tight",
		imageSide: "right",
		cta: { label: "Learn More", href: "/programs" },
	},
	{
		title: "Join Us Today",
		body: "Ready to take your STEM skills to the next level? Join lessons, participate in tournaments, and gain the support you need to succeed.",
		image: {
			src: "/media/tournament.jpg",
			alt: "Students gathered at a Seed Initiative tournament",
		},
		imageFit: "cover",
		spacing: "closing",
		imageSide: "left",
		cta: {
			label: "Join Our Newsletter",
			href: site.links.studentForm,
			external: true,
		},
	},
];

export const latestWork: WorkItem[] = [
	{
		title: "25-26 SciBowl Tryouts",
		date: "November 1, 2025",
		body: "Hosted in-person tryouts where students participated in fast-paced, team-based rounds across biology, chemistry, physics, earth science, and math.",
		image: {
			src: "/media/26-tryouts.jpg",
			alt: "Students competing during Science Bowl tryouts",
		},
	},
	{
		title: "3 Month Bootcamp",
		date: "November 18, 2024 - February 28, 2025",
		body: "Hosted a 12-week STEM bootcamp with daily classes on all SciBowl topics and a tournament experience for more than 100 students.",
		image: {
			src: "/media/bootcamp.jpg",
			alt: "Seed Initiative bootcamp participants",
		},
	},
];

export const timeline: TimelineItem[] = [
	{
		date: "May 2024",
		title: "Seed Initiative Founded",
		body: "Established with a mission to support aspiring Science Bowl students.",
	},
	{
		date: "June 2024",
		title: "Launched First Program",
		body: "Began providing lessons and financial aid to middle school students.",
	},
	{
		date: "August 2024",
		title: "Hosted In-Person Tournament",
		body: "Ran a tournament that simulated the full Science Bowl competition experience.",
	},
	{
		date: "November 2024",
		title: "Started 24-25 Program",
		body: "Expanded into the first intensive online program.",
	},
	{
		date: "February 2025",
		title: "Hosted Horner Science Bowl Tryouts",
		body: "Created an in-person tryout environment for competitive practice.",
	},
	{
		date: "March 2025",
		title: "Sent First Team to Regionals",
		body: "Provided targeted support that helped students reach regional competition.",
	},
];

const founders: Person[] = [
	{ name: "Ishaan Agrawal", role: "Co-Founder" },
	{ name: "Roland Pratt", role: "Co-Founder" },
	{ name: "Samyuktha Gopinath Lakshmi", role: "Co-Founder" },
	{ name: "Avyukt Bhardwaj", role: "Co-Founder" },
];

const officers: Person[] = [
	{ name: "Nivi C. Shome", role: "2025 Fall Program Director" },
	{ name: "Tanvi Gosain", role: "2025 Fall Program Director" },
	{ name: "Olivia Lee", role: "Head of Publicity" },
	{ name: "Arjun Murugappan", role: "Horner Science Bowl Team Mentor" },
	{ name: "Tristan Gee", role: "Web and Design" },
	{ name: "Harshini J.", role: "Publicity Officer" },
	{ name: "Abhay Ghirish", role: "Marketing Officer" },
];

const teachers: Person[] = [
	"Aarika Balivada",
	"Aashna Gupta",
	"Abhiram Kuchi",
	"Aditi Singamaneni",
	"Aditya Arun",
	"Evan Davis",
	"Madhav Salaka",
	"Nivi C. Shome",
	"Niya Panchumarthi",
	"Ojal Choudhari",
	"Prabhaavi Jagannati",
	"Rithanya Srinivas",
	"Saatvika Thamilarasan",
	"Tanvi Gosain",
	"Sanjana Shamarayar",
].map((name) => ({ name, role: "Teacher" }));

export const teamGroups: TeamGroup[] = [
	{ title: "Founders", people: founders },
	{ title: "Officers", people: officers },
	{ title: "Teachers", people: teachers },
];

export const programArchive: WorkItem[] = [
	{
		title: "2024-2025 Bootcamp",
		date: "November 18, 2024",
		body: "An intensive 12-week program featuring daily classes, weekly buzzer practice, and a culminating tournament.",
		image: {
			src: "/media/past-work-1.jpg",
			alt: "Students participating in a winter STEM bootcamp",
		},
	},
	{
		title: "Summer 2024 Program",
		date: "June 5, 2024",
		body: "A flexible online program providing comprehensive Science Bowl subject coverage over the summer break.",
		image: {
			src: "/media/past-work2.jpg",
			alt: "Seed Initiative summer program class",
		},
	},
];

export const testimonials: Testimonial[] = [
	{
		quote:
			"This program has introduced me to new fields of science that I thought I wouldn't be interested in. Through these classes and competitions, I've also met lots of great people who continue to help me studying to do better during competitions.",
		name: "Aidan Gin",
		context: "7th Grade Student in Math and Biology",
	},
	{
		quote:
			"Kid loved all the new learnings. The teachers were extremely patient and nice with the kids.",
		name: "Abhiram Ayinala",
		context: "Parent of Student",
	},
	{
		quote:
			"It was a great, educative experience. I got to learn a lot more about different fields of science, and had an amazing time doing so.",
		name: "Meghna Arvind",
		context: "7th Grade Student in Chemistry and Physics",
	},
];

export const sponsorTiers: SponsorshipTier[] = [
	{ name: "Seed", amount: "$500" },
	{ name: "Sapling", amount: "$1,000" },
	{ name: "Tree", amount: "$2,000" },
	{ name: "Forest", amount: "$4,000" },
];

export const sponsorshipBenefits: SponsorshipBenefit[] = [
	{
		label: "Clickable name and logo on website",
		description:
			"Your company's logo will appear on our website with a clickable link that redirects to your website",
		tiers: [true, true, true, true],
	},
	{
		label: "Distribute any company swag",
		description: "Permission to distribute your merchandise at our live events",
		tiers: [true, true, true, true],
	},
	{
		label: "Mentioned/tagged in social media posts",
		tiers: [true, true, true, true],
	},
	{
		label: "Footers on email",
		description: "Your company will appear at the footer of our emails",
		tiers: [false, true, true, true],
	},
	{
		label: "Discord excerpt before and after events",
		description:
			"We will mention your company at the end of each recap message sent on Discord",
		tiers: [false, true, true, true],
	},
	{ label: "Logos on all class slideshows", tiers: [false, true, true, true] },
	{ label: "Name/logo on merch", tiers: [false, true, true, true] },
	{ label: "Company intro at tournaments", tiers: [false, false, true, true] },
	{
		label: "Logos kept up at in-person events",
		tiers: [false, false, true, true],
	},
	{
		label: "Handing out flyers at tournaments",
		tiers: [false, false, true, true],
	},
	{ label: "Mentioned during classes", tiers: [false, false, false, true] },
	{
		label: "Keynote or read out speech at tournament",
		tiers: [false, false, false, true],
	},
	{
		label: "Send representatives at tournaments",
		tiers: [false, false, false, true],
	},
	{ label: "Booth at tournaments", tiers: [false, false, false, true] },
];
