import { Icons } from "@/components/icons";

/* ─────────────────────────────────────────────────────────────
   TODO — the fields that turn this from a resume into a portfolio.
   Everything below is optional and renders nothing while empty,
   so the site never shows a broken or placeholder-looking slot.

   [ ] project.impact   — the outcome. "Cut onboarding from 3 days to
                          20 minutes", "Serves 40+ tenants". One line.
   [ ] project.links    — live demo + repo for Acadex / Captify / Axon-Intel.
                          Highest-value missing thing. (Flock Aura has its
                          store links already.)
   [ ] project.image    — a screenshot in /public. Second highest. A Flock
                          Aura store screenshot would carry the most weight.
   [ ] Flock Aura       — `technologies` currently describes the work, not the
                          stack. Swap in the real tools.
   [ ] Vault            — uncomment its `links` block once the domain is live.
                          If you can say how many teams or files it serves,
                          that's the `impact` line.
   [ ] work[].impact    — same idea, one outcome line per role.
   [ ] availability     — flip `open` to false when you stop taking work.

   Numbers beat adjectives every time. If you can't measure it, say
   what it replaced or who uses it.
   ───────────────────────────────────────────────────────────── */

export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  title: string;
  subtitle: string;
  blurb: string;
  bullets: string[];
  technologies: string[];
  status?: string;
  impact?: string;
  image?: string;
  links?: ProjectLink[];
}

export interface Work {
  company: string;
  href?: string;
  location: string;
  title: string;
  start: string;
  end: string;
  current?: boolean;
  bullets: string[];
  impact?: string;
  links?: ProjectLink[];
}

