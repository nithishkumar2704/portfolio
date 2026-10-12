import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import { education, strengths } from "../data/education";

export default function Education() {
  return (
    <section id="education" aria-labelledby="education-title" className="mx-auto max-w-5xl px-5 py-20 sm:px-8">
      <SectionHeading index="05" title="Education" id="education-title" />
      <Reveal>
        <article className="grid gap-4 md:grid-cols-5 md:gap-12">
          <header className="md:col-span-2">
            <p className="font-mono text-sm text-mute">{education.period}</p>
            <p className="mt-2 font-mono text-sm text-accent">CGPA {education.cgpa}</p>
          </header>
          <div className="md:col-span-3">
            <h3 className="text-xl font-semibold">{education.degree}</h3>
            <p className="mt-1 text-ink/85">{education.school}</p>
            <p className="text-sm text-mute">{education.affiliation}</p>
            <ul className="mt-8 space-y-3">
              {strengths.map((s) => (
                <li key={s.label} className="text-ink/85">
                  <span className="font-medium text-ink">{s.label}.</span> {s.text}
                </li>
              ))}
            </ul>
          </div>
        </article>
      </Reveal>
    </section>
  );
}
