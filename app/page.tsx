'use client';
import React from 'react';
import { Github, Mail, Linkedin, FileDown, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import { motion } from "framer-motion";
import Link from 'next/link';
import { MainNav } from '../components/main-nav';
import TransitionEffect from "@/components/transition-effect";

const EASE = [0.16, 1, 0.3, 1] as const;

const socials = [
  { icon: <Github className="h-5 w-5" />, href: 'https://github.com/adityasingh7402', label: 'GitHub' },
  { icon: <Linkedin className="h-5 w-5" />, href: 'https://www.linkedin.com/in/aditya-kumar-04412b170/', label: 'LinkedIn' },
  { icon: <Mail className="h-5 w-5" />, href: 'mailto:adityasingh7402@gmail.com', label: 'Email' },
];

export default function Home() {
  return (
    <>
      <TransitionEffect />
      <div className="min-h-screen bg-[#0A0A0B] text-[#EDEDED]">
        <MainNav />

        {/* Fixed left social rail — desktop only */}
        <motion.div
          className="hidden md:flex fixed left-6 top-1/2 -translate-y-1/2 z-40 flex-col items-center gap-5"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.6, ease: EASE }}
        >
          {socials.map((s, i) => (
            <motion.a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="text-[#A1A1AA] hover:text-primary transition-colors duration-200"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 + i * 0.08 }}
            >
              {s.icon}
            </motion.a>
          ))}
          <div className="w-px h-16 bg-white/10 mt-2" />
        </motion.div>

        <main className="pt-16">
          {/* ── Hero ──────────────────────────────────────────────── */}
          <section className="min-h-[calc(100vh-4rem)] flex items-center">
            <div className="max-w-6xl mx-auto w-full px-6 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-16 items-center py-20">

              {/* Left: copy */}
              <div className="flex flex-col gap-6">
                {/* Label */}
                <motion.p
                  className="text-xs font-semibold tracking-[0.2em] uppercase text-primary"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5, ease: EASE }}
                >
                  Full-Stack Developer
                </motion.p>

                {/* H1 — text mask reveal */}
                <div className="overflow-hidden">
                  <motion.h1
                    className="text-6xl md:text-8xl font-bold tracking-[-0.04em] leading-[0.95] text-[#EDEDED]"
                    initial={{ y: '110%' }}
                    animate={{ y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8, ease: EASE }}
                  >
                    Aditya<br />Kumar
                  </motion.h1>
                </div>

                {/* Divider line */}
                <motion.div
                  className="h-px w-16 bg-primary"
                  initial={{ scaleX: 0, originX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.7, duration: 0.5, ease: EASE }}
                />

                {/* Bio */}
                <motion.p
                  className="text-base md:text-lg text-[#A1A1AA] leading-relaxed max-w-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6, ease: EASE }}
                >
                  Building high-performance, scalable web applications end-to-end.
                  From architecting APIs to shipping polished UIs — precision at every layer.
                </motion.p>

                {/* CTAs */}
                <motion.div
                  className="flex flex-wrap gap-4 mt-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.75, duration: 0.5, ease: EASE }}
                >
                  <Button
                    size="lg"
                    className="bg-primary text-background font-semibold tracking-wide rounded-md hover:bg-primary/90 transition-colors gap-2 px-6"
                    asChild
                  >
                    <Link href="/projects">
                      View Projects
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white/10 text-[#EDEDED] hover:bg-white/5 hover:border-white/20 rounded-md tracking-wide gap-2 px-6"
                    asChild
                  >
                    <a href="/Aditya_Resume.pdf" download>
                      Resume
                      <FileDown className="h-4 w-4" />
                    </a>
                  </Button>
                </motion.div>

                {/* Mobile socials */}
                <motion.div
                  className="flex md:hidden gap-6 mt-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9 }}
                >
                  {socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="text-[#A1A1AA] hover:text-primary transition-colors"
                    >
                      {s.icon}
                    </a>
                  ))}
                </motion.div>
              </div>

              {/* Right: profile image */}
              <motion.div
                className="relative w-full max-w-sm mx-auto md:mx-0 md:ml-auto"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.8, ease: EASE }}
              >
                {/* Subtle glow */}
                <div className="absolute inset-0 rounded-md bg-primary/10 blur-2xl scale-105 pointer-events-none" />
                <div className="relative aspect-square w-full rounded-md overflow-hidden border border-white/10">
                  <Image
                    src="./profile2.png"
                    alt="Aditya Kumar"
                    fill
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                    priority
                  />
                  {/* Subtle overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B]/60 to-transparent pointer-events-none" />
                </div>
              </motion.div>
            </div>
          </section>
        </main>

        {/* ── Footer ──────────────────────────────────────────────── */}
        <footer className="border-t border-white/[0.06] py-8">
          <div className="max-w-6xl mx-auto px-6 md:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm font-semibold tracking-widest uppercase text-[#EDEDED]">Aditya Kumar</p>
            <div className="flex gap-8">
              {[
                { href: '/', label: 'Home' },
                { href: '/about', label: 'About' },
                { href: '/projects', label: 'Projects' },
                { href: '/contact', label: 'Contact' },
              ].map((l) => (
                <Link
                  key={l.label}
                  href={l.href}
                  className="text-xs tracking-widest uppercase text-[#A1A1AA] hover:text-primary transition-colors"
                >
                  {l.label}
                </Link>
              ))}
            </div>
            <p className="text-xs text-[#A1A1AA]">
              © {new Date().getFullYear()} Aditya Kumar
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}

