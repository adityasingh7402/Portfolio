'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Github, Mail, Linkedin } from 'lucide-react';

export function MainNav() {
  const pathname = usePathname();
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const menuVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: '100%' },
  };

  const menuItemVariants = {
    open: { opacity: 1, y: 0, transition: { type: 'spring' as const, stiffness: 300, damping: 24 } },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
  };

  const navItems = [
    { name: 'home', path: '/' },
    { name: 'about', path: '/about' },
    { name: 'projects', path: '/projects' },
    { name: 'contact', path: '/contact' },
  ];

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-md z-50 border-b border-white/[0.06]"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="max-w-6xl mx-auto px-6 md:px-8 h-16 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="text-sm font-semibold tracking-widest uppercase text-[#EDEDED] hover:text-primary transition-colors">
            AK
          </Link>

          {/* Desktop Navigation */}
          {!isMobile && (
            <div className="flex gap-8 overflow-x-auto hide-scrollbar">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={item.path}
                    className={`capitalize text-sm font-medium tracking-wider whitespace-nowrap px-1 py-1 transition-colors relative ${
                      pathname === item.path
                        ? 'text-[#EDEDED]'
                        : 'text-[#A1A1AA] hover:text-[#EDEDED]'
                    }`}
                  >
                    {item.name}
                    {pathname === item.path && (
                      <motion.span
                        className="absolute -bottom-1 left-0 w-full h-px bg-primary"
                        layoutId="activeSection"
                        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                      />
                    )}
                  </Link>
                </motion.div>
              ))}
            </div>
          )}

          {/* Mobile Hamburger Button */}
          {isMobile && (
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#A1A1AA] hover:text-[#EDEDED] z-50 transition-colors"
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-6 w-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-6 w-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          )}
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && isMobile && (
          <motion.div
            className="fixed inset-0 bg-background/98 backdrop-blur-md z-40 flex flex-col items-center justify-center"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            transition={{ duration: 0.3 }}
          >
            <motion.div className="flex flex-col items-center gap-10 w-full">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  variants={menuItemVariants}
                  custom={index}
                  transition={{ delay: index * 0.07 }}
                >
                  <Link
                    href={item.path}
                    className={`capitalize select-none text-3xl font-semibold tracking-wider py-2 transition-colors ${
                      pathname === item.path ? 'text-primary' : 'text-[#A1A1AA] hover:text-[#EDEDED]'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                className="flex gap-8 mt-6"
                variants={menuItemVariants}
                transition={{ delay: navItems.length * 0.07 }}
              >
                {[
                  { icon: <Github className="h-5 w-5" />, href: 'https://github.com/adityasingh7402' },
                  { icon: <Linkedin className="h-5 w-5" />, href: 'https://www.linkedin.com/in/aditya-kumar-04412b170/' },
                  { icon: <Mail className="h-5 w-5" />, href: 'mailto:adityasingh7402@gmail.com' },
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#A1A1AA] hover:text-primary transition-colors"
                    whileTap={{ scale: 0.9 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
