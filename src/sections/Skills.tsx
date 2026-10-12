import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import { skills } from "../data/skills";

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="mx-auto max-w-5xl px-5 py-20 sm:px-8">
      <SectionHeading index="04" title="Skills" id="skills-title" />
      <Reveal>
        <dl className="divide-y divide-line border-y border-line">
          {skills.map((g) => (
            <div key={g.title} className="grid gap-3 py-5 sm:grid-cols-4 sm:gap-8">
              <dt className="font-mono text-sm text-mute">{g.title}</dt>
              <dd className="flex flex-wrap gap-2 sm:col-span-3">
                {g.items.map((i) => (
                  <span key={i} className="rounded border border-line bg-surface px-2.5 py-1 text-sm">
                    {i}
                  </span>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </section>
  );
}
