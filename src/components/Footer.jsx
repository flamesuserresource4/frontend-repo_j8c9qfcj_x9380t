import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="w-full bg-[#0a0a0a] text-neutral-300 border-t border-neutral-800/70">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h4 className="text-xl font-serif text-white">Let’s build something great</h4>
            <p className="mt-1 text-neutral-400">Available for freelance work and collaborations.</p>
          </div>

          <div className="flex items-center gap-4">
            <a href="mailto:hello@example.com" className="inline-flex items-center gap-2 rounded-md border border-neutral-700/80 bg-neutral-900/60 px-4 py-2 text-sm font-medium hover:border-amber-500/60 hover:text-amber-400 transition">
              <Mail size={18} /> Email
            </a>
            <a href="#" className="p-2 rounded-full border border-neutral-700/80 hover:border-amber-500/60 hover:text-amber-400 transition" aria-label="GitHub">
              <Github size={18} />
            </a>
            <a href="#" className="p-2 rounded-full border border-neutral-700/80 hover:border-amber-500/60 hover:text-amber-400 transition" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
          </div>
        </div>

        <div className="mt-10 flex items-center justify-between text-xs text-neutral-500">
          <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
          <span className="h-px w-24 bg-gradient-to-r from-amber-500/80 to-amber-500/0" />
        </div>
      </div>
    </footer>
  );
}
