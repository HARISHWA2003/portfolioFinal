import { Nav } from "@/components/nav";
import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { DATA, type ProjectLink } from "@/data/resume";
import { cn } from "@/lib/utils";
import { ArrowUpRight, Download, Mail, Phone } from "lucide-react";

const socials = Object.values(DATA.contact.social).filter((s) => s.navbar);
const iconSocials = socials.filter((s) => s.name !== "Email");

/* Real web geometry — radial strands crossed by chorded rings. Line art at
   texture opacity, so it reads as structure rather than decal. */
function WebMark({ className }: { className?: string }) {
  const strands = 16;
  const rings = 7;
  const R = 500;
  const pt = (r: number, i: number) => {
    const a = (i / strands) * Math.PI * 2 - Math.PI / 2;
    return [Math.cos(a) * r, Math.sin(a) * r] as const;
  };

  return (
    <svg
      viewBox="-500 -500 1000 1000"
      aria-hidden
      className={className}
      fill="none"
      stroke="currentColor"
    >
      <g strokeWidth="1.7">
        {Array.from({ length: strands }, (_, i) => {
          const [x, y] = pt(R, i);
          return <line key={i} x1="0" y1="0" x2={x} y2={y} />;
        })}
        {Array.from({ length: rings }, (_, k) => {
          const r = R * Math.pow((k + 1) / rings, 1.45);
          const d =
            Array.from({ length: strands }, (_, i) => {
              const [x, y] = pt(r, i);
              return `${i ? "L" : "M"}${x.toFixed(1)},${y.toFixed(1)}`;
            }).join(" ") + " Z";
          return <path key={k} d={d} />;
        })}
      </g>
    </svg>
  );
}

/* Quarter web gathered into a top-right corner. */
function WebCorner({ className }: { className?: string }) {
  const strands = 6;
  const rings = 5;
  const R = 100;
  const pt = (r: number, i: number) => {
    const a = Math.PI / 2 + (i / (strands - 1)) * (Math.PI / 2);
    return [100 + Math.cos(a) * r, Math.sin(a) * r] as const;
  };

  return (
    <svg
      viewBox="0 0 100 100"
      aria-hidden
      className={className}
      fill="none"
      stroke="currentColor"
    >
      <g strokeWidth="0.9">
        {Array.from({ length: strands }, (_, i) => {
          const [x, y] = pt(R, i);
          return <line key={i} x1="100" y1="0" x2={x} y2={y} />;
        })}
        {Array.from({ length: rings }, (_, k) => {
          const r = R * Math.pow((k + 1) / rings, 1.4);
          const d = Array.from({ length: strands }, (_, i) => {
            const [x, y] = pt(r, i);
            return `${i ? "L" : "M"}${x.toFixed(1)},${y.toFixed(1)}`;
          }).join(" ");
          return <path key={k} d={d} />;
        })}
      </g>
    </svg>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 space-y-2.5">
      {items.map((b, i) => (
        <li
          key={i}
          className="flex gap-3 text-[15px] leading-relaxed text-chrome/70"
        >
          <span className="mt-[0.7em] h-px w-3 shrink-0 bg-crimson" />
          <span>{b}</span>
        </li>
      ))}
    </ul>
  );
}

function LinkRow({
  links,
  className,
}: {
  links?: ProjectLink[];
  className?: string;
}) {
  if (!links || links.length === 0) return null;
  return (
    <div
      className={cn("flex flex-wrap items-center gap-x-6 gap-y-2", className)}
    >
      {links.map((l) => (
        <a
          key={l.href}
          href={l.href}
          target="_blank"
          rel="noreferrer"
          className="link-line text-sm text-white"
        >
          {l.label}
          <ArrowUpRight className="size-3.5" strokeWidth={2} />
        </a>
      ))}
    </div>
  );
}

