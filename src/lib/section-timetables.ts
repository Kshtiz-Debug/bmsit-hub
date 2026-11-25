export type TimetableDay = {
  day: string;
  periods: [string, string, string, string, string, string, string];
};

export type SectionTimetable = {
  section: string;
  semester?: string;
  subjectKey?: readonly (readonly [string, string])[];
  periodTimes?: readonly string[];
  breakNote?: string;
  sourceSection: string;
  classTeacher?: string;
  classroom: string;
  effectiveFrom: string;
  days: TimetableDay[];
};

export const periodTimes = [
  "8:30–9:25",
  "9:25–10:20",
  "10:40–11:35",
  "11:35–12:30",
  "1:25–2:20",
  "2:20–3:15",
  "3:15–4:10",
] as const;

export const sectionTimetables: Record<string, SectionTimetable> = {
  "CSE-10": {
    section: "CSE-10",
    sourceSection: "J",
    classTeacher: "Dr. Savitha S",
    classroom: "EAB-206",
    effectiveFrom: "28 Aug 2026",
    days: [
      { day: "Monday", periods: ["SEPM", "TOC", "CN", "Library", "Mini Project", "Mini Project", "Mini Project"] },
      { day: "Tuesday", periods: ["CN", "PE", "TOC", "Placement", "WEB LAB J1 / CN LAB J2", "WEB LAB J1 / CN LAB J2", "Sports"] },
      { day: "Wednesday", periods: ["PE", "CN", "WEB LAB J2 / CN LAB J1", "WEB LAB J2 / CN LAB J1", "Library", "Cultural", "Cultural"] },
      { day: "Thursday", periods: ["RMIPR", "SEPM", "TOC", "PE", "Environmental Studies Project", "Environmental Studies Project", "Library"] },
      { day: "Friday", periods: ["TOC", "RMIPR", "SEPM", "Placement", "Proctoring", "Proctoring", "Sports"] },
      { day: "Saturday", periods: ["IIC Activity", "IIC Activity", "Department Activity", "Department Activity", "IIC Activity", "IIC Activity", "IIC Activity"] },
    ],
  },
  "CSE-11": {
    section: "CSE-11",
    sourceSection: "K",
    classTeacher: "Prof. Malini M",
    classroom: "EAB-207",
    effectiveFrom: "28 Aug 2026",
    days: [
      { day: "Monday", periods: ["WEB LAB K1 / CN LAB K2", "WEB LAB K1 / CN LAB K2", "SEPM", "TOC", "Mini Project", "Mini Project", "Library"] },
      { day: "Tuesday", periods: ["SEPM", "PE", "WEB LAB K2 / CN LAB K1", "WEB LAB K2 / CN LAB K1", "Environmental Studies Project", "Environmental Studies Project", "Sports"] },
      { day: "Wednesday", periods: ["PE", "TOC", "CN", "Placement", "Placement", "Cultural", "Cultural"] },
      { day: "Thursday", periods: ["RMIPR", "CN", "TOC", "PE", "Library", "Department Activity", "Department Activity"] },
      { day: "Friday", periods: ["TOC", "RMIPR", "CN", "SEPM", "Proctoring", "Proctoring", "Department Activity"] },
      { day: "Saturday", periods: ["IIC Activity", "IIC Activity", "Department Activity", "Department Activity", "IIC Activity", "IIC Activity", "IIC Activity"] },
    ],
  },
  "CSE-12": {
    section: "CSE-12",
    sourceSection: "L",
    classTeacher: "Dr. Savitha S",
    classroom: "EAB-209",
    effectiveFrom: "28 Aug 2026",
    days: [
      { day: "Monday", periods: ["CN", "SEPM", "TOC", "Placement", "WEB LAB L1 / CN LAB L2", "WEB LAB L1 / CN LAB L2", "Sports"] },
      { day: "Tuesday", periods: ["TOC", "PE", "WEB LAB L2 / CN LAB L1", "WEB LAB L2 / CN LAB L1", "Environmental Studies Project", "Environmental Studies Project", "Department Activity"] },
      { day: "Wednesday", periods: ["PE", "SEPM", "TOC", "Placement", "Library", "Cultural", "Cultural"] },
      { day: "Thursday", periods: ["RMIPR", "TOC", "CN", "PE", "Mini Project", "Mini Project", "Sports"] },
      { day: "Friday", periods: ["CN", "SEPM", "RMIPR", "Library", "Proctoring", "Proctoring", "Department Activity"] },
      { day: "Saturday", periods: ["IIC Activity", "IIC Activity", "Department Activity", "Department Activity", "IIC Activity", "IIC Activity", "IIC Activity"] },
    ],
  },
};

