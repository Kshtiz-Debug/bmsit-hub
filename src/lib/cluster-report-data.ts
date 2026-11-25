import nidarTeam from "@/assets/report-2026/nidar-team.png.asset.json";
import karateJanuary from "@/assets/report-2026/karate-january.png.asset.json";
import outreachSoluru from "@/assets/report-2026/outreach-soluru.png.asset.json";
import outreachYelahanka from "@/assets/report-2026/outreach-yelahanka.png.asset.json";
import eclipseWinners from "@/assets/report-2026/eclipse-winners.png.asset.json";
import campusToCosmos from "@/assets/report-2026/campus-to-cosmos.png.asset.json";
import krishimanthanTeam from "@/assets/report-2026/krishimanthan-team-ace.png.asset.json";
import anantapurHackathon from "@/assets/report-2026/anantapur-hackathon.png.asset.json";
import inceptionFirst from "@/assets/report-2026/inception-first.png.asset.json";
import inceptionSecond from "@/assets/report-2026/inception-second.png.asset.json";
import inceptionThird from "@/assets/report-2026/inception-third.jpg.asset.json";
import hackzionWinners from "@/assets/report-2026/hackzion-winners.jpg.asset.json";
import browserBattle from "@/assets/report-2026/browser-battle.png.asset.json";
import fintechWorkshop from "@/assets/report-2026/fintech-workshop.jpg.asset.json";
import alumniTalkAdithya from "@/assets/report-2026/alumni-talk-adithya.png.asset.json";
import syntaxAndStakes from "@/assets/report-2026/syntax-and-stakes.png.asset.json";
import devopsSession from "@/assets/report-2026/devops-session.png.asset.json";
import blockchainSession from "@/assets/report-2026/blockchain-session.png.asset.json";
import generativeAiSession from "@/assets/report-2026/generative-ai-session.jpg.asset.json";
import alumniTalkAshish from "@/assets/report-2026/alumni-talk-ashish.png.asset.json";
import cyberWarfare from "@/assets/report-2026/cyber-warfare.jpg.asset.json";
import microcontrollersL from "@/assets/report-2026/microcontrollers-l-section.jpg.asset.json";
import algorithmsCse12 from "@/assets/report-2026/algorithms-cse12.png.asset.json";
import latexCse10 from "@/assets/report-2026/latex-cse10.png.asset.json";
import latexCse12 from "@/assets/report-2026/latex-cse12.png.asset.json";
import latexCse11 from "@/assets/report-2026/latex-cse11.png.asset.json";
import algorithmsCse10 from "@/assets/report-2026/algorithms-cse10.png.asset.json";
import dbmsCse11 from "@/assets/report-2026/dbms-cse11.jpg.asset.json";
import dbmsCse10 from "@/assets/report-2026/dbms-cse10.jpg.asset.json";
import decode2Deploy from "@/assets/report-2026/decode2deploy.jpg.asset.json";
import agentathon from "@/assets/report-2026/agentathon.jpg.asset.json";
import aiCybersecurity from "@/assets/report-2026/ai-cybersecurity-poster.png.asset.json";
import mathFoundations from "@/assets/report-2026/math-foundations-poster.png.asset.json";
import aiSoftwareFdp from "@/assets/report-2026/ai-software-fdp-poster.png.asset.json";
import innovationOutreach from "@/assets/report-2026/innovation-outreach.png.asset.json";
import agenticAiWorkshop from "@/assets/report-2026/agentic-ai-workshop.png.asset.json";
import mockInterviews from "@/assets/report-2026/mock-interviews.png.asset.json";
import orientation from "@/assets/report-2026/orientation.png.asset.json";
import criticalThinkingAi from "@/assets/report-2026/critical-thinking-ai.png.asset.json";
import edunetMou from "@/assets/report-2026/edunet-mou.png.asset.json";

export type ReportAchievement = {
  year: string;
  month: number;
  title: string;
  detail: string;
  winners?: string[];
  mentor?: string;
  images?: string[];
  imageCaption?: string;
  featured?: boolean;
};

