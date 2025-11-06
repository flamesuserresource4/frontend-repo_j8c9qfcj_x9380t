import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full bg-[#0a0a0a] text-neutral-100 flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 py-28 w-full">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-6xl font-serif tracking-tight leading-tight text-white">
            Your Name
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-neutral-300">
            Creative Developer • Designer • Problem Solver
          </p>

          <div className="mt-8 flex items-center gap-4">
            <a
              href="#work"
              className="inline-flex items-center rounded-md bg-amber-500 px-5 py-3 text-sm font-semibold text-black shadow-sm transition hover:bg-amber-400"
            >
              View Work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-md border border-neutral-700/80 bg-neutral-900/60 px-5 py-3 text-sm font-semibold text-neutral-100 transition hover:border-amber-500/60 hover:text-amber-400"
            >
              Contact
            </a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/40 via-[#0a0a0a]/40 to-[#0a0a0a]" />
    </section>
  );
}
