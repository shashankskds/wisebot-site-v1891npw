"use client";

import Link from "next/link";
import { useSiteStore } from "@/store/site.store";
import { Button, ButtonLink } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface SiteNavLink {
  href: string;
  label: string;
}

export function SiteHeader({
  brandName,
  logo,
  navLinks,
  ctaHref,
  ctaLabel,
}: {
  brandName: string;
  logo?: React.ReactNode;
  navLinks: SiteNavLink[];
  ctaHref: string;
  ctaLabel: string;
}) {
  const mobileNavOpen = useSiteStore((s) => s.mobileNavOpen);
  const toggleMobileNav = useSiteStore((s) => s.toggleMobileNav);
  const setMobileNavOpen = useSiteStore((s) => s.setMobileNavOpen);

  return (
    <header className="topbar">
      <div className="topbar-inner">
        <Link href="/" className="topbar-start" onClick={() => setMobileNavOpen(false)}>
          {logo ? <span className="topbar-logo-wrap">{logo}</span> : null}
          <span className="brand-name">{brandName}</span>
        </Link>
        <nav
          className={cn(
            "nav-links",
            mobileNavOpen ? "nav-links-open" : "nav-links-closed"
          )}
        >
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setMobileNavOpen(false)}>
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="topbar-end">
          <ButtonLink className="hidden md:inline-flex" href={ctaHref} size="sm">
            {ctaLabel}
          </ButtonLink>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={toggleMobileNav}
            aria-expanded={mobileNavOpen}
            aria-label="Toggle navigation"
          >
            Menu
          </Button>
        </div>
      </div>
    </header>
  );
}
