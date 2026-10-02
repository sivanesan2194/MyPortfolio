import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, CheckCircle2, Layers } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import Button from '../ui/Button';
import { projectsData } from '../../data/projects';

const CATEGORIES = ["All", "Android", "WebApp",  "Tools"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All"
    ? projectsData
    : projectsData.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Flagship Work"
          title="Featured Engineering Projects"
          subtitle="Explore selected applications designed and built from the ground up, highlighting full-stack architectures, clean interfaces, and scalable engineering."
        />

        {/* Category Filter Tabs with Segmented Pill Design */}
        <div className="flex items-center justify-center mb-10 sm:mb-14">
          <div className="inline-flex p-1.5 rounded-full bg-[#0E1524]/90 border border-white/[0.08] backdrop-blur-xl gap-1.5 shadow-lg shadow-black/25">
            {CATEGORIES.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`relative px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer select-none ${
                    isActive
                      ? 'bg-cyan-400 text-gray-950 font-bold shadow-md shadow-cyan-500/25'
                      : 'text-gray-300 hover:text-white hover:bg-white/[0.06]'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Responsive Projects Grid: 1 col on mobile, 2 col on md/lg */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-7 sm:gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="h-full"
              >
                <Card className="h-full flex flex-col justify-between p-0 overflow-hidden bg-gradient-to-b from-[#0E1524] to-[#0A0F1D] border-white/[0.08] hover:border-cyan-500/40 group shadow-xl shadow-black/25 transition-all duration-300 hover:-translate-y-1">
                  
                  {/* Card Visual Header Banner */}
                  <div className={`h-40 sm:h-48 w-full bg-gradient-to-br ${project.gradient} relative p-4 sm:p-5 flex flex-col justify-between border-b border-white/[0.08] overflow-hidden`}>
                    {/* Background abstract grid pattern */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:1.5rem_1.5rem]" />
                    <div className="absolute -bottom-10 -right-10 w-44 h-44 bg-white/[0.03] rounded-full blur-2xl pointer-events-none" />
                    
                    <div className="relative z-10 flex items-center justify-between">
                      <Badge variant="cyan" size="sm" icon={Layers} className="text-xs px-2.5 py-0.5 font-semibold">
                        {project.category}
                      </Badge>
                      {project.featured && (
                        <span className="font-mono text-xs bg-emerald-950/70 text-emerald-300 border border-emerald-500/40 px-2.5 py-0.5 rounded-full font-semibold flex items-center gap-1.5 shadow-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          Flagship
                        </span>
                      )}
                    </div>

                    <div className="relative z-10">
                      <h4 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                        {project.title.split(' - ')[0]}
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-200 line-clamp-1 mt-1 font-medium">
                        {project.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-4 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      {/* Description - comfortable font size */}
                      <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-3.5 font-normal">
                        {project.description}
                      </p>

                      {/* Problem & Solution Callout - comfortable font size */}
                      <div className="p-3 rounded-xl bg-[#080C14]/80 border border-white/[0.07] text-xs sm:text-sm text-gray-300 leading-relaxed mb-3.5">
                        <strong className="text-cyan-300 font-mono font-semibold">Impact: </strong>
                        <span>{project.problemSolution}</span>
                      </div>

                      {/* Highlights - comfortable font size */}
                      <div className="grid grid-cols-2 gap-2 mb-3.5">
                        {project.highlights.map((highlight, hIdx) => (
                          <div key={hIdx} className="flex items-center gap-1.5 text-xs sm:text-sm text-gray-300 font-medium">
                            <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                            <span className="truncate">{highlight}</span>
                          </div>
                        ))}
                      </div>

                      {/* Tech Stack Pills - comfortable size */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {project.techStack.map((tech) => (
                          <Badge key={tech} variant="neutral" size="sm" className="text-[11px] sm:text-xs px-2 py-0.5">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Action Links */}
                    <div className="pt-4 border-t border-white/[0.08] flex items-center gap-2.5">
                      <Button
                        href={project.liveDemoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="primary"
                        size="sm"
                        icon={ExternalLink}
                        iconPosition="right"
                        className="flex-1 text-xs sm:text-sm font-semibold py-2"
                      >
                        Live Demo
                      </Button>
                      <Button
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="secondary"
                        size="sm"
                        icon={Github}
                        iconPosition="left"
                        className="flex-1 text-xs sm:text-sm font-semibold py-2"
                      >
                        Source Code
                      </Button>
                    </div>

                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
