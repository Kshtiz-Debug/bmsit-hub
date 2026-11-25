import { courseOverview, departmentHighlights, mission, peos, pos, psos, vision } from "@/lib/department-overview";

function Heading({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <span className="block h-1 w-8 bg-gold" />
      <h2 className="mt-3 font-display text-2xl font-extrabold uppercase tracking-[0.2em] text-primary sm:text-3xl">{children}</h2>
    </div>
  );
}

export function DepartmentOverview() {
  return (
    <section id="overview" data-chapter="00" className="cinematic-section mx-auto max-w-7xl space-y-16 px-4 py-24 lg:py-32">
      <div>
        <Heading>Course Overview</Heading>
        <p className="mt-6 max-w-5xl text-lg leading-relaxed text-foreground/80">{courseOverview}</p>
      </div>

      <div className="rounded-2xl bg-primary p-8 text-primary-foreground sm:p-12">
        <h2 className="font-display text-2xl font-extrabold uppercase tracking-[0.2em] sm:text-3xl">Highlights of the Department</h2>
        <ul className="mt-6 grid list-disc gap-3 pl-5 marker:text-gold md:grid-cols-2">
          {departmentHighlights.map((h) => <li key={h} className="leading-relaxed">{h}</li>)}
        </ul>
      </div>

      <div className="grid gap-10 md:grid-cols-2">
        <div>
          <Heading>Vision</Heading>
          <p className="mt-6 leading-relaxed text-foreground/80">{vision}</p>
        </div>
        <div>
          <Heading>Mission</Heading>
          <ul className="mt-6 space-y-3 text-foreground/80">
            {mission.map((m) => <li key={m} className="leading-relaxed">{m}</li>)}
          </ul>
        </div>
      </div>

      <div>
        <Heading>Program Educational Objectives (PEOs)</Heading>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {peos.map((p, i) => (
            <div key={p.title} className="rounded-lg border border-border bg-card p-6">
              <p className="text-xs font-bold text-gold">PEO{i + 1}</p>
              <h3 className="mt-2 font-display font-bold text-primary">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <Heading>Program Outcomes (POs)</Heading>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {pos.map((p) => (
            <div key={p.code} className="flex gap-4 rounded-lg border border-border bg-card p-5">
              <span className="shrink-0 font-display text-lg font-extrabold text-gold">{p.code}</span>
              <p className="text-sm leading-relaxed text-muted-foreground"><strong className="text-primary">{p.title}:</strong> {p.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <Heading>Program Specific Outcomes (PSOs)</Heading>
        <ul className="mt-6 grid gap-4 md:grid-cols-2">
          {psos.map((p, i) => (
            <li key={p} className="flex gap-4 rounded-lg border border-border bg-card p-5 text-sm leading-relaxed text-muted-foreground">
              <span className="font-display text-lg font-extrabold text-gold">PSO{i + 1}</span>{p}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