export const subjectKey = [
  ["SEPM", "Software Engineering and Project Management"],
  ["CN", "Computer Networks"],
  ["TOC", "Theory of Computation"],
  ["PE", "Professional Elective Course I"],
  ["RMIPR", "Research Methodology and IPR"],
] as const;

const secondYearSubjectKey = [
  ["MATH", "Program Specific Mathematics"],
  ["OOP", "Object Oriented Programming"],
  ["DBMS", "Database Management Systems"],
  ["OS", "Operating Systems"],
  ["DSA", "Data Structures and Applications"],
  ["PS1", "Problem Solving-1"],
  ["CRC", "Career Readiness Classes"],
  ["NCMC", "NCMC (1BNSS309 / 1BPED309)"],
  ["DIP-MATHS", "Additional Mathematics-I"],
  ["T", "Tutorial"],
] as const;

export const secondYearTimetables: Record<string, SectionTimetable> = {
  "CSE-10": {
    section: "CSE-10",
    sourceSection: "J",
    semester: "III",
    subjectKey: secondYearSubjectKey,
    classTeacher: "Prof. Shabeena Lylath",
    classroom: "CV-501",
    effectiveFrom: "9 Sep 2026",
    days: [
      { day: "Monday", periods: ["OS", "DSA", "DBMS Lab-3J1 · BSN307 · SAB/RSK / C++ Lab-3J2 · AT lab · MBA/DGY", "DBMS Lab-3J1 · BSN307 · SAB/RSK / C++ Lab-3J2 · AT lab · MBA/DGY", "MATH", "CRC", "CRC"] },
      { day: "Tuesday", periods: ["PS1 Lab-J · CV511C · RSK/CKN/CC", "PS1 Lab-J · CV511C · RSK/CKN/CC", "MATH", "DBMS", "OOP", "NCMC", "NCMC"] },
      { day: "Wednesday", periods: ["DSA", "MATH", "OOP", "OS", "DSA Lab-3J1 · BSN307 · SDL/HKN / DBMS Lab-3J2 · AT lab · SAB/AA", "DSA Lab-3J1 · BSN307 · SDL/HKN / DBMS Lab-3J2 · AT lab · SAB/AA", "Proctoring"] },
      { day: "Thursday", periods: ["DBMS", "OS", "DSA Lab-3J2 · BSN602 · SDL/SDB / C++ Lab-3J1 · BSN612 · MBA/SKA", "DSA Lab-3J2 · BSN602 · SDL/SDB / C++ Lab-3J1 · BSN612 · MBA/SKA", "MATH", "Societal Project", "Societal Project"] },
      { day: "Friday", periods: ["OOP", "DBMS", "DSA", "MATH-T", "DIP-MATHS", "DIP-MATHS", "DSA(T)"] },
      { day: "Saturday", periods: ["IIC Activity", "IIC Activity", "Department Activity", "Department Activity", "IIC Activity", "IIC Activity", "IIC Activity"] },
    ],
  },
  "CSE-11": {
    section: "CSE-11",
    sourceSection: "K",
    semester: "III",
    subjectKey: secondYearSubjectKey,
    classTeacher: "Prof. Chaitra DB",
    classroom: "CV-502",
    effectiveFrom: "9 Sep 2026",
    days: [
      { day: "Monday", periods: ["OOP", "MATH", "DBMS", "OS", "PS1 Lab-K · CV511C · SDB/CKN/MA", "PS1 Lab-K · CV511C · SDB/CKN/MA", "Proctoring"] },
      { day: "Tuesday", periods: ["DSA Lab-3K1 · BSN307 · HKN/SDL / DBMS Lab-3K2 · AT lab · MM/AA", "DSA Lab-3K1 · BSN307 · HKN/SDL / DBMS Lab-3K2 · AT lab · MM/AA", "DSA", "OOP", "MATH", "NCMC", "NCMC"] },
      { day: "Wednesday", periods: ["DBMS", "OS", "MATH", "OOP", "C++ Lab-3K2 · BSN306 · VY/MBA / DBMS Lab-3K1 · BSN308 · MM/BG", "C++ Lab-3K2 · BSN306 · VY/MBA / DBMS Lab-3K1 · BSN308 · MM/BG", "CRC"] },
      { day: "Thursday", periods: ["DSA", "MATH", "DSA Lab-3K2 · BSN308 · HKN/MS / C++ Lab-3K1 · BSN306 · VY/CC", "DSA Lab-3K2 · BSN308 · HKN/MS / C++ Lab-3K1 · BSN306 · VY/CC", "CRC", "Societal Project", "Societal Project"] },
      { day: "Friday", periods: ["OS", "DSA", "MATH-T", "DBMS", "DIP-MATHS", "DIP-MATHS", "DSA(T)"] },
      { day: "Saturday", periods: ["IIC Activity", "IIC Activity", "Department Activity", "Department Activity", "IIC Activity", "IIC Activity", "IIC Activity"] },
    ],
  },
  "CSE-12": {
    section: "CSE-12",
    sourceSection: "L",
    semester: "III",
    subjectKey: secondYearSubjectKey,
    classTeacher: "Prof. Syed Matheen Pasha",
    classroom: "CV-503",
    effectiveFrom: "9 Sep 2026",
    days: [
      { day: "Monday", periods: ["OS", "DBMS", "DSA Lab-3L1 · BSN602 · SMP/MA / DBMS Lab-3L2 · BSN612 · KHP/SL", "DSA Lab-3L1 · BSN602 · SMP/MA / DBMS Lab-3L2 · BSN612 · KHP/SL", "MATH", "DSA", "CRC"] },
      { day: "Tuesday", periods: ["DSA", "OS", "MATH", "OOP", "CRC", "NCMC", "NCMC"] },
      { day: "Wednesday", periods: ["MATH", "DSA", "OOP", "OS", "DSA Lab-3L2 · BSN308 · SMP/SDB / C++ Lab-3L1 · BSN306 · SL/CDB", "DSA Lab-3L2 · BSN308 · SMP/SDB / C++ Lab-3L1 · BSN306 · SL/CDB", "Proctoring"] },
      { day: "Thursday", periods: ["DBMS Lab-3L1 · BSN602 · KHP/CKN / C++ Lab-3L2 · BSN612 · SL/DGY", "DBMS Lab-3L1 · BSN602 · KHP/CKN / C++ Lab-3L2 · BSN612 · SL/DGY", "DBMS", "MATH", "DBMS", "Societal Project", "Societal Project"] },
      { day: "Friday", periods: ["OOP", "MATH-T", "PS1 Lab-L · CV511C · CKN/SDB/HKN", "PS1 Lab-L · CV511C · CKN/SDB/HKN", "DIP-MATHS", "DIP-MATHS", "DSA(T)"] },
      { day: "Saturday", periods: ["IIC Activity", "IIC Activity", "Department Activity", "Department Activity", "IIC Activity", "IIC Activity", "IIC Activity"] },
    ],
  },
};

