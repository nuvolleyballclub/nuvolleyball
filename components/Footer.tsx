import Link from "next/link";
import { club } from "@/content/club";

export default function Footer() {
  return (
    <footer className="mt-32 bg-[color:var(--color-primary-dark)] text-white/80">
      <div className="container-x py-16 grid gap-10 md:grid-cols-3">
        <div>
          <div className="font-display font-bold text-white text-xl">
            {club.name}
          </div>
          <p className="mt-3 text-sm text-white/60 max-w-xs">{club.tagline}</p>
        </div>
        <div>
          <div className="text-sm uppercase tracking-widest text-white/40 mb-4">
            Explore
          </div>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/about" className="hover:text-white">
                About
              </Link>
            </li>
            <li>
              <Link href="/leadership" className="hover:text-white">
                Leadership
              </Link>
            </li>
            <li>
              <Link href="/tournaments" className="hover:text-white">
                Tournaments
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white">
                Join & Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="text-sm uppercase tracking-widest text-white/40 mb-4">
            Connect
          </div>
          <ul className="space-y-2 text-sm">
            <li>
              <a href={`mailto:${club.contact.email}`} className="hover:text-white">
                {club.contact.email}
              </a>
            </li>
            <li>
              <a href={club.contact.telegram} className="hover:text-white">
                Telegram — {club.contact.telegramHandle}
              </a>
            </li>
            <li>
              <a href={club.contact.instagram} className="hover:text-white">
                Instagram — {club.contact.instagramHandle}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <div>© {new Date().getFullYear()} {club.name}. {club.university}.</div>
          <div>{club.venue.location} · {club.venue.name}</div>
        </div>
      </div>
    </footer>
  );
}
