import { motion, useScroll, useSpring } from "framer-motion";

const chapters = [
  { label: "Overview", href: "#overview" },
  { label: "Faculty", href: "#faculty" },
  { label: "Research", href: "#research" },
  { label: "Achievements", href: "#achievements" },
  { label: "Sections", href: "#sections" },
  { label: "Events", href: "#events" },
];

export function CinematicScrollChrome() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <>
      <motion.div
        aria-hidden="true"
        className="fixed inset-x-0 top-0 z-[70] h-1 origin-left bg-gold"
        style={{ scaleX }}
      />
      <nav
        aria-label="Page chapters"
        className="fixed right-5 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-end gap-5 2xl:flex"
      >
        {chapters.map((chapter, index) => (
          <a
            key={chapter.href}
            href={chapter.href}
            className="group flex items-center gap-3 text-primary"
          >
            <span className="translate-x-2 text-[10px] font-bold uppercase opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
              {chapter.label}
            </span>
            <span className="font-display text-[9px] font-bold text-gold/70">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="h-px w-6 bg-gold/40 transition-all duration-300 group-hover:w-11 group-hover:bg-gold" />
          </a>
        ))}
      </nav>
    </>
  );
}