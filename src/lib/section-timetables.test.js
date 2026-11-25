import { describe, expect, it } from "bun:test";
import { secondYearTimetables, sectionTimetables, periodTimes } from "./section-timetables";

describe("second-year uploaded timetables", () => {
  it("maps J to CSE-10 with its classroom and Monday schedule", () => {
    expect(secondYearTimetables["CSE-10"].sourceSection).toBe("J");
    expect(secondYearTimetables["CSE-10"].classroom).toBe("CV-501");
    expect(secondYearTimetables["CSE-10"].days[0].periods).toEqual([
      "OS", "DSA", "DBMS Lab-3J1 · BSN307 · SAB/RSK / C++ Lab-3J2 · AT lab · MBA/DGY",
      "DBMS Lab-3J1 · BSN307 · SAB/RSK / C++ Lab-3J2 · AT lab · MBA/DGY", "MATH", "CRC", "CRC",
    ]);
  });
  it("maps K to CSE-11 with its class teacher and Monday schedule", () => {
    expect(secondYearTimetables["CSE-11"].sourceSection).toBe("K");
    expect(secondYearTimetables["CSE-11"].classTeacher).toBe("Prof. Chaitra DB");
    expect(secondYearTimetables["CSE-11"].days[0].periods).toEqual([
      "OOP", "MATH", "DBMS", "OS", "PS1 Lab-K · CV511C · SDB/CKN/MA", "PS1 Lab-K · CV511C · SDB/CKN/MA", "Proctoring",
    ]);
  });
  it("maps L to CSE-12 with its classroom and Friday schedule", () => {
    expect(secondYearTimetables["CSE-12"].sourceSection).toBe("L");
    expect(secondYearTimetables["CSE-12"].classroom).toBe("CV-503");
    expect(secondYearTimetables["CSE-12"].days[4].periods).toEqual([
      "OOP", "MATH-T", "PS1 Lab-L · CV511C · CKN/SDB/HKN", "PS1 Lab-L · CV511C · CKN/SDB/HKN", "DIP-MATHS", "DIP-MATHS", "DSA(T)",
    ]);
  });
  it("keeps six days and seven periods without changing third-year schedules", () => {
    for (const timetable of Object.values(secondYearTimetables)) {
      expect(timetable.semester).toBe("III");
      expect(timetable.effectiveFrom).toBe("9 Sep 2026");
      expect(timetable.days).toHaveLength(6);
      for (const day of timetable.days) expect(day.periods).toHaveLength(periodTimes.length);
    }
    expect(sectionTimetables["CSE-10"].classroom).toBe("EAB-206");
    expect(sectionTimetables["CSE-10"].days[0].periods[0]).toBe("SEPM");
  });
});