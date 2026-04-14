import Link from "next/link";
import Image from "next/image";

const links = [
  { href: "/about", label: "About" },
  { href: "/leadership", label: "Leadership" },
  { href: "/tournaments", label: "Tournaments" },
  { href: "/contact", label: "Join & Contact" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-[color:var(--color-surface)]/80 border-b border-black/5">
      <div className="container-x flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.jpg"
            alt="NU Volleyball Club"
            width={36}
            height={36}
            className="rounded-full"
          />
          <span className="font-display font-bold text-[color:var(--color-ink)] text-lg tracking-tight">
            NU Volleyball Club
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-[color:var(--color-muted)] hover:text-[color:var(--color-primary)] transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contact"
          className="md:hidden text-sm font-medium px-4 py-2 rounded-full bg-[color:var(--color-primary)] text-white"
        >
          Join
        </Link>
      </div>
    </header>
  );
}