export const reportAchievements: ReportAchievement[] = [
  { year: "2026", month: 7, title: "SISA Internship Opportunities", detail: "Five CSE/ISE students secured SRP Intern (Compliance) and VAPT Intern opportunities at SISA with a stipend of ₹15,000 per month.", winners: ["Supriya Gouda (1BY23IS227)", "Tejashwini S Uranakar (1BY23IS234)", "Meghana Kasa (1BY23CS123)", "Nitesh K Doddamani (1BY24IS410)", "Firdous Umme Hani (1BY23CS063)"] },
  { year: "2026", month: 6, title: "Runner-Up — Agentathon 2026", detail: "Team Aura 999+ of first-year CSE-10 finished runner-up in the Agentathon workshop and hackathon on Agentic AI at BMSIT&M, earning ₹3,000.", featured: true },
  { year: "2026", month: 6, title: "5th Place — Browser Battle Codeathon", detail: "Team RUN TIME TERROZ secured fifth place at the Browser Battle Codeathon organised by BMS College of Engineering.", winners: ["Mr. Mayank Raj (1BY25CS177)", "Mr. Thushar K. S. (1TE25CS315)", "G. Likith Reddy"], images: [browserBattle.url], imageCaption: "Team RUN TIME TERROZ with their award" },
  { year: "2026", month: 5, title: "IoT Track Winners — NMIT Hacks 2026", detail: "The CSE-11 team won the IoT track and placed in the Top 10 from more than 4,400 submissions at the 48-hour NMIT Hacks, held 8–10 May. Their Smart QoS layer for Industry 5.0 earned ₹10,000.", winners: ["Harsh Kumar (1TE24CS120)", "Tushar Gururaj (1TD24CS321)", "Debayan Ghosh (1TE24CS097)", "Atulya Kulshrestha (1TE24CS076)"], featured: true },
  { year: "2026", month: 4, title: "1st Place — INCSEPTION", detail: "The CSE-10 team won the 8-hour INCSEPTION hackathon at BMSIT&M on 6 April with Meditwin, an AI in Healthcare project, and received ₹10,000.", winners: ["Anirudh B Shashikumar (1BY25CS042)", "Allen Akash (1TD25CS029)", "Amogh R. B. (1BY25CS039)", "Anish Reddy (1BY25CS259)"], images: [inceptionFirst.url], imageCaption: "INCSEPTION first-place team", featured: true },
  { year: "2026", month: 4, title: "2nd Place — INCSEPTION", detail: "The team earned second place and ₹7,500 for Threat-Sim, created under the AI in Cybersecurity theme at INCSEPTION on 6 April.", winners: ["Arijit Chakraborty (1BY24CS025)", "Sumit Kumar Singh (1TE24CS286)", "Asmit Pandey (1TE24CS075)", "Priyanshu Kumar Singh (1TE24CS227)"], images: [inceptionSecond.url], imageCaption: "INCSEPTION second-place team" },
  { year: "2026", month: 4, title: "3rd Place — INCSEPTION", detail: "Team Low Cortisol placed third and received ₹5,000 for Sugarfree, an AI in Healthcare project at the 8-hour INCSEPTION hackathon.", winners: ["Gagan H S (1TD24CS075)", "Manal Gupta (1TE24CS160)", "Mohammad Talha (1BY24CS180)", "Vignesh Vellore (1BY24CS334)"], images: [inceptionThird.url], imageCaption: "INCSEPTION third-place team" },
  { year: "2026", month: 4, title: "1st Place — Hackzion V3", detail: "Team SPIDDY won the 24-hour national-level Hackzion V3 at AMC Engineering College on 9–10 April. TokenScope, their AI and Machine Learning project, earned ₹15,000.", winners: ["Sarthak Fulzele (1BY24CS358)", "Nikhil Sharma (1TD24AI118)"], images: [hackzionWinners.url], imageCaption: "Team SPIDDY at the Hackzion V3 prize ceremony", featured: true },
  { year: "2026", month: 3, title: "PRAJNOTSAVA 2026 — National Technical Symposium", detail: "Deepak Kumar S (1BY24CS071), 4th-semester CSE, participated in the two-day national-level technical symposium at CMR University on 25–26 March." },
  { year: "2026", month: 3, title: "National Winners — Eclipse 24-Hour Hackathon", detail: "Team OffTrack won first prize and ₹50,000 at Eclipse, organised by GDG and IIT Guwahati at JSSATEB on 13–14 March. Their IoT Trust and Drift Analysis project led a field of 1,553 teams.", winners: ["Pragyan H (1BY24CS206)", "Piyush Maurya (1TE24CS207)", "Abhishek Chougala (1TD24CS008)", "Ms. Lolaa M H (1BY24CS143)"], mentor: "Mentored by Dr. Narasimhamurthy M S", images: [eclipseWinners.url], imageCaption: "Team OffTrack receiving the Eclipse winners' cheque", featured: true },
  { year: "2026", month: 3, title: "Winners — Campus to Cosmos", detail: "Nedium Chandana and Deepika were declared winners of the Campus to Cosmos competition organised by IEEE AESS on 10 March.", winners: ["Nedium Chandana (1TE24CS182)", "Deepika (1TE24CS028)"], images: [campusToCosmos.url], imageCaption: "Campus to Cosmos winners" },
  { year: "2026", month: 3, title: "1st Place — HACKONOMICS 2026 Ideathon", detail: "Hamsini K. S., Lekhana and Likitha secured first place after competing among more than 200 participants.", winners: ["Hamsini K. S.", "Lekhana", "Likitha"] },
  { year: "2026", month: 3, title: "3rd Place — Krishimanthan", detail: "Team Ace of 4th-semester K section took third place and ₹11,000 at the 36-hour Krishimanthan hackathon at MCE, Hassan, on 25–26 March.", winners: ["Piyush Mourya", "Harsh", "Mohitha", "Mehak"], images: [krishimanthanTeam.url], imageCaption: "Team Ace at Krishimanthan" },
  { year: "2026", month: 3, title: "4th Place — Krishimanthan", detail: "The K-section team finished fourth in the Soil to Solution challenge at the 36-hour Krishimanthan hackathon and earned ₹4,000.", winners: ["Shravani", "Hima", "Ms. Lolaa M H", "Pragyan"] },
  { year: "2026", month: 3, title: "AI Anantapur Police Hackathon 2K26", detail: "Saandra Lakhsshinia of 4th-semester CSE K section participated in the national-level hackathon organised by the Anantapur Police Department with Incux AI on 28 March.", winners: ["Saandra Lakhsshinia (1TE24CS247)"], images: [anantapurHackathon.url], imageCaption: "Cluster 4 representation at the AI Anantapur Police Hackathon" },
  { year: "2026", month: 2, title: "MAKEFORBENGALURU Makeathon", detail: "Three Cluster 4 students participated in the two-day Titan Design Impact Movement makeathon at RV College of Engineering on 27–28 February, building solutions for Bengaluru's urban challenges.", winners: ["Tushar Gururaj (1TD24CS321)", "Pragyan Hota (1BY24CS206)", "Piyush Maurya"] },
  { year: "2026", month: 2, title: "Generative AI Workshop — IIT Hyderabad", detail: "Saandra Lakhsshinia participated in the two-day Generative AI workshop organised by Elan & nVision, IIT Hyderabad, with IncuXai on 21–22 February.", winners: ["Saandra Lakhsshinia (1TE24CS247)"] },
  { year: "2026", month: 2, title: "PALS innoWAH! Cluster Finals", detail: "Team SKY RELIEF presented an autonomous surveillance drone for monitoring and emergency response against 20 teams at NMIT on 14 February.", winners: ["Om Shukla (1BY23IS143)", "Gaurav Nayak (1BY23AI054)", "Saurav Shah (1BY23CS212)", "Aryan Kumar (1BY24IS264)"] },
  { year: "2026", month: 1, title: "IIT Madras BS Foundation Level Completed", detail: "Prakhar Singh successfully completed the Foundation Level of the IIT Madras BS Degree in Programming and Data Science.", winners: ["Mr. Prakhar Singh (1TE24CS214)"] },
  { year: "2026", month: 2, title: "NIDAR 2026 — National-Level Competition", detail: "A seven-member, sixth-semester team participated in NIDAR 2026 from 10–16 February.", winners: ["Om Shukla (1BY23IS143)", "Aryan Kumar (1BY23IS264)", "Pawan Jaiswal (1BY23IS148)", "Rajeev Kumar (1BY23CS171)", "Gaurav Nayak (1BY23AI054)", "Jayraj U. B. (1BY23CS093)", "Shambhavi Manjunath (1BY23AI149)"], images: [nidarTeam.url], imageCaption: "Cluster 4 representation at NIDAR 2026" },
  { year: "2026", month: 1, title: "Medal — 17th State-Level Karate Championship", detail: "Ms. Lolaa M H earned a medal and Certificate of Merit in Female Individual Kata, U-21, at the championship organised by the Akhila Karnataka Sports Karate Association in Bengaluru from 16–18 January.", winners: ["Ms. Lolaa M H (1BY24CS143)"], images: [karateJanuary.url], imageCaption: "Ms. Lolaa M H at the January state-level championship" },
];

