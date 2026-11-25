// 5th semester proctor allotment (ODD SEM 2026-27), from the Cluster-4 proctor PDF.
export type Proctor = { name: string; email: string };

const P = {
  malini: { name: "Prof. Malini M", email: "malinim@bmsit.in" },
  shilpa: { name: "Prof. Shilpa K A", email: "shilpaka@bmsit.in" },
  sanjana: { name: "Prof. Sanjana V Hunashikatti", email: "sanjanavh@bmsit.in" },
  harish: { name: "Dr. Harish Kumar N", email: "harishkumar@bmsit.in" },
  kusuma: { name: "Prof. Kusuma H P", email: "kusumahp@bmsit.in" },
  radhika: { name: "Prof. Radhika S K", email: "radhika.sk@bmsit.in" },
} satisfies Record<string, Proctor>;

const num = (usn: string) => Number(usn.slice(-3));

/** Returns the proctor for a USN in the given section, following the official allotment lists. */
export function getProctor(section: string, usn: string): Proctor | null {
  const u = usn.toUpperCase();
  if (section === "CSE-11") {
    if (u.startsWith("1BY24CS")) return num(u) <= 245 ? P.malini : P.shilpa;
    if (u.startsWith("1TD24CS")) return P.shilpa;
    if (u.startsWith("1TE24CS")) return num(u) <= 47 ? P.shilpa : P.sanjana;
    if (u.startsWith("1BY25CS")) return P.sanjana;
  }
  if (section === "CSE-12") {
    if (u.startsWith("1BY24CS") || u === "1TE24CS077") return P.harish;
    if (u.startsWith("1TD24CS")) return P.kusuma;
    if (u.startsWith("1TE24CS")) return num(u) <= 44 ? P.kusuma : P.radhika;
    if (u.startsWith("1BY25CS")) return P.radhika;
  }
  return null;
}
