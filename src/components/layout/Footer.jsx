import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Heart } from 'lucide-react';
import { personalData } from '../../data/personal';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/[0.08] bg-[#080C14] py-12 text-gray-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/[0.06]">
          {/* Left Brand */}
          <div className="flex flex-col items-center md:items-start gap-2 text-center md:text-left">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 p-[1px]">
                <div className="w-full h-full bg-[#080C14] rounded-[10px] flex items-center justify-center font-mono font-bold text-cyan-400 text-sm">
                  &lt;/&gt;
                </div>
              </div>
              <span className="font-extrabold text-white text-lg tracking-tight">
                {personalData.name}
              </span>
            </div>
            <p className="text-sm text-gray-300 max-w-sm">
              {personalData.role} • Building modern, responsive web and mobile experiences.
            </p>
          </div>

          {/* Center Socials */}
          <div className="flex items-center gap-3">
            <a
              href={personalData.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-3 rounded-xl bg-[#0E1524] border border-white/[0.08] text-gray-300 hover:text-cyan-300 hover:border-cyan-500/50 hover:bg-[#141D30] transition-all"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={personalData.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-3 rounded-xl bg-[#0E1524] border border-white/[0.08] text-gray-300 hover:text-cyan-300 hover:border-cyan-500/50 hover:bg-[#141D30] transition-all"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={personalData.socials.email}
              aria-label="Send Email"
              className="p-3 rounded-xl bg-[#0E1524] border border-white/[0.08] text-gray-300 hover:text-cyan-300 hover:border-cyan-500/50 hover:bg-[#141D30] transition-all"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Right Back to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm font-mono text-gray-300 hover:text-cyan-300 transition-all py-2.5 px-4 rounded-xl border border-white/[0.08] hover:border-cyan-500/40 bg-[#0E1524] hover:bg-[#141D30] cursor-pointer"
            aria-label="Scroll to top"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-4 h-4 text-cyan-400" />
          </button>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-sm text-gray-300 gap-4 font-normal">
          <p>© {new Date().getFullYear()} {personalData.name}. All rights reserved.</p>
          <p className="flex items-center gap-2 font-mono text-xs sm:text-sm text-gray-400">
            <span>React</span>
            <span>•</span>
            <span>Tailwind CSS</span>
            <span>•</span>
            <span>Vite</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
