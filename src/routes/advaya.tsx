import { Link, createFileRoute } from "@tanstack/react-router";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { ArrowDownRight, ArrowLeft, ExternalLink, Phone } from "lucide-react";
import { useRef, useState } from "react";
import collegeLogo from "@/assets/bmsitm-logo.svg";
import { Button } from "@/components/ui/button";

const advayaLogo = "/assets/aistudio/WhatsApp_Image_2026-11-25_at_14.39.04_1a7db3e6.jpeg";

type NexoraEvent = {
  number: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  date: string;
  time: string;
  day: "25 Nov" | "26 Nov";
  prizePool: string;
  prizeBreakdown: string;
  meta: readonly (readonly [string, string])[];
  detailsTitle?: string;
  detailsItems?: readonly string[];
  facultyInCharge: string;
  studentInCharge: string;
  registrationUrl: string;
};

const nexoraEvents: NexoraEvent[] = [
  {
    number: "01",
    title: "Operation: Red Planet",
    category: "Treasure Hunt",
    tagline: "The Ultimate Space-Themed Treasure Hunt",
    description:
      "Solve quizzes, mind-bending puzzles and cryptic clues in an exciting campus-wide treasure hunt.",
    date: "26 November 2026",
    time: "11:00 AM – 4:00 PM",
    day: "26 Nov",
    prizePool: "Rs 4,000",
    prizeBreakdown: "1st ₹2,500 · 2nd ₹1,500",
    meta: [
      ["Venue", "Auditorium"],
      ["Eligibility", "First-year students"],
      ["Team", "4 members"],
      ["Fee", "Free"],
    ],
    facultyInCharge:
      "Prof. Syed Matheen Pasha · Prof. Geetha P L · Prof. Kusuma H P · Prof. Chaitra D B",
    studentInCharge: "Piyush Maurya · Likitha S",
    registrationUrl:
      "https://docs.google.com/forms/d/e/1FAIpQLScKiKIW4_AOgiAcAKGh97IyMmtRDJGtIpAsmuYiL9kkKaF_gA/viewform?usp=publish-editor",
  },
  {
    number: "02",
    title: "RedShift",
    category: "Coding & Debugging Relay",
    tagline: "Every member gets a turn.",
    description:
      "A four-member rotating coding and debugging relay. Trade the keyboard at each call, collaborate throughout, and solve challenges together.",
    date: "26 November 2026",
    time: "11:00 AM – 2:00 PM",
    day: "26 Nov",
    prizePool: "Rs 4,000",
    prizeBreakdown: "1st ₹2,500 · 2nd ₹1,500",
    meta: [
      ["Team", "Exactly 4 members"],
      ["Open to", "1st, 3rd & 5th sem CSE Division 4"],
      ["Languages", "C, C++, Java, Python"],
      ["Workstation", "One per team"],
    ],
    detailsTitle: "Relay format & rules",
    detailsItems: [
      "Relay 1 (20 min): Syntax and basic logic.",
      "Relay 2 (20 min): Loops, conditions and boundaries.",
      "Relay 3 (20 min): Moderate debugging and algorithms.",
      "Relay 4 (20 min): Complex logic and edge cases.",
      "Final testing (10 min): All four members review, correct and submit answers together.",
      "Every member must lead their assigned 20-minute slot and hand over the keyboard at each call.",
      "No elimination: all teams play to the end. Inter-team code sharing and AI tools (ChatGPT, GitHub Copilot, Claude) are prohibited.",
    ],
    facultyInCharge: "Dr. Savitha S · Dr. Bhavya G · Prof. Vinay Kumar Y B · Prof. Charan",
    studentInCharge: "Pradyumna KH · Pratham BB",
    registrationUrl: "https://forms.gle/hac7pNLPGtryG4ja9",
  },
  {
    number: "03",
    title: "Martian 1.0",
    category: "24-Hour Hackathon",
    tagline: "Agentic AI for a Smarter Campus",
    description:
      "Design and deploy practical campus solutions with Agentic AI and autonomous workflows. Build beyond the prototype: teams should address real institutional challenges with functional, deployable ideas.",
    date: "25 – 26 November 2026",
    time: "10:30 AM – 10:00 AM",
    day: "25 Nov",
    prizePool: "Rs 15,000",
    prizeBreakdown: "Overall ₹7,000 · Security ₹4,000 · Management ₹4,000 + Internships",
    meta: [
      ["Venue", "APJ Abdul Kalam Lab"],
      ["Domains", "Security & Management"],
      ["Tracks", "4 per domain, including Open Innovation"],
      ["Bonus", "Internship opportunities for winning teams"],
    ],
    detailsTitle: "Rounds & judging criteria",
    detailsItems: [
      "Round 1 (25 Nov, 10:30 AM–3:30 PM): PPT presentation and screening covering solution, technical approach, agentic workflow and implementation plan.",
      "Round 2 (25 Nov, 3:30 PM–26 Nov, 10:00 AM): Prototype development and deployment. Final evaluation and results conclude by 10:30 AM.",
      "Judging considers originality, agentic workflow implementation, technical execution, deployment readiness and potential impact on the college.",
    ],
    facultyInCharge:
      "Dr. Suhas · Dr. Swetha M S · Prof. Akshay Arya · Prof. Shabeena · Prof. Malini M",
    studentInCharge: "Lolaa MH · Pragyan Hota · Lakshya",
    registrationUrl: "https://forms.gle/65VDFwqCU6WXD5jp9",
  },
  {
    number: "04",
    title: "Red Forge",
    category: "Shark Tank Style Pitch",
    tagline: "Startup Pitch · CSE Fest, BMSIT",
    description:
      "A Martian-themed, Shark Tank-style pitch. Present a technical or non-technical startup idea with market scope and financial viability to a panel of judges.",
    date: "25 November 2026",
    time: "10:30 AM – 4:00 PM",
    day: "25 Nov",
    prizePool: "Rs 4,000",
    prizeBreakdown: "1st ₹2,500 · 2nd ₹1,500",
    meta: [
      ["Shortlist", "30 teams"],
      ["Team size", "Up to 4 members"],
      ["Bring", "PPT, working prototype or props"],
      ["Opportunity", "Promising ideas may be referred to BICEP"],
    ],
    detailsTitle: "Rounds & awards",
    detailsItems: [
      "Only the 30 shortlisted teams participate; bring your presentation materials ready (no making on the spot).",
      "Round 1 (30 teams → 8): Problem and research, novelty, solution and USP, market scope, feasibility and impact.",
      "Final (8 teams → 2): Market size, revenue model, costs, profit and financial plan.",
      "Certificates: Gold for the 2 winners, Silver for the other 6 finalists, and Bronze for the remaining 22 participating teams.",
    ],
    facultyInCharge:
      "Dr. Shanthi D L · Prof. Mahalakshmi S · Prof. Radhika S K · Prof. Shilpa Kadbur",
    studentInCharge: "Harsh Kumar · Poojith S",
    registrationUrl: "https://forms.gle/KQk3Za6et6NUrXtbA",
  },
  {
    number: "05",
    title: "The Cosmic Jam",
    category: "Game Development",
    tagline: "Game Jam · Space & Galaxies",
    description:
      "Build a browser-based game around the theme of space and galaxies. Make it memorable through an engaging player experience, polished execution, originality and, above all, fun.",
    date: "25 November 2026",
    time: "10:30 AM – 4:00 PM",
    day: "25 Nov",
    prizePool: "Rs 4,000",
    prizeBreakdown: "1st ₹2,500 · 2nd ₹1,500",
    meta: [
      ["Theme", "Space & galaxies"],
      ["Venue", "Savitri Lab (adjacent to APJ Abdul Kalam Lab)"],
      ["Focus", "1–2 distinctive mechanics; quality over quantity"],
    ],
    facultyInCharge: "Prof. Durga · Prof. Manesha · Prof. Sanjana · Prof. Haarika",
    studentInCharge: "Tushar Gururaj · Pranamya Mehta",
    registrationUrl: "https://forms.gle/t8UJ2iegWVCrBhm27",
  },
];

