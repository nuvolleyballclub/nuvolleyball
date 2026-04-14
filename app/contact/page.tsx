import { club } from "@/content/club";

export const metadata = { title: `Join & Contact — ${club.name}` };

export default function Contact() {
  return (
    <>
      <section className="bg-[color:var(--color-primary)] text-white py-24">
        <div className="container-x">
          <div className="text-xs uppercase tracking-[0.3em] text-[color:var(--color-accent)] mb-4">
            Join the club
          </div>
          <h1 className="font-display text-4xl md:text-6xl font-bold max-w-3xl leading-tight">
            More than players. A whole community.
          </h1>
          <p className="text-white/70 mt-6 text-lg max-w-2xl">
            Whether you're a setter, a spiker, or the person behind the camera —
            there's a role for you.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container-x grid md:grid-cols-2 gap-10">
          <article className="p-8 rounded-2xl bg-white border border-black/5">
            <div className="text-xs uppercase tracking-[0.3em] text-[color:var(--color-accent-dark)] mb-4">
              Player tryouts
            </div>
            <h2 className="font-display text-2xl font-bold mb-6">On the court</h2>
            <div className="space-y-4 text-[color:var(--color-muted)]">
              <div>
                <div className="font-semibold text-[color:var(--color-ink)] mb-1">
                  Women's team
                </div>
                <p>{club.tryouts.women}</p>
              </div>
              <div>
                <div className="font-semibold text-[color:var(--color-ink)] mb-1">
                  Men's team
                </div>
                <p>{club.tryouts.men}</p>
              </div>
              <div className="pt-4 border-t border-black/5">
                <div className="font-semibold text-[color:var(--color-ink)] mb-1">
                  Where
                </div>
                <p>{club.tryouts.location}</p>
              </div>
            </div>
          </article>

          <article className="p-8 rounded-2xl bg-[color:var(--color-primary)] text-white">
            <div className="text-xs uppercase tracking-[0.3em] text-[color:var(--color-accent)] mb-4">
              Non-player roles
            </div>
            <h2 className="font-display text-2xl font-bold mb-6">Behind the scenes</h2>
            <p className="text-white/70 mb-6 leading-relaxed">
              Every tournament, every reel, every poster is made by students like you.
              We recruit year-round for:
            </p>
            <ul className="space-y-3">
              {club.clubRoles.map((r) => (
                <li key={r} className="flex items-center gap-3 text-white">
                  <span className="size-1.5 rounded-full bg-[color:var(--color-accent)]" />
                  {r}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="py-24 bg-white border-y border-black/5">
        <div className="container-x">
          <div className="text-xs uppercase tracking-[0.3em] text-[color:var(--color-muted)] mb-3">
            Get in touch
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-12">
            Contact us.
          </h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-6">
              <div>
                <div className="text-xs uppercase tracking-widest text-[color:var(--color-muted)] mb-1">
                  Email
                </div>
                <a
                  href={`mailto:${club.contact.email}`}
                  className="font-display text-2xl font-bold hover:text-[color:var(--color-primary)]"
                >
                  {club.contact.email}
                </a>
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-[color:var(--color-muted)] mb-1">
                  Telegram channel
                </div>
                <a
                  href={club.contact.telegram}
                  className="font-display text-xl font-bold hover:text-[color:var(--color-primary)]"
                >
                  {club.contact.telegramHandle}
                </a>
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-[color:var(--color-muted)] mb-1">
                  Instagram
                </div>
                <a
                  href={club.contact.instagram}
                  className="font-display text-xl font-bold hover:text-[color:var(--color-primary)]"
                >
                  {club.contact.instagramHandle}
                </a>
              </div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest text-[color:var(--color-muted)] mb-4">
                Specific inquiries
              </div>
              <div className="space-y-3">
                {club.contact.inquiries.map((i, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between gap-4 p-4 rounded-xl border border-black/5"
                  >
                    <div className="text-sm text-[color:var(--color-muted)]">
                      {i.scope}
                    </div>
                    <a
                      href={`https://t.me/${i.handle.replace("@", "")}`}
                      className="font-mono text-sm font-semibold hover:text-[color:var(--color-primary)]"
                    >
                      {i.handle}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
