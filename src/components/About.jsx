export default function About() {
  return (
    <section id="about" className="w-full bg-[#0b0b0b] text-neutral-200 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-serif tracking-tight">About</h2>
            <p className="mt-4 leading-relaxed text-neutral-400">
              I craft high-end digital experiences with a focus on clarity, motion, and detail.
              My work spans interfaces, creative web, and scalable design systems. I love solving
              complex problems and turning ideas into elegant, performant products.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="rounded-lg border border-neutral-800 bg-neutral-900/40 p-4">
                <p className="text-sm text-neutral-400">Expertise</p>
                <p className="mt-1 text-neutral-100">UI/UX, Frontend, Creative Tech</p>
              </div>
              <div className="rounded-lg border border-neutral-800 bg-neutral-900/40 p-4">
                <p className="text-sm text-neutral-400">Stack</p>
                <p className="mt-1 text-neutral-100">React, TypeScript, Three/Spline</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-xl border border-neutral-800 shadow-2xl shadow-black/40">
              <img
                src="https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1200&auto=format&fit=crop"
                alt="Studio"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="pointer-events-none absolute -bottom-6 -left-6 right-0 h-24 rounded-xl bg-gradient-to-r from-amber-500/20 to-transparent blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
