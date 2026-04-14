import Link from "next/link";
import Image from "next/image";
import { club } from "@/content/club";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-[color:var(--color-primary)] text-white">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, rgba(255,201,60,0.4), transparent 40%), radial-gradient(circle at 80% 70%, rgba(255,255,255,0.15), transparent 50%)",
          }}
        />
        <div className="container-x relative py-28 md:py-40">
          <div className="max-w-3xl fade-up">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[color:var(--color-accent)] mb-6">
              <span className="size-1.5 rounded-full bg-[color:var(--color-accent)]" />
              {club.university}
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-bold leading-[1.05]">
              {club.tagline}.
            </h1>
            <p className="mt-8 text-lg md:text-xl text-white/75 max-w-2xl leading-relaxed">
              {club.description}
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="px-6 py-3 rounded-full bg-[color:var(--color-accent)] text-[color:var(--color-primary-dark)] font-semibold hover:bg-[color:var(--color-accent-dark)] transition-colors"
              >
                Join the Club
              </Link>
              <Link
                href="/about"
                className="px-6 py-3 rounded-full border border-white/25 text-white font-semibold hover:bg-white/10 transition-colors"
              >
                Our Story
              </Link>
            </div>
          </div>
          <div className="absolute -right-20 md:right-10 bottom-0 translate-y-8 md:translate-y-0 opacity-60 md:opacity-100 pointer-events-none">
            <Image
              src="/logo.jpg"
              alt=""
              width={520}
              height={520}
              priority
              className="w-[320px] md:w-[480px] h-auto rounded-full shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-white border-b border-black/5">
        <div className="container-x py-14 grid grid-cols-2 md:grid-cols-4 gap-8">
          {club.stats.map((s) => (
            <div key={s.label}>
              <div className="font-display text-4xl md:text-5xl font-bold text-[color:var(--color-primary)]">
                {s.value}
              </div>
              <div className="text-sm text-[color:var(--color-muted)] mt-1">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section className="py-24">
        <div className="container-x">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-[color:var(--color-muted)] mb-3">
                Latest milestones
              </div>
              <h2 className="font-display text-3xl md:text-5xl font-bold max-w-2xl">
                A season of silverware and recognition.
              </h2>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {club.achievements.map((a) => (
              <article
                key={a.title}
                className="bg-white p-8 rounded-2xl border border-black/5 hover:shadow-xl transition-shadow"
              >
                <div className="text-xs font-mono text-[color:var(--color-accent-dark)] mb-4">
                  {a.year}
                </div>
                <h3 className="font-display text-xl font-bold mb-3 leading-snug">
                  {a.title}
                </h3>
                <p className="text-sm text-[color:var(--color-muted)] leading-relaxed">
                  {a.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WIN STREAK */}
      <section className="bg-[color:var(--color-primary-dark)] text-white py-20">
        <div className="container-x">
          <div className="text-xs uppercase tracking-[0.3em] text-[color:var(--color-accent)] mb-3">
            2025–26 season
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-12 max-w-3xl">
            Four friendlies. Four clean sweeps.
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {club.winStreak.map((w) => (
              <div
                key={w.opponent}
                className="rounded-2xl bg-white/5 border border-white/10 p-6 text-center"
              >
                <div className="font-display text-4xl font-bold text-[color:var(--color-accent)]">
                  {w.score}
                </div>
                <div className="mt-2 text-sm text-white/60">vs {w.opponent}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section className="py-24">
        <div className="container-x">
          <div className="text-xs uppercase tracking-[0.3em] text-[color:var(--color-muted)] mb-3">
            On the court
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-12 max-w-2xl">
            Moments from the season.
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {club.gallery.slice(0, 8).map((src, i) => (
              <div
                key={src}
                className={`relative overflow-hidden rounded-xl bg-black/5 ${
                  i === 0 || i === 5 ? "col-span-2 aspect-[2/1]" : "aspect-square"
                }`}
              >
                <Image
                  src={src}
                  alt=""
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[color:var(--color-primary)] text-white">
        <div className="container-x text-center max-w-2xl mx-auto">
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Ready to step on the court?
          </h2>
          <p className="text-lg text-white/70 mb-10">
            Tryouts for both men's and women's teams run every season. Non-player
            roles are open year-round.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 rounded-full bg-[color:var(--color-accent)] text-[color:var(--color-primary-dark)] font-semibold hover:bg-[color:var(--color-accent-dark)] transition-colors"
          >
            Explore Ways to Join
          </Link>
        </div>
      </section>
    </>
  );
}
