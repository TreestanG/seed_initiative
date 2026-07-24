import {
	Coins,
	HandHeart,
	School,
	Trophy,
	Users,
	Waypoints,
} from "lucide-react";
import type {
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
		title: "Join Us | Seed Initiative",
		description:
			"Join Seed Initiative as a student, parent, volunteer, sponsor, or donor.",
		path: "/get-involved",
	},
	programs: {
		title: "Our Programs | Seed Initiative",
		description:
			"Explore Seed Initiative programs, past bootcamps, tournaments, and student impact.",
		path: "/programs",
	},
	faq: {
		title: "FAQ | Seed Initiative",
		description:
			"Frequently asked questions about Seed Initiative programs, registration, costs, and how to get involved.",
		path: "/faq",
	},
};

/**
 * Paragraph that frames the stats. Reads like a real nonprofit impact
 * section, not a generic boast. Kept short and concrete.
 */
export const impactStatsIntro =
	"These are the numbers we track heading into our third year. Every figure is what a real student, parent, or classroom touched — not a vanity metric. We publish them so donors and partners can hold us to them.";

export const impactStats: Stat[] = [
	{
		label:
			"Funded since 2024 — covers three bootcamps, ~400 student seats, and tournament travel for teams we sponsor.",
		value: "$25,000+",
		Icon: Coins,
	},
	{
		label:
			"Students reached across Bay Area programs, the majority from Title I schools or districts with no prior Science Bowl team.",
		value: "400+",
		Icon: HandHeart,
	},
	/*{
		label:
			"Partner schools hosting in-person tryouts, classroom visits, or tournament sites — up from three when we started.",
		value: "3+",
		Icon: School,
	},*/
];

export const aboutStats: Stat[] = [
	{
		label:
			"Students sponsored for tournament fees, travel, and materials so cost is never a barrier to competing.",
		value: "100+",
		Icon: Users,
	},
	{
		label:
			"Competition programs run since 2024 — bootcamps, weekly prep, invitationals, and in-person tryouts.",
		value: "4+",
		Icon: Trophy,
	},
];

