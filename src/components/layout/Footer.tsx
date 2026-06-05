import { ExternalLink, Globe, Instagram, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { footerLinks, resourceLinks, site } from "@/data/site";

function FooterAnchor({ label, href, external }: { label: string; href: string; external?: boolean }) {
  if (external || href.startsWith("http") || href.startsWith("mailto:")) {
    return (
      <a href={href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined}>
        {label}
        {external ? <ExternalLink size={13} aria-hidden="true" /> : null}
      </a>
    );
  }

  return <Link to={href}>{label}</Link>;
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link to="/" aria-label="Seed Initiative home">
            <img src="/logo_curve_text.svg" alt="Seed Initiative" width="180" height="120" loading="lazy" />
          </Link>
          <p>{site.description}</p>
        </div>

        <div>
          <h2>Quick Links</h2>
          <ul>
            {footerLinks.map((link) => (
              <li key={link.href}>
                <FooterAnchor {...link} />
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2>Resources</h2>
          <ul>
            {resourceLinks.map((link) => (
              <li key={link.href}>
                <FooterAnchor {...link} />
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2>Contact Us</h2>
          <ul className="contact-list">
            <li>
              <Mail size={18} aria-hidden="true" />
              <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
            </li>
            <li>
              <MapPin size={18} aria-hidden="true" />
              <span>{site.contact.location}</span>
            </li>
            <li className="social-links">
              <a href={site.links.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href={`mailto:${site.contact.email}`} aria-label="Email">
                <Mail size={18} />
              </a>
              <a href={site.origin} target="_blank" rel="noreferrer" aria-label="Website">
                <Globe size={18} />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} Seed Initiative. All Rights Reserved.</p>
        <p>
          Fiscally sponsored by{" "}
          <a href={site.links.hackFoundation} target="_blank" rel="noreferrer">
            The Hack Foundation
          </a>{" "}
          EIN: 81-2908499
        </p>
        <p>
          Designed by{" "}
          <a href={site.links.designer} target="_blank" rel="noreferrer">
            Tristan
          </a>
        </p>
      </div>
    </footer>
  );
}
