import ButtonLink from "../components/ButtonLink";
import { ArrowIcon, DownloadIcon } from "../components/Icons";
import SocialLinks from "../components/SocialLinks";
import { profile } from "../data/profile";

const stack = ["Java", "Spring Boot", "PostgreSQL", "REST APIs", "LLM Integration"];

export default function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="mx-auto flex min-h-[92vh] max-w-5xl flex-col justify-center px-5 pb-16 pt-28 sm:px-8"
    >
      <p className="mb-5 font-mono text-sm text-accent">Hi, I'm</p>
      <h1
        id="hero-title"
        className="text-4xl font-bold uppercase leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
      >
        {profile.name}
      </h1>
      <p className="mt-4 font-mono text-base uppercase tracking-[0.2em] text-mute sm:text-lg">
        {profile.role}
      </p>

      <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink/85">{profile.tagline}</p>

      <ul className="mt-6 flex flex-wrap gap-2" aria-label="Core technologies">
        {stack.map((s) => (
          <li key={s} className="rounded border border-line bg-surface px-2.5 py-1 font-mono text-xs text-mute">
            {s}
          </li>
        ))}
      </ul>

      <div className="mt-10 flex flex-wrap gap-3">
        <ButtonLink href="#projects" variant="primary">
          View Projects <ArrowIcon />
        </ButtonLink>
        <ButtonLink href={profile.resume} external download>
          <DownloadIcon /> Download Resume
        </ButtonLink>
      </div>

      <SocialLinks className="mt-10" />
    </section>
  );
}
