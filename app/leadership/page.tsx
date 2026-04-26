import Image from "next/image";
import { club } from "@/content/club";

export const metadata = { title: `Leadership — ${club.name}` };

export default function Leadership() {
  return (
    <>
      <section className="bg-[color:var(--color-primary)] text-white py-24">
        <div className="container-x">
          <div className="text-xs uppercase tracking-[0.3em] text-[color:var(--color-accent)] mb-4">
            The people behind the club
          </div>
          <h1 className="font-display text-4xl md:text-6xl font-bold max-w-3xl leading-tight">
            Leadership.
          </h1>
          <p className="text-white/70 mt-6 text-lg max-w-2xl">
            The board running day-to-day operations, coordinating tournaments,
            and representing NU Volleyball Club across the university.
          </p>
        </div>
      </section>

      {club.boardGroupPhoto && (
        <section className="bg-white">
          <div className="container-x py-12">
            <div className="relative aspect-[16/8] md:aspect-[16/6] rounded-2xl overflow-hidden bg-black/5">
              <Image
                src={club.boardGroupPhoto}
                alt="The NU Volleyball Club board"
                fill
                className="object-cover"
                sizes="100vw"
                priority
              />
            </div>
          </div>
        </section>
      )}

      <section className="py-24">
        <div className="container-x">
          <div className="text-xs uppercase tracking-[0.3em] text-[color:var(--color-muted)] mb-3">
            Current board
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-12">
            Five leads. One direction.
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {club.leadership.map((p) => (
              <article
                key={p.name}
                className="rounded-2xl bg-white border border-black/5 overflow-hidden"
              >
                {p.photo && (
                  <div className="relative aspect-[4/5] bg-[color:var(--color-primary-dark)]">
                    <Image
                      src={p.photo}
                      alt={p.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                )}
                <div className="p-6">
                  <div className="text-xs uppercase tracking-[0.3em] text-[color:var(--color-accent-dark)] mb-2">
                    {p.role}
                  </div>
                  <h3 className="font-display text-xl font-bold leading-tight">
                    {p.name}
                  </h3>
                  {p.telegram && (
                    <a
                      href={`https://t.me/${p.telegram.replace("@", "")}`}
                      className="mt-2 inline-block text-sm font-mono text-[color:var(--color-muted)] hover:text-[color:var(--color-primary)]"
                    >
                      {p.telegram}
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>

          {club.vicePresident && (
            <div className="mt-10 p-6 rounded-2xl border border-dashed border-black/10 bg-[color:var(--color-surface)] flex flex-col md:flex-row md:items-center md:justify-between gap-3">
              <div>
                <div className="text-xs uppercase tracking-[0.3em] text-[color:var(--color-accent-dark)] mb-1">
                  {club.vicePresident.role}
                </div>
                <p className="text-sm text-[color:var(--color-muted)]">
                  Reach the Vice President directly on Telegram.
                </p>
              </div>
              <a
                href={`https://t.me/${club.vicePresident.telegram.replace("@", "")}`}
                className="font-mono text-sm font-semibold hover:text-[color:var(--color-primary)]"
              >
                {club.vicePresident.telegram}
              </a>
            </div>
          )}
        </div>
      </section>

      <section className="py-24 bg-white border-y border-black/5">
        <div className="container-x">
          <div className="text-xs uppercase tracking-[0.3em] text-[color:var(--color-muted)] mb-3">
            Presidents
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-12 max-w-3xl">
            The line of leadership.
          </h2>
          <ol className="space-y-3">
            {club.presidents.map((p) => (
              <li
                key={p.name + p.years}
                className="flex flex-col md:flex-row md:items-center justify-between gap-2 md:gap-10 p-6 rounded-xl border border-black/5 bg-[color:var(--color-surface)]"
              >
                <div className="font-display text-xl font-bold">{p.name}</div>
                <div className="text-[color:var(--color-muted)] font-mono text-sm">
                  {p.years}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