export type ReportEvent = { title: string; subtitle: string; date: string; place: string; host: string; tag: string; highlights: string[]; poster?: string; alt?: string };
export const reportEvents: ReportEvent[] = [
  { tag: "Expert Talk", title: "Critical Thinking and Innovation Through AI", subtitle: "Industry perspectives and practical AI approaches for ideation and problem-solving.", date: "30 Sep 2026 · 9:30 AM onwards", place: "BSN Auditorium, C V Raman Block", host: "CSE Division 4 · AANS Technologies", highlights: ["AI", "Innovation"], poster: criticalThinkingAi.url, alt: "Critical Thinking through AI event poster" },
  { tag: "Orientation", title: "First-Year Student Orientation", subtitle: "An introduction to academics, faculty, proctors, clubs, placements and student support.", date: "16 Sep 2026", place: "BMSIT&M", host: "Dr. Narasimhamurthy M S · CSE Division 4", highlights: ["First year", "Academic support"], poster: orientation.url, alt: "First-year orientation session" },
  { tag: "Placement", title: "Online Mock Placement Interviews", subtitle: "Final-year students practised industry interviews and received feedback from professionals.", date: "12 Sep 2026", place: "Online", host: "CSE Division 4", highlights: ["Interview practice", "Industry feedback"], poster: mockInterviews.url, alt: "Online mock placement interview session" },
  { tag: "Workshop", title: "Empowering Youth for the Age of Agentic AI", subtitle: "A three-day program covering ServiceNow AI, Google Prompt Design Labs, and AI-assisted development.", date: "7–9 Sep 2026", place: "BMSIT&M", host: "Epoch Society", highlights: ["Agentic AI", "Prompt design"], poster: agenticAiWorkshop.url, alt: "Empowering Youth for Agentic AI poster" },
  { tag: "Outreach", title: "Innovation & Entrepreneurship Outreach", subtitle: "Students and faculty introduced high-school learners to innovation and entrepreneurship.", date: "29 Aug 2026", place: "Sai Shankar Vidyashala, Sriramanahalli", host: "CSE Divisions 4 & 5 · E-Cell · Epoch Society", highlights: ["School outreach", "Entrepreneurship"], poster: innovationOutreach.url, alt: "Innovation outreach program at Sai Shankar Vidyashala" },
  { tag: "Faculty Program", title: "AI-Assisted Software Development", subtitle: "Lectures, demonstrations and hands-on sessions led by Dr. Shreekant Jere of Genpact.", date: "17–22 Aug 2026", place: "Aryabhata Lab, C V Raman Block", host: "CSE Division 4", highlights: ["AI tools", "Software engineering"], poster: aiSoftwareFdp.url, alt: "AI-Assisted Software Development FDP poster" },
  { tag: "Expert Talk", title: "Essence of Mathematical Foundations in CSE", subtitle: "Dr. Varun L connected mathematical foundations with practical areas of computer science.", date: "7 Aug 2026", place: "BMSIT&M", host: "CSE Division 4", highlights: ["Mathematics", "Computer science"], poster: mathFoundations.url, alt: "Mathematical Foundations in CSE poster" },
  { tag: "Expert Talk", title: "AI in Cybersecurity", subtitle: "Deep Armor engineers presented AI-driven security practices and demonstrated current tools.", date: "4 Aug 2026", place: "Seminar Hall, Sir M.V. Block", host: "CSE Division 4 · Deep Armor", highlights: ["Cybersecurity", "Live demo"], poster: aiCybersecurity.url, alt: "AI in Cybersecurity expert talk poster" },
  { tag: "Hackathon", title: "Agentathon 2026", subtitle: "A two-day Agentic AI bootcamp and hackathon with an industry workshop and final jury pitches.", date: "27 & 29 May 2026", place: "BMSIT&M", host: "Epoch Society · Institution's Innovation Council", highlights: ["200+ registrations", "31 teams"], poster: agentathon.url, alt: "Agentathon 2026 event" },
  { tag: "Coding", title: "Decode2Deploy", subtitle: "A two-day innovation challenge with mentoring and a final pitch round.", date: "18–19 May 2026", place: "BMSIT&M", host: "Coding Club · DevsBazaar", highlights: ["200+ registrations", "50+ teams"], poster: decode2Deploy.url, alt: "Decode2Deploy participants" },
  { tag: "Partial Delivery", title: "DBMS — CSE-10", subtitle: "A hands-on session on transaction processing and concurrency control.", date: "21 May 2026", place: "BMSIT&M", host: "Mr. Praveen A L · Digipic Technologies", highlights: ["DBMS", "Hands-on"], poster: dbmsCse10.url, alt: "DBMS session for CSE-10" },
  { tag: "Partial Delivery", title: "DBMS — CSE-11", subtitle: "A practical session on transaction processing and concurrency control.", date: "15 May 2026", place: "BMSIT&M", host: "Mr. Mahantesh C. Angadi · Saturam Infosys", highlights: ["DBMS", "Hands-on"], poster: dbmsCse11.url, alt: "DBMS session for CSE-11" },
  { tag: "Skill Development", title: "Analysis and Design of Algorithms — CSE-10", subtitle: "Algorithm design, optimisation, applications and placement relevance for 64 students.", date: "20 May 2026", place: "BMSIT&M", host: "Mr. Souradrita Sarkar · JP Morgan Chase", highlights: ["ADA", "64 students"], poster: algorithmsCse10.url, alt: "Algorithms skill development program for CSE-10" },
  { tag: "Academic Skills", title: "LaTeX for Academics — CSE-11", subtitle: "Report formatting, document preparation and use of the project-report template.", date: "18 May 2026", place: "BMSIT&M", host: "Mr. Charan Kumar", highlights: ["LaTeX", "Report writing"], poster: latexCse11.url, alt: "LaTeX session for CSE-11" },
  { tag: "Academic Skills", title: "LaTeX for Academics — CSE-12", subtitle: "Report formatting, document preparation and use of the project-report template.", date: "15 May 2026", place: "BMSIT&M", host: "Mr. Charan Kumar", highlights: ["LaTeX", "Report writing"], poster: latexCse12.url, alt: "LaTeX session for CSE-12" },
  { tag: "Academic Skills", title: "LaTeX for Academics — CSE-10", subtitle: "Report formatting, document preparation and use of the project-report template.", date: "13 May 2026", place: "BMSIT&M", host: "Mr. Charan Kumar", highlights: ["LaTeX", "Report writing"], poster: latexCse10.url, alt: "LaTeX session for CSE-10" },
  { tag: "Skill Development", title: "Analysis and Design of Algorithms — CSE-12", subtitle: "Forty students explored core algorithm-design techniques and real-world applications.", date: "5 May 2026", place: "BMSIT&M", host: "Mr. Mallikarjuna G D · SNIPE IT Solutions", highlights: ["ADA", "40 students"], poster: algorithmsCse12.url, alt: "Algorithms skill development program for CSE-12" },
  { tag: "Partial Delivery", title: "Microcontrollers and IoT Applications — CSE-12", subtitle: "Three interactive sessions combining core concepts, demonstrations and practical applications.", date: "4 May 2026", place: "BMSIT&M", host: "Prof. Raghuram Shivram", highlights: ["IoT", "Microcontrollers"], poster: microcontrollersL.url, alt: "Microcontrollers session for CSE-12" },
  { tag: "Club Activity", title: "CFT — Cyber Warfare", subtitle: "A collaborative cybersecurity event for students.", date: "1 Apr 2026", place: "BMSIT&M", host: "Access Denied Club · IEEE Society", highlights: ["Cybersecurity", "Competition"], poster: cyberWarfare.url, alt: "CFT Cyber Warfare event" },
  { tag: "Expert Session", title: "Generative AI", subtitle: "IISc research scholars shared emerging research and real-world applications with sixth-semester ISE students.", date: "30 Apr 2026", place: "Academic Block, 2nd Floor Seminar Hall", host: "Department of ISE · IISc", highlights: ["Generative AI", "Research"], poster: generativeAiSession.url, alt: "Generative AI expert session" },
  { tag: "Alumni Interaction", title: "College Life, Career Preparation and Placements", subtitle: "Alumnus and BugB Technologies co-founder Ashish Shroff shared practical career insights.", date: "24 Apr 2026", place: "BMSIT&M", host: "Mr. Ashish Shroff · BugB Technologies", highlights: ["Careers", "Placements"], poster: alumniTalkAshish.url, alt: "Alumni talk by Ashish Shroff" },
  { tag: "Expert Session", title: "Blockchain for Real-Time Applications", subtitle: "A hands-on introduction to blockchain development and practical implementation.", date: "23 Apr 2026", place: "Lab CR-408", host: "Mr. Sudhanva Rao · Mobileum", highlights: ["Blockchain", "Hands-on"], poster: blockchainSession.url, alt: "Blockchain expert session" },
  { tag: "Partial Delivery", title: "DevOps Lab", subtitle: "Hands-on exposure to designing, building and deploying real-time DevOps solutions.", date: "13 Apr 2026", place: "BMSIT&M", host: "Mr. Abhimanyu Prajapati · AiDash", highlights: ["DevOps", "Deployment"], poster: devopsSession.url, alt: "DevOps Lab partial delivery session" },
  { tag: "Club Activity", title: "Syntax and Stakes", subtitle: "A three-round coding competition testing programming, logic and teamwork.", date: "17 Mar 2026", place: "BMSIT&M", host: "Coding Club", highlights: ["120+ students", "30+ teams"], poster: syntaxAndStakes.url, alt: "Syntax and Stakes coding competition" },
  { tag: "Alumni Interaction", title: "AI Security Career Talk", subtitle: "A session with a 2025 alumnus working as an AI Security Engineer at SISA.", date: "25 Mar 2026", place: "BMSIT&M", host: "Mr. Shri Adithya · SISA", highlights: ["AI security", "Career insights"], poster: alumniTalkAdithya.url, alt: "Alumni talk by Shri Adithya" },
  { tag: "Workshop", title: "Intelligent Finance: AI and ML in FinTech", subtitle: "An expert-led session on AI and machine learning applications in modern financial systems.", date: "18 Mar 2026", place: "Sir M.V. Block, 2nd Floor Seminar Hall", host: "Mr. Shankar M M · CARES", highlights: ["FinTech", "AI & ML"], poster: fintechWorkshop.url, alt: "Intelligent Finance workshop poster" },
  { tag: "Outreach", title: "Innovation & Entrepreneurship Outreach — Yelahanka", subtitle: "An awareness program on entrepreneurship and innovation for school students.", date: "18 Feb 2026", place: "Seshadripuram High School, Yelahanka New Town", host: "Epoch Society", highlights: ["School outreach", "Innovation"], poster: outreachYelahanka.url, alt: "Outreach program at Seshadripuram High School" },
  { tag: "Outreach", title: "Innovation & Entrepreneurship Outreach — Soluru", subtitle: "An introduction to technology, AI, cybersecurity and entrepreneurship for young students.", date: "14 Feb 2026", place: "Government Higher Primary School, Soluru Village", host: "Epoch Society", highlights: ["School outreach", "Technology awareness"], poster: outreachSoluru.url, alt: "Outreach program at Government Higher Primary School, Soluru" },
];

