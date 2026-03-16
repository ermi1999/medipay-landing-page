import Link from "next/link";
import Image from "next/image";
import { SITE_CONFIG } from "@/lib/constants";

const links = [
  {
    title: "Features",
    href: "#capabilities",
  },
  {
    title: "How It Works",
    href: "#how-it-works",
  },
  {
    title: "Security",
    href: "#security",
  },
  {
    title: "Testimonials",
    href: "#testimonials",
  },
  {
    title: "FAQ",
    href: "#faq",
  },
];

export function Footer() {
  return (
    <footer className="relative z-20 py-16 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        {/* Logo */}
        <Link
          href="/"
          aria-label="go home"
          className="mx-auto block size-fit"
        >
          <div className="flex items-center gap-3">
            <Image
              src="/logo.svg"
              alt={SITE_CONFIG.name}
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <div>
              <div className="text-xl font-bold">{SITE_CONFIG.name}</div>
              <div className="text-xs text-muted-foreground uppercase tracking-widest">
                {SITE_CONFIG.tagline}
              </div>
            </div>
          </div>
        </Link>

        {/* Navigation links */}
        <div className="my-8 flex flex-wrap justify-center gap-6 text-sm">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-muted-foreground hover:text-primary duration-150 cursor-pointer"
            >
              {link.title}
            </a>
          ))}
        </div>

        {/* Contact info */}
        <div className="my-8 flex flex-col items-center gap-3 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
            <span>Suite 301E | Bethlehem Plaza, Megenagna, Addis Ababa, Ethiopia</span>
          </div>
          <a href="tel:+251942070707" className="flex items-center gap-2 hover:text-primary transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            <span>+251 942 070707</span>
          </a>
        </div>

        {/* Copyright */}
        <span className="text-muted-foreground block text-center text-sm">
          © {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
        </span>
      </div>
    </footer>
  );
}
