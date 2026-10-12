import ProjectCard from "../components/ProjectCard";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import { GitHubIcon } from "../components/Icons";
import { projects } from "../data/projects";
import { profile } from "../data/profile";

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projects" aria-labelledby="projects-title" className="mx-auto max-w-5xl px-5 py-20 sm:px-8">
      <SectionHeading index="03" title="Projects" id="projects-title" />

      <div className="grid gap-6 md:grid-cols-2">
        {featured.map((p, i) => (
          <Reveal key={p.name} delay={i * 80}>
            <ProjectCard project={p} />
          </Reveal>
        ))}
      </div>

      <h3 className="mb-6 mt-14 font-mono text-sm uppercase tracking-wider text-mute">More backend work</h3>
      <div className="grid gap-6 md:grid-cols-2">
        {others.map((p, i) => (
          <Reveal key={p.name} delay={i * 80}>
            <ProjectCard project={p} />
          </Reveal>
        ))}
      </div>

      <p className="mt-10 flex flex-wrap items-center gap-2 text-sm text-mute">
        <GitHubIcon />
        Source code and repositories are on my
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-accent underline-offset-4 hover:underline"
        >
          GitHub profile
        </a>
        .
      </p>
    </section>
  );
}