export type FacultyHighlight = { month: string; title: string; people: string; detail: string };
export const facultyHighlights: FacultyHighlight[] = [
  { month: "May 2026", title: "ICAN 2026 Session Chair", people: "Prof. Mahalakshmi S", detail: "Chaired a paper-presentation session at the 6th International Conference on Artificial Intelligence-driven Computing, Analytics and Networks, Chitkara University, 15–16 May." },
  { month: "May 2026", title: "NPTEL & Faculty Enablement", people: "Dr. Swetha M S", detail: "Elite Gold with 90% in Business Fundamentals for Entrepreneurs; completed DBMS; attended Infosys Faculty Enablement on Cyber Security." },
  { month: "May 2026", title: "NPTEL — Machine Learning", people: "Prof. Bhavya G · Prof. Spandana L · Dr. Savitha S", detail: "Completed Machine Learning for Engineering and Science Applications; Prof. Bhavya and Prof. Spandana earned Elite Silver." },
  { month: "May 2026", title: "NPTEL — Database Management Systems", people: "Prof. Malini M · Prof. Annapareddy Haarika · Prof. Mahalakshmi S", detail: "Completed the eight-week DBMS course; Prof. Mahalakshmi earned Elite Silver, scored 81%, and placed in the top 2%." },
  { month: "May 2026", title: "NPTEL — Additional Certifications", people: "Prof. Annapareddy Haarika · Prof. Geetha P L", detail: "Completed Introduction to IoT and Problem Solving Through Programming in C, respectively." },
  { month: "Apr 2026", title: "NPTEL Top 2%", people: "Prof. Mahalakshmi S", detail: "Earned Elite Silver with 81% in Database Management Systems and ranked in the top 2%." },
  { month: "Apr 2026", title: "GenAI and Agentic Intelligence FDP", people: "Prof. Geetha P L · Prof. Kusuma H P", detail: "Attended the program jointly organised by RV College of Engineering and CSIR Fourth Paradigm Institute, 6–10 April." },
  { month: "Mar 2026", title: "Wipro Certified Faculty", people: "Prof. Annapareddy Haarika", detail: "Completed the TalentNext program on Data Science with Python on 30 March." },
  { month: "Jan 2026", title: "Seed Money Grant — AccrediFlow", people: "Prof. Annapareddy Haarika · Prof. Malini M", detail: "Received ₹99,360 from the BMSIT&M Research and Consultancy Cell for a centralised academic-compliance data automation project." },
  { month: "Jan 2026", title: "Wipro Certified Faculty", people: "Prof. Mahalakshmi S", detail: "Completed the TalentNext Database Solutions Expert program from 12–30 January." },
];

