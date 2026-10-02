import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, CheckCircle2, Clock, Copy, Check } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { personalData } from '../../data/personal';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null,
  });

  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: null });

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          // Web3Forms public access key — tied to sivanesan2194@gmail.com
          // Get your own free key at https://web3forms.com (takes 30 seconds)
          access_key: import.meta.env.VITE_WEB3FORMS_KEY || 'YOUR_WEB3FORMS_ACCESS_KEY',
          subject: `Portfolio Contact: ${formData.subject}`,
          from_name: formData.name,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          botcheck: '', // honeypot spam protection
        }),
      });

      const data = await response.json();

      if (data.success) {
        setStatus({ submitting: false, submitted: true, error: null });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error(data.message || 'Submission failed');
      }
    } catch (err) {
      setStatus({
        submitting: false,
        submitted: false,
        error: 'Something went wrong while sending your message. Please email me directly at sivanesan2194@gmail.com',
      });
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contact & Inquiries"
          title="Let's Build Something Exceptional"
          subtitle="Whether you have an upcoming project, an engineering role open, or simply want to connect, my inbox is always open."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Info (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-5 space-y-6"
          >
            <Card className="p-4 sm:p-6 bg-gradient-to-b from-[#0E1524]/90 to-[#0A0F1D]/80 border-white/[0.08] h-full flex flex-col justify-between shadow-lg shadow-black/20">
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                    Direct Contact Details
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 mt-1.5 leading-relaxed">
                    Prefer direct communication? Reach out via email or connect on professional networks.
                  </p>
                </div>

                {/* Email Box with One-Click Copy */}
                <div className="p-3 sm:p-4 rounded-xl bg-[#080C14]/80 border border-white/[0.08] space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-gray-300 flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-cyan-400" />
                      Email Address
                    </span>
                    <button
                      onClick={handleCopyEmail}
                      className="text-xs text-cyan-300 hover:text-cyan-200 font-mono flex items-center gap-1.5 focus-visible:outline-none cursor-pointer"
                      title="Copy email to clipboard"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-400 font-semibold">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                  <a
                    href={`mailto:${personalData.email}`}
                    className="text-sm sm:text-base font-semibold text-white hover:text-cyan-300 transition-colors block break-all font-mono"
                  >
                    {personalData.email}
                  </a>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3 text-gray-200">
                  <div className="w-8 h-8 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-cyan-400 flex-shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-sm sm:text-base font-semibold text-white">Location</p>
                    <p className="text-xs sm:text-sm text-gray-300 mt-0.5">{personalData.location}</p>
                  </div>
                </div>

                {/* Response SLA */}
                <div className="flex items-start gap-3 text-gray-200">
                  <div className="w-8 h-8 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-cyan-400 flex-shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-sm sm:text-base font-semibold text-white">Response Time</p>
                    <p className="text-xs sm:text-sm text-gray-300 mt-0.5">Typically replies within 24 hours</p>
                  </div>
                </div>
              </div>

              {/* Status Badge */}
              <div className="mt-5 pt-4 border-t border-white/[0.08]">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/40 border border-emerald-500/30">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                  </span>
                  <span className="text-xs font-mono text-emerald-300 font-medium">
                    Actively interviewing for 2025/2026 roles
                  </span>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Right Column: Interactive Form (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="lg:col-span-7"
          >
            <Card className="p-4 sm:p-6 bg-gradient-to-b from-[#0E1524]/90 to-[#0A0F1D]/80 border-white/[0.08] shadow-lg shadow-black/20">
              {status.submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-10 text-center space-y-3"
                >
                  <div className="w-14 h-14 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/20">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out. Your message has been received and I will reply as soon as possible.
                  </p>
                  <Button
                    onClick={() => setStatus({ submitting: false, submitted: false, error: null })}
                    variant="secondary"
                    size="sm"
                    className="mt-3"
                  >
                    Send Another Message
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {/* Name Field */}
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="block text-xs font-semibold text-gray-200">
                        Your Name <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Sarah Connor"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#080C14]/90 border border-white/[0.09] text-sm text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                      />
                    </div>

                    {/* Email Field */}
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="block text-xs font-semibold text-gray-200">
                        Email Address <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="sarah@company.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#080C14]/90 border border-white/[0.09] text-sm text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Subject Field */}
                  <div className="space-y-1.5">
                    <label htmlFor="subject" className="block text-xs font-semibold text-gray-200">
                      Subject <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Developer Opportunity / Project Inquiry"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#080C14]/90 border border-white/[0.09] text-sm text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                    />
                  </div>

                  {/* Message Field */}
                  <div className="space-y-1.5">
                    <label htmlFor="message" className="block text-xs font-semibold text-gray-200">
                      Message <span className="text-cyan-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Hi Sivanesan, I came across your portfolio and was impressed by your work..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#080C14]/90 border border-white/[0.09] text-sm text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors resize-none"
                    />
                  </div>

                  {status.error && (
                    <div className="p-3 rounded-xl bg-red-950/50 border border-red-500/40 text-xs text-red-300">
                      {status.error}
                    </div>
                  )}

                  <Button
                    type="submit"
                    variant="primary"
                    size="md"
                    disabled={status.submitting}
                    className="w-full justify-center text-sm font-bold py-2.5"
                    icon={Send}
                    iconPosition="right"
                  >
                    {status.submitting ? 'Sending Message...' : 'Send Message'}
                  </Button>
                </form>
              )}
            </Card>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
