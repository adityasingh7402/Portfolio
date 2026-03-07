'use client';
import React from 'react';
import TransitionEffect from '@/components/transition-effect';
import { MainNav } from "@/components/main-nav";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';

const EASE = [0.16, 1, 0.3, 1] as const;

interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
  liveUrl: string;
  githubUrl?: string;
  span?: string;
}

const projects: Project[] = [
  {
    title: 'Patti Winner',
    description:
      'Single-player card game built end-to-end with Next.js. Smooth game state management, real-time score tracking in MongoDB, and leaderboard system.',
    image: './patticircle.png',
    tech: ['Next.js', 'Node.js', 'MongoDB', 'Tailwind', 'Framer Motion'],
    liveUrl: 'https://www.patticircle.com/',
    span: 'md:col-span-2',
  },
  {
    title: 'KindnessNetwork',
    description:
      'Donor-to-NGO platform with real-time updates, Stripe payment processing, and a comprehensive analytics dashboard.',
    image: './kindnessNetwork.png',
    tech: ['Next.js', 'MongoDB', 'Stripe API', 'Tailwind'],
    liveUrl: 'https://kindness-network.vercel.app/',
    githubUrl: 'https://github.com/adityasingh7402/adityasingh7402/Kindness-Network-SI',
  },
  {
    title: 'Fountainaqua',
    description:
      'E-commerce storefront for a water brand — custom theme, product catalog, and seamless checkout experience.',
    image: './fountain.png',
    tech: ['WordPress', 'Elementor', 'WooCommerce'],
    liveUrl: 'https://fountainaqua.com/',
    span: 'md:col-span-2',
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      className={`relative overflow-hidden rounded-md glass-card group ${project.span ?? ''}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ delay: index * 0.12, duration: 0.7, ease: EASE }}
    >
      {/* Image layer */}
      <div className="relative w-full aspect-video overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B] via-[#0A0A0B]/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-bold tracking-[-0.02em] text-[#EDEDED] group-hover:text-primary transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-sm text-[#A1A1AA] leading-relaxed line-clamp-3">{project.description}</p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-xs font-medium text-[#A1A1AA] border border-white/10 px-2.5 py-1 rounded-md hover:border-primary/40 hover:text-primary transition-colors"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-3 pt-1">
          <Button
            size="sm"
            className="bg-primary text-background font-semibold rounded-md hover:bg-primary/90 transition-colors gap-1.5 text-xs px-4"
            asChild
          >
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-3.5 w-3.5" />
              Live Demo
            </a>
          </Button>
          {project.githubUrl && (
            <Button
              size="sm"
              variant="outline"
              className="border-white/10 text-[#EDEDED] hover:bg-white/5 hover:border-white/20 rounded-md gap-1.5 text-xs px-4"
              asChild
            >
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="h-3.5 w-3.5" />
                Code
              </a>
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <>
      <div className="min-h-screen bg-[#0A0A0B] text-[#EDEDED]">
        <TransitionEffect />
        <MainNav />

        <main className="pt-16">
          <section className="py-24 px-6 md:px-8">
            <div className="max-w-6xl mx-auto space-y-16">

              {/* Section header */}
              <div>
                <motion.p
                  className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  Work
                </motion.p>
                <div className="overflow-hidden">
                  <motion.h1
                    className="text-5xl md:text-7xl font-bold tracking-[-0.03em] leading-[0.95] text-[#EDEDED]"
                    initial={{ y: '110%' }}
                    animate={{ y: 0 }}
                    transition={{ delay: 0.3, duration: 0.7, ease: EASE }}
                  >
                    Featured<br />Projects
                  </motion.h1>
                </div>
                <motion.div
                  className="h-px w-12 bg-primary mt-6"
                  initial={{ scaleX: 0, originX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.7, duration: 0.5, ease: EASE }}
                />
              </div>

              {/* Bento grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {projects.map((project, i) => (
                  <ProjectCard key={project.title} project={project} index={i} />
                ))}
              </div>

            </div>
          </section>
        </main>
      </div>
    </>
  );
}