export type ResearchItem = { month: string; title: string; authors: string; venue: string; doi?: string; kind: "Publication" | "Patent" | "Consultancy" };
export const researchItems: ResearchItem[] = [
  { month: "Sep 2026", kind: "Publication", title: "Tantalum Nitride and Titanium Nitride Thin-Film Extended-Gate FET-Based pH Sensors", authors: "Dr. Swetha M S", venue: "IEEE Sensors Journal · Q1 · Scopus", doi: "10.1109/JSEN.2026.3727650" },
  { month: "Sep 2026", kind: "Publication", title: "Dynamic Critical Pruning for IoT-Enabled DAG Blockchains", authors: "Dr. Harish Kumar N, Dr. Srinivas B V, Chandana D M, Rachana C V", venue: "10th International Conference on Inventive Systems and Control", doi: "10.1109/ICISC69558.2026.11681854" },
  { month: "Sep 2026", kind: "Publication", title: "Perfect Pick: A Comparative CNN Framework for Visual Quality Assessment", authors: "Dr. Harish Kumar N", venue: "International Journal of Systematic Innovation · Q3 · Scopus", doi: "10.6977/IJoSI.202609_10(6).026190078" },
  { month: "Sep 2026", kind: "Consultancy", title: "Om Sai Luxury Ladies PG Digital Service", authors: "Dr. Narasimhamurthy M S, Prof. Malini M and six CSE students", venue: "Consultancy project deployed 3 September · Value ₹30,000" },
  { month: "Aug 2026", kind: "Publication", title: "Enhancing Early Detection of Autism Spectrum Disorder Through Ensemble-Based ML", authors: "S. Lylath, L. B. Rananavare", venue: "International Journal of Artificial Intelligence, 15(4)", doi: "10.11591/ijai.v15.i4.pp3732-3744" },
  { month: "Aug 2026", kind: "Publication", title: "Yield2ActionAI for Calibrated Multimodal Crop Yield Forecasting", authors: "Dr. Shanthi D L, Prof. Bhavya G, et al.", venue: "Discover Computing 29, 535", doi: "10.1007/s10791-026-10465-7" },
  { month: "Aug 2026", kind: "Publication", title: "Topology-Aware Segmentation for Multi-Touched Handwritten Kannada Characters", authors: "Prof. Malini M, K. S. Hemanth", venue: "Engineering, Technology & Applied Science Research, 16(4)", doi: "10.48084/etasr.19276" },
  { month: "Jul 2026", kind: "Publication", title: "Addressing Kannada OCR Complexities", authors: "Prof. Malini M, Hemanth K S", venue: "Procedia Computer Science · Scopus", doi: "10.1016/j.procs.2026.06.128" },
  { month: "Jul 2026", kind: "Publication", title: "Adaptive Pulse-Controlled Learning in Differential 1T1R Memristor Crossbar", authors: "Sheshagiri Babu Jimmidi, Rakshith N, Dr. Swetha M S, et al.", venue: "International Journal of Computer Information Systems and Industrial Management Applications · Scopus", doi: "10.70917/ijcisim-2026-1971" },
  { month: "Jul 2026", kind: "Publication", title: "SmartEye: A YOLOv8-Based Surveillance Framework", authors: "Dr. Swetha M S, et al.", venue: "IEEE ICCCMLA · Scopus · Hamburg", doi: "10.1109/ICCCMLA66092.2026.11581044" },
  { month: "Jul 2026", kind: "Publication", title: "PharmaChain: Machine Learning Meets Blockchain to Combat Fake Medicines", authors: "Shivakumara T, Muneshwara M S, Dr. Swetha M S, et al.", venue: "IEEE ICCCMLA · Scopus · Hamburg", doi: "10.1109/ICCCMLA66092.2026.11581016" },
  { month: "May 2026", kind: "Publication", title: "Post-Quantum Cryptography Linux Distribution", authors: "V. Venkatesh, S. S. M. Kudremane, et al.", venue: "NQComp 2026, Bengaluru", doi: "10.1109/NQComp68334.2026.11497721" },
  { month: "Apr 2026", kind: "Publication", title: "A Blockchain–IoT Solution for Healthcare Data Security", authors: "M. S. Muneshwara, T. Shivakumara, Dr. Swetha M S, et al.", venue: "COMP-SIF 2026", doi: "10.1109/COMP-SIF69752.2026.11481882" },
  { month: "Apr 2026", kind: "Publication", title: "IoT-Based Smart Helmet with Integrated Airbag and Accident Response", authors: "S. Kagal, Dr. Swetha M S, S. V. R.", venue: "ESCI 2026, Pune", doi: "10.1109/ESCI68015.2026.11493335" },
  { month: "Apr 2026", kind: "Publication", title: "Lung Cancer Segmentation Using an Enhanced TransUNet++ Architecture", authors: "Anoop V., Karthik G. M., Dr. Savitha S, et al.", venue: "Journal of Biomedical Photonics & Engineering, 12(1)", doi: "10.18287/JBPE26.12.010305" },
  { month: "Mar 2026", kind: "Patent", title: "IoT Controlled Measuring Tape", authors: "Dr. Swetha M S", venue: "Design No. 490238-001 A · Filed 7 Feb · Granted 26 Mar 2026" },
];

export const partnership = {
  title: "BMSIT&M × Edunet Foundation",
  date: "15 Apr 2026",
  detail: "The Department of CSE/ISE Division 4 signed an MoU with Edunet Foundation to support industry-aligned learning in Artificial Intelligence, Cloud Computing, Data Science and Cybersecurity.",
  signatory: "Mr. Aditya M Chikkavenkataiah · Senior Business Development Manager, Edunet Foundation",
  image: edunetMou.url,
};
