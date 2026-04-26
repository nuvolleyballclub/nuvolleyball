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
              More than a sports team.
            </h1>
            <p className="mt-8 text-lg md:text-xl text-white/75 max-w-2xl leading-relaxed">
              {club.mission}
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
              src={club.logo}
              alt=""
              width={520}
              height={520}
              priority
              className="w-[320px] md:w-[480px] h-auto"
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

      {/* VIDEO */}
      <section className="py-24 bg-[color:var(--color-surface)]">
        <div className="container-x">
          <div className="text-xs uppercase tracking-[0.3em] text-[color:var(--color-muted)] mb-3">
            Watch
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-12 max-w-2xl">
            See us in action.
          </h2>
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-black border border-black/5">
            <iframe
              src="https://www.youtube-nocookie.com/embed/T3gWy7Fy0mM"
              title="NU Volleyball Club"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* DEPARTMENTS */}
      <section className="py-24">
        <div className="container-x">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-[color:var(--color-muted)] mb-3">
                How the club runs
              </div>
              <h2 className="font-display text-3xl md:text-5xl font-bold max-w-2xl">
                Three departments. One club.
              </h2>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {club.departments.map((d) => (
              <article
                key={d.name}
                className="bg-white p-8 rounded-2xl border border-black/5 hover:shadow-xl transition-shadow"
              >
                <div className="text-xs font-mono text-[color:var(--color-accent-dark)] mb-4">
                  Head: {d.head}
                </div>
                <h3 className="font-display text-2xl font-bold mb-3 leading-snug">
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

      {/* TOURNAMENTS */}
      <section className="bg-[color:var(--color-primary-dark)] text-white py-20">
        <div className="container-x">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-[color:var(--color-accent)] mb-3">
                2025–2026 season
              </div>
              <h2 className="font-display text-3xl md:text-5xl font-bold max-w-3xl">
                Tournaments we host.
              </h2>
            </div>
            <Link
              href="/tournaments"
              className="text-sm text-[color:var(--color-accent)] hover:underline"
            >
              See all →
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {club.tournaments.hosted.filter((t) => t.poster).slice(0, 3).map((t) => (
              <article
                key={t.name}
                className="rounded-2xl bg-white/5 border border-white/10 overflow-hidden flex flex-col"
              >
                {t.poster ? (
                  <div className="relative aspect-[3/4] bg-black/30">
                    <Image
                      src={t.poster}
                      alt={t.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                ) : (
                  <div className="aspect-[3/4] bg-gradient-to-br from-[color:var(--color-primary)] to-[color:var(--color-primary-dark)] flex items-center justify-center p-8">
                    <div className="text-center">
                      <div className="font-display font-bold text-xl text-[color:var(--color-accent)] mb-2">
                        {t.dates}
                      </div>
                      <div className="text-xs uppercase tracking-[0.2em] text-white/40">
                        Hosted by NUVC
                      </div>
                    </div>
                  </div>
                )}
                <div className="p-6">
                  <div className="text-xs font-mono text-[color:var(--color-accent)] mb-2">
                    {t.dates}
                  </div>
                  <h3 className="font-display text-lg font-bold leading-snug mb-2">
                    {t.name}
                  </h3>
                  <div className="text-sm text-white/60">{t.venue}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TEAMS PREVIEW */}
      <section className="py-24">
        <div className="container-x">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-[color:var(--color-muted)] mb-3">
                On the court
              </div>
              <h2 className="font-display text-3xl md:text-5xl font-bold max-w-2xl">
                Our university teams.
              </h2>
            </div>
            <Link
              href="/teams"
              className="text-sm text-[color:var(--color-primary)] hover:underline"
            >
              Full roster →
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { team: "Men's team", coach: club.coaches.find((c) => c.team.includes("Men")), roster: club.rosters.men, photo: club.rosters.groupPhotos.men },
              { team: "Women's team", coach: club.coaches.find((c) => c.team.includes("Women")), roster: club.rosters.women, photo: club.rosters.groupPhotos.women },
            ].map((t) => {
              const captain = t.roster.find((p) => p.captain);
              return (
                <article
                  key={t.team}
                  className="rounded-2xl border border-black/5 bg-white overflow-hidden"
                >
                  <div className="relative aspect-[16/10] bg-[color:var(--color-primary-dark)]">
                    <Image
                      src={t.photo}
                      alt={`${t.team} group photo`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="p-8">
                    <div className="text-xs uppercase tracking-[0.2em] text-[color:var(--color-accent-dark)] mb-3">
                      {t.team}
                    </div>
                    <h3 className="font-display text-2xl font-bold mb-1">
                      {t.roster.length} athletes
                    </h3>
                    <div className="text-sm text-[color:var(--color-muted)] mb-6">
                      Coach: {t.coach?.name}
                    </div>
                    {captain && (
                      <div className="pt-4 border-t border-black/5 text-sm">
                        <span className="text-[color:var(--color-muted)]">Captain</span>
                        <div className="font-display font-bold mt-1">
                          {captain.name}
                          <span className="text-xs text-[color:var(--color-muted)] font-mono ml-2">
                            {captain.position}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* SPONSORS */}
      <section className="py-20 bg-white border-y border-black/5">
        <div className="container-x">
          <div className="text-xs uppercase tracking-[0.3em] text-[color:var(--color-muted)] mb-3">
            Sponsors
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-12">
            Made possible by.
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 items-center">
            {club.sponsors.map((s) => (
              <div
                key={s.name}
                className="relative aspect-square bg-[color:var(--color-surface)] rounded-2xl border border-black/5 p-6 flex items-center justify-center"
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

      {/* CTA */}
      <section className="py-24 bg-[color:var(--color-primary)] text-white">
        <div className="container-x text-center max-w-2xl mx-auto">
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Ready to join NUVC?
          </h2>
          <p className="text-lg text-white/70 mb-10">
            Apply to the Event, PR, or HR department — or step on the court with
            the men's or women's team.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 rounded-full bg-[color:var(--color-accent)] text-[color:var(--color-primary-dark)] font-semibold hover:bg-[color:var(--color-accent-dark)] transition-colors"
          >
            How to Join
          </Link>
        </div>
      </section>
    </>
  );
}
