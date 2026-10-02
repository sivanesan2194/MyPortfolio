import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar, BookOpen, ExternalLink, CheckCircle2 } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import { educationData, certificationsData } from '../../data/experience';

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28 relative bg-[#090D14]/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Academic & Credentials"
          title="Education & Certifications"
          subtitle="A structured overview of my computer science education, specialized coursework, and professional credentials."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Education Timeline (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2.5 pb-3 border-b border-white/[0.08]">
              <div className="w-8 h-8 rounded-lg bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <GraduationCap className="w-4.5 h-4.5" />
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                Academic Background
              </h3>
            </div>

            <div className="relative pl-6 sm:pl-8 border-l-2 border-white/[0.08] space-y-8">
              {educationData.map((edu, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
                  className="relative group"
                >
                  {/* Glowing Node Dot */}
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4.5 h-4.5 rounded-full bg-[#080C14] border-2 border-cyan-400 group-hover:border-cyan-300 group-hover:scale-125 transition-all shadow-cyan-glow-sm" />

                  <Card className="p-4 sm:p-5 bg-gradient-to-b from-[#0E1524]/90 to-[#0A0F1D]/80 border-white/[0.08] hover:border-cyan-500/40 shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-0.5">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                      <span className="font-mono text-xs text-cyan-300 flex items-center gap-1.5 font-medium">
                        <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                        {edu.duration}
                      </span>
                      <span className="font-mono text-xs bg-cyan-950/70 text-cyan-300 border border-cyan-500/40 px-2.5 py-0.5 rounded-full w-fit font-semibold">
                        GPA: {edu.gpa}
                      </span>
                    </div>

                    <h4 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                      {edu.degree}
                    </h4>
                    <p className="text-xs sm:text-sm font-semibold text-gray-300 mb-2 mt-0.5">
                      {edu.institution}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-3.5 font-normal">
                      {edu.description}
                    </p>

                    {/* Coursework Tags */}
                    <div className="space-y-2">
                      <span className="text-xs font-mono text-gray-300 flex items-center gap-1.5 font-medium">
                        <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
                        Relevant Coursework:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {edu.coursework.map((course, cIdx) => (
                          <span
                            key={cIdx}
                            className="text-[11px] sm:text-xs font-mono px-2 py-0.5 rounded-md bg-[#080C14]/80 text-gray-300 border border-white/[0.08]"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    {edu.achievements && (
                      <div className="mt-3.5 pt-3 border-t border-white/[0.08] space-y-1">
                        {edu.achievements.map((ach, aIdx) => (
                          <div key={aIdx} className="flex items-center gap-1.5 text-xs sm:text-sm text-gray-300 font-medium">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                            <span>{ach}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2.5 pb-3 border-b border-white/[0.08]">
              <div className="w-8 h-8 rounded-lg bg-indigo-950/60 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                <Award className="w-4.5 h-4.5" />
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                Verified Certifications
              </h3>
            </div>

            <div className="space-y-4">
              {certificationsData.map((cert, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Card className="p-4 sm:p-5 bg-gradient-to-b from-[#0E1524]/90 to-[#0A0F1D]/80 border-white/[0.08] hover:border-indigo-500/40 shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-0.5">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h4 className="text-base sm:text-lg font-bold text-white">
                          {cert.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-gray-300 mt-0.5">
                          {cert.issuer} • <span className="font-mono text-cyan-300 font-medium">{cert.issueDate}</span>
                        </p>
                      </div>
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-[#080C14] border border-white/[0.08] text-gray-400 hover:text-cyan-300 hover:border-cyan-500/40 transition-colors"
                        aria-label="View credential"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>

                    <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-white/[0.08]">
                      {cert.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-[11px] sm:text-xs font-mono px-2 py-0.5 rounded-md bg-indigo-950/40 text-indigo-300 border border-indigo-500/30 font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
