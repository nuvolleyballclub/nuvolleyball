import Image from "next/image";
import { club } from "@/content/club";

export const metadata = { title: `About — ${club.name}` };

export default function About() {
  return (
    <>
      <section className="bg-[color:var(--color-primary)] text-white py-24">
        <div className="container-x">
          <div className="text-xs uppercase tracking-[0.3em] text-[color:var(--color-accent)] mb-4">
            About the club
          </div>
          <h1 className="font-display text-4xl md:text-6xl font-bold max-w-3xl leading-tight">
            A volleyball home at NU.
          </h1>
          {club.recognition && (
            <div className="mt-8 inline-flex items-center gap-3 px-5 py-3 rounded-full border border-[color:var(--color-accent)]/40 bg-[color:var(--color-accent)]/10">
              <span className="size-2 rounded-full bg-[color:var(--color-accent)]" />
              <span className="text-sm">
                <span className="font-semibold text-[color:var(--color-accent)]">
                  {club.recognition.label}
                </span>
                <span className="text-white/70"> · {club.recognition.description}</span>
              </span>
            </div>
          )}
        </div>
      </section>

      <section className="py-24">
        <div className="container-x grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-lg leading-relaxed text-[color:var(--color-ink)]">
              {club.mission}
            </p>
            <p className="mt-6 text-lg leading-relaxed text-[color:var(--color-muted)]">
              {club.about}
            </p>
          </div>
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-[color:var(--color-primary-dark)]">
            <Image
              src="/about/hero.png"
              alt="NUVC board"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </section>

      <section className="py-24 bg-white border-y border-black/5">
        <div className="container-x">
          <div className="text-xs uppercase tracking-[0.3em] text-[color:var(--color-muted)] mb-3">
            Departments
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-12 max-w-3xl">
            Three teams behind the team.
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {club.departments.map((d) => (
              <article
                key={d.name}
                className="p-8 rounded-2xl border border-black/5 bg-[color:var(--color-surface)]"
              >
                <div className="text-xs font-mono text-[color:var(--color-accent-dark)] mb-3">
                  Head: {d.head}
                </div>
                <h3 className="font-display text-2xl font-bold mb-3">
                  {d.name}
                </h3>
                <p className="text-sm text-[color:var(--color-muted)] leading-relaxed">
                  {d.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-x">
          <div className="text-xs uppercase tracking-[0.3em] text-[color:var(--color-muted)] mb-3">
            Sponsors
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-12">
            We build alongside.
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {club.sponsors.map((s) => (
              <div
                key={s.name}
                className="relative aspect-square rounded-2xl border border-black/5 bg-white overflow-hidden"
              >
                <Image
                  src={s.logo}
                  alt={s.name}
                  fill
                  className="object-contain p-6"
                  sizes="20vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
