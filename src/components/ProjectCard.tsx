import type { ReactNode } from "react";
import type { Project } from "../data/projects";
import ButtonLink from "./ButtonLink";
import { ArrowIcon, GitHubIcon } from "./Icons";

function Block({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div>
      <h4 className="mb-1 font-mono text-[11px] uppercase tracking-wider text-mute">{label}</h4>
      <div className="leading-relaxed text-ink/85">{children}</div>
    </div>
  );
}

export default function ProjectCard({ project: p }: { project: Project }) {
  return (
    <article
      className={`group flex h-full flex-col rounded-lg border bg-surface p-6 transition duration-200 hover:-translate-y-0.5 hover:border-ink sm:p-8 ${
        p.ai ? "border-accent/50" : "border-line"
      }`}
    >
      <header className="mb-5">
        <div className="flex flex-wrap items-center gap-2">
          <p className="font-mono text-xs text-mute">{p.role}</p>
          {p.ai && (
            <span className="rounded bg-accent-soft px-2 py-0.5 font-mono text-[11px] font-medium text-accent">
              AI / LLM
            </span>
          )}
        </div>
        <h3 className="mt-2 text-xl font-semibold tracking-tight">{p.name}</h3>
        <p className="mt-2 text-ink/80">{p.summary}</p>
      </header>

      <div className="space-y-4 text-[15px]">
        <Block label="Problem">{p.problem}</Block>
        <Block label="Engineering">{p.engineering}</Block>
        <Block label="Key contributions">
          <ul className="list-disc space-y-1 pl-5 marker:text-accent">
            {p.contributions.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </Block>
        {p.result && <Block label="Result">{p.result}</Block>}
      </div>

      <ul className="mt-6 flex flex-wrap gap-2" aria-label={`${p.name} technologies`}>
        {p.tech.map((t) => (
          <li key={t} className="rounded border border-line bg-paper px-2 py-1 font-mono text-[11px] text-mute">
            {t}
          </li>
        ))}
      </ul>

      {(p.repo || p.demo) && (
        <div className="mt-6 flex flex-wrap gap-3 pt-2">
          {p.demo && (
            <ButtonLink href={p.demo} external variant="primary">
              Live Demo <ArrowIcon />
            </ButtonLink>
          )}
          {p.repo && (
            <ButtonLink href={p.repo} external>
              <GitHubIcon /> {p.demo ? "GitHub" : "View on GitHub"}
            </ButtonLink>
          )}
        </div>
      )}
    </article>
  );
}
