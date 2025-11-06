import { motion } from 'framer-motion';

const items = [
  {
    title: 'E-commerce Redesign',
    tag: 'UI/UX',
    img: 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Interactive Dashboard',
    tag: 'Frontend',
    img: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Brand Identity',
    tag: 'Branding',
    img: 'https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: '3D Web Experience',
    tag: 'Creative Tech',
    img: 'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1200&auto=format&fit=crop',
  },
];

export default function Portfolio() {
  return (
    <section id="work" className="relative w-full bg-[#0b0b0b] text-neutral-100 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl sm:text-4xl font-serif tracking-tight">Selected Work</h2>
            <p className="mt-2 text-neutral-400">A curated selection of projects and experiments.</p>
          </div>
          <span className="hidden sm:inline-block h-px w-32 bg-gradient-to-r from-amber-500/80 to-amber-500/0" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <motion.article
              key={item.title}
              className="group relative overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/40"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-90" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="inline-flex items-center rounded-full border border-amber-500/40 bg-black/40 px-3 py-1 text-xs text-amber-400">
                  {item.tag}
                </div>
                <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
