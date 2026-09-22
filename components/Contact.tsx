"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MessageSquare, Send, CheckCircle2, AlertCircle, Clock } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa6";
import { portfolioData } from "@/data/portfolioData";

export default function Contact() {
  const { personal } = portfolioData;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errorMessage) setErrorMessage("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage("Mohon lengkapi nama, email, dan pesan Anda.");
      return;
    }

    // Email regex check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMessage("Format alamat email tidak valid.");
      return;
    }

    setIsSubmitting(true);
    setErrorMessage("");

    // Simulate submission with prompt feedback
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 800);
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center py-20 md:py-28 bg-[#050505] bg-grid-black text-white relative border-b border-zinc-800/80"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 w-full">

        {/* Section Header with Big Editorial Headline */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-zinc-900 text-orange-400 border border-zinc-800 mb-4">
            <Mail className="w-3.5 h-3.5" />
            Hubungi Saya
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-5xl font-extrabold tracking-tight text-white mb-4 leading-tight">
            Mari Terhubung & Berkolaborasi
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-xl leading-relaxed">
            Terbuka untuk peluang kerja sama, diskusi proyek, atau sekadar bertukar pikiran seputar software engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Kolom Kiri: Direct Info Cards & Quick Links */}
          <div className="lg:col-span-5 space-y-3.5">
            {/* WhatsApp Direct Card */}
            <a
              href={personal.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-3.5 p-4 rounded-2xl bg-[#0e0f12] border border-zinc-800 hover:border-emerald-500/50 hover:bg-[#131418] transition-all"
            >
              <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 group-hover:scale-105 transition-transform shrink-0">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-zinc-400 font-medium">WhatsApp</div>
                <div className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors">
                  {personal.phone}
                </div>
                <div className="text-[11px] text-zinc-500 mt-0.5">Kirim pesan instan (atau Tersedia untuk obrolan santai/cepat)</div>
              </div>
            </a>

            {/* Email Card */}
            <a
              href={`mailto:${personal.email}`}
              className="group flex items-start gap-3.5 p-4 rounded-2xl bg-[#0e0f12] border border-zinc-800 hover:border-orange-500/50 hover:bg-[#131418] transition-all"
            >
              <div className="p-2.5 rounded-xl bg-orange-500/10 text-[#ff5500] border border-orange-500/20 group-hover:scale-105 transition-transform shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-zinc-400 font-medium">Email</div>
                <div className="text-sm font-bold text-white group-hover:text-[#ff5500] transition-colors">
                  {personal.email}
                </div>
                <div className="text-[11px] text-zinc-500 mt-0.5">Untuk tawaran kerja atau kerja sama profesional</div>
              </div>
            </a>

            {/* Availability & Socials Card */}
            <div className="p-5 rounded-2xl bg-[#0e0f12] border border-zinc-800">
              <div className="flex items-center gap-2 text-xs font-bold text-zinc-200 mb-2.5 uppercase tracking-wide">
                <Clock className="w-4 h-4 text-[#ff5500]" />
                <span>Ketersediaan Waktu</span>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                Senin – Jumat: 09:00 - 18:00 WIB. Siap berdiskusi untuk posisi full-time, proyek lepas, maupun konsultasi teknis.
              </p>

              <div className="flex items-center gap-2 pt-3.5 border-t border-zinc-800">
                <a
                  href={personal.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-full text-xs font-semibold text-zinc-200 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 transition-colors"
                >
                  <FaLinkedin className="w-3.5 h-3.5 text-sky-400" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={personal.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-full text-xs font-semibold text-zinc-200 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 transition-colors"
                >
                  <FaGithub className="w-3.5 h-3.5 text-zinc-200" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>

          {/* Kolom Kanan: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#0e0f12] border border-zinc-800 relative shadow-xl">
              <h3 className="text-lg font-bold text-white mb-1">
                Kirim Pesan Langsung
              </h3>
              <p className="text-xs text-zinc-400 mb-6">
                Tinggalkan pesan di bawah dan saya akan membalasnya sesegera mungkin.
              </p>

              {/* Toast Feedback Message */}
              <AnimatePresence>
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mb-5 p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-emerald-300">Pesan Berhasil Terkirim!</div>
                      <div className="text-[11px] text-zinc-400 mt-0.5">
                        Terima kasih telah menghubungi saya. Saya akan meninjau pesan Anda dan membalasnya secepat mungkin.
                      </div>
                      <button
                        onClick={() => setSubmitted(false)}
                        className="text-[10px] text-emerald-400 hover:underline mt-1.5 inline-block font-semibold"
                      >
                        Kirim pesan lain
                      </button>
                    </div>
                  </motion.div>
                )}

                {errorMessage && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mb-5 p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-center gap-2 text-xs text-rose-300"
                  >
                    <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
                    <span>{errorMessage}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* The Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label htmlFor="name" className="block text-[11px] font-semibold text-zinc-300 mb-1.5">
                      Nama Lengkap <span className="text-[#ff5500]">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Contoh: Rian Pratama"
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-zinc-900 border border-zinc-700/80 text-white placeholder-zinc-500 focus:outline-none focus:border-[#ff5500] focus:ring-1 focus:ring-[#ff5500] transition-colors"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-[11px] font-semibold text-zinc-300 mb-1.5">
                      Alamat Email <span className="text-[#ff5500]">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="nama@perusahaan.com"
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-zinc-900 border border-zinc-700/80 text-white placeholder-zinc-500 focus:outline-none focus:border-[#ff5500] focus:ring-1 focus:ring-[#ff5500] transition-colors"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-[11px] font-semibold text-zinc-300 mb-1.5">
                    Subjek / Topik Diskusi
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Contoh: Diskusi Proyek Backend / Rekrutmen Software Engineer"
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-zinc-900 border border-zinc-700/80 text-white placeholder-zinc-500 focus:outline-none focus:border-[#ff5500] focus:ring-1 focus:ring-[#ff5500] transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-[11px] font-semibold text-zinc-300 mb-1.5">
                    Pesan <span className="text-[#ff5500]">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Ceritakan kebutuhan proyek, pertanyaan, atau peluang kerja sama Anda di sini..."
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-zinc-900 border border-zinc-700/80 text-white placeholder-zinc-500 focus:outline-none focus:border-[#ff5500] focus:ring-1 focus:ring-[#ff5500] transition-colors resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold text-white bg-[#ff5500] hover:bg-[#e04b00] disabled:bg-zinc-800 disabled:text-zinc-600 rounded-full shadow-lg shadow-orange-500/25 transition-all hover:scale-[1.01] active:scale-[0.99]"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Mengirimkan Pesan...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Kirim Pesan Sekarang</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