export const firstYearPeriodTimes = [
  "8:30–9:25",
  "9:25–10:20",
  "10:40–11:35",
  "11:35–12:30",
  "12:30–1:25",
  "2:20–3:15",
  "3:15–4:10",
] as const;

const firstYearBreakNote = "Tea break: 10:20–10:40 · Lunch break: 1:25–2:20 · 1st and 3rd Saturdays are holiday";

const firstYearSubjectKey = [
  ["MAT", "Calculus and Linear Algebra (1BMATCS101)"],
  ["CHE", "Chemistry of Smart Materials and Devices (1BCHECS102)"],
  ["CHEL", "Chemistry Lab (1BCHECS102)"],
  ["ETC-I", "Introduction to AI and Applications (1BAI103)"],
  ["ESC-I", "Engineering Science Course I (1BESC104X)"],
  ["PLC", "Python Programming (1BPLC105B)"],
  ["ENGL", "Professional English Communication (1BPECL106 · LB 511B, 5th floor, Sir C.V. Raman Block)"],
  ["ICO", "Indian Constitution and Engineering Ethics (1BIC107)"],
  ["IDT", "Innovation and Design Thinking (1BIDTL108)"],
  ["SKILL LAB (EFPE)", "Engineering Foundations using ProtoEdge Development Board (LB 411B, 4th floor, Sir C.V. Raman Block)"],
  ["MAT (T/P)", "MATLAB (Shankunthala Devi Lab, 4th floor, Sir M.V. Block)"],
] as const;

