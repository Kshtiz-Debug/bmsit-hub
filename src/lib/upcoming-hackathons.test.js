import { describe, expect, it } from "bun:test";
import { getUpcomingHackathons } from "./upcoming-hackathons";

describe("upcoming opportunities", () => {
  it("keeps only future opportunities, nearest closing first", () => {
    expect(getUpcomingHackathons(new Date("2026-11-18T08:51:00Z")).map((h) => h.name)).toEqual([
      "SourceHacks V1", "InnovateHER Hackathon", "Arbiter Hacks V1",
    ]);
  });
  it("removes a hackathon when its closing time has passed", () => {
    expect(getUpcomingHackathons(new Date("2026-12-14T08:00:00Z")).map((h) => h.name)).toEqual(["Arbiter Hacks V1"]);
    expect(getUpcomingHackathons(new Date("2026-12-21T05:00:00Z"))).toEqual([]);
  });
});
