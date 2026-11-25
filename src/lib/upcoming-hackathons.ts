export type Hackathon = {
  name: string;
  organiser: string;
  theme: string;
  deadline: string;
  closesAt: string;
  url: string;
};

// Official organiser pages checked on 18 November 2026.
export const hackathons: Hackathon[] = [
  {
    name: "InnovateHER Hackathon",
    organiser: "Girls Who Code",
    theme: "Technology for women & girls · Online · Teams of up to 4",
    deadline: "13 Dec 2026 · 11:59 PM PST",
    closesAt: "2026-12-14T07:59:00Z",
    url: "https://hackathon-girls-who-code.devpost.com/",
  },
  {
    name: "SourceHacks V1",
    organiser: "SourceHacks",
    theme: "Open theme · Online · Students · Teams of up to 4",
    deadline: "11–12 Dec 2026",
    closesAt: "2026-12-12T00:00:00Z",
    url: "https://sourcehacksv1.devpost.com/",
  },
  {
    name: "Arbiter Hacks V1",
    organiser: "Arbiter",
    theme: "Open innovation & waste reduction · Online · Students",
    deadline: "20 Dec 2026 · 9:00 PM PST",
    closesAt: "2026-12-21T05:00:00Z",
    url: "https://arbiter-hacks-v1.devpost.com/",
  },
];

export function getUpcomingHackathons(now: Date) {
  return hackathons
    .filter((item) => Date.parse(item.closesAt) > now.getTime())
    .sort((a, b) => Date.parse(a.closesAt) - Date.parse(b.closesAt));
}
