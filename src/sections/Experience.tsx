import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import { experience } from "../data/experience";

export default function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="mx-auto max-w-5xl px-5 py-20 sm:px-8">
      <SectionHeading index="02" title="Experience" id="experience-title" />
      <div className="space-y-12">
        {experience.map((e) => (
          <Reveal key={e.company}>
            <article className="grid gap-4 md:grid-cols-5 md:gap-12">
              <header className="md:col-span-2">
                <p className="font-mono text-sm text-mute">{e.period}</p>
                <h3 className="mt-2 text-xl font-semibold">{e.title}</h3>
                <p className="text-accent">{e.company}</p>
              </header>
              <ul className="space-y-3 md:col-span-3">
                {e.points.map((p) => (
                  <li key={p} className="relative pl-5 leading-relaxed text-ink/85 before:absolute before:left-0 before:top-[0.7em] before:h-px before:w-3 before:bg-accent">
                    {p}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
