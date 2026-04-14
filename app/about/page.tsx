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
            A volleyball home for every NU student.
          </h1>
        </div>
      </section>

      <section className="py-24">
        <div className="container-x grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-lg leading-relaxed text-[color:var(--color-ink)]">
              {club.description}
            </p>
            <p className="mt-6 text-lg leading-relaxed text-[color:var(--color-muted)]">
              We field competitive men's and women's teams, host three annual
              tournaments, and partner with NU organizations to give back to the
              community through charity volleyball events.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-[color:var(--color-muted)]">
              Whether you want to spike in front of a packed Sports Center,
              manage our social channels, film our matches, or organize
              campus-wide tournaments — there's a place on this team for you.
            </p>
          </div>
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-black/5">
            <Image src="/photos/03.jpg" alt="" fill className="object-cover" sizes="50vw" />
          </div>
        </div>
      </section>

      <section className="py-16 bg-white border-y border-black/5">
        <div className="container-x">
          <div className="text-xs uppercase tracking-[0.3em] text-[color:var(--color-muted)] mb-6">
            Our home
          </div>
          <div className="flex flex-wrap items-end gap-6 justify-between">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold">
                {club.venue.name}
              </h2>
              <p className="text-[color:var(--color-muted)] mt-1">
                {club.venue.location}
              </p>
            </div>
            <p className="text-[color:var(--color-muted)] max-w-md">
              Every tournament, every training, every match we host happens in the
              Multifunctional Hall at Nazarbayev University's Sports Center.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-x">
          <div className="text-xs uppercase tracking-[0.3em] text-[color:var(--color-muted)] mb-3">
            Partners
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-12">
            We build alongside.
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {club.partners.map((p) => (
              <div
                key={p.name}
                className="p-8 rounded-2xl border border-black/5 bg-white flex items-center justify-between gap-6"
              >
                <div>
                  <div className="font-display text-xl font-bold">{p.name}</div>
                  <div className="text-sm text-[color:var(--color-muted)] mt-1 font-mono">
                    {p.handle}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
