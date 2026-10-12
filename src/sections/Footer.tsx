import SocialLinks from "../components/SocialLinks";
import { profile } from "../data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div>
          <p className="font-medium">{profile.name}</p>
          <p className="text-sm text-mute">{profile.role}</p>
        </div>
        <SocialLinks />
        <p className="text-sm text-mute">
          © {new Date().getFullYear()} {profile.name}
        </p>
      </div>
    </footer>
  );
}