export const firstYearTimetables: Record<string, SectionTimetable> = {
  "CSE-10": {
    section: "CSE-10",
    sourceSection: "CSE-10 (Chemistry group)",
    semester: "I",
    subjectKey: firstYearSubjectKey,
    periodTimes: firstYearPeriodTimes,
    breakNote: firstYearBreakNote,
    classroom: "SJB-104",
    effectiveFrom: "14 Oct 2026",
    days: [
      { day: "Monday", periods: ["CHEL", "CHEL", "ESC-I", "MAT", "ETC-I", "PLC", "REMEDIAL PLC"] },
      { day: "Tuesday", periods: ["PLC", "ETC-I", "CHE", "ENGL", "ENGL", "MAT", "REMEDIAL MAT"] },
      { day: "Wednesday", periods: ["MAT", "PLC", "ESC-I", "CHE", "—", "SKILL LAB (EFPE)", "SKILL LAB (EFPE)"] },
      { day: "Thursday", periods: ["CHE", "ICO", "MAT (T/P)", "ETC-I", "REMEDIAL ETC-I", "PLC LAB", "PLC LAB"] },
      { day: "Friday", periods: ["IDT", "IDT", "ESC-I", "MAT (T)", "—", "PROCTORING", "REMEDIAL CHE"] },
      { day: "Saturday", periods: ["IIC ACTIVITIES", "IIC ACTIVITIES", "DEPARTMENT ACTIVITIES", "DEPARTMENT ACTIVITIES", "—", "—", "—"] },
    ],
  },
  "CSE-11": {
    section: "CSE-11",
    sourceSection: "CSE-11 (Chemistry group)",
    semester: "I",
    subjectKey: firstYearSubjectKey,
    periodTimes: firstYearPeriodTimes,
    breakNote: firstYearBreakNote,
    classroom: "SJB-105",
    effectiveFrom: "14 Oct 2026",
    days: [
      { day: "Monday", periods: ["PLC", "MAT", "ESC-I", "CHEL", "CHEL", "REMEDIAL ETC-I", "REMEDIAL MAT"] },
      { day: "Tuesday", periods: ["CHE", "ETC-I", "MAT", "PLC", "—", "ENGL", "ENGL"] },
      { day: "Wednesday", periods: ["SKILL LAB (EFPE)", "SKILL LAB (EFPE)", "ESC-I", "CHE", "PLC", "MAT", "REMEDIAL PLC"] },
      { day: "Thursday", periods: ["IDT", "IDT", "ICO", "MAT (T)", "ETC-I", "CHE", "REMEDIAL CHE"] },
      { day: "Friday", periods: ["PLC LAB", "PLC LAB", "ESC-I", "ETC-I", "MAT (T/P)", "PROCTORING", "—"] },
      { day: "Saturday", periods: ["IIC ACTIVITIES", "IIC ACTIVITIES", "DEPARTMENT ACTIVITIES", "DEPARTMENT ACTIVITIES", "—", "—", "—"] },
    ],
  },
  "CSE-12": {
    section: "CSE-12",
    sourceSection: "CSE-12 (Chemistry group)",
    semester: "I",
    subjectKey: firstYearSubjectKey,
    periodTimes: firstYearPeriodTimes,
    breakNote: firstYearBreakNote,
    classroom: "SJB-106",
    effectiveFrom: "14 Oct 2026",
    days: [
      { day: "Monday", periods: ["PLC", "MAT", "ESC-I", "IDT", "IDT", "CHEL", "CHEL"] },
      { day: "Tuesday", periods: ["SKILL LAB (EFPE)", "SKILL LAB (EFPE)", "CHE", "ETC-I", "MAT", "REMEDIAL PLC", "REMEDIAL CHE"] },
      { day: "Wednesday", periods: ["MAT (T/P)", "CHE", "ESC-I", "PLC LAB", "PLC LAB", "—", "—"] },
      { day: "Thursday", periods: ["ENGL", "ENGL", "ETC-I", "PLC", "CHE", "MAT", "ICO"] },
      { day: "Friday", periods: ["ETC-I", "PLC", "ESC-I", "MAT (T)", "REMEDIAL ETC-I", "PROCTORING", "REMEDIAL MAT"] },
      { day: "Saturday", periods: ["IIC ACTIVITIES", "IIC ACTIVITIES", "DEPARTMENT ACTIVITIES", "DEPARTMENT ACTIVITIES", "—", "—", "—"] },
    ],
  },
};