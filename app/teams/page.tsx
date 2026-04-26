import Image from "next/image";
import { club } from "@/content/club";

export const metadata = { title: `University Teams — ${club.name}` };

type Player = {
  name: string;
  position: string;
  captain?: boolean;
  photo?: string;
};

function initials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((s) => s[0])
    .join("")
    .toUpperCase();
}

function PlayerCard({ p }: { p: Player }) {
  return (
    <article className="rounded-2xl bg-white border border-black/5 overflow-hidden">
      <div className="relative aspect-[4/5] bg-[color:var(--color-primary-dark)]">
        {p.photo ? (
          <Image
            src={p.photo}
            alt={p.name}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center font-display font-bold text-white/80 text-6xl tracking-tight">
            {initials(p.name)}
          </div>
        )}
        {p.captain && (
          <span className="absolute top-3 left-3 text-[10px] uppercase tracking-widest font-mono text-[color:var(--color-primary-dark)] bg-[color:var(--color-accent)] px-2 py-1 rounded-full">
            Captain
          </span>
        )}
      </div>
      <div className="p-4">
        <div className="font-display font-bold leading-tight">{p.name}</div>
        <div className="text-xs text-[color:var(--color-muted)] font-mono mt-1">
          {p.position}
        </div>
      </div>
    </article>
  );
}

export default function Teams() {
  const womenCoach = club.coaches.find((c) =>
    c.team.toLowerCase().includes("women")
  );
  const menCoach = club.coaches.find(
    (c) => !c.team.toLowerCase().includes("women")
  );

  return (
    <>
      <section className="bg-[color:var(--color-primary)] text-white py-24">
        <div className="container-x">
          <div className="text-xs uppercase tracking-[0.3em] text-[color:var(--color-accent)] mb-4">
            On the court
          </div>
          <h1 className="font-display text-4xl md:text-6xl font-bold max-w-3xl leading-tight">
            University Teams.
          </h1>
          <p className="text-white/70 mt-6 text-lg max-w-2xl">
            The men's and women's volleyball squads representing Nazarbayev
            University.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-x grid md:grid-cols-2 gap-6">
          <figure className="rounded-2xl overflow-hidden bg-black/5">
            <div className="relative aspect-[16/10]">
              <Image
                src={club.rosters.groupPhotos.men}
                alt="Men's team group photo"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <figcaption className="p-4 text-sm text-[color:var(--color-muted)]">
              Men's team · Coach {menCoach?.name}
            </figcaption>
          </figure>
          <figure className="rounded-2xl overflow-hidden bg-black/5">
            <div className="relative aspect-[16/10]">
              <Image
                src={club.rosters.groupPhotos.women}
                alt="Women's team group photo"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <figcaption className="p-4 text-sm text-[color:var(--color-muted)]">
              Women's team · Coach {womenCoach?.name}
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="py-16 bg-white border-y border-black/5">
        <div className="container-x">
          <div className="text-xs uppercase tracking-[0.3em] text-[color:var(--color-muted)] mb-3">
            Coaches
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-12">
            The bench.
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {club.coaches.map((c) => (
              <article
                key={c.name}
                className="rounded-2xl border border-black/5 bg-[color:var(--color-surface)] overflow-hidden grid grid-cols-[140px_1fr]"
              >
                <div className="relative aspect-square bg-[color:var(--color-primary-dark)]">
                  {c.photo && (
                    <Image
                      src={c.photo}
                      alt={c.name}
                      fill
                      className="object-cover"
                      sizes="140px"
                    />
                  )}
                </div>
                <div className="p-6">
                  <div className="text-xs uppercase tracking-[0.3em] text-[color:var(--color-accent-dark)] mb-2">
                    {c.team}
                  </div>
                  <h3 className="font-display text-xl font-bold leading-tight">
                    {c.name}
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-x">
          <div className="text-xs uppercase tracking-[0.3em] text-[color:var(--color-muted)] mb-3">
            Men's roster
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-2">
            {club.rosters.men.length} athletes
          </h2>
          {menCoach && (
            <p className="text-sm text-[color:var(--color-muted)] mb-10">
              Coach: {menCoach.name}
            </p>
          )}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {club.rosters.men.map((p) => (
              <PlayerCard key={p.name} p={p} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white border-t border-black/5">
        <div className="container-x">
          <div className="text-xs uppercase tracking-[0.3em] text-[color:var(--color-muted)] mb-3">
            Women's roster
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-2">
            {club.rosters.women.length} athletes
          </h2>
          {womenCoach && (
            <p className="text-sm text-[color:var(--color-muted)] mb-10">
              Coach: {womenCoach.name}
            </p>
          )}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {club.rosters.women.map((p) => (
              <PlayerCard key={p.name} p={p} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
