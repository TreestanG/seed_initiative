import { Instagram, Mail, MapPin, Globe, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Footer as FooterType} from "@/payload-types";
    
const footerLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Sponsors", href: "/sponsors" },
    { label: "Get Involved", href: "/get-involved" },
    { label: "Programs", href: "/programs" },
];

const resources = [
    { label: "Donate", href: "https://hcb.hackclub.com/donations/start/seed-science-engagement-and-educational-development-initiative", external: true },
    { label: "Volunteer", href: "/get-involved" },
    { label: "Sponsor", href: "/get-involved" },
];

export default function Footer({
    res
}: {
    res: FooterType
}) {
    const email = res.contactInfo?.email || 'blank@gmail.com'
    const instagram = res.instagram || ''
    
    const currentYear = new Date().getFullYear();


    return (
        <footer className="bg-slate-50 border-t border-slate-200">
            <div className="container mx-auto px-4 pt-16 pb-8">
                {/* Footer top section with columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
                    {/* Logo and info column */}
                    <div className="space-y-4">
                        <Link href="/" className="inline-block">
                            <Image 
                                src="/logo_curve_text.svg" 
                                alt="Seed Initiative" 
                                width={180} 
                                height={120} 
                                className="mb-4"
                            />
                        </Link>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            Seed Initiative is a 501(c)(3) nonprofit organization dedicated to providing resources for students to excel in academic competitions.
                        </p>
                    </div>
                    
                    {/* Quick links column */}
                    <div>
                        <h3 className="text-brand-700 font-bold text-lg mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            {footerLinks.map((link, index) => (
                                <li key={index}>
                                    <Link 
                                        href={link.href} 
                                        className="text-slate-600 hover:text-brand-700 transition-colors text-sm"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    
                    {/* Resources column */}
                    <div>
                        <h3 className="text-brand-700 font-bold text-lg mb-4">Resources</h3>
                        <ul className="space-y-2">
                            {resources.map((resource, index) => (
                                <li key={index}>
                                    <Link 
                                        href={resource.href} 
                                        className="text-slate-600 hover:text-brand-700 transition-colors text-sm inline-flex items-center"
                                        target={resource.external ? "_blank" : undefined}
                                        rel={resource.external ? "noopener noreferrer" : undefined}
                                    >
                                        {resource.label}
                                        {resource.external && <ExternalLink className="ml-1 h-3 w-3" />}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    
                    {/* Contact column */}
                    <div>
                        <h3 className="text-brand-700 font-bold text-lg mb-4">Contact Us</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start space-x-2">
                                <Mail className="h-5 w-5 text-brand-600 mt-0.5 flex-shrink-0" />
                                <Link href={`mailto:${email}`} className="text-slate-600 hover:text-brand-700 transition-colors text-sm">
                                    {email}
                                </Link>
                            </li>
                            <li className="flex items-start space-x-2">
                                <MapPin className="h-5 w-5 text-brand-600 mt-0.5 flex-shrink-0" />
                                <span className="text-slate-600 text-sm">Bay Area, California</span>
                            </li>
                            <li className="flex items-center space-x-3 pt-2">
                                {instagram && (
                                    <Link 
                                        href={`https://www.instagram.com/${instagram}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-brand-100 p-2 rounded-full text-brand-700 hover:bg-brand-200 transition-colors"
                                        aria-label="Instagram"
                                    >
                                        <Instagram className="h-4 w-4" />
                                    </Link>
                                )}
                                <Link 
                                    href={`mailto:${email}`}
                                    className="bg-brand-100 p-2 rounded-full text-brand-700 hover:bg-brand-200 transition-colors"
                                    aria-label="Email"
                                >
                                    <Mail className="h-4 w-4" />
                                </Link>
                                <Link 
                                    href="https://seedinitiative.net"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-brand-100 p-2 rounded-full text-brand-700 hover:bg-brand-200 transition-colors"
                                    aria-label="Website"
                                >
                                    <Globe className="h-4 w-4" />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                
                {/* Divider */}
                <div className="h-px bg-slate-200 my-8"></div>
                
                {/* Footer bottom section */}
                <div className="md:flex md:justify-between md:items-center text-sm text-slate-500">
                    <div className="space-y-2 md:space-y-0 mb-4 md:mb-0">
                        <p>© {currentYear} Seed Initiative. All Rights Reserved.</p>
                        <p>Fiscally sponsored by <Link href="https://hackclub.com/" className="text-brand-700 hover:underline" target="_blank" rel="noopener noreferrer">The Hack Foundation</Link> EIN: 81-2908499</p>
                    </div>
                    <div className="flex items-center space-x-4">
                        <p>Designed with 💙 by <Link href="tristangee@gmail.com" className="text-brand-700 hover:underline">Tristan</Link></p>
                    </div>
                </div>
            </div>
        </footer>
    );
}