export const DATA = {
  name: "Harishwa D Reddy",
  initials: "HDR",
  url: "https://harishwa.com",
  location: "Bangalore, India",
  timezone: "IST · UTC+5:30",
  tagline: "Software Engineer",
  role: "Software Engineer",

  // the 5-second read. what you do, for whom, and why it matters.
  positioning:
    "I build the backend and database side of products — the part that has to keep working once there's real data and real people using it.",

  description:
    "Software engineer working on backends, databases, and the AI features on top of them. Available for freelance projects.",

  summary:
    "I work out how data should be structured and how it moves between systems. That was the job at DataCouch in Chandigarh, at VxO in Bangalore, and it's the job now at Flock Energy — three places with almost nothing in common, and the same hard part every time.",

  // TODO — the part that can't be written for you. Specific beats interesting:
  // "17 seconds on a Rubik's cube" lands, "I enjoy puzzles" doesn't. Numbers,
  // names and dates are what make a page read as a person rather than a CV.
  bio: "I studied Computer Science and AI at Bennett University, and spent the first half of 2025 on exchange at National Taiwan University in Taipei. I've been building software people actually use since 2023. I'm in Bangalore now.",

  avatarUrl: "/pfp.jpg",
  resumeUrl: "/harishwa-d-reddy-resume.pdf",

  availability: {
    open: true,
    headline: "Available for freelance",
    detail:
      "Available for freelance work on backends, databases, and AI features — either a well-defined piece of work, or carrying something the whole way with your team.",
  },

  contact: {
    email: "harishwadreddy@gmail.com",
    tel: "+917022277237",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://www.github.com/HARISHWA2003",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/harishwa-d-reddy",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/HARISHWA2",
        icon: Icons.x,
        navbar: true,
      },
      email: {
        name: "Email",
        url: "mailto:harishwadreddy@gmail.com?subject=Project%20enquiry",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  /* what a client or hiring manager is actually buying. */
  services: [
    {
      title: "Backends & databases",
      body: "Working out how your data should be structured, keeping one customer's data away from another's, handling big imports, and making sure none of it drifts out of sync. The part everything else sits on top of.",
      tags: ["PostgreSQL", "Supabase", "FastAPI", "Database design"],
    },
    {
      title: "AI that earns its keep",
      body: "Search and answers over your own documents, and agents that handle repetitive work on their own. Built to keep the running cost down and to give you the same answer twice.",
      tags: ["RAG", "Vector DBs", "LLM orchestration", "Python"],
    },
    {
      title: "Whole products",
      body: "From a rough idea to something live. Useful when you would rather one person carried a project the whole way than hand it between three.",
      tags: ["Next.js", "SvelteKit", "TypeScript", "Serverless"],
    },
  ],

  work: [
    {
      company: "Flock Energy",
      location: "Remote",
      title: "Software Engineer",
      start: "May 2026",
      end: "Present",
      current: true,
      bullets: [
        "Lead the database design and the backend services behind Flock Aura, our mobile app.",
        "Built the sign-in and account security, plus the connections to the decentralised systems the app relies on — with user data kept private throughout.",
        "Built Vault, an internal file sharing tool where each team only sees its own files and your role decides what you can do with them.",
      ],
    },
    {
      company: "VxO Digital",
      location: "Bangalore, India",
      title: "AI Engineer",
      start: "July 2025",
      end: "May 2026",
      bullets: [
        "Took a company-wide search tool from first design through to launch — how documents get indexed, and how answers get put together.",
        "Built tools that read messy business documents — mostly RFPs — and turn them into clean, structured database records.",
        "Shipped a voice-controlled mobile app that runs on both iOS and Android, working closely with the product and design teams.",
      ],
    },
    {
      company: "DataCouch",
      href: "https://datacouch.io/",
      location: "Chandigarh, India",
      title: "ML Engineer",
      start: "Nov 2023",
      end: "Nov 2024",
      bullets: [
        "Handled the whole path from raw data to a running system — cleaning it up, fitting it into a database, wiring the pipelines, then watching it in production.",
        "Built forecasting models that predicted what resources would be needed, so teams could plan ahead instead of reacting.",
      ],
    },
  ] as Work[],

  projects: [
    {
      title: "Flock Aura",
      subtitle: "Mobile app · Flock Energy",
      status: "Live on iOS & Android",
      blurb:
        "Flock Energy's mobile app, live on both app stores. I lead the work underneath it: how the data is organised, the backend services, and the sign-in and security.",
      technologies: ["Database design", "API design", "Authentication", "Mobile"],
      bullets: [
        "Designed the database and the backend services the app runs on.",
        "Built the sign-in flow and the connections to outside systems, keeping user data private throughout.",
      ],
      links: [
        {
          label: "App Store",
          href: "https://apps.apple.com/in/app/flock-aura/id6780228618",
        },
        {
          label: "Google Play",
          href: "https://play.google.com/store/apps/details?id=tech.flockenergy.aura",
        },
      ],
    },
    {
      title: "Vault",
      subtitle: "Internal tool · Flock Energy",
      blurb:
        "An internal tool for sharing files across teams at Flock. Each team's files stay separate, and what you can do with a file depends on your role.",
      technologies: ["Svelte", "ElysiaJS", "Drizzle ORM"],
      bullets: [
        "Built the whole tool — every team's files and members stay walled off from every other team's.",
        "Designed the permissions system that decides what each person can do with a given file.",
      ],
      // Uncomment once vault-web.flockenergy.tech actually resolves. As of
      // 2026-08-22 it has no DNS record, so a visitor gets a browser error —
      // a dead link costs more credibility here than a missing one does.
      // links: [
      //   { label: "Vault", href: "https://vault-web.flockenergy.tech" },
      // ],
    },
    {
      title: "Acadex",
      subtitle: "ID card system for schools & colleges",
      blurb:
        "Schools and colleges issue thousands of ID cards a year, mostly by hand. Acadex turns that into one bulk job, with a visual builder for designing the card itself.",
      technologies: ["Next.js", "Supabase", "Ionic", "TypeScript"],
      bullets: [
        "Built the database so each institution's data stays separate, and so thousands of records can be brought in at once.",
        "Built the card designer: you place each field where you want it, the layout gets saved, and the whole batch prints from it.",
      ],
    },
    {
      title: "Captify",
      subtitle: "Transcription tool for video teams",
      blurb:
        "Transcription and captioning for video teams. It scales up when a lot of files land at once, and costs nothing while it sits idle.",
      technologies: ["AWS Lambda", "SvelteKit", "WhisperAI", "Python"],
      bullets: [
        "Built it to run with no always-on server, passing each file through several AI models in turn.",
        "Set up the speech-to-text side so it copes with many files being uploaded at the same time.",
      ],
    },
    {
      title: "Axon-Intel",
      subtitle: "Data-gathering agent",
      blurb:
        "An agent that watches developer sites, collects what it finds, and builds profiles from it. It filters locally first, so it only pays for the AI calls worth making.",
      technologies: ["ChromaDB", "SQLite", "Python", "LLMs"],
      bullets: [
        "Built an agent that gathers data from several developer platforms on its own and sorts it into structured profiles.",
        "Gave it a memory that gets better as it runs, and a local filter that cuts how often it needs to call a paid model.",
      ],
    },
  ] as Project[],

  skills: [
    {
      group: "Languages & Data",
      items: [
        "Python",
        "TypeScript",
        "JavaScript",
        "SQL",
        "C++",
        "Database design",
        "Data modelling",
      ],
    },
    {
      group: "Frameworks & Platforms",
      items: [
        "FastAPI",
        "Next.js",
        "SvelteKit",
        "Supabase",
        "PostgreSQL",
        "ElysiaJS",
        "AWS Lambda",
      ],
    },
    {
      group: "AI & Automation",
      items: [
        "LLM orchestration",
        "RAG",
        "Vector databases",
        "AI agents",
        "Full-stack delivery",
      ],
    },
  ],

  education: [
    {
      school: "Bennett University",
      href: "https://www.bennett.edu.in/",
      degree: "B.Tech, Computer Science — AI",
      detail: "CGPA 8.89 / 10.0",
      logo: "/bennett.jpg",
      start: "Sept 2021",
      end: "June 2025",
    },
    {
      school: "National Taiwan University",
      href: "https://www.ntu.edu.tw/english/",
      degree: "Semester Exchange — Dept. of CSIE",
      detail: "Taipei, Taiwan",
      logo: "/NTUlogo.jpg",
      start: "Feb 2025",
      end: "June 2025",
    },
  ],
};
