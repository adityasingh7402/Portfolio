'use client';
import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { Github, Mail, Linkedin, Instagram, Circle, Triangle, Square, FileDown } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { ParticlesBackground } from "@/components/particles-background";
import { ModeToggle } from "../components/mode-toggle";
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import Head from 'next/head';
import { motion } from "framer-motion";
import Link from 'next/link';
import { MainNav } from '../components/main-nav';
import TransitionEffect from "@/components/transition-effect";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  // Removed unused isVisible state

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);
  const [canAnimate, setCanAnimate] = useState(false);

  useEffect(() => {
    const handleTransitionComplete = () => {
      setCanAnimate(true);
    };

    window.addEventListener('transitionComplete', handleTransitionComplete);
    return () => window.removeEventListener('transitionComplete', handleTransitionComplete);
  }, []);

  const SocialIcons = () => (
    <motion.div className="flex gap-8">
      {[
        { icon: <Github className="h-6 w-6" />, href: "https://github.com/adityasingh7402" },
        { icon: <Linkedin className="h-6 w-6" />, href: "https://www.linkedin.com/in/aditya-kumar-04412b170/" },
        { icon: <Instagram className="h-6 w-6" />, href: "https://www.instagram.com/_aditya_kumar003/" },
        { icon: <Mail className="h-6 w-6" />, href: "mailto:adityasingh7402@gmail.com" }
      ].map((social, index) => (
        <motion.a
          key={index}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          {social.icon}
        </motion.a>
      ))}
    </motion.div>
  );

  return (
    <>
      <TransitionEffect />
      <Head>
        <title>Aditya Kumar - Full-stack Developer</title>
        <meta name="description" content="Personal portfolio website of Aditya Kumar, a Full-stack Developer specializing in web development." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {canAnimate && (
        <div className="min-h-screen relative overflow-hidden bg-background">
          <MainNav />

          {/* Social Icons - Desktop */}
          {!isMobile && (
            <motion.div
              className="fixed left-6 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-8"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <SocialIcons />
              <motion.div
                className="h-24 w-[2px] bg-primary/30 mx-auto"
                initial={{ height: 0 }}
                animate={{ height: 96 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              ></motion.div>
            </motion.div>
          )}

          {/* Decorative Shapes */}
          <motion.div
            className="fixed top-20 left-10 w-24 md:w-32 h-24 md:h-32 opacity-20"
            animate={{
              y: [0, -15, 0],
              rotate: [0, 5, 0],
              transition: {
                y: { repeat: Infinity, duration: 3, ease: "easeInOut" },
                rotate: { repeat: Infinity, duration: 5, ease: "easeInOut" }
              }
            }}
          >
            <Circle className="w-full h-full text-primary" />
          </motion.div>

          <motion.div
            className="fixed bottom-20 right-10 w-16 md:w-24 h-16 md:h-24 opacity-20"
            animate={{
              y: [0, 15, 0],
              rotate: [0, -5, 0],
              transition: {
                y: { repeat: Infinity, duration: 4, ease: "easeInOut" },
                rotate: { repeat: Infinity, duration: 6, ease: "easeInOut" },
                delay: 1
              }
            }}
          >
            <Triangle className="w-full h-full text-primary" />
          </motion.div>

          <motion.div
            className="fixed top-1/2 right-20 w-12 md:w-16 h-12 md:h-16 opacity-20"
            animate={{
              y: [0, 10, 0],
              rotate: [0, 10, 0],
              transition: {
                y: { repeat: Infinity, duration: 5, ease: "easeInOut" },
                rotate: { repeat: Infinity, duration: 7, ease: "easeInOut" },
                delay: 2
              }
            }}
          >
            <Square className="w-full h-full text-primary" />
          </motion.div>

          <main className="pt-28 px-4 md:px-6 lg:px-12 xl:px-0">
            <ParticlesBackground />

            {/* Hero Section */}
            <section className="min-h-[90vh] flex items-center">
              <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="md:pr-6">
                  <motion.div
                    className="p-1 bg-primary/10 rounded-lg inline-block mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <p className="text-primary font-medium px-3 py-1">Hi, my name is</p>
                  </motion.div>
                  <motion.h1
                    className="text-5xl md:text-7xl font-bold mb-4 leading-tight"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    Aditya Kumar
                  </motion.h1>
                  <motion.h2
                    className="text-3xl md:text-5xl text-muted-foreground font-semibold mb-6 leading-tight"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <TypeAnimation
                      sequence={[
                        'Full-stack Developer', // Text to display
                        2000, // Delay before deleting
                        '', // Delete text
                        500, // Delay before next text
                        'Video Editor',
                        2000,
                        '',
                        500,
                        'React Enthusiast',
                        2000,
                        '',
                        500,
                      ]}
                      speed={50} // Typing speed
                      deletionSpeed={50} // Deleting speed
                      repeat={Infinity} // Repeat indefinitely
                      style={{ display: 'inline-block' }}
                    />
                  </motion.h2>
                  <motion.p
                    className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    Soon-to-be BCA graduate with a strong foundation in full-stack development.
                    Specializing in building exceptional digital experiences with modern web technologies.
                  </motion.p>
                  <motion.div
                    className="flex flex-col sm:flex-row gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button size="lg" className="text-base px-8 py-6" asChild>
                        <Link href="/projects">Check out my work</Link>
                      </Button>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button size="lg" variant="outline" className="group text-base px-8 py-6" asChild>
                        <a href="/Aditya_Resume.pdf" download>
                          Download Resume
                          <motion.div
                            initial={{ y: 0 }}
                            animate={{ y: [0, 5, 0] }}
                            transition={{ repeat: Infinity, repeatDelay: 1, duration: 0.5 }}
                          >
                            <FileDown className="ml-2 h-5 w-5" />
                          </motion.div>
                        </a>
                      </Button>
                    </motion.div>
                  </motion.div>
                </div>
                <motion.div
                  className="relative aspect-square w-full max-w-md mx-auto transition-transform hover:scale-105 duration-500"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  whileHover={{ rotate: 5 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-full transform -rotate-12 scale-110"
                    animate={{
                      rotate: [-12, -8, -12],
                      scale: [1.1, 1.15, 1.1]
                    }}
                    transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
                  ></motion.div>
                  <motion.div
                    className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary/30 shadow-lg"
                    animate={{
                      boxShadow: ["0px 0px 10px rgba(0,0,0,0.1)", "0px 0px 20px rgba(0,0,0,0.2)", "0px 0px 10px rgba(0,0,0,0.1)"]
                    }}
                    transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                  >
                    <Image
                      src="./profile2.png"
                      alt="Aditya Kumar"
                      fill
                      className="object-cover"
                      priority
                    />
                  </motion.div>
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-primary/40"
                    animate={{
                      scale: [1.1, 1.15, 1.1],
                      opacity: [0.5, 0.8, 0.5]
                    }}
                    transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                  ></motion.div>
                </motion.div>
              </div>
            </section>
          </main>

          {/* Footer */}
          <footer className="border-t border-primary/10 py-8 mt-12 relative z-10">
            <div className="max-w-6xl mx-auto px-6 md:px-8">
              <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                <motion.div
                  className="flex flex-col items-center md:items-start gap-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <h3 className="text-xl font-bold">Aditya Kumar</h3>
                  <p className="text-sm text-muted-foreground">Full-stack Developer</p>
                </motion.div>

                <motion.div
                  className="flex flex-col items-center gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="flex gap-6">
                    {[
                      { href: "/", label: "home" },
                      { href: "/about", label: "about" },
                      { href: "/projects", label: "projects" },
                      { href: "/contact", label: "contact" }
                    ].map((link) => (
                      <Link
                        key={link.label}
                        href={link.href}
                        className="capitalize text-sm text-muted-foreground hover:text-primary transition-colors p-2"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="z-10"
                >
                  <div className="flex gap-8">
                    {[
                      { icon: <Github className="h-6 w-6" />, href: "https://github.com/adityasingh7402" },
                      { icon: <Linkedin className="h-6 w-6" />, href: "https://www.linkedin.com/in/aditya-kumar-04412b170/" },
                      { icon: <Instagram className="h-6 w-6" />, href: "https://www.instagram.com/_aditya_kumar003/" },
                      { icon: <Mail className="h-6 w-6" />, href: "mailto:adityasingh7402@gmail.com" }
                    ].map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors p-2"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        {social.icon}
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              </div>

              <motion.div
                className="mt-8 pt-6 border-t border-primary/10 text-center text-sm text-muted-foreground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <p>© {new Date().getFullYear()} Aditya Kumar. All rights reserved.</p>
                <p className="mt-1">Designed & Built with ❤️ using Next.js & Tailwind CSS</p>
              </motion.div>
            </div>
          </footer>
        </div>)}
    </>
  );
}
