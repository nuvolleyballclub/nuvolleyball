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
            The board that runs day-to-day operations, coordinates tournaments,
            and represents NU Volleyball Club across the university.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container-x grid md:grid-cols-2 gap-10">
          {club.leadership.map((p) => (
            <article
              key={p.telegram}
              className="rounded-2xl overflow-hidden bg-white border border-black/5"
            >
              <div className="relative aspect-[4/5] bg-[color:var(--color-primary-dark)]">
                <Image
                  src={p.photo}
                  alt={p.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 flex items-center justify-center text-white/30 text-sm">
                  Photo coming soon
                </div>
              </div>
              <div className="p-8">
                <div className="text-xs uppercase tracking-[0.3em] text-[color:var(--color-accent-dark)] mb-2">
                  {p.role}
                </div>
                <h2 className="font-display text-2xl font-bold">{p.name}</h2>
                <a
                  href={`https://t.me/${p.telegram.replace("@", "")}`}
                  className="text-sm text-[color:var(--color-muted)] font-mono hover:text-[color:var(--color-primary)]"
                >
                  {p.telegram}
                </a>
                <p className="mt-4 text-[color:var(--color-muted)] leading-relaxed">
                  {p.bio}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
