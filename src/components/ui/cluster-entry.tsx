import { Link } from "@tanstack/react-router";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import { useRef } from "react";
import { Button } from "@/components/ui/button";

type ClusterEntryProps = {
  background: string;
  logo: string;
};

type NavItem =
  | { label: string; href: string; to?: never }
  | { label: string; to: "/advaya"; href?: never };

const entryNav: NavItem[] = [
  { label: "Overview", href: "#overview" },
  { label: "Faculty", href: "#faculty" },
  { label: "Research", href: "#research" },
  { label: "Achievements", href: "#achievements" },
  { label: "Sections", href: "#sections" },
  { label: "Events", href: "#events" },
  { label: "ADVAYA", to: "/advaya" },
];

function WordsPullUp({ text }: { text: string }) {
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

export function ClusterEntry({ background, logo }: ClusterEntryProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.72], [1, 0]);

  return (
    <section ref={sectionRef} className="relative h-[94svh] min-h-[620px] w-full overflow-hidden bg-brand-deep">
      <motion.img
        src={background}
        alt="BMS Institute of Technology and Management campus entrance"
        className="absolute inset-0 h-full w-full object-cover object-[center_38%]"
        width={1080}
        height={1440}
        style={{ y: imageY, scale: imageScale }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-brand-deep/55 via-brand-deep/20 to-brand-deep/95" />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-deep/55 via-transparent to-transparent" />

      <div className="absolute inset-x-0 top-0 z-20 flex items-start justify-between gap-4 px-4 py-4 sm:px-7 sm:py-6">
        <a href="#top" className="bg-background/95 p-2 shadow-lg backdrop-blur-sm" aria-label="Cluster 4 home">
          <img src={logo} alt="BMS Institute of Technology & Management" className="h-9 w-auto sm:h-12" />
        </a>
        <nav aria-label="Main navigation" className="hidden bg-brand-deep/95 px-6 py-4 shadow-lg backdrop-blur-sm md:block">
          <ul className="flex items-center gap-7">
            {entryNav.map((item) => (
              <li key={item.label}>
                {item.to ? (
                  <Link className="text-xs font-semibold uppercase text-gold transition-colors hover:text-primary-foreground" to={item.to}>
                    {item.label}
                  </Link>
                ) : (
                  <a className="text-xs font-semibold uppercase text-primary-foreground/75 transition-colors hover:text-gold" href={item.href}>
                    {item.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-2">
          <Link
            to="/advaya"
            className="bg-brand-deep/95 px-3 py-3 text-xs font-bold uppercase text-gold shadow-lg backdrop-blur-sm md:hidden"
          >
            ADVAYA
          </Link>
          <div className="bg-brand-deep/95 px-4 py-3 text-right text-primary-foreground shadow-lg backdrop-blur-sm">
            <p className="font-display text-sm font-bold sm:text-base">CSE · Cluster 4</p>
            <p className="mt-0.5 text-[9px] font-semibold uppercase text-gold sm:text-[10px]">BMSIT&amp;M</p>
          </div>
        </div>
      </div>

      <motion.div
        className="absolute inset-x-0 bottom-0 z-10 px-4 pb-7 sm:px-7 sm:pb-10 lg:px-10"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        <p className="mb-5 border-l-4 border-gold pl-3 text-[10px] font-bold uppercase text-gold sm:text-xs">
          Department of Computer Science &amp; Engineering
        </p>
        <div className="grid items-end gap-6 lg:grid-cols-[minmax(0,1fr)_22rem] lg:gap-10">
          <WordsPullUp text="Cluster 4" />
          <motion.div
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="pb-1 lg:pb-4"
          >
            <p className="max-w-md text-sm leading-relaxed text-primary-foreground/80 sm:text-base">
              Three sections, one learning community—building skills, sharing ideas, and representing BMSIT&amp;M on every stage.
            </p>
            <Button asChild className="mt-5 h-11 rounded-full bg-gold pl-5 pr-1 text-gold-foreground hover:bg-gold/90">
              <a href="#overview">
                Explore the cluster
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-deep text-primary-foreground">
                  <ArrowDownRight />
                </span>
              </a>
            </Button>
          </motion.div>
        </div>
      </motion.div>
      <div aria-hidden="true" className="absolute bottom-0 right-5 z-10 hidden h-28 items-end gap-3 lg:flex">
        <span className="pb-4 text-[9px] font-bold uppercase text-primary-foreground/55 [writing-mode:vertical-rl]">Scroll to discover</span>
        <span className="h-full w-px bg-gradient-to-b from-gold to-transparent" />
      </div>
    </section>
  );
}