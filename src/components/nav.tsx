"use client";

import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const io = new IntersectionObserver(
      (entries) => {
        const hit = entries.find((e) => e.isIntersecting);
        if (hit) setActive("#" + hit.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    LINKS.forEach((l) => {
      const el = document.querySelector(l.href);
      if (el) io.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-colors duration-300",
        scrolled
          ? "border-steel/60 bg-void/80 backdrop-blur-md"
          : "border-transparent bg-transparent"
      )}
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4 sm:px-8">
        <a
          href="#top"
          className="text-sm font-semibold tracking-tight text-chrome transition-colors hover:text-white"
        >
          {DATA.name}
        </a>

        <nav className="flex items-center gap-5 sm:gap-7">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={cn(
                "hidden text-sm transition-colors sm:inline",
                active === l.href
                  ? "text-white"
                  : "text-chrome/55 hover:text-chrome"
              )}
            >
              {l.label}
            </a>
          ))}
          <a
            href={DATA.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="hidden text-sm text-chrome/55 transition-colors hover:text-chrome sm:inline"
          >
            Résumé
          </a>
          <a
            href={DATA.contact.social.email.url}
            className="rounded-md border border-crimson bg-crimson/15 px-3.5 py-1.5 text-sm text-chrome transition-colors hover:bg-crimson hover:text-white"
          >
            Get in touch
          </a>
        </nav>
      </div>

      {/* below sm the links above are hidden, so they get their own
          scrollable row — otherwise mobile has no navigation at all */}
      <nav className="flex gap-5 overflow-x-auto border-t border-steel/40 px-5 py-2.5 sm:hidden">
        {LINKS.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className={cn(
              "whitespace-nowrap text-sm transition-colors",
              active === l.href ? "text-white" : "text-chrome/55"
            )}
          >
            {l.label}
          </a>
        ))}
        <a
          href={DATA.resumeUrl}
          target="_blank"
          rel="noreferrer"
          className="whitespace-nowrap text-sm text-chrome/55"
        >
          Résumé
        </a>
      </nav>
    </header>
  );
}
