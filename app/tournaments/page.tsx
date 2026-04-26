import Image from "next/image";
import { club } from "@/content/club";

export const metadata = { title: `Tournaments — ${club.name}` };

type Tournament = {
  name: string;
  dates: string;
  time?: string;
  venue: string;
  description: string;
  poster?: string;
};

function TournamentCard({ t, dark = false }: { t: Tournament; dark?: boolean }) {
  return (
    <article
      className={`p-6 md:p-10 rounded-2xl border grid md:grid-cols-[260px_1fr] gap-8 items-start ${
        dark
          ? "bg-white/5 border-white/10"
          : "bg-white border-black/5"
      }`}
    >
      {t.poster ? (
        <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-[color:var(--color-primary-dark)]">
          <Image
            src={t.poster}
            alt={`${t.name} poster`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 260px"
          />
        </div>
      ) : (
        <div className="aspect-[3/4] rounded-xl bg-[color:var(--color-surface)] border border-dashed border-black/10 flex items-center justify-center p-6">
          <div className="text-center">
            <div className="text-xs uppercase tracking-[0.3em] text-[color:var(--color-muted)] mb-2">
              {t.dates}
            </div>
            <div className="font-display font-bold text-lg text-[color:var(--color-primary)]">
              {t.venue}
            </div>
          </div>
        </div>
      )}
      <div>
        <div
          className={`text-xs font-mono mb-2 ${
            dark ? "text-[color:var(--color-accent)]" : "text-[color:var(--color-accent-dark)]"
          }`}
        >
          {t.dates}
          {t.time ? ` · ${t.time}` : ""}
        </div>
        <h3
          className={`font-display text-2xl md:text-3xl font-bold leading-tight ${
            dark ? "text-white" : ""
          }`}
        >
          {t.name}
        </h3>
        <div
          className={`text-sm mt-3 ${
            dark ? "text-white/60" : "text-[color:var(--color-muted)]"
          }`}
        >
          {t.venue}
        </div>
        <p
          className={`mt-6 leading-relaxed ${
            dark ? "text-white/70" : "text-[color:var(--color-muted)]"
          }`}
        >
          {t.description}
        </p>
      </div>
    </article>
  );
}

export default function Tournaments() {
  return (
    <>
      <section className="bg-[color:var(--color-primary)] text-white py-24">
        <div className="container-x">
          <div className="text-xs uppercase tracking-[0.3em] text-[color:var(--color-accent)] mb-4">
            2025–2026 season
          </div>
          <h1 className="font-display text-4xl md:text-6xl font-bold max-w-3xl leading-tight">
            Tournaments we host.
          </h1>
        </div>
      </section>

      <section className="py-24">
        <div className="container-x">
          <div className="text-xs uppercase tracking-[0.3em] text-[color:var(--color-muted)] mb-3">
            Hosted by NUVC
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-12">
            {club.tournaments.hosted.length} signature tournaments.
          </h2>
          <div className="grid gap-10">
            {club.tournaments.hosted.map((t) => (
              <TournamentCard key={t.name} t={t} />
            ))}
          </div>
        </div>
      </section>

      {club.tournaments.competed.length > 0 && (
        <section className="py-24 bg-[color:var(--color-primary-dark)] text-white">
          <div className="container-x">
            <div className="text-xs uppercase tracking-[0.3em] text-[color:var(--color-accent)] mb-3">
              On the road
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-12">
              Tournaments we compete in.
            </h2>
            <div className="grid gap-10">
              {club.tournaments.competed.map((t) => (
                <TournamentCard key={t.name} t={t} dark />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-24 bg-white border-y border-black/5">
        <div className="container-x">
          <div className="text-xs uppercase tracking-[0.3em] text-[color:var(--color-muted)] mb-3">
            Sponsors
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-12 max-w-3xl">
            Made possible by.
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {club.sponsors.map((s) => (
              <div
                key={s.name}
                className="relative aspect-square rounded-2xl bg-[color:var(--color-surface)] p-4"
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
