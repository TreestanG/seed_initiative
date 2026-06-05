import { ChevronDown, Menu, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import type { Transition } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { navItems, site } from "@/data/site";

function isExternal(href: string) {
  return href.startsWith("http") || href.startsWith("mailto:");
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [compact, setCompact] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();
  const lastScrollY = useRef(0);
  const shouldReduceMotion = useReducedMotion();

  const transition: Transition = shouldReduceMotion
    ? { duration: 0 }
    : { duration: 0.34, ease: [0.22, 1, 0.36, 1] };

  useEffect(() => {
    const onScroll = () => {
      const currentScrollY = window.scrollY;
      const isPastTop = currentScrollY > 50;
      const isScrollingDown = currentScrollY > lastScrollY.current + 4;
      const isScrollingUp = currentScrollY < lastScrollY.current - 4;

      setScrolled(currentScrollY > 16);

      if (!isPastTop || isScrollingUp) {
        setCompact(false);
      } else if (isScrollingDown) {
        setCompact(true);
      }

      lastScrollY.current = currentScrollY;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  return (
    <motion.header
      className={`site-header ${scrolled ? "site-header--scrolled" : ""} ${compact ? "site-header--compact" : ""}`}
      initial={false}
      animate={{ paddingTop: compact ? 8 : 24, paddingBottom: compact ? 8 : 24 }}
      transition={transition}
    >
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <motion.div
        className="container nav-shell"
        initial={false}
      >
        <Link className="brand-link" to="/" onClick={() => setMenuOpen(false)}>
          <motion.img
            src="/media/logo-header.webp"
            alt="Seed Initiative"
            width="350"
            height="82"
            initial={false}
            animate={{ width: compact ? 192 : 240 }}
            transition={transition}
          />
        </Link>

        <motion.nav
          className="desktop-nav"
          aria-label="Main navigation"
          initial={false}
          animate={{
            opacity: compact ? 0 : 1,
            scale: compact ? 0.9 : 1,
          }}
          transition={transition}
        >
          {navItems.map((item) => (
            <div
              className="nav-item"
              key={item.href}
              onMouseEnter={() => setOpenDropdown(item.children ? item.href : null)}
              onMouseLeave={() => setOpenDropdown(null)}
              onFocus={() => setOpenDropdown(item.children ? item.href : null)}
            >
              <NavLink to={item.href} className={({ isActive }) => (isActive ? "active" : undefined)}>
                {item.label}
                {item.children ? (
                  <motion.span
                    aria-hidden="true"
                    animate={{ rotate: openDropdown === item.href ? 180 : 0 }}
                    transition={transition}
                    className="chevron-wrap"
                  >
                    <ChevronDown size={16} />
                  </motion.span>
                ) : null}
              </NavLink>
              <AnimatePresence>
                {item.children && openDropdown === item.href ? (
                  <motion.div
                    className="dropdown"
                    role="menu"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={transition}
                  >
                    {item.children.map((child, index) => (
                      <motion.div
                        key={child.href}
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ ...transition, delay: shouldReduceMotion ? 0 : index * 0.035 }}
                      >
                        <NavLink key={child.href} to={child.href} role="menuitem">
                          {child.label}
                        </NavLink>
                      </motion.div>
                    ))}
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>
          ))}
        </motion.nav>

        <motion.a
          className="button button-primary nav-donate"
          href={site.links.donation}
          target="_blank"
          rel="noreferrer"
          initial={false}
          animate={{
            paddingBlock: compact ? 8 : 12,
            paddingInline: compact ? 16 : 18,
            fontSize: compact ? 14 : 18,
          }}
          whileHover={shouldReduceMotion ? undefined : { y: -1, scale: 1.025 }}
          whileTap={shouldReduceMotion ? undefined : { scale: 0.97 }}
          transition={transition}
        >
          Donate
        </motion.a>

        <motion.button
          className="icon-button mobile-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((value) => !value)}
          whileTap={shouldReduceMotion ? undefined : { scale: 0.94 }}
          transition={transition}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={menuOpen ? "close" : "menu"}
              initial={{ opacity: 0, rotate: -45, scale: 0.85 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 45, scale: 0.85 }}
              transition={transition}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.span>
          </AnimatePresence>
        </motion.button>
      </motion.div>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            className="mobile-panel"
            initial={{ opacity: 0, scale: 0.985 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.985 }}
            transition={transition}
          >
            <nav className="mobile-nav container" aria-label="Mobile navigation">
              {navItems.flatMap((item) => [item, ...(item.children ?? [])]).map((item, index) => {
                const itemProps = {
                  initial: { opacity: 0, scale: 0.96 },
                  animate: { opacity: 1, scale: 1 },
                  transition: { ...transition, delay: shouldReduceMotion ? 0 : 0.08 + index * 0.04 },
                };

                return isExternal(item.href) ? (
                  <motion.a key={item.href} href={item.href} onClick={() => setMenuOpen(false)} {...itemProps}>
                    {item.label}
                  </motion.a>
                ) : (
                  <motion.div key={item.href} {...itemProps}>
                    <NavLink to={item.href} onClick={() => setMenuOpen(false)}>
                      {item.label}
                    </NavLink>
                  </motion.div>
                );
              })}
              <motion.a
                className="button button-primary"
                href={site.links.donation}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ ...transition, delay: shouldReduceMotion ? 0 : 0.22 }}
              >
                Donate
              </motion.a>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
