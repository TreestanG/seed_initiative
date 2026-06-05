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
      "https://docs.google.com/forms/d/e/1FAIpQLSfqL3p9h-8CHtFSvIRX9o5OaFIsBqZ3mJ0RPLKo1CEpxqTnNA/viewform",
    instagram: "https://www.instagram.com/seedinitiative1",
    hackFoundation: "https://hackclub.com/",
    designer: "https://www.tristangee.com",
  },
};

export const navItems: NavItem[] = [
  { label: "About Us", href: "/about", children: [{ label: "Our Team", href: "/team" }] },
  { label: "Sponsors", href: "/sponsors" },
  { label: "Get Involved", href: "/get-involved" },
  { label: "Programs", href: "/programs" },
];

export const footerLinks: LinkItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Team", href: "/team" },
  { label: "Sponsors", href: "/sponsors" },
  { label: "Get Involved", href: "/get-involved" },
  { label: "Programs", href: "/programs" },
];

export const resourceLinks: LinkItem[] = [
  { label: "Donate", href: site.links.donation, external: true },
  { label: "Volunteer", href: "/get-involved" },
  { label: "Sponsor", href: "/sponsors" },
];
