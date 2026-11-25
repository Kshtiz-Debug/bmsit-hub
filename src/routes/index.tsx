import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { CalendarDays, Linkedin, Trophy, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DepartmentOverview } from "@/components/department-overview";
import { ClusterEntry } from "@/components/ui/cluster-entry";
import { CinematicScrollChrome } from "@/components/ui/cinematic-scroll";
import heroImg from "@/assets/hero-bms-building.jpeg.asset.json";
const heroImgUrl = heroImg.url;
import collegeLogo from "@/assets/bmsitm-logo.svg";
import codeCrafterPoster from "@/assets/event-code-crafter.jpg.asset.json";
import pitchFestPoster from "@/assets/event-pitch-fest.jpg.asset.json";
import ezeePrintsPoster from "@/assets/event-ezee-prints.jpg.asset.json";
import kabaddiPoster from "@/assets/event-kabaddi.jpg.asset.json";
import anveshanaTeam from "@/assets/anveshana-team.jpeg.asset.json";
import codingChallengeTeam from "@/assets/coding-challenge-team.jpeg.asset.json";
import winterOfProjectTable from "@/assets/winter-of-project-team.jpeg.asset.json";
import winterOfProjectStage from "@/assets/winter-of-project-team-2.jpeg.asset.json";
import smartHorizonTeam from "@/assets/smart-horizon-team.jpeg.asset.json";
import healthLiteracyPoster from "@/assets/health-literacy-poster.jpeg.asset.json";
import { getUpcomingHackathons } from "@/lib/upcoming-hackathons";
import facultyDetails from "@/lib/faculty-details.json";
import cse10Json from "@/lib/cse10-students.json";
import cse11Json from "@/lib/cse11-students.json";
import cse12Json from "@/lib/cse12-students.json";
import { getProctor } from "@/lib/section-proctors";
import {
  firstYearTimetables,
  periodTimes,
  sectionTimetables,
  secondYearTimetables,
  subjectKey,
  type SectionTimetable,
} from "@/lib/section-timetables";
import {
  facultyHighlights,
  partnership,
  reportAchievements,
  reportEvents,
  researchItems,
} from "@/lib/cluster-report-data";
type SectionStudent = { usn: string; name: string; linkedin?: string; proctor?: string };
const cse11Students = cse11Json as SectionStudent[];
const cse12Students = cse12Json as SectionStudent[];
import y1Cse10 from "@/lib/y1-cse-10-students.json";
import y1Cse11 from "@/lib/y1-cse-11-students.json";
import y1Cse12 from "@/lib/y1-cse-12-students.json";
import y2Cse10 from "@/lib/y2-cse-10-students.json";
import y2Cse11 from "@/lib/y2-cse-11-students.json";
import y2Cse12 from "@/lib/y2-cse-12-students.json";
const secondYearRosters: Record<string, SectionStudent[]> = {
  "CSE-10": y2Cse10 as SectionStudent[],
  "CSE-11": y2Cse11 as SectionStudent[],
  "CSE-12": y2Cse12 as SectionStudent[],
};
const firstYearRosters: Record<string, SectionStudent[]> = {
  "CSE-10": y1Cse10 as SectionStudent[],
  "CSE-11": y1Cse11 as SectionStudent[],
  "CSE-12": y1Cse12 as SectionStudent[],
};
const sectionRosters: Record<string, SectionStudent[]> = {
  "CSE-10": cse10Json as SectionStudent[],
  "CSE-11": cse11Students,
  "CSE-12": cse12Students,
};
import fac108 from "@/assets/faculty/108.jpg";
import fac120 from "@/assets/faculty/120.jpg";
import fac132 from "@/assets/faculty/132.jpg";
import fac154 from "@/assets/faculty/154.jpg";
import fac167 from "@/assets/faculty/167.jpg";
import fac177 from "@/assets/faculty/177.jpg";
import fac196 from "@/assets/faculty/196.jpg";
import fac202 from "@/assets/faculty/202.jpg";
import fac213 from "@/assets/faculty/213.jpg";
import fac215 from "@/assets/faculty/215.jpg";
import fac218 from "@/assets/faculty/218.jpg";
import fac221 from "@/assets/faculty/221.jpg";
import fac228 from "@/assets/faculty/228.jpg";
import fac231 from "@/assets/faculty/231.jpg";
import fac238 from "@/assets/faculty/238.jpg";
import fac241 from "@/assets/faculty/241.jpg";
import fac246 from "@/assets/faculty/246.jpg";
import fac248 from "@/assets/faculty/248.jpg";
import fac250 from "@/assets/faculty/250.jpg";
import fac251 from "@/assets/faculty/251.jpg";
import fac257 from "@/assets/faculty/257.jpg";
import fac265 from "@/assets/faculty/265.jpg";
import fac273 from "@/assets/faculty/273.jpg";
import fac368 from "@/assets/faculty/368.jpg";
import fac397 from "@/assets/faculty/397.jpg";
import fac407 from "@/assets/faculty/407.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cluster 4 — CSE | BMS Institute of Technology & Management" },
      {
        name: "description",
        content:
          "Cluster 4 of the Computer Science & Engineering department at BMSIT&M — sections, faculty, achievements, events and upcoming hackathons.",
      },
      { property: "og:title", content: "Cluster 4 — CSE | BMSIT&M" },
      {
        property: "og:description",
        content:
          "Sections, faculty, achievements, events and hackathons of Cluster 4, CSE, BMSIT&M.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: heroImgUrl },
      { name: "twitter:image", content: heroImgUrl },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const sections = [
  {
    code: "CSE-10",
    strength: 60,
  },
  {
    code: "CSE-11",
    strength: 60,
  },
  {
    code: "CSE-12",
    strength: 60,
  },
];

const faculty = [
  { name: "Dr. Surekha K B", role: "Professor & Head", photo: fac108, id: 108 },
  { name: "Dr. Narasimhamurthy M S", role: "Professor", photo: fac120, id: 120 },
  { name: "Dr. Mohan B A", role: "Associate Professor", photo: fac167, id: 167 },
  { name: "Dr. Shanthi D L", role: "Associate Professor", photo: fac132, id: 132 },
  { name: "Dr. Swetha M S", role: "Associate Professor", photo: fac154, id: 154 },
  { name: "Dr. Harish Kumar N", role: "Associate Professor", photo: fac177, id: 177 },
  { name: "Dr. Suhas A Bhyratae", role: "Associate Professor", photo: fac407, id: 407 },
  { name: "Prof. Mahalakshmi S", role: "Assistant Professor", photo: fac202, id: 202 },
  { name: "Dr. Ambika R S", role: "Assistant Professor" },
  { name: "Dr. Savitha S", role: "Associate Professor", photo: fac213, id: 213 },
  { name: "Mrs. Bhavya G", role: "Assistant Professor", photo: fac215, id: 215 },
  { name: "Mr. Vinay Kumar Y B", role: "Assistant Professor", photo: fac228, id: 228 },
  { name: "Mr. Akshay Arya", role: "Assistant Professor", photo: fac231, id: 231 },
  { name: "Mrs. Annapareddy Haarika", role: "Assistant Professor", photo: fac218, id: 218 },
  { name: "Mrs. Malini M", role: "Assistant Professor", photo: fac221, id: 221 },
  { name: "Ms. Spandana L", role: "Assistant Professor", photo: fac238, id: 238 },
  { name: "Mrs. Sanjana V Hunashikatti", role: "Assistant Professor", photo: fac248, id: 248 },
  { name: "Mrs. Shilpa K A", role: "Assistant Professor", photo: fac250, id: 250 },
  { name: "Ms. Chaitra D B", role: "Assistant Professor", photo: fac251, id: 251 },
  { name: "Mrs. Shabeena Lylath D B", role: "Assistant Professor", photo: fac241, id: 241 },
  { name: "Mr. Syed Matheen Pasha", role: "Assistant Professor", photo: fac246, id: 246 },
  { name: "Mrs. Kusuma H P", role: "Assistant Professor", photo: fac257, id: 257 },
  { name: "Mrs. Geetha P L", role: "Assistant Professor", photo: fac265, id: 265 },
  { name: "Mrs. Maneesha Athikam", role: "Assistant Professor", photo: fac368, id: 368 },
  { name: "Ms. Durga Devi G Y", role: "Assistant Professor", photo: fac196, id: 196 },
  { name: "Mr. Charan Kumar Nunna", role: "Assistant Professor", photo: fac273, id: 273 },
  { name: "Mrs. Radhika S K", role: "Assistant Professor", photo: fac397, id: 397 },
];

type Achievement = {
  year: string;
  month?: number;
  title: string;
  detail: string;
  summary?: string;
  winners?: string[];
  mentor?: string;
  images?: string[];
  imageCaption?: string;
  featured?: boolean;
};

const achievements: Achievement[] = [
  {
    year: "2026",
    title: "2nd Prize — Smart Horizon, 48-hour International Hackathon",
    detail:
      "Four students of 5th-sem CSE (Section K) took the runner-up trophy and a cash prize of INR 1.5 lakh at Smart Horizon, a 48-hour international hackathon hosted by New Horizon College of Engineering, Bengaluru, from 3rd to 5th September. The team went up against international entries, including teams from the US.",
    winners: ["Mr. Pragyan", "Ms. Lolaa", "Mr. Piyush Kumar", "Mr. Abhishek"],
    mentor: "Mentored by Dr. Narasimhamurthy M S & Team Division-4",
    images: [smartHorizonTeam.url],
    imageCaption: "The team with their runner-up trophy at Smart Horizon",
    featured: true,
  },
  {
    year: "2026",
    month: 3,
    title: "Finalist & Consolation Prize — Anveshana, National Level Project Competition",
    detail:
      "A team of Cluster 4 CSE students entered Anveshana, a national level project competition that began with 1,146 participants. The team cleared every cut-off on the way to the end — qualifying for Round 2 among the top 100 teams, then pushing through to the finale as one of the top 50 — and was awarded a consolation prize of ₹15,000.",
    winners: [
      "Mr. Srisha Prajwal G (CSE)",
      "Mr. Harshil Sharma (CSE)",
      "Mr. Dharmit Chauhan (CSE)",
      "Mr. Parikshith S (AIML)",
    ],
    images: [anveshanaTeam.url],
    imageCaption: "The Cluster 4 team at their project booth during Anveshana",
    featured: true,
  },
  {
    year: "2025",
    title: "2nd Prize — Coding Challenge",
    detail:
      "Mr. Anirudh and team won second prize in the coding challenge, finishing as runners-up.",
    images: [codingChallengeTeam.url],
    imageCaption: "The team with their certificate after the coding challenge",
    featured: true,
  },
  {
    year: "2025",
    title: "1st Place — Winter of Project Hackathon, IEEE Society",
    detail:
      "Mr. Harshil Sharma, Mr. Srisha Prajwal and Mr. Prakhar Singh of 3rd-sem CSE (Section L) won first place at the Winter of Project Hackathon conducted by the IEEE Society.",
    winners: ["Mr. Harshil Sharma", "Mr. Srisha Prajwal G", "Mr. Prakhar Singh"],
    images: [winterOfProjectTable.url, winterOfProjectStage.url],
    imageCaption: "The team at their project table, and the certificates at the prize ceremony",
    featured: true,
  },
  {
    year: "2026",
    title: "Silver Medal — Individual Kata, VTU State-Level Karate Championship 2026",
    detail:
      "Ms. Lolaa M H of 5th-sem CSE won the silver medal in Individual Kata at the VTU State-Level Karate Championship 2026, bringing laurels to the institution. The championship was held on 11th and 12th September 2026 and organised by RVCA, Bangalore.",
    winners: ["Ms. Lolaa M H (5th-sem CSE)"],
    featured: true,
  },
];

const monthNumbers: Record<string, number> = {
  jan: 1, january: 1, feb: 2, february: 2, mar: 3, march: 3,
  apr: 4, april: 4, may: 5, jun: 6, june: 6, jul: 7, july: 7,
  aug: 8, august: 8, sep: 9, sept: 9, september: 9, oct: 10, october: 10,
  nov: 11, november: 11, dec: 12, december: 12,
};

function chronologicalRank(text: string, yearFallback: number, monthFallback = 0) {
  const year = Number(text.match(/\b(20\d{2})\b/)?.[1] ?? yearFallback);
  const matches = [...text.matchAll(/(\d{1,2})(?:st|nd|rd|th)?(?:\s*(?:–|-|to|&|and)\s*(\d{1,2})(?:st|nd|rd|th)?)?\s+([A-Za-z]+)/g)];
  const dated = matches
    .map((match) => {
      const monthName = match[3];
      return {
        day: Number(match[2] ?? match[1]),
        month: monthName ? (monthNumbers[monthName.toLowerCase()] ?? 0) : 0,
      };
    })
    .filter(({ month }) => month > 0);
  const latest = dated.sort((a, b) => b.month - a.month || b.day - a.day)[0];
  return year * 10_000 + (latest?.month ?? monthFallback) * 100 + (latest?.day ?? 0);
}

const achievementSummaries: Record<string, string> = {
  "2nd Prize — Smart Horizon, 48-hour International Hackathon": "Runner-up and ₹1.5 lakh at New Horizon College of Engineering, Bengaluru · 3–5 Sep 2026.",
  "Finalist & Consolation Prize — Anveshana, National Level Project Competition": "Top 50 finalist among 1,146 entries; awarded ₹15,000.",
  "2nd Prize — Coding Challenge": "Mr. Anirudh and team secured second prize.",
  "1st Place — Winter of Project Hackathon, IEEE Society": "First place at the IEEE Society hackathon for the CSE Section L team.",
  "Silver Medal — Individual Kata, VTU State-Level Karate Championship 2026": "Ms. Lolaa M H won Individual Kata silver at RVCA, Bengaluru · 11–12 Sep 2026.",
  "SISA Internship Opportunities": "Five students secured compliance and VAPT internships with a ₹15,000 monthly stipend.",
  "Runner-Up — Agentathon 2026": "CSE-10 team Aura 999+ earned runner-up and ₹3,000.",
  "5th Place — Browser Battle Codeathon": "Team RUN TIME TERROZ placed fifth at BMS College of Engineering.",
  "IoT Track Winners — NMIT Hacks 2026": "IoT track winners, Top 10 of 4,400+ submissions; ₹10,000 · 8–10 May.",
  "1st Place — INCSEPTION": "Meditwin, an AI healthcare project, won ₹10,000 · BMSIT&M, 6 Apr.",
  "2nd Place — INCSEPTION": "Threat-Sim, an AI cybersecurity project, won ₹7,500 · 6 Apr.",
  "3rd Place — INCSEPTION": "Team Low Cortisol won ₹5,000 for Sugarfree, an AI healthcare project.",
  "1st Place — Hackzion V3": "Team SPIDDY won ₹15,000 for TokenScope · AMC Engineering College, 9–10 Apr.",
  "PRAJNOTSAVA 2026 — National Technical Symposium": "Deepak Kumar S represented CSE at CMR University · 25–26 Mar.",
  "National Winners — Eclipse 24-Hour Hackathon": "Team OffTrack won first prize and ₹50,000 among 1,553 teams · 13–14 Mar.",
  "Winners — Campus to Cosmos": "IEEE AESS competition winners · 10 Mar.",
  "1st Place — HACKONOMICS 2026 Ideathon": "First place among 200+ participants.",
  "3rd Place — Krishimanthan": "Team Ace won ₹11,000 · MCE, Hassan, 25–26 Mar.",
  "4th Place — Krishimanthan": "Fourth place in the Soil to Solution challenge; awarded ₹4,000.",
  "AI Anantapur Police Hackathon 2K26": "National-level participation with Anantapur Police and Incux AI · 28 Mar.",
  "MAKEFORBENGALURU Makeathon": "Urban innovation makeathon at RV College of Engineering · 27–28 Feb.",
  "Generative AI Workshop — IIT Hyderabad": "Participation in the Elan & nVision workshop · 21–22 Feb.",
  "PALS innoWAH! Cluster Finals": "Team SKY RELIEF presented an autonomous emergency-response drone at NMIT · 14 Feb.",
  "IIT Madras BS Foundation Level Completed": "Mr. Prakhar Singh completed the Programming and Data Science foundation level.",
  "NIDAR 2026 — National-Level Competition": "Seven-member sixth-semester team participated · 10–16 Feb.",
  "Medal — 17th State-Level Karate Championship": "Ms. Lolaa M H earned a medal in U-21 Individual Kata · Bengaluru, 16–18 Jan."
};

// Every achievement is ordered by when it occurred, newest first.
const achievementsByDate = [...achievements, ...reportAchievements].sort(
  (a, b) =>
    chronologicalRank(b.detail, Number(b.year), b.month) -
      chronologicalRank(a.detail, Number(a.year), a.month) ||
    a.title.localeCompare(b.title),
);

function achievementDate(a: Achievement) {
  const rank = chronologicalRank(a.detail, Number(a.year), a.month);
  const month = Math.floor((rank % 10_000) / 100);
  const day = rank % 100;
  if (!month) return a.year;
  const label = new Intl.DateTimeFormat("en", { month: "short", timeZone: "UTC" }).format(new Date(Date.UTC(Number(a.year), month - 1, 1)));
  return `${day ? `${day} ` : ""}${label} ${a.year}`;
}

function AchievementYears() {
  return (
    <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {achievementsByDate.map((a) => (
        <article key={a.title} className="flex flex-col rounded-2xl border border-gold/30 bg-primary-foreground/5 p-4 text-center transition-colors hover:border-gold">
          {a.images?.length ? (
            <img
              src={a.images[0]}
              alt={a.imageCaption ?? a.title}
              referrerPolicy="no-referrer"
              className="aspect-[4/3] w-full rounded-xl bg-primary-foreground/5 object-cover object-top"
            />
          ) : (
            <div className="flex aspect-[4/3] w-full items-center justify-center rounded-xl bg-primary-foreground/5 text-gold"><Trophy className="size-12" aria-hidden="true" /></div>
          )}
          <p className="mt-4 text-xs font-semibold text-gold">{achievementDate(a)}</p>
          <h3 className="mt-1 font-display text-base font-bold leading-snug text-primary-foreground">{a.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-primary-foreground/70">{achievementSummaries[a.title] ?? a.detail}</p>
          {a.winners && <p className="mt-3 text-xs font-medium text-gold">{a.winners.join(", ")}</p>}
        </article>
      ))}
    </div>
  );
}

interface EventItem {
  poster?: string;
  alt?: string;
  tag: string;
  title: string;
  subtitle: string;
  date: string;
  place: string;
  host: string;
  highlights: string[];
  link?: string;
}

const events: EventItem[] = [
  {
    poster: ezeePrintsPoster.url,
    alt: "Ezee Prints official launch event poster",
    tag: "Launch",
    title: "Ezee Prints — Official Launch",
    subtitle: "From a student idea to a bigger tomorrow",
    date: "Fri, 25 Sep 2026 · 10:30 AM onwards",
    place: "BSN Auditorium, BMSIT&M, Bengaluru",
    host: "BMSIT & Management",
    highlights: ["Founder stories", "AI sessions", "Treasure hunt, prizes up to ₹6,000"],
  },
  {
    poster: kabaddiPoster.url,
    alt: "Kabaddi team selection poster from the Department of Sports",
    tag: "Sports",
    title: "Kabaddi Team Selection",
    subtitle: "Open to all BMSIT students — be part of the team, represent BMSIT",
    date: "Fri, 25 Sep 2026 · 1:30 PM",
    place: "Amphitheatre, 5th Floor, SJB Block",
    host: "Department of Sports",
    highlights: ["Bring sports attire", "Be on time"],
  },
  {
    poster: pitchFestPoster.url,
    alt: "Pitch Fest 2026 call for applications poster",
    tag: "Innovation",
    title: "Pitch Fest 2026",
    subtitle: "The best way to predict the future is to invent it — pitch your vision",
    date: "7 & 8 Aug 2026",
    place: "Anna Incubator, Chennai",
    host: "NITI Aayog · AIM · Anna University",
    highlights: ["Deep tech", "Climate tech", "Agri tech", "Assistive tech"],
  },
  {
    poster: codeCrafterPoster.url,
    alt: "Code Crafter national level coding competition poster",
    tag: "Coding",
    title: "Code Crafter",
    subtitle: "National level coding competition",
    date: "Online round 26 Apr · Offline round 8 May 2026",
    place: "Ramaiah Institute of Technology, Bengaluru",
    host: "IEEE Bangalore Section",
    highlights: ["₹2,25,000 prize pool", "Teams of 2–3", "Entry fee ₹300 per team"],
  },
  {
    tag: "Social Impact",
    title: "Blood Donation Camp",
    subtitle: "One unit of your blood can help save up to four lives — be someone's hero.",
    date: "Thu, 24 Sep 2026 · 9:00 AM – 4:00 PM",
    place: "Amphitheatre, 5th Floor, SJB Block, BMSIT&M",
    host: "BMSIT & Management",
    highlights: ["5 AICTE Activity Points", "Refreshments provided", "Healthy donors, 18–65"],
  },
  {
    poster: healthLiteracyPoster.url,
    alt: "Women Empowerment Cell awareness program poster — Health Literacy for Women",
    tag: "Health & Wellness",
    title: "Health Literacy for Women: Hygiene, Nutrition and Preventive Healthcare",
    subtitle: "Awareness program by the Women Empowerment Cell — all are cordially invited",
    date: "Fri, 25 Sep 2026 · 2:00 – 4:00 PM",
    place: "A-125, Sir M.V. Block, BMSIT&M",
    host: "Women Empowerment Cell (WEC), BMSITM",
    highlights: ["Menstrual hygiene", "Cancer awareness", "Preventive healthcare"],
    link: "https://forms.gle/JgkkHJu3q9MhDWC36",
  },
  ...reportEvents,
];

// Every event is ordered by its final day, newest first.
const eventsByDate = [...events].sort(
  (a, b) => chronologicalRank(b.date, 0) - chronologicalRank(a.date, 0) || a.title.localeCompare(b.title),
);

type FacultyMember = (typeof faculty)[number];
type FacultyDetail = {
  designation?: string;
  email?: string | null;
  linkedin?: string;
  education?: string[];
  expertise?: string[];
  memberships?: string[];
  publications?: string[];
};
const details = facultyDetails as Record<string, FacultyDetail>;
const initials = (n: string) =>
  n.replace(/^(Dr\.|Prof\.|Mr\.|Mrs\.|Ms\.)\s*/, "").split(" ").map((w) => w[0]).slice(0, 2).join("");

function FacultyModal({ f, onClose }: { f: FacultyMember; onClose: () => void }) {
  const d: FacultyDetail = ("id" in f && f.id ? details[String(f.id)] : undefined) ?? {};
  const groups: [string, string[] | undefined][] = [
    ["Area of Expertise", d.expertise],
    ["Educational Qualifications", d.education],
    ["Professional Memberships", d.memberships],
    ["Publications & Work", d.publications],
  ];
  const shown = groups.filter(([, v]) => v && v.length);
  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center bg-brand-deep/70 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={f.name}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto overscroll-contain bg-card p-6 shadow-2xl sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-3 text-2xl font-bold text-muted-foreground hover:text-primary"
        >
          ×
        </button>
        <div className="flex flex-col gap-6 sm:flex-row">
          {"photo" in f && f.photo ? (
            <img src={f.photo} alt={f.name} className="h-56 w-44 shrink-0 border border-border object-cover object-top" />
          ) : (
            <span className="flex h-56 w-44 shrink-0 items-center justify-center border border-border bg-secondary font-display text-3xl font-extrabold text-primary">
              {initials(f.name)}
            </span>
          )}
          <div className="pt-2">
            <h3 className="font-display text-2xl font-extrabold text-primary">{f.name}</h3>
            <p className="mt-2 text-foreground/80">{d.designation ?? f.role}</p>
            {d.email && (
              <a href={`mailto:${d.email}`} className="mt-4 inline-block text-sm font-semibold text-gold hover:underline">
                ✉ {d.email}
              </a>
            )}
            {d.linkedin && (
              <a
                href={d.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open ${f.name}'s LinkedIn profile`}
                className="mt-3 flex items-center gap-2 text-sm font-semibold text-primary hover:text-gold"
              >
                <Linkedin className="size-4" aria-hidden="true" /> LinkedIn profile
              </a>
            )}
          </div>
        </div>
        <hr className="my-6 border-border" />
        {shown.length ? (
          <div className="space-y-3">
            {shown.map(([title, items], idx) => (
              <details key={title} open={idx === 0} className="border border-border bg-secondary/50">
                <summary className="cursor-pointer px-5 py-3 font-display font-bold text-primary">{title}</summary>
                <ul className="list-disc space-y-1.5 px-10 pb-4 text-sm text-foreground/80">
                  {items!.map((it, k) => (
                    <li key={k}>{it}</li>
                  ))}
                </ul>
              </details>
            ))}
          </div>
        ) : (
          <p className="text-sm text-muted-foreground">Profile details will be added soon.</p>
        )}
      </div>
    </div>
  );
}

function TimetableModal({ timetable, onClose }: { timetable: SectionTimetable; onClose: () => void }) {
  const times = timetable.periodTimes ?? periodTimes;
  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center bg-brand-deep/75 p-3 sm:p-5"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${timetable.section} timetable`}
    >
      <div
        className="relative max-h-[92vh] w-full max-w-6xl overflow-y-auto overscroll-contain bg-card p-5 shadow-2xl sm:p-8"
        onClick={(event) => event.stopPropagation()}
      >
        <Button
          type="button"
          variant="ghost"
          size="icon"
          onClick={onClose}
          aria-label="Close timetable"
          className="absolute right-3 top-3 text-xl text-muted-foreground"
        >
          ×
        </Button>
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-gold">
          {timetable.semester ?? "V"} Semester · 2026–27 Odd Semester
        </p>
        <h3 className="mt-2 pr-12 font-display text-3xl font-extrabold text-primary sm:text-4xl">
          {timetable.section} Timetable
        </h3>
        <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-foreground/75">
          <span>Section {timetable.sourceSection}</span>
          {timetable.classTeacher && <span>Class teacher: {timetable.classTeacher}</span>}
          <span>Room: {timetable.classroom}</span>
          <span>Effective: {timetable.effectiveFrom}</span>
        </div>

        <div className="mt-7 overflow-x-auto border border-border">
          <table className="w-full min-w-[900px] table-fixed text-center text-xs">
            <thead className="bg-primary text-primary-foreground">
              <tr>
                <th className="w-28 px-3 py-3 text-left">Day</th>
                {times.map((time, index) => (
                  <th key={time} className="px-2 py-3 font-semibold">
                    <span className="block text-[10px] uppercase opacity-70">Period {index + 1}</span>
                    <span className="mt-1 block">{time}</span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {timetable.days.map((day) => (
                <tr key={day.day} className="border-t border-border odd:bg-secondary/40">
                  <th className="px-3 py-4 text-left font-display font-bold text-primary">{day.day}</th>
                  {day.periods.map((period, index) => (
                    <td key={`${day.day}-${index}`} className="border-l border-border px-2 py-4 leading-snug text-foreground/80">
                      {period}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-2 text-xs text-muted-foreground">
          {timetable.breakNote ?? "Tea break: 10:20–10:40 · Lunch break: 12:30–1:25"}
        </p>
        <div className="mt-6 border-l-4 border-gold bg-secondary/60 p-4">
          <p className="font-display text-sm font-bold text-primary">Subject key</p>
          <dl className="mt-3 grid gap-x-8 gap-y-2 text-xs text-foreground/75 sm:grid-cols-2">
            {(timetable.subjectKey ?? subjectKey).map(([shortName, fullName]) => (
              <div key={shortName} className="flex gap-2">
                <dt className="min-w-14 font-bold text-gold">{shortName}</dt>
                <dd>{fullName}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}

function Index() {
  const [upcomingHackathons, setUpcomingHackathons] = useState(() => getUpcomingHackathons(new Date("2026-11-18T08:51:00Z")));
  useEffect(() => {
    const refresh = () => setUpcomingHackathons(getUpcomingHackathons(new Date()));
    refresh();
    const timer = window.setInterval(refresh, 60_000);
    return () => window.clearInterval(timer);
  }, []);
  const [openFaculty, setOpenFaculty] = useState<FacultyMember | null>(null);
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [sectionYear, setSectionYear] = useState(3);
  const [openTimetable, setOpenTimetable] = useState<SectionTimetable | null>(null);
  const hasModal = Boolean(openFaculty || openSection || openTimetable);
  useEffect(() => {
    if (!hasModal) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenFaculty(null);
        setOpenSection(null);
        setOpenTimetable(null);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [hasModal]);
  return (
    <div id="top" className="min-h-screen bg-background">
      <CinematicScrollChrome />
      <ClusterEntry background={heroImgUrl} logo={collegeLogo} />


      {/* About */}
      <DepartmentOverview />

      <section id="about" data-chapter="06" className="cinematic-section mx-auto max-w-7xl px-4 py-24 lg:py-32">
        {/* Head of Cluster */}
        <div className="border-l-4 border-gold bg-secondary/70 p-6 shadow-sm sm:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-gold">
            Head of Cluster 4
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-5">
            <img
              src={fac120}
              alt="Dr. Narasimhamurthy M S, Professor and Head of Cluster 4"
              loading="lazy"
              className="h-20 w-20 shrink-0 rounded-full border-2 border-gold object-cover object-top"
            />
            <div>
              <h3 className="font-display text-2xl font-extrabold text-primary sm:text-3xl">
                Dr. Narasimhamurthy M S
              </h3>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                Professor
              </p>
            </div>
          </div>
        </div>

        {/* Cluster summary */}
        <div className="mt-14">
          <SectionLabel>About the Cluster</SectionLabel>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-primary sm:text-4xl">
            A Legacy of Learning, Carried by Cluster 4.
          </h2>
          <div className="mt-6 grid gap-8 lg:grid-cols-[1.5fr_1fr] lg:gap-12">
            <div>
              <p className="text-foreground/75">
                Cluster 4 brings together three sections of the Computer Science
                &amp; Engineering branch at BMSIT&amp;M. The cluster works as a single
                academic and cultural unit — shared mentors, shared labs, shared
                events and a shared record of achievements.
              </p>
              <p className="mt-4 text-foreground/75">
                From coding contests and hackathons to project expos and industry
                sessions, everything the cluster does is documented here so students,
                mentors and juniors can follow along in one place.
              </p>
            </div>
            <ul className="space-y-2 text-sm text-foreground/80 lg:border-l lg:border-border lg:pl-8">
              {[
                "Mentor-guided academic tracking for all three sections",
                "Cluster-level events, contests and technical talks",
                "Project and achievement records maintained every semester",
              ].map((i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  {i}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Faculty */}
      <section id="faculty" data-chapter="01" className="cinematic-section mx-auto max-w-7xl px-4 py-24 lg:py-32">
        <SectionLabel>Our Teachers</SectionLabel>
        <h2 className="mt-3 font-display text-3xl font-extrabold text-primary sm:text-4xl">
          Faculty &amp; Mentors
        </h2>
        <p className="mt-4 max-w-2xl text-foreground/75">
          The teaching staff of Cluster 4, Computer Science &amp; Engineering,
          BMSIT&amp;M.
        </p>
        <ol className="mt-10 grid border-l border-t border-border sm:grid-cols-2 lg:grid-cols-3">
          {faculty.map((f, i) => (
            <li key={f.name} className="border-b border-r border-border bg-card">
              <button
                type="button"
                onClick={() => setOpenFaculty(f)}
                className="flex w-full items-start gap-4 px-5 py-4 text-left transition-colors hover:bg-secondary"
              >
                <span className="mt-1 font-display text-sm font-extrabold text-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {"photo" in f && f.photo ? (
                  <img
                    src={f.photo}
                    alt={f.name}
                    loading="lazy"
                    className="h-14 w-14 shrink-0 rounded-full border border-border object-cover object-top"
                  />
                ) : (
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-border bg-secondary font-display text-sm font-extrabold text-primary">
                    {initials(f.name)}
                  </span>
                )}
                <div>
                  <p className="text-sm font-medium leading-snug text-foreground">{f.name}</p>
                  <p className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                    {f.role}
                  </p>
                  <p className="mt-1 text-[11px] font-semibold text-gold">View profile →</p>
                </div>
              </button>
            </li>
          ))}
        </ol>
      </section>

      {/* Research and consultancy */}
      <section id="research" data-chapter="02" className="cinematic-section py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4">
          <SectionLabel>Knowledge &amp; Impact</SectionLabel>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-primary sm:text-4xl">
            Research, Patent &amp; Consultancy
          </h2>
          <p className="mt-4 max-w-2xl text-foreground/75">
            Verified publications are listed once by DOI, alongside the granted design patent and completed consultancy work.
          </p>
          <div className="mt-10 divide-y divide-border border-y border-border">
            {researchItems.map((item) => (
              <article key={`${item.kind}-${item.title}`} className="grid gap-3 py-6 md:grid-cols-[9rem_1fr_auto] md:items-start md:gap-8">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-gold">{item.kind}</span>
                  <p className="mt-1 text-xs text-muted-foreground">{item.month}</p>
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-primary">{item.title}</h3>
                  <p className="mt-2 text-sm font-semibold text-foreground">{item.authors}</p>
                  <p className="mt-1 text-sm text-foreground/65">{item.venue}</p>
                </div>
                {item.doi && (
                  <a
                    href={`https://doi.org/${item.doi}`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-fit text-xs font-bold uppercase tracking-wider text-primary underline decoration-gold decoration-2 underline-offset-4"
                  >
                    View DOI ↗
                  </a>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section id="achievements" data-chapter="03" className="cinematic-section relative overflow-hidden bg-brand-deep py-20 lg:py-24">
        <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gold/40" />
        <div className="relative mx-auto max-w-7xl px-4">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-gold">
              Recognised for Quality
            </p>
            <h2 className="mt-4 max-w-3xl font-display text-3xl font-extrabold leading-tight text-primary-foreground sm:text-4xl">
              Achievements that
              <span className="text-gold"> speak for us</span>
            </h2>
            <p className="mt-5 max-w-xl text-primary-foreground/70">
              Hackathons, championships and student milestones.
            </p>
          </Reveal>
          <AchievementYears />
        </div>
      </section>

      {/* Faculty highlights */}
      <section id="faculty-highlights" data-chapter="04" className="cinematic-section bg-secondary py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4">
          <SectionLabel>Professional Growth</SectionLabel>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-primary sm:text-4xl">
            Faculty Highlights
          </h2>
          <p className="mt-4 max-w-2xl text-foreground/75">
            Certifications, grants, academic leadership and faculty development recorded in the 2026 monthly reports.
          </p>
          <div className="mt-10 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-2">
            {facultyHighlights.map((item) => (
              <article key={`${item.month}-${item.title}`} className="bg-card p-6">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">{item.month}</p>
                <h3 className="mt-2 font-display text-lg font-bold text-primary">{item.title}</h3>
                <p className="mt-2 text-sm font-semibold text-foreground">{item.people}</p>
                <p className="mt-2 text-sm leading-relaxed text-foreground/70">{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership */}
      <section id="partnerships" data-chapter="05" className="cinematic-section bg-brand-deep py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:items-center">
          <img
            src={partnership.image}
            alt="BMSIT&M and Edunet Foundation representatives at the MoU signing"
            loading="lazy"
            className="max-h-[430px] w-full object-contain"
          />
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-gold">Industry Partnership · {partnership.date}</p>
            <h2 className="mt-4 font-display text-4xl font-extrabold text-primary-foreground sm:text-5xl">{partnership.title}</h2>
            <p className="mt-5 text-base leading-relaxed text-primary-foreground/75">{partnership.detail}</p>
            <p className="mt-5 border-l-4 border-gold pl-4 text-sm font-semibold text-primary-foreground/85">{partnership.signatory}</p>
          </div>
        </div>
      </section>

      {/* Sections */}
      <section id="sections" data-chapter="07" className="cinematic-section bg-secondary py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4">
          <SectionLabel>Structure</SectionLabel>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-primary sm:text-4xl">
            Three Sections of Cluster 4
          </h2>
          <div className="mt-6 flex flex-wrap gap-2" role="tablist" aria-label="Choose year">
            {[1, 2, 3].map((y) => (
              <button
                key={y}
                type="button"
                role="tab"
                aria-selected={sectionYear === y}
                onClick={() => setSectionYear(y)}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] transition-colors ${sectionYear === y ? "bg-primary text-primary-foreground" : "bg-card text-primary hover:bg-gold hover:text-gold-foreground"}`}
              >
                {["1st", "2nd", "3rd"][y - 1]} Year
              </button>
            ))}
          </div>
          {sectionYear === 1 || sectionYear === 2 ? (
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {Object.entries(sectionYear === 1 ? firstYearRosters : secondYearRosters).map(([code, roster]) => (
              <article key={code} className="border-t-4 border-primary bg-card p-7 shadow-sm transition-shadow hover:shadow-md">
                <h3 className="font-display text-4xl font-extrabold text-gold">{code}</h3>
                <dl className="mt-5 space-y-2 text-sm text-foreground/75">
                  <div className="flex justify-between border-b border-border pb-2">
                    <dt>Strength</dt>
                    <dd className="font-medium text-foreground">{roster.length}</dd>
                  </div>
                </dl>
                <p className="mt-4 text-sm text-foreground/70">{sectionYear === 1 ? "1st" : "3rd"} Semester · 2026–27</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  <Button type="button" size="sm" variant="outline" onClick={() => setOpenSection(`Y${sectionYear}:${code}`)}>
                    <Users />
                    View students
                  </Button>
                  {(sectionYear === 1 || sectionYear === 2) && (
                    <Button
                      type="button"
                      size="sm"
                      onClick={() =>
                        setOpenTimetable((sectionYear === 1 ? firstYearTimetables[code] : secondYearTimetables[code]) ?? null)
                      }
                    >
                      <CalendarDays />
                      View timetable
                    </Button>
                  )}
                </div>
              </article>
            ))}
          </div>
          ) : sectionYear !== 3 ? (
            <p className="mt-10 border border-dashed border-border bg-card p-8 text-center text-muted-foreground">
              Section details for {["1st", "2nd", "3rd"][sectionYear - 1]} Year will be added soon.
            </p>
          ) : (
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {sections.map((s) => {
              const roster = sectionRosters[s.code] ?? null;
              return (
                <article key={s.code} className="border-t-4 border-primary bg-card p-7 shadow-sm transition-shadow hover:shadow-md">
                  <h3 className="font-display text-4xl font-extrabold text-gold">{s.code}</h3>
                  <dl className="mt-5 space-y-2 text-sm text-foreground/75">
                    <div className="flex justify-between border-b border-border pb-2">
                      <dt>Strength</dt>
                      <dd className="font-medium text-foreground">{roster ? roster.length : s.strength}</dd>
                    </div>
                  </dl>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {roster && (
                      <Button type="button" size="sm" variant="outline" onClick={() => setOpenSection(s.code)}>
                        <Users />
                        View students
                      </Button>
                    )}
                    <Button type="button" size="sm" onClick={() => setOpenTimetable(sectionTimetables[s.code] ?? null)}>
                      <CalendarDays />
                      View timetable
                    </Button>
                  </div>
                </article>
              );
            })}
          </div>
          )}
        </div>
      </section>

      {/* Events */}
      <section id="events" data-chapter="08" className="cinematic-section bg-primary py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-gold">On Campus</p>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-primary-foreground sm:text-4xl">
            Recent Events
          </h2>
          <p className="mt-4 max-w-2xl text-primary-foreground/70">
            The latest four campus events.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {eventsByDate.slice(0, 4).map((e) => (
              <article
                key={e.title}
                className="flex flex-col overflow-hidden bg-primary-foreground/5 ring-1 ring-primary-foreground/15 transition-colors hover:bg-primary-foreground/10 sm:flex-row"
              >
                {e.poster ? (
                  <img
                    src={e.poster}
                    alt={e.alt}
                    loading="lazy"
                    className="h-52 w-full shrink-0 bg-primary-foreground/10 object-contain sm:h-auto sm:w-44 sm:self-stretch"
                  />
                ) : (
                  <div
                    aria-hidden="true"
                    className="flex w-24 shrink-0 flex-col items-center justify-center gap-2 bg-gold/15 text-gold sm:w-32"
                  >
                    <span className="text-4xl">{"\u2665"}</span>
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em]">
                      Donate Life
                    </span>
                  </div>
                )}
                <div className="flex flex-1 flex-col p-5">
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-gold">
                    {e.tag}
                  </span>
                  <h3 className="mt-2 font-display text-xl font-bold text-primary-foreground">
                    {e.title}
                  </h3>
                  <dl className="mt-4 space-y-1.5 text-sm text-primary-foreground/85">
                    <div className="flex gap-3">
                      <dt className="w-14 shrink-0 text-primary-foreground/45">When</dt>
                      <dd>{e.date}</dd>
                    </div>
                    <div className="flex gap-3">
                      <dt className="w-14 shrink-0 text-primary-foreground/45">Where</dt>
                      <dd>{e.place}</dd>
                    </div>
                    <div className="flex gap-3">
                      <dt className="w-14 shrink-0 text-primary-foreground/45">By</dt>
                      <dd>{e.host}</dd>
                    </div>
                  </dl>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming hackathons */}
      <section id="hackathons" data-chapter="09" className="cinematic-section bg-secondary py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4">
          <SectionLabel>Build &amp; Compete</SectionLabel>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-primary sm:text-4xl">
            Upcoming Hackathons
          </h2>
          <p className="mt-4 max-w-2xl text-foreground/75">
            Online opportunities · Checked 18 Nov 2026
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {upcomingHackathons.map((h) => (
              <article
                key={h.name}
                className="flex flex-col border-t-4 border-gold bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="flex items-center gap-3">
                  <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                    {h.organiser}
                  </p>
                </div>
                <h3 className="mt-2 font-display text-lg font-bold leading-snug text-primary">
                  {h.name}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground">{h.theme}</p>
                <dl className="mt-4 space-y-2 text-sm">
                  <div className="flex justify-between gap-3">
                    <dt className="text-foreground/60">Dates</dt>
                    <dd className="text-right font-semibold text-primary">{h.deadline}</dd>
                  </div>
                </dl>
                <Button asChild className="mt-5">
                  <a href={h.url} target="_blank" rel="noreferrer">View hackathon <span aria-hidden="true">↗</span></a>
                </Button>
              </article>
            ))}
          </div>
          {upcomingHackathons.length === 0 && <p className="mt-6 text-muted-foreground">No verified upcoming hackathons at the moment.</p>}
          <p className="mt-6 text-xs text-muted-foreground">
            Deadlines are as published by the organisers — check the official page before signing up.
          </p>
        </div>
      </section>

      <footer className="bg-brand-deep py-10 text-center text-sm text-primary-foreground/60">
        <p className="font-display text-base font-bold text-primary-foreground">Cluster 4 — CSE, BMSIT&amp;M</p>
        <p className="mt-2">
          Maintained by the students of Cluster 4 · © {new Date().getFullYear()}
        </p>
      </footer>

      {openFaculty && <FacultyModal f={openFaculty} onClose={() => setOpenFaculty(null)} />}
      {openSection && (() => {
        const yr = openSection.startsWith("Y1:") ? 1 : openSection.startsWith("Y2:") ? 2 : 3;
        const isY1 = yr !== 3;
        const code = isY1 ? openSection.slice(3) : openSection;
        const roster = (yr === 1 ? firstYearRosters[code] : yr === 2 ? secondYearRosters[code] : sectionRosters[code]) ?? [];
        if (!roster.length) return null;
        return (
          <div
            className="fixed inset-0 z-[80] flex items-center justify-center bg-brand-deep/70 p-4"
            onClick={() => setOpenSection(null)}
            role="dialog"
            aria-modal="true"
            aria-label={`${code} students`}
          >
            <div
              className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto overscroll-contain bg-card p-6 shadow-2xl sm:p-8"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setOpenSection(null)}
                aria-label="Close"
                className="absolute right-4 top-3 text-2xl font-bold text-muted-foreground hover:text-primary"
              >
                ×
              </button>
              <h3 className="font-display text-3xl font-extrabold text-gold">{code}{isY1 ? ` · ${yr === 1 ? "1st" : "2nd"} Year` : ""}</h3>
              <p className="mt-1 text-sm text-foreground/70">{roster.length} students</p>
              <div className="mt-6 overflow-x-auto">
              <table className="w-full min-w-[36rem] text-sm">
                <thead>
                  <tr className="border-b border-border text-left text-[11px] uppercase tracking-wider text-muted-foreground">
                    <th className="py-2 pr-3">#</th>
                    <th className="py-2 pr-3">Name</th>
                    <th className="py-2 pr-3">USN</th>
                    <th className="py-2">Proctor</th>
                  </tr>
                </thead>
                <tbody>
                  {roster.map((st, i) => {
                    const proctor = st.proctor ? { name: st.proctor } : isY1 ? null : getProctor(code, st.usn);
                    return (
                      <tr key={`${st.usn}-${i}`} className="border-b border-border/60">
                        <td className="py-2 pr-3 font-display font-bold text-gold">{i + 1}</td>
                        <td className="py-2 pr-3 text-foreground">
                          <span className="inline-flex items-center gap-2">
                            {st.name}
                            {st.linkedin && (
                              <a
                                href={st.linkedin}
                                target="_blank"
                                rel="noreferrer"
                                aria-label={`Open ${st.name}'s LinkedIn profile`}
                                title="Open LinkedIn profile"
                                className="inline-flex size-7 shrink-0 items-center justify-center text-primary transition-colors hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                              >
                                <Linkedin className="size-4" aria-hidden="true" />
                              </a>
                            )}
                          </span>
                        </td>
                        <td className="py-2 pr-3 font-mono text-xs text-foreground/70">{st.usn}</td>
                        <td className="py-2 text-foreground/80">{proctor ? proctor.name : "—"}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              </div>
            </div>
          </div>
        );
      })()}
      {openTimetable && <TimetableModal timetable={openTimetable} onClose={() => setOpenTimetable(null)} />}
    </div>
  );
}

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string | undefined;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          el.classList.add("is-visible");
          io.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      style={{ "--reveal-delay": `${delay}ms` } as React.CSSProperties}
    >
      {children}
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-bold uppercase tracking-[0.25em] text-gold">{children}</p>
  );
}
