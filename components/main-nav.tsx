'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { ModeToggle } from './mode-toggle';
import { Github, Mail, Linkedin, Instagram } from 'lucide-react';

export function MainNav() {
  const pathname = usePathname();
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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

  // Hamburger menu animations
  const menuVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "100%" }
  };

  // Staggered animation for menu items
  const menuItemVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 }
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
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
        className="fixed top-0 left-0 right-0 bg-background/90 backdrop-blur-md z-50 border-b border-primary/10 shadow-sm"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-6xl mx-auto px-6 md:px-8 h-20 flex items-center justify-between">
          {/* Desktop Navigation */}
          {!isMobile && (
            <div className="flex gap-6 md:gap-12 overflow-x-auto hide-scrollbar">
              {navItems.map((item, index) => (
                <motion.div key={item.name} initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}>
                  <Link 
                    href={item.path}
                    className={`capitalize text-lg md:text-xl font-medium whitespace-nowrap px-2 py-1 ${pathname === item.path ? 'text-primary font-semibold' : 'text-muted-foreground'} hover:text-primary transition-colors relative`}
                  >
                    {item.name}
                    {pathname === item.path && (
                      <motion.span
                        className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full"
                        layoutId="activeSection"
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      ></motion.span>
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
              className="text-muted-foreground z-50"
              whileHover={{ scale: 1.1 }}
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
                    <X className="h-8 w-8" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-8 w-8" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          )}

          {/* Mobile Logo/Brand */}
          {isMobile && (
            <motion.div
              className="absolute left-1/2 -translate-x-1/2 font-bold text-xl"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Link href="/">Aditya</Link>
            </motion.div>
          )}

          <motion.div
            className="ml-4 border-l border-primary/10 pl-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <ModeToggle />
          </motion.div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && isMobile && (
          <motion.div
            className="fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            transition={{ duration: 0.3 }}
          >
            <motion.div className="flex flex-col items-center gap-8 w-full">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  variants={menuItemVariants}
                  custom={index}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.path}
                    className={`capitalize select-none text-2xl font-medium py-3 ${pathname === item.path ? 'text-primary font-semibold' : 'text-muted-foreground'}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}

              {/* Social Icons */}
              <motion.div
                className="flex gap-6 mt-8"
                variants={menuItemVariants}
                transition={{ delay: navItems.length * 0.1 }}
              >
                <motion.a
                  href="https://github.com/adityasingh7402"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Github className="h-6 w-6" />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/aditya-kumar-04412b170/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Linkedin className="h-6 w-6" />
                </motion.a>
                <motion.a
                  href="https://www.instagram.com/_aditya_kumar003/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Instagram className="h-6 w-6" />
                </motion.a>
                <motion.a
                  href="mailto:adityasingh7402@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Mail className="h-6 w-6" />
                </motion.a>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}