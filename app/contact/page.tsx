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
            Apply to one of three departments — Event, PR, or HR — and help run
            NUVC from behind the scenes.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container-x grid md:grid-cols-3 gap-6">
          {club.departments.map((d) => (
            <article
              key={d.name}
              className="p-8 rounded-2xl bg-white border border-black/5"
            >
              <div className="text-xs uppercase tracking-[0.3em] text-[color:var(--color-accent-dark)] mb-3">
                {d.name} Department
              </div>
              <h2 className="font-display text-2xl font-bold mb-3">
                Head: {d.head}
              </h2>
              <p className="text-[color:var(--color-muted)] leading-relaxed">
                {d.description}
              </p>
            </article>
          ))}
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
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl border border-black/5 bg-[color:var(--color-surface)]">
              <div className="text-xs uppercase tracking-widest text-[color:var(--color-muted)] mb-2">
                Email
              </div>
              <a
                href={`mailto:${club.contact.email}`}
                className="font-display text-lg font-bold hover:text-[color:var(--color-primary)] break-all"
              >
                {club.contact.email}
              </a>
            </div>
            <div className="p-6 rounded-2xl border border-black/5 bg-[color:var(--color-surface)]">
              <div className="text-xs uppercase tracking-widest text-[color:var(--color-muted)] mb-2">
                Telegram
              </div>
              <a
                href={club.contact.telegram}
                className="font-display text-lg font-bold hover:text-[color:var(--color-primary)]"
              >
                {club.contact.telegramHandle}
              </a>
            </div>
            <div className="p-6 rounded-2xl border border-black/5 bg-[color:var(--color-surface)]">
              <div className="text-xs uppercase tracking-widest text-[color:var(--color-muted)] mb-2">
                Instagram
              </div>
              <a
                href={club.contact.instagram}
                className="font-display text-lg font-bold hover:text-[color:var(--color-primary)]"
              >
                {club.contact.instagramHandle}
              </a>
            </div>
          </div>
          <p className="mt-10 text-[color:var(--color-muted)] text-sm">
            {club.contact.membership.note}
          </p>
        </div>
      </section>
    </>
  );
}