export const latestWork: WorkItem[] = [
	{
	title: "Summer 2026 Earth and Space Hike @ Coyote Hills",
	 date: "July 11, 2026",
	 body: "Explained to students through an in-person hike at Coyote Hills to discuss the geology and different rock and plant types present, in addition to many hands-on experiments conducted.",
	 image: {
		src: "/media/eshike.mp4", 
		alt: "Students hiking in Coyote Hills to learn about geologic formations, flora and fauna and conduct interesting experiments.", 
	 },
	 poster: "/media/eshikethumbnail.webp",
	},
	
	
	{title: "25-26 End of Year Tournament",
	date: "December 13, 2025",
	body: "Hosted in-person tournament to practice science bowl concepts from classes in fast team-based rounds.",
	image: {
		src: "/media/26-tournament.webp",
		alt: "Students competing to practice concepts they learned in classes"
	}
	},
	{
		title: "25-26 SciBowl Tryouts",
		date: "November 1, 2025",
		body: "Hosted in-person tryouts where students participated in fast-paced, team-based rounds across biology, chemistry, physics, earth science, and math.",
		image: {
			src: "/media/26-tryouts.webp",
			alt: "Students competing during Science Bowl tryouts",
		},
	}, 
	{
		title: "3 Month Bootcamp",
		date: "November 18, 2024 - February 28, 2025",
		body: "Hosted a 12-week STEM bootcamp with daily classes on all SciBowl topics and a tournament experience for more than 100 students.",
		image: {
			src: "/media/bootcamp.webp",
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
	}, {
		date: "September 2025",
		title: "Started 2025 Fall Program",
		body: "Expanded for another year of teaching, tryouts and tournament."
	}, {
		date: "November 2025",
		title: "Hosted Middle School Science Bowl Tryouts",
		body: "Created an in-person tryout environment for competitive practice.",
	}, {
		date: "December 2025",
		title: "Hosted In-Person Tournament",
		body: "Created an end of semester tournament to help students practice and apply concepts."
	}
];

const founders: Person[] = [
	{ name: "Ishaan Agrawal", role: "Co-Founder" },
	{ name: "Roland Pratt", role: "Co-Founder" },
	{ name: "Samyuktha Gopinath Lakshmi", role: "Co-Founder" },
	{ name: "Avyukt Bhardwaj", role: "Co-Founder" },
];

const officers: Person[] = [
	{ name: "Nivi C. Shome", role: "2026 Co-CEO", image: { src: "/media/Nivi_Shome_Co_CEO.webp", alt: "Co-Ceo of Summer 2026 SEED"} },
	{ name: "Abhiram Kuchi", role: "2026 Co-CEO", image: { src: "/media/Abhiram_Kuchi_Co_CEO.webp", alt: "Co-Ceo of Summer 2026 SEED"} },
	{ name: "Tanvi Gosain", role: "2026 Summer Program Director", image: { src: "/media/Tanvi_Gosain_SEEDProgramDirector.webp", alt: "2026 SEED Summer Program Director "} },
	{ name: "Niya Panchumarthi", role: "2026 Summer Program Director", image: { 
		src: "/media/SEED_DIRECTOR.webp", alt: "2026 Summer Program Director"
	}},
	{ name: "Olivia Lee", role: "Head of Publicity", image: {src: "/media/publicity.jpeg", alt: "Publicity"} },
	{ name: "Tristan Gee", role: "Web and Design" }

];

const teachers: Person[] = [
	{name: "Aarika Balivada", role: "Teacher", image: {src: "/media/chemteach.jpeg", alt: "Chemistry teacher"}},
	{name: "Aditi Singamaneni", role: "Teacher", image: {src: "/media/physics.jpeg", alt: "Physics teacher"}},
	{name: "Aarav Gupta", role: "Teacher", image: {src: "media/complexmath2.jpg", alt: "Complex Math Teacher"} },
	{name: "Soumya Deshmukh", role: "Teacher", image: {src: "media/regmath2.jpeg", alt: "Regular Math Teacher"}},
	{name: "Aditya Arun", role: "Teacher", image: {src: "media/mathteach.jpeg", alt: "Earth and Space teacher"}},
	{name: "Venkat Javvadi", role: "Teacher", image: {src: "media/regbio.jpeg", alt: "Regular Biology Teacher"}	},
	{name: "Madhav Salaka", role: "Teacher", image: {src: "media/complexmathteach.jpeg", alt: "Complex Math teacher"
	}},
	{name: "Vibha Mudaliar", role: "Teacher", image: {src: "media/practie.jpeg", alt: "Practice Sessions"}},
	{name: "Johnny Du", role: "Teacher", image: {src: "media/regmath.jpeg", alt: "Regular Math"}}, 
];

export const teamGroups: TeamGroup[] = [
	{ title: "Officers", people: officers },
	{ title: "Teachers", people: teachers },
	{ title: "Founders", people: founders }
];

export const programArchive: WorkItem[] = [
	{
		title: "2024-2025 Bootcamp",
		date: "November 18, 2024",
		body: "An intensive 12-week program featuring daily classes, weekly buzzer practice, and a culminating tournament.",
		image: {
			src: "/media/past-work-1.webp",
			alt: "Students participating in a winter STEM bootcamp",
		},
	},
	{
		title: "Summer 2024 Program",
		date: "June 5, 2024",
		body: "A flexible online program providing comprehensive Science Bowl subject coverage over the summer break.",
		image: {
			src: "/media/past-work2.webp",
			alt: "Students participating in a summer STEM bootcamp"
		}
	},
];

export const parentTestimonials: Testimonial[] = [
	{
		quote:
			"My daughter finished the 12-week bootcamp and walked into regionals confident and prepared. The instructors weren't just knowledgeable — they remembered her name, knew her weak spots, and pushed her exactly the right amount. This is the kind of program parents hope exists.",
		name: "Abhiram Ayinala's Parent",
		context: "Parent — 2024–25 Bootcamp, Horner Junior High",
	},
	{
		quote:
			"The lessons were engaging and challenging in all the right ways. My child looked forward to every session and grew so much more confident in STEM — she ended up placing top-10 at her first invitational.",
		name: "Sneha R.",
		context: "Parent — 2024–25 Bootcamp, Sycamore Ridge",
	},
	{
		quote:
			"We'd looked at paid Science Bowl tutors and it just wasn't in the budget. Seed gave my son the same rigor, plus a team of older students who actually wanted to be there. He's already asking when the next program starts.",
		name: "Marcus T.",
		context: "Parent — 2025 Fall Program, Mt. Diablo Unified",
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
		name: "Abhiram Ayinala's Parent",
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

export type FAQItem = {
	question: string;
	answer: string;
};

export const faqItems: FAQItem[] = [
	{
		question: "What is Seed Initiative?",
		answer:
			"Seed Initiative (Science Engagement and Educational Development) is a 501(c)(3) nonprofit run by passionate high school students. We provide low-cost classes, workshops, mentorship, and tournament practice to help middle school students compete in Science Bowl and other STEM competitions.",
	},
	{
		question: "What ages and grades do you serve?",
		answer:
			"Our programs are designed for middle school students, typically entering 6th, 7th, or 8th grade. Some programs may also welcome advanced 5th graders — check the specific program for grade requirements.",
	},
	{
		question: "Are programs online or in-person?",
		answer:
			"Most of our classes and bootcamps are held online via Discord and video calls, making them accessible to students anywhere. We also run in-person tryouts and tournaments in the Bay Area, California. Program format details are shared when registration opens.",
	},
	{
		question: "What is Science Bowl?",
		answer:
			"Science Bowl is a fast-paced, team-based academic competition sponsored by the U.S. Department of Energy. Teams of 4-5 students compete by buzzing in to answer questions across biology, chemistry, physics, earth and space science, energy, and math. It's a nationally recognized competition for middle and high school students.",
	},
	{
		question: "What is the time commitment?",
		answer:
			"Our online programs typically run for 8-12 weeks, with daily classes lasting about an hour. Weekend buzzer practice and tournament sessions may add extra time. Exact schedules are shared at the start of each program.",
	},
	{
		question: "How do I register my child?",
		answer:
			"When a new program is announced, you can sign up through our student interest form (linked on the Join Us page). You'll receive program announcements and registration details via email.",
	},
	{
		question: "My child has no Science Bowl experience. Can they still join?",
		answer:
			"Absolutely! Our programs are designed for beginners as well as students with some prior experience. We cover foundational concepts and build up to competition-level knowledge. Enthusiasm and curiosity are the only prerequisites.",
	},
	{
		question: "Is this organization safe and legitimate?",
		answer:
			"Yes. Seed Initiative is a federally recognized 501(c)(3) nonprofit organization, fiscally sponsored by The Hack Foundation (EIN: 81-2908499). All our instructors are experienced high school Science Bowl competitors, and our programs are supervised by dedicated program directors. You can verify our nonprofit status through the IRS or contact us anytime with questions.",
	},
	{
		question: "How can I contact someone?",
		answer:
			"You can email us at sucseedinitiative@gmail.com anytime. We're based in the Bay Area, California, and are happy to answer questions from parents, students, and supporters.",
	},
	{
		question: "How can my high schooler volunteer to teach?",
		answer:
			"We welcome high school volunteers with strong Science Bowl knowledge! Fill out our volunteer form (linked on the Join Us page) and we'll get in touch about teaching, mentoring, or helping at events.",
	},
	{
		question: "Can I donate or sponsor?",
		answer:
			"Yes! Donations of any size help us provide materials, tournament access, and resources to students. Visit our Sponsors page to see sponsorship tiers and benefits, or donate directly through our Hack Club donation page. As a 501(c)(3), your donation may be tax-deductible.",
	},
];
