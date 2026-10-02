import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Smartphone, Zap, Cpu, CheckCircle } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import Card from '../ui/Card';
import { personalData } from '../../data/personal';

const iconMap = {
  Code2: Code2,
  Smartphone: Smartphone,
  Zap: Zap,
  Cpu: Cpu,
};

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="About Me"
          title="Passion for Engineering & Design"
          subtitle="A deeper look into my engineering philosophy, technical journey, and what drives my work every day."
        />

        {/* Narrative & Highlights Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Narrative Column with Scroll Reveal */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 p-4 sm:p-6 rounded-2xl bg-gradient-to-b from-[#0E1524]/85 to-[#0A0F1D]/75 border border-white/[0.08] backdrop-blur-xl space-y-4 text-gray-300 leading-relaxed shadow-lg shadow-black/20"
          >
            <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
              Driven by Curiosity, Engineered with Precision.
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-normal">
              I am a software engineer focused on building clean, high-performance web and mobile applications that solve real-world problems. My journey began with an obsession for understanding how pixels on a screen connect to distributed servers across the globe.
            </p>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-normal">
              Today, I specialize in the modern JavaScript/React ecosystem and native Android development with Java. Whether it's architecting reusable design systems, building Android apps, deploying on AWS, or integrating RESTful APIs with relational and NoSQL databases, I take pride in crafting software that users love and developers enjoy maintaining.
            </p>
            <div className="pt-4 border-t border-white/[0.08]">
              <ul className="space-y-2.5 font-medium text-xs sm:text-sm text-gray-200">
                <li className="flex items-center gap-2.5 text-cyan-300">
                  <div className="w-5 h-5 rounded-full bg-cyan-950/60 border border-cyan-500/40 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-3.5 h-3.5 text-cyan-400" />
                  </div>
                  <span>Obsessed with responsive, accessible user interfaces</span>
                </li>
                <li className="flex items-center gap-2.5 text-cyan-300">
                  <div className="w-5 h-5 rounded-full bg-cyan-950/60 border border-cyan-500/40 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-3.5 h-3.5 text-cyan-400" />
                  </div>
                  <span>Strong computer science fundamentals & DSA</span>
                </li>
                <li className="flex items-center gap-2.5 text-cyan-300">
                  <div className="w-5 h-5 rounded-full bg-cyan-950/60 border border-cyan-500/40 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-3.5 h-3.5 text-cyan-400" />
                  </div>
                  <span>Fast learner who thrives in collaborative teams</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Highlights 4 Cards Grid with Staggered Scroll Reveal */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
            {personalData.aboutCards.map((card, idx) => {
              const IconComponent = iconMap[card.icon] || Code2;
              const accentStyles = [
                { bg: 'bg-cyan-950/50', border: 'border-cyan-500/40', text: 'text-cyan-400', hover: 'group-hover:border-cyan-400/60' },
                { bg: 'bg-emerald-950/50', border: 'border-emerald-500/40', text: 'text-emerald-400', hover: 'group-hover:border-emerald-400/60' },
                { bg: 'bg-sky-950/50', border: 'border-sky-500/40', text: 'text-sky-400', hover: 'group-hover:border-sky-400/60' },
                { bg: 'bg-indigo-950/50', border: 'border-indigo-500/40', text: 'text-indigo-400', hover: 'group-hover:border-indigo-400/60' },
              ][idx % 4];

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Card className="h-full flex flex-col justify-between p-4 sm:p-5 bg-gradient-to-b from-[#0E1524]/90 to-[#0A0F1D]/80 border-white/[0.08] hover:border-cyan-500/40 group transition-all duration-300 hover:-translate-y-0.5">
                    <div>
                      <div className={`w-10 h-10 rounded-xl ${accentStyles.bg} border ${accentStyles.border} flex items-center justify-center ${accentStyles.text} mb-3 transition-transform group-hover:scale-105 shadow-sm`}>
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <h4 className="text-base sm:text-lg font-bold text-white mb-2 tracking-tight group-hover:text-cyan-300 transition-colors">
                        {card.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-normal">
                        {card.description}
                      </p>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
