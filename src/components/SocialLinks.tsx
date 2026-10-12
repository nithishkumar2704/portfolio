import { profile } from "../data/profile";
import { GitHubIcon, LinkedInIcon, MailIcon } from "./Icons";

export default function SocialLinks({ className = "" }: { className?: string }) {
  const links = [
    { label: "GitHub", href: profile.github, Icon: GitHubIcon, external: true },
    profile.linkedin
      ? { label: "LinkedIn", href: profile.linkedin, Icon: LinkedInIcon, external: true }
      : null,
    { label: "Email", href: `mailto:${profile.email}`, Icon: MailIcon, external: false },
  ].filter((l): l is NonNullable<typeof l> => l !== null);

  return (
    <ul className={`flex items-center gap-5 ${className}`}>
      {links.map(({ label, href, Icon, external }) => (
        <li key={label}>
          <a
            href={href}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            className="inline-flex items-center gap-2 text-sm text-mute transition-colors duration-200 hover:text-accent"
          >
            <Icon />
            {label}
          </a>
        </li>
      ))}
    </ul>
  );
}
