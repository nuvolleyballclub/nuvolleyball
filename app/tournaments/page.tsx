import { club } from "@/content/club";

export const metadata = { title: `Tournaments — ${club.name}` };

export default function Tournaments() {
  return (
    <>
      <section className="bg-[color:var(--color-primary)] text-white py-24">
        <div className="container-x">
          <div className="text-xs uppercase tracking-[0.3em] text-[color:var(--color-accent)] mb-4">
            The competitive calendar
          </div>
          <h1 className="font-display text-4xl md:text-6xl font-bold max-w-3xl leading-tight">
            Tournaments we host. Tournaments we win.
          </h1>
        </div>
      </section>

      <section className="py-24">
        <div className="container-x">
          <div className="text-xs uppercase tracking-[0.3em] text-[color:var(--color-muted)] mb-3">
            Hosted by NUVC
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-12">
            Three signature events.
          </h2>
          <div className="grid gap-6">
            {club.tournaments.hosted.map((t) => (
              <article
                key={t.name}
                className="p-8 md:p-10 rounded-2xl bg-white border border-black/5 flex flex-col md:flex-row gap-6 md:gap-10 md:items-start"
              >
                <div className="md:w-1/3">
                  <h3 className="font-display text-2xl font-bold leading-tight">
                    {t.name}
                  </h3>
                </div>
                <p className="md:flex-1 text-[color:var(--color-muted)] leading-relaxed">
                  {t.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white border-y border-black/5">
        <div className="container-x">
          <div className="text-xs uppercase tracking-[0.3em] text-[color:var(--color-muted)] mb-3">
            On the road
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-12">
            Competed & conquered.
          </h2>
          <div className="space-y-4">
            {club.tournaments.competed.map((t) => (
              <div
                key={t.name}
                className="flex flex-col md:flex-row md:items-center justify-between gap-2 md:gap-10 p-6 rounded-xl border border-black/5"
              >
                <div className="font-display text-xl font-bold">{t.name}</div>
                <div className="text-[color:var(--color-muted)]">{t.result}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[color:var(--color-primary-dark)] text-white">
        <div className="container-x">
          <div className="text-xs uppercase tracking-[0.3em] text-[color:var(--color-accent)] mb-3">
            NU Men's Regional Tournament 2025
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-12 max-w-3xl">
            The Dream Team.
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {club.dreamTeam.map((d) => (
              <div
                key={d.title}
                className="rounded-2xl bg-white/5 border border-white/10 p-6"
              >
                <div className="text-xs uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
                  {d.title}
                </div>
                <div className="font-display text-xl font-bold mt-2">{d.player}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