/* renders nothing until the outcome is actually written down */
function Impact({ text }: { text?: string }) {
  if (!text) return null;
  return (
    <p className="mt-5 border-l-2 border-crimson bg-crimson/[0.07] py-2 pl-4 text-[15px] leading-relaxed text-chrome">
      {text}
    </p>
  );
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: DATA.name,
  jobTitle: DATA.role,
  url: DATA.url,
  image: `${DATA.url}${DATA.avatarUrl}`,
  email: `mailto:${DATA.contact.email}`,
  telephone: DATA.contact.tel,
  description: DATA.description,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bangalore",
    addressCountry: "IN",
  },
  sameAs: [
    DATA.contact.social.GitHub.url,
    DATA.contact.social.LinkedIn.url,
    DATA.contact.social.X.url,
  ],
  alumniOf: DATA.education.map((e) => ({
    "@type": "CollegeOrUniversity",
    name: e.school,
    sameAs: e.href,
  })),
  worksFor: { "@type": "Organization", name: DATA.work[0].company },
  knowsAbout: DATA.skills.flatMap((g) => g.items),
};

export default function Page() {
  return (
    <div id="top">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-crimson focus:px-4 focus:py-2 focus:text-sm focus:text-white"
      >
        Skip to content
      </a>
      <Nav />

      <main id="main" className="mx-auto max-w-5xl px-5 sm:px-8">
        {/* ───────────── HERO ───────────── */}
        <section className="relative pt-14 sm:pt-20">
          <WebMark className="pointer-events-none absolute -right-32 -top-48 -z-10 h-[660px] w-[660px] text-crimson opacity-[0.13]" />

          <div className="grid gap-10 sm:grid-cols-[1fr_auto] sm:items-start sm:gap-14">
            <Reveal y={14}>
              {DATA.availability.open && (
                <p className="label inline-flex items-center gap-2.5 rounded-full border border-crimson/50 bg-crimson/10 px-3 py-1.5 text-accent">
                  <span className="relative flex size-1.5">
                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-75" />
                    <span className="relative inline-flex size-1.5 rounded-full bg-accent" />
                  </span>
                  {DATA.availability.headline}
                </p>
              )}

              <h1 className="headline mt-6 text-3xl text-white sm:text-5xl">
                {DATA.name}
              </h1>

              <p className="mt-4 text-base text-chrome/55">
                {DATA.role} · {DATA.location} · {DATA.timezone}
              </p>

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-chrome/80">
                {DATA.positioning}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href={DATA.contact.social.email.url}
                  className="group inline-flex items-center gap-2 rounded-md bg-crimson px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blood"
                >
                  <Mail className="size-4" strokeWidth={2} />
                  Hire me
                  <ArrowUpRight
                    className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    strokeWidth={2}
                  />
                </a>
                <a
                  href={DATA.resumeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-steel/60 px-5 py-2.5 text-sm font-medium text-chrome transition-colors hover:border-steel hover:text-white"
                >
                  <Download className="size-4" strokeWidth={2} />
                  Résumé
                </a>
                {iconSocials.map((s) => (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.name}
                    className="flex size-10 items-center justify-center rounded-md border border-steel/60 text-chrome/65 transition-colors hover:border-steel hover:text-white"
                  >
                    <s.icon className="size-4" />
                  </a>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.1} y={14}>
              <img
                src={DATA.avatarUrl}
                alt={DATA.name}
                className="size-28 rounded-xl border border-steel/60 object-cover sm:size-36"
              />
            </Reveal>
          </div>

          {/* credibility strip — scanned in about a second */}
          <Reveal delay={0.16}>
            <dl className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-steel/50 bg-steel/50 sm:grid-cols-4">
              {[
                { k: "Currently", v: DATA.work[0].company },
                { k: "Experience", v: "3 roles since 2023" },
                { k: "Works on", v: "Backends · Data · AI" },
                { k: "Education", v: "B.Tech CS (AI) · NTU" },
              ].map((f) => (
                <div key={f.k} className="bg-void px-4 py-4">
                  <dt className="label text-chrome/40">{f.k}</dt>
                  <dd className="mt-1.5 text-sm text-white">{f.v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </section>

        {/* ───────────── ABOUT ───────────── */}
        <Section id="about" index="01" title="About" caption="the short version">
          <div className="max-w-2xl space-y-5">
            <p className="text-base leading-relaxed text-chrome/75">
              {DATA.summary}
            </p>
            <p className="text-base leading-relaxed text-chrome/60">
              {DATA.bio}
            </p>
          </div>
        </Section>

        {/* ───────────── WHAT I DO ───────────── */}
        <Section
          id="services"
          index="02"
          title="What I do"
          caption="how I usually get brought in"
        >
          <div className="grid gap-4 md:grid-cols-3">
            {DATA.services.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.05} className="h-full">
                <div className="card flex h-full flex-col p-6">
                  <h3 className="text-base font-semibold tracking-tight text-white">
                    {s.title}
                  </h3>
                  <p className="mt-3 flex-1 text-[15px] leading-relaxed text-chrome/65">
                    {s.body}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {s.tags.map((t) => (
                      <span
                        key={t}
                        className="mono rounded border border-steel/50 px-2 py-1 text-[11px] text-chrome/55"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* ───────────── SELECTED WORK ───────────── */}
        <Section
          id="work"
          index="03"
          title="Selected work"
          caption="what I've built"
        >
          <div className="space-y-5">
            {DATA.projects.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.05}>
                <article className="card group relative overflow-hidden p-6 sm:p-8">
                  <WebCorner className="pointer-events-none absolute right-0 top-0 h-28 w-28 text-crimson opacity-[0.14] transition-opacity duration-300 group-hover:opacity-[0.3]" />
                  <div
                    className={cn(
                      "relative grid gap-8",
                      p.image && "lg:grid-cols-[1.1fr_1fr] lg:items-start"
                    )}
                  >
                    <div>
                      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                        <span className="label text-accent">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <h3 className="text-xl font-semibold tracking-tight text-white">
                          {p.title}
                        </h3>
                        <span className="text-sm text-chrome/50">
                          {p.subtitle}
                        </span>
                        {p.status && (
                          <span className="label ml-auto inline-flex items-center gap-2 rounded-full border border-crimson/50 bg-crimson/10 px-2.5 py-1 text-accent">
                            <span className="block size-1.5 rounded-full bg-accent" />
                            {p.status}
                          </span>
                        )}
                      </div>

                      <p className="mt-4 text-[15px] leading-relaxed text-chrome/75">
                        {p.blurb}
                      </p>

                      <Bullets items={p.bullets} />
                      <Impact text={p.impact} />

                      <div className="mt-6 flex flex-wrap items-center gap-1.5">
                        {p.technologies.map((t) => (
                          <span
                            key={t}
                            className="mono rounded border border-steel/50 px-2 py-1 text-[11px] text-chrome/55"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      <LinkRow
                        links={p.links}
                        className="mt-6 border-t border-steel/40 pt-5"
                      />
                    </div>

                    {p.image && (
                      <img
                        src={p.image}
                        alt={`${p.title} screenshot`}
                        className="w-full rounded-lg border border-steel/50 object-cover"
                      />
                    )}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* ───────────── EXPERIENCE ───────────── */}
        <Section
          id="experience"
          index="04"
          title="Experience"
          caption="2023 — present"
        >
          <div className="space-y-10">
            {DATA.work.map((job, i) => (
              <Reveal key={job.company} delay={i * 0.05}>
                <article className="grid gap-x-8 gap-y-2 sm:grid-cols-[9rem_1fr]">
                  <div className="label pt-1 text-chrome/40">
                    {job.start} — {job.end}
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                      {job.href ? (
                        <a
                          href={job.href}
                          target="_blank"
                          rel="noreferrer"
                          className="link-line text-lg font-semibold tracking-tight text-white"
                        >
                          {job.company}
                        </a>
                      ) : (
                        <h3 className="text-lg font-semibold tracking-tight text-white">
                          {job.company}
                        </h3>
                      )}
                      {job.current && (
                        <span className="label rounded border border-crimson/70 px-2 py-0.5 text-[10px] text-accent">
                          Current
                        </span>
                      )}
                    </div>
                    <p className="mt-1 text-sm text-chrome/55">
                      {job.title} · {job.location}
                    </p>
                    <Bullets items={job.bullets} />
                    <Impact text={job.impact} />
                    <LinkRow links={job.links} className="mt-5" />
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* ───────────── SKILLS ───────────── */}
        <Section
          id="skills"
          index="05"
          title="Skills"
          caption="what I reach for"
        >
          <div className="space-y-8">
            {DATA.skills.map((grp, i) => (
              <Reveal key={grp.group} delay={i * 0.05}>
                <div className="grid gap-x-8 gap-y-3 sm:grid-cols-[9rem_1fr]">
                  <h3 className="label pt-1.5 text-chrome/40">{grp.group}</h3>
                  <div className="flex flex-wrap gap-2">
                    {grp.items.map((s) => (
                      <span
                        key={s}
                        className="rounded-md border border-steel/50 px-3 py-1.5 text-sm text-chrome/70 transition-colors hover:border-crimson hover:text-white"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <h3 className="label mb-4 mt-14 text-chrome/40">Education</h3>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {DATA.education.map((e, i) => (
              <Reveal key={e.school} delay={i * 0.05} className="h-full">
                <a
                  href={e.href}
                  target="_blank"
                  rel="noreferrer"
                  className="card flex h-full gap-4 p-5"
                >
                  <img
                    src={e.logo}
                    alt=""
                    className="size-11 shrink-0 rounded-md border border-steel/50 bg-white object-contain p-1"
                  />
                  <div className="min-w-0">
                    <h4 className="font-semibold tracking-tight text-white">
                      {e.school}
                    </h4>
                    <p className="mt-1 text-sm text-chrome/60">{e.degree}</p>
                    <div className="label mt-3 flex flex-wrap gap-x-3 text-chrome/40">
                      <span>{e.detail}</span>
                      <span>
                        {e.start} — {e.end}
                      </span>
                    </div>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* ───────────── CONTACT ───────────── */}
        <Section id="contact" index="06" title="Get in touch">
          <Reveal>
            <div className="relative overflow-hidden rounded-xl border border-steel/60 p-8 sm:p-12">
              <WebMark className="pointer-events-none absolute -bottom-52 -left-36 h-[540px] w-[540px] text-crimson opacity-[0.11]" />

              <div className="relative grid gap-10 lg:grid-cols-[1.2fr_1fr]">
                <div>
                  <h3 className="headline max-w-lg text-xl text-white sm:text-3xl">
                    Let&apos;s build something predictable.
                  </h3>
                  <p className="mt-4 max-w-md text-[15px] leading-relaxed text-chrome/65">
                    {DATA.availability.detail}
                  </p>
                  <p className="mt-4 max-w-md text-[15px] leading-relaxed text-chrome/50">
                    Email is fastest — I usually reply within a day. Tell me
                    what you&apos;re building and roughly when you need it.
                  </p>
                </div>

                <div className="flex flex-col gap-3">
                  <a
                    href={DATA.contact.social.email.url}
                    className="group flex items-center gap-3 rounded-md border border-steel/60 px-4 py-3.5 transition-colors hover:border-crimson"
                  >
                    <Mail className="size-4 shrink-0 text-accent" />
                    <span className="truncate text-sm text-chrome group-hover:text-white">
                      {DATA.contact.email}
                    </span>
                    <ArrowUpRight className="ml-auto size-4 shrink-0 text-chrome/40" />
                  </a>
                  <a
                    href={`tel:${DATA.contact.tel}`}
                    className="group flex items-center gap-3 rounded-md border border-steel/60 px-4 py-3.5 transition-colors hover:border-crimson"
                  >
                    <Phone className="size-4 shrink-0 text-accent" />
                    <span className="text-sm text-chrome group-hover:text-white">
                      {DATA.contact.tel}
                    </span>
                    <ArrowUpRight className="ml-auto size-4 shrink-0 text-chrome/40" />
                  </a>
                  <div className="flex gap-3">
                    {iconSocials.map((s) => (
                      <a
                        key={s.name}
                        href={s.url}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={s.name}
                        className="flex flex-1 items-center justify-center rounded-md border border-steel/60 py-3 text-chrome/65 transition-colors hover:border-crimson hover:text-white"
                      >
                        <s.icon className="size-4" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </Section>
      </main>

      {/* ───────────── FOOTER ───────────── */}
      <footer className="border-t border-steel/50">
        <div className="mx-auto flex max-w-5xl flex-col gap-2 px-5 py-8 text-sm text-chrome/40 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <span>
            © {new Date().getFullYear()} {DATA.name}
          </span>
          <a
            href={DATA.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="link-line text-chrome/50 hover:text-white"
          >
            Download résumé
          </a>
        </div>
      </footer>
    </div>
  );
}
