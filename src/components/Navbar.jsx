import { Menu } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[rgba(10,10,10,0.6)] backdrop-blur-md border-b border-neutral-800/70">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="text-xl font-semibold tracking-wide text-amber-400">Your Name</a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-neutral-200">
            {[
              { href: '#home', label: 'Home' },
              { href: '#about', label: 'About' },
              { href: '#work', label: 'Work' },
              { href: '#contact', label: 'Contact' },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative transition-colors hover:text-amber-400"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-neutral-200 hover:text-amber-400 hover:bg-neutral-800/60 transition"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            <Menu size={20} />
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-2 text-neutral-200">
              <a onClick={() => setOpen(false)} href="#home" className="py-2 px-2 rounded hover:bg-neutral-800/60 hover:text-amber-400 transition">Home</a>
              <a onClick={() => setOpen(false)} href="#about" className="py-2 px-2 rounded hover:bg-neutral-800/60 hover:text-amber-400 transition">About</a>
              <a onClick={() => setOpen(false)} href="#work" className="py-2 px-2 rounded hover:bg-neutral-800/60 hover:text-amber-400 transition">Work</a>
              <a onClick={() => setOpen(false)} href="#contact" className="py-2 px-2 rounded hover:bg-neutral-800/60 hover:text-amber-400 transition">Contact</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