const nexoraHighlights = [
  {
    value: "05",
    label: "Competitions",
    note: "Hackathon, treasure hunt, debugging relay, startup pitch, and game jam",
  },
  {
    value: "Rs 31,000",
    label: "Total Prize Pool",
    note: "Cash prizes plus internship opportunities and BICEP pitch referrals",
  },
  {
    value: "25 – 26 Nov",
    label: "Two-Day Tech Fest",
    note: "2026 edition hosted across BMSIT&M auditorium and Cluster 4 labs",
  },
  {
    value: "ADVAYA",
    label: "Student Forum",
    note: "Organised by CSE Division IV students — Where Unity Meets Purpose",
  },
];

const queryContacts = [
  {
    name: "Prof. Bhavya G",
    displayPhone: "+91 96639 26568",
    tel: "+919663926568",
    wa: "919663926568",
  },
  {
    name: "Mr. Pragyan Hota",
    displayPhone: "+91 63668 66661",
    tel: "+916366866661",
    wa: "916366866661",
  },
  {
    name: "Ms. Lolaa MH",
    displayPhone: "+91 9008459462",
    tel: "+919008459462",
    wa: "919008459462",
  },
];

export const Route = createFileRoute("/advaya")({
  head: () => ({
    meta: [
      { title: "ADVAYA Student Forum — NEXORA 1.0 | Cluster 4 · BMSIT&M" },
      {
        name: "description",
        content:
          "ADVAYA Student Forum of CSE Division IV (Cluster 4), BMSIT&M presents NEXORA 1.0 — the first internal tech fest.",
      },
    ],
  }),
  component: AdvayaPage,
});

