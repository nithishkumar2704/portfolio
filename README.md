# Nithish Kumar B — Portfolio

React + TypeScript + Vite + Tailwind CSS v4.

```bash
npm install
npm run dev      # local dev
npm run build    # type-check + production build into dist/
```

## Updating content
All content lives in `src/data/`:

- `profile.ts` — name, tagline, About text, email, GitHub, **LinkedIn (currently empty)**, resume path
- `experience.ts`, `projects.ts`, `skills.ts`, `education.ts`

To add a repository button to a project, set `repo` in `projects.ts`
(e.g. `repo: "https://github.com/nithishkumar2704/<repo-name>"`). To show LinkedIn, set `linkedin` in `profile.ts`.

The resume PDF is served from `public/Nithish_Kumar_B_Resume.pdf`; replace that file to update it.
