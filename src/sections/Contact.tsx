import ButtonLink from "../components/ButtonLink";
import { DownloadIcon, MailIcon } from "../components/Icons";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import SocialLinks from "../components/SocialLinks";
import { profile } from "../data/profile";

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="mx-auto max-w-5xl px-5 py-20 sm:px-8">
      <SectionHeading index="06" title="Contact" id="contact-title" />
      <Reveal>
        <p className="max-w-2xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
          Let's build something meaningful.
        </p>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink/85">
          I'm open to Software Engineering opportunities. If you're hiring or want to talk about backend
          work, email is the quickest way to reach me.
        </p>
        <p className="mt-6 font-mono text-sm text-mute">{profile.email}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <ButtonLink href={`mailto:${profile.email}`} variant="primary">
            <MailIcon /> Get in Touch
          </ButtonLink>
          <ButtonLink href={profile.resume} external download>
            <DownloadIcon /> Resume
          </ButtonLink>
        </div>
        <SocialLinks className="mt-8" />
      </Reveal>
    </section>
  );
}
