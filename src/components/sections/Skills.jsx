import React from 'react';
import { motion } from 'framer-motion';
import {
  Code, Atom, Palette, Layout, Paintbrush, Sparkles,
  Server, Cpu, Globe, Database, Table, Flame,
  GitBranch, Zap, Send, Terminal, Cloud, TerminalSquare,
  Binary, Smartphone, Boxes, Gauge, ShieldCheck, CheckCircle
} from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import { skillsData } from '../../data/skills';

const iconMap = {
  Atom, Code, Palette, Layout, Paintbrush, Sparkles,
  Server, Cpu, Globe, Database, Table, Flame,
  GitBranch, Zap, Send, Terminal, Cloud, TerminalSquare,
  Binary, Smartphone, Boxes, Gauge, ShieldCheck, CheckCircle
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28 relative bg-[#090D14]/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Technical Proficiency"
          title="Skills & Core Competencies"
          subtitle="A comprehensive breakdown of tools, frameworks, and engineering principles I utilize to build modern software solutions."
        />

        {/* Categorized Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillsData.map((category, catIdx) => {
            const isFullWidth = catIdx === skillsData.length - 1; // Core Competencies spans full width for balanced bento
            return (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: catIdx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={isFullWidth ? "col-span-1 md:col-span-2" : "col-span-1"}
              >
                <Card className="h-full flex flex-col justify-between p-4 sm:p-6 bg-gradient-to-b from-[#0E1524]/90 to-[#0A0F1D]/80 border-white/[0.08] hover:border-cyan-500/40 shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-0.5">
                  <div>
                    {/* Category Title & Summary - comfortable font size */}
                    <div className="flex items-center justify-between pb-3 border-b border-white/[0.07]">
                      <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                        {category.category}
                      </h3>
                      <span className="font-mono text-xs text-cyan-300 font-semibold bg-cyan-950/70 px-2.5 py-0.5 rounded-full border border-cyan-500/40 shadow-cyan-glow-sm">
                        {category.skills.length} Skills
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-300 mt-2.5 mb-4 font-normal">
                      {category.description}
                    </p>

                    {/* Skills Grid inside Category */}
                    <div className={`grid gap-2.5 ${
                      isFullWidth 
                        ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' 
                        : 'grid-cols-1 sm:grid-cols-2'
                    }`}>
                      {category.skills.map((skill) => {
                        const IconComponent = iconMap[skill.icon] || Code;
                        
                        const levelColorMap = {
                          Expert: 'text-emerald-400 bg-emerald-950/50 border-emerald-500/40',
                          Advanced: 'text-cyan-300 bg-cyan-950/50 border-cyan-500/40',
                          Strong: 'text-sky-300 bg-sky-950/50 border-sky-500/40',
                          Intermediate: 'text-indigo-300 bg-indigo-950/50 border-indigo-500/40',
                        };
                        const badgeStyle = levelColorMap[skill.level] || 'text-gray-400 bg-white/[0.04] border-white/[0.08]';

                        return (
                          <div
                            key={skill.name}
                            className="flex items-center justify-between p-2.5 rounded-xl bg-[#080C14]/75 border border-white/[0.07] hover:border-cyan-500/40 hover:bg-[#0E1524] transition-all duration-200 group"
                          >
                            <div className="flex items-center gap-2.5 min-w-0">
                              <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-cyan-400 group-hover:text-cyan-300 group-hover:scale-105 transition-all flex-shrink-0">
                                <IconComponent className="w-4 h-4" />
                              </div>
                              <span className="text-xs sm:text-sm font-semibold text-gray-200 truncate group-hover:text-white transition-colors">
                                {skill.name}
                              </span>
                            </div>
                            <span className={`text-[11px] font-mono px-2 py-0.5 rounded-md border font-semibold flex-shrink-0 ml-2 ${badgeStyle}`}>
                              {skill.level}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
