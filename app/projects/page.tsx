'use client';
import React from 'react';
import { useEffect, useState } from 'react';
import TransitionEffect from '@/components/transition-effect';
import { MainNav } from "@/components/main-nav";
import { ParticlesBackground } from "@/components/particles-background";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';
import Head from 'next/head';

export default function Projects() {
    const [canAnimate, setCanAnimate] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const projects = [
        {
            title: "Patti Winner",
            description: "An interactive single-player card game built with Next.js, featuring smooth animations and a seamless user experience. Integrated with MongoDB for user progress tracking and leaderboards.",
            image: "./patticircle.png",
            tech: ["Next.js, Node.js, MongoDB, Tailwind, Framer Motion"],
            liveUrl: "https://www.patticircle.com/",
        },
        {
            title: "KindnessNetwork",
            description: "A platform connecting donors with NGOs for impactful contributions. Built with Next.js and MongoDB, featuring real-time updates, secure payment integration, and comprehensive analytics dashboard.",
            image: "./kindnessNetwork.png",
            tech: ["Next.js, Tailwind CSS, MongoDB, Stripe API"],
            liveUrl: "https://kindness-network.vercel.app/",
            githubUrl: "https://github.com/adityasingh7402/adityasingh7402/Kindness-Network-SI",
        },
        {
            title: "Fountainaqua",
            description: "Created an e-commerce site for purchasing water from multiple brands. Utilized WordPress and Elementor to design and implement a user-friendly shopping experience, allowing customers to easily browse and purchase products.",
            image: "./fountain.png",
            tech: ["WordPress, Elementor"],
            liveUrl: "https://fountainaqua.com/",
        },
        // Add more projects here
    ];
    useEffect(() => {
        const handleTransitionComplete = () => {
          setCanAnimate(true);
        };
    
        window.addEventListener('transitionComplete', handleTransitionComplete);
        setIsVisible(true);
    
        return () => window.removeEventListener('transitionComplete', handleTransitionComplete);
      }, []);

    return (
        <>
            <Head>
                <title>Projects - Aditya Kumar</title>
                <meta name="description" content="Portfolio of projects by Aditya Kumar, showcasing web development work." />
            </Head>

            <div className="min-h-screen relative overflow-hidden bg-background">
            <TransitionEffect />
                <MainNav />
                <ParticlesBackground />

                {canAnimate && (<main className="pt-28 px-4 md:px-6 lg:px-12 xl:px-0">
                    <div className="max-w-6xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="relative mb-16"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-4">
                                <span className="text-primary">#</span>
                                <span>Featured Projects</span>
                            </h2>
                            <motion.div
                                className="absolute -bottom-4 left-0 h-1 bg-gradient-to-r from-primary/50 to-transparent"
                                initial={{ width: 0 }}
                                animate={{ width: "50%" }}
                                transition={{ delay: 0.5, duration: 1 }}
                            />
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            {projects.map((project, index) => (
                                <motion.div
                                    key={project.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.2 }}
                                    className="group"
                                >
                                    <Card className="relative overflow-hidden bg-card/30 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-500 hover:shadow-lg hover:shadow-primary/5">
                                        <div className="relative aspect-video overflow-hidden">
                                            <Image
                                                src={project.image}
                                                alt={project.title}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
                                            <motion.div
                                                className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                                                whileHover={{ scale: 1.05 }}
                                            />
                                        </div>
                                        <div className="relative p-8">
                                            <motion.h3
                                                className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent"
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.3 }}
                                            >
                                                {project.title}
                                            </motion.h3>
                                            <motion.p
                                                className="text-muted-foreground mb-6 line-clamp-3"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ delay: 0.4 }}
                                            >
                                                {project.description}
                                            </motion.p>
                                            <div className="flex flex-wrap gap-2 mb-8">
                                                {project.tech.map((tech, techIndex) => (
                                                    <motion.span
                                                        key={tech}
                                                        className="text-sm bg-primary/10 text-primary px-4 py-1.5 rounded-full border border-primary/20 hover:border-primary/40 transition-colors"
                                                        initial={{ opacity: 0, scale: 0.8 }}
                                                        animate={{ opacity: 1, scale: 1 }}
                                                        transition={{ delay: 0.2 + techIndex * 0.1 }}
                                                        whileHover={{ scale: 1.05 }}
                                                    >
                                                        {tech}
                                                    </motion.span>
                                                ))}
                                            </div>
                                            <div className="flex gap-4">
                                                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                                    <Button
                                                        className="bg-primary/90 hover:bg-primary transition-colors duration-300"
                                                        asChild
                                                    >
                                                        <a
                                                            href={project.liveUrl}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="flex items-center gap-2"
                                                        >
                                                            <ExternalLink className="h-4 w-4" />
                                                            Live Demo
                                                        </a>
                                                    </Button>
                                                </motion.div>
                                                {project.githubUrl && (
                                                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                                        <Button
                                                            variant="outline"
                                                            className="border-primary/20 hover:border-primary/40 transition-colors duration-300"
                                                            asChild
                                                        >
                                                            <a
                                                                href={project.githubUrl}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="flex items-center gap-2"
                                                            >
                                                                <Github className="h-4 w-4" />
                                                                Source Code
                                                            </a>
                                                        </Button>
                                                    </motion.div>
                                                )}
                                            </div>
                                        </div>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </main>)}
            </div>
        </>
    );
}