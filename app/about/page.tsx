'use client';
import React from 'react';
import { Code, Server, Database, Globe, MapPin, Briefcase } from 'lucide-react';
import { MainNav } from "@/components/main-nav";
import { SkillBar } from "@/components/skill-bar";
import Image from 'next/image';
import { motion } from "framer-motion";
import TransitionEffect from '@/components/transition-effect';

const EASE = [0.16, 1, 0.3, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: EASE },
  }),
};

const skills = [
  { name: 'JavaScript / TypeScript', percentage: 95, icon: <Code className="w-4 h-4" /> },
  { name: 'React.js / Next.js', percentage: 90, icon: <Code className="w-4 h-4" /> },
  { name: 'Node.js / Express', percentage: 90, icon: <Server className="w-4 h-4" /> },
  { name: 'HTML / CSS / Tailwind', percentage: 100, icon: <Globe className="w-4 h-4" /> },
  { name: 'MongoDB / MySQL', percentage: 95, icon: <Database className="w-4 h-4" /> },
  { name: 'REST APIs / Integration', percentage: 90, icon: <Server className="w-4 h-4" /> },
];

export default function About() {
  return (
    <>
      <div className="min-h-screen bg-[#0A0A0B] text-[#EDEDED]">
        <TransitionEffect />
        <MainNav />

        <main className="pt-16">
          <section className="py-24 px-6 md:px-8">
            <div className="max-w-6xl mx-auto space-y-24">

              {/* ── Section header ──────────────────────────────────── */}
              <div>
                <motion.p
                  className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  About
                </motion.p>
                <div className="overflow-hidden">
                  <motion.h1
                    className="text-5xl md:text-7xl font-bold tracking-[-0.03em] leading-[0.95] text-[#EDEDED]"
                    initial={{ y: '110%' }}
                    animate={{ y: 0 }}
                    transition={{ delay: 0.3, duration: 0.7, ease: EASE }}
                  >
                    Full-Stack<br />Developer
                  </motion.h1>
                </div>
                <motion.div
                  className="h-px w-12 bg-primary mt-6"
                  initial={{ scaleX: 0, originX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.7, duration: 0.5, ease: EASE }}
                />
              </div>

              {/* ── Bio + Image ─────────────────────────────────────── */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                <div className="space-y-8">
                  <motion.div
                    className="glass-card rounded-md p-6 space-y-4"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={0}
                  >
                    <p className="text-[#A1A1AA] leading-relaxed">
                      Passionate full-stack developer with hands-on experience building production web applications
                      from the ground up. My journey started with an internship at eWeblink Web Design & Development,
                      where I sharpened my skills in front-end development and web architecture.
                    </p>
                  </motion.div>

                  <motion.div
                    className="glass-card rounded-md p-6"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={1}
                  >
                    <p className="text-[#A1A1AA] leading-relaxed">
                      Currently working as a freelance full-stack developer, architecting and shipping applications
                      with Node.js, Next.js, MongoDB, and REST APIs. Focused on performance, clean code, and
                      delivering measurable results for real-world users.
                    </p>
                  </motion.div>

                  {/* Meta badges */}
                  <motion.div
                    className="flex flex-wrap gap-3"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={2}
                  >
                    {[
                      { icon: <MapPin className="h-3.5 w-3.5" />, label: 'New Delhi, India' },
                      { icon: <Briefcase className="h-3.5 w-3.5" />, label: 'Open to Opportunities' },
                    ].map((b) => (
                      <span
                        key={b.label}
                        className="flex items-center gap-1.5 text-xs font-medium text-[#A1A1AA] border border-white/10 px-3 py-1.5 rounded-md"
                      >
                        <span className="text-primary">{b.icon}</span>
                        {b.label}
                      </span>
                    ))}
                  </motion.div>
                </div>

                {/* Image */}
                <motion.div
                  className="relative"
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, ease: EASE }}
                >
                  <div className="relative w-full aspect-square rounded-md overflow-hidden border border-white/10">
                    <Image
                      src="/about.jpg"
                      alt="Developer workspace"
                      fill
                      className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B]/50 to-transparent pointer-events-none" />
                  </div>
                </motion.div>
              </div>

              {/* ── Skills ──────────────────────────────────────────── */}
              <div>
                <motion.div
                  className="mb-12"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: EASE }}
                >
                  <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-3">Expertise</p>
                  <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.03em] text-[#EDEDED]">Technical Skills</h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {skills.map((skill, i) => (
                    <motion.div
                      key={skill.name}
                      className="glass-card rounded-md p-5 hover:border-white/20 transition-colors"
                      variants={fadeUp}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      custom={i}
                    >
                      <div className="flex items-center gap-2 mb-3 text-primary">
                        {skill.icon}
                        <span className="text-sm font-medium text-[#EDEDED]">{skill.name}</span>
                      </div>
                      <SkillBar name={skill.name} percentage={skill.percentage} />
                    </motion.div>
                  ))}
                </div>
              </div>

            </div>
          </section>
        </main>
      </div>
    </>
  );
}