function AdvayaTitlePullUp({ text }: { text: string }) {
  const ref = useRef<HTMLHeadingElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <h1
      ref={ref}
      className="flex flex-nowrap font-display text-[clamp(3.35rem,10vw,8rem)] font-extrabold leading-[0.84] text-primary-foreground"
    >
      {text.split(" ").map((word, index) => (
        <motion.span
          key={word}
          initial={{ y: 40, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
          className="mr-[0.2em] inline-block last:mr-0"
        >
          {word}
        </motion.span>
      ))}
    </h1>
  );
}

function AdvayaPage() {
  const [dayFilter, setDayFilter] = useState<"All" | "25 Nov" | "26 Nov">("All");
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.72], [1, 0]);

  const visibleEvents =
    dayFilter === "All"
      ? nexoraEvents
      : nexoraEvents.filter(
          (ev) => ev.day === dayFilter || (dayFilter === "26 Nov" && ev.number === "03"),
        );

  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      {/* Full-screen ADVAYA Student Forum background hero matching the main BMSIT&M entry */}
      <section
        ref={heroRef}
        className="relative h-[94svh] min-h-[620px] w-full overflow-hidden bg-brand-deep"
      >
        {/* Full-area monochrome ADVAYA background watermark spanning edge-to-edge (approx. 7–9% opacity) */}
        <motion.img
          src={advayaLogo}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 h-full w-full scale-105 select-none object-cover object-center opacity-[0.07] brightness-110 contrast-[1.75] grayscale invert mix-blend-screen"
          style={{ y: imageY, scale: imageScale }}
        />

        {/* Full-width centered monochrome ADVAYA wordmark layer so the entire emblem expands wall-to-wall without cropping */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]"
        >
          <motion.img
            src={advayaLogo}
            alt=""
            className="w-[128vw] max-w-none select-none object-contain opacity-[0.08] brightness-110 contrast-[1.85] grayscale invert mix-blend-screen sm:w-[114vw] lg:w-[108vw]"
            style={{ y: imageY, scale: imageScale }}
          />
        </div>

        {/* Depth & contrast scrims matching ClusterEntry so foreground text always sits crisply above */}
        <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-b from-brand-deep/65 via-transparent to-brand-deep" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-[44%] bg-gradient-to-t from-brand-deep via-brand-deep/80 to-transparent" />
        <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-r from-brand-deep/40 via-transparent to-transparent" />

        {/* Top navigation header */}
        <div className="absolute inset-x-0 top-0 z-20 flex items-start justify-between gap-4 px-4 py-4 sm:px-7 sm:py-6">
          <Link
            to="/"
            className="bg-background/95 p-2 shadow-lg backdrop-blur-sm"
            aria-label="Back to Cluster 4 home"
          >
            <img
              src={collegeLogo}
              alt="BMS Institute of Technology & Management"
              className="h-9 w-auto sm:h-12"
            />
          </Link>

          <nav
            aria-label="ADVAYA navigation"
            className="hidden bg-brand-deep/95 px-6 py-4 shadow-lg backdrop-blur-sm md:block"
          >
            <ul className="flex items-center gap-7">
              <li>
                <Link
                  to="/"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase text-gold transition-colors hover:text-primary-foreground"
                >
                  <ArrowLeft className="size-3.5" aria-hidden="true" />
                  Cluster 4
                </Link>
              </li>
              <li>
                <a
                  href="#nexora"
                  className="text-xs font-semibold uppercase text-primary-foreground/75 transition-colors hover:text-gold"
                >
                  NEXORA 1.0
                </a>
              </li>
              <li>
                <a
                  href="#events"
                  className="text-xs font-semibold uppercase text-primary-foreground/75 transition-colors hover:text-gold"
                >
                  Events
                </a>
              </li>
              <li>
                <a
                  href="#queries"
                  className="text-xs font-semibold uppercase text-primary-foreground/75 transition-colors hover:text-gold"
                >
                  Queries
                </a>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <Link
              to="/"
              className="inline-flex items-center gap-1 bg-brand-deep/95 px-3 py-3 text-xs font-bold uppercase text-gold shadow-lg backdrop-blur-sm md:hidden"
            >
              <ArrowLeft className="size-3.5" aria-hidden="true" />
              Cluster 4
            </Link>
            <div className="bg-card p-1.5 shadow-lg">
              <img
                src={advayaLogo}
                alt="ADVAYA Student Forum — Division IV, Department of CSE, Where Unity Meets Purpose"
                className="h-10 w-auto object-contain sm:h-13"
              />
            </div>
          </div>
        </div>

        {/* Bottom editorial lockup introducing ADVAYA as a Student Forum */}
        <motion.div
          className="absolute inset-x-0 bottom-0 z-10 px-4 pb-7 sm:px-7 sm:pb-10 lg:px-10"
          style={{ y: contentY, opacity: contentOpacity }}
        >
          <p className="mb-4 border-l-4 border-gold pl-3 text-[10px] font-bold uppercase tracking-[0.22em] text-gold sm:text-xs">
            Student Forum · Department of Computer Science &amp; Engineering (Division IV)
          </p>
          <div className="grid items-end gap-6 lg:grid-cols-[minmax(0,1fr)_25rem] lg:gap-10">
            <AdvayaTitlePullUp text="ADVAYA" />
            <motion.div
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="pb-1 lg:pb-4"
            >
              <p className="max-w-md text-sm leading-relaxed text-primary-foreground/85 sm:text-base">
                The official{" "}
                <strong className="font-semibold text-primary-foreground">Student Forum</strong> of
                CSE Division IV at BMSIT&amp;M — where unity meets purpose through student-led
                hackathons, coding relays, and technical fests.
              </p>
              <Button
                asChild
                className="mt-5 h-11 rounded-full bg-gold pl-5 pr-1 text-gold-foreground hover:bg-gold/90"
              >
                <a href="#nexora">
                  Discover NEXORA 1.0
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-deep text-primary-foreground">
                    <ArrowDownRight />
                  </span>
                </a>
              </Button>
            </motion.div>
          </div>
        </motion.div>

        <div
          aria-hidden="true"
          className="absolute bottom-0 right-5 z-10 hidden h-28 items-end gap-3 lg:flex"
        >
          <span className="pb-4 text-[9px] font-bold uppercase text-primary-foreground/55 [writing-mode:vertical-rl]">
            Scroll to discover
          </span>
          <span className="h-full w-px bg-gradient-to-b from-gold to-transparent" />
        </div>
      </section>

      {/* Introducing NEXORA 1.0 */}
      <section id="nexora" className="border-b border-border bg-secondary/50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-7">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-gold">
                ADVAYA Student Forum Presents · First Internal Tech Fest
              </p>
              <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-primary sm:text-6xl">
                NEXORA 1.0
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-foreground/80 sm:text-lg">
                Ideas in orbit. Innovation in motion. NEXORA 1.0 is the flagship internal technology
                fest launched by ADVAYA — the CSE Division IV Student Forum at BMSIT&amp;M —
                bringing together student builders, problem-solvers, founders, and game creators
                across two high-energy days of competition.
              </p>
            </div>

            <div className="border-l-4 border-gold bg-card p-6 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-gold">
                Why NEXORA 1.0
              </p>
              <p className="mt-2 text-sm leading-relaxed text-foreground/80">
                Built by students of CSE Cluster 4 for their peers, NEXORA 1.0 spans five focused
                tracks: autonomous Agentic AI engineering, rapid debugging relays, startup pitching,
                campus-wide problem solving, and cosmic browser game creation.
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-6 border-t border-border pt-10 sm:grid-cols-2 lg:grid-cols-4">
            {nexoraHighlights.map((item) => (
              <div key={item.label} className="border-l-2 border-gold pl-4">
                <p className="font-display text-2xl font-extrabold text-primary sm:text-3xl">
                  {item.value}
                </p>
                <p className="mt-1 text-xs font-bold uppercase tracking-[0.18em] text-gold">
                  {item.label}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events under NEXORA 1.0 */}
      <section id="events" className="mx-auto max-w-7xl px-4 py-16 sm:px-7 sm:py-24">
        <div className="flex flex-col justify-between gap-6 border-b border-border pb-6 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-gold">
              Event Schedule &amp; Details
            </p>
            <h2 className="mt-2 font-display text-3xl font-extrabold text-primary sm:text-4xl">
              Events under NEXORA 1.0
            </h2>
          </div>

          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter events by day">
            {(["All", "25 Nov", "26 Nov"] as const).map((tab) => (
              <button
                key={tab}
                type="button"
                role="tab"
                aria-selected={dayFilter === tab}
                onClick={() => setDayFilter(tab)}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] transition-colors ${
                  dayFilter === tab
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-primary hover:bg-gold hover:text-gold-foreground"
                }`}
              >
                {tab === "All" ? "All Events" : tab}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 space-y-6">
          {visibleEvents.map((ev) => (
            <article
              key={ev.number}
              className="border border-border border-l-4 border-l-gold bg-card p-6 shadow-sm transition-shadow hover:shadow-md sm:p-8"
            >
              <div className="flex flex-col justify-between gap-4 border-b border-border pb-5 md:flex-row md:items-start">
                <div className="flex items-start gap-4">
                  <span className="font-display text-3xl font-extrabold text-gold sm:text-4xl">
                    {ev.number}
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">
                      {ev.category} · {ev.date} · {ev.time}
                    </p>
                    <h3 className="mt-1 font-display text-2xl font-extrabold text-primary sm:text-3xl">
                      {ev.title}
                    </h3>
                    <p className="mt-1 text-sm font-medium italic text-muted-foreground">
                      {ev.tagline}
                    </p>
                  </div>
                </div>

                <div className="shrink-0 md:text-right">
                  <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                    Prize Pool
                  </p>
                  <p className="mt-0.5 font-display text-2xl font-extrabold text-primary">
                    {ev.prizePool}
                  </p>
                  <p className="mt-0.5 text-xs text-foreground/70">{ev.prizeBreakdown}</p>
                </div>
              </div>

              <p className="mt-5 max-w-4xl text-sm leading-relaxed text-foreground/80 sm:text-base">
                {ev.description}
              </p>

              <dl className="mt-5 grid gap-4 border-y border-border/70 py-4 text-sm sm:grid-cols-2 lg:grid-cols-4">
                {ev.meta.map(([label, value]) => (
                  <div key={label}>
                    <dt className="text-[11px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
                      {label}
                    </dt>
                    <dd className="mt-1 font-medium text-foreground">{value}</dd>
                  </div>
                ))}
              </dl>

              {ev.detailsItems && ev.detailsTitle && (
                <details className="mt-4 border border-border bg-secondary/50">
                  <summary className="cursor-pointer px-4 py-3 font-display text-sm font-bold text-primary">
                    {ev.detailsTitle}
                  </summary>
                  <ul className="list-disc space-y-1.5 px-9 pb-4 text-sm text-foreground/80">
                    {ev.detailsItems.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </details>
              )}

              <div className="mt-5 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                <div className="space-y-1 text-xs text-foreground/75">
                  <p>
                    <span className="font-bold uppercase tracking-wider text-primary">
                      Faculty in-charge:
                    </span>{" "}
                    {ev.facultyInCharge}
                  </p>
                  <p>
                    <span className="font-bold uppercase tracking-wider text-primary">
                      Student in-charge:
                    </span>{" "}
                    {ev.studentInCharge}
                  </p>
                </div>

                <Button asChild className="shrink-0">
                  <a href={ev.registrationUrl} target="_blank" rel="noreferrer">
                    Register
                    <ExternalLink className="size-4" aria-hidden="true" />
                  </a>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Query Contacts */}
      <section id="queries" className="bg-secondary py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-7">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-gold">Event Queries</p>
          <h2 className="mt-2 font-display text-2xl font-extrabold text-primary sm:text-3xl">
            Questions about any event?
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {queryContacts.map((c) => (
              <div key={c.name} className="border border-border bg-card p-5">
                <p className="font-display text-lg font-bold text-primary">{c.name}</p>
                <p className="mt-1 text-sm text-muted-foreground">{c.displayPhone}</p>
                <div className="mt-4 flex gap-3">
                  <Button asChild size="sm" variant="outline">
                    <a href={`tel:${c.tel}`}>
                      <Phone className="size-3.5" aria-hidden="true" />
                      Call
                    </a>
                  </Button>
                  <Button asChild size="sm">
                    <a href={`https://wa.me/${c.wa}`} target="_blank" rel="noreferrer">
                      WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-brand-deep py-10 text-center text-sm text-primary-foreground/60">
        <p className="font-display text-base font-bold text-primary-foreground">
          NEXORA 1.0 2026 · CSE Division IV · BMSIT&amp;M
        </p>
        <p className="mt-2">ADVAYA Student Forum · Where Unity Meets Purpose</p>
      </footer>
    </div>
  );
}
