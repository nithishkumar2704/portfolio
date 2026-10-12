import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import { profile } from "../data/profile";

// Figures come straight from resume bullets; the context says where each applies.
const highlights = [
  { value: "5+", label: "modules implemented and tested", where: "Internship" },
  { value: "10+", label: "high-priority defects resolved", where: "Internship" },
  { value: "8+", label: "secure REST APIs designed", where: "Byte Cycle" },
  { value: "20%", label: "lower response latency", where: "Service Locator" },
];

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="mx-auto max-w-5xl px-5 py-20 sm:px-8">
      <SectionHeading index="01" title="About" id="about-title" />
      <div className="grid gap-12 md:grid-cols-5">
        <Reveal className="space-y-5 text-lg leading-relaxed text-ink/85 md:col-span-3">
          {profile.about.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </Reveal>
        <Reveal delay={100} className="md:col-span-2">
          <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-line bg-line">
            {highlights.map((h) => (
              <div key={h.label} className="bg-surface p-4">
                <dt className="text-2xl font-semibold tracking-tight">{h.value}</dt>
                <dd className="mt-1 text-sm leading-snug text-mute">{h.label}</dd>
                <dd className="mt-2 font-mono text-[11px] uppercase tracking-wide text-accent">{h.where}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
