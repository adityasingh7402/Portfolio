'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Grid } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/grid';
import { useState, useEffect, useRef } from 'react';
import { Github, Mail, Linkedin, Instagram, ExternalLink, Circle, Triangle, Square, CheckCircle, FileDown, MapPin, Calendar, Code, Server, Database, Menu, X, Send, Phone } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ParticlesBackground } from "@/components/particles-background";
import { ModeToggle } from "../components/mode-toggle";
import { SkillBar } from "../components/skill-bar";
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import Head from 'next/head';
import { motion, AnimatePresence } from "framer-motion";
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Refs for sections
  const homeRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  const handleSubmit = async (e: { preventDefault: () => void; target: any; }) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const form = e.target;
      const formData = new FormData(form);

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        setShowSuccess(true);
        form.reset();
        // Hide success message after 5 seconds
        setTimeout(() => {
          setShowSuccess(false);
        }, 5000);
      } else {
        console.error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    setIsVisible(true);

    const handleScroll = () => {
      const sections = [
        { id: 'home', ref: homeRef },
        { id: 'about', ref: aboutRef },
        { id: 'projects', ref: projectsRef },
        { id: 'contact', ref: contactRef },
      ];

      let currentSection = 'home';

      sections.forEach(({ id, ref }) => {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            currentSection = id;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const skills = [
    { name: 'JavaScript/TypeScript', percentage: 95, icon: <Code className="w-5 h-5 text-primary" /> },
    { name: 'React.js/Next.js', percentage: 90, icon: <Code className="w-5 h-5 text-primary" /> },
    { name: 'Node.js', percentage: 90, icon: <Server className="w-5 h-5 text-primary" /> },
    { name: 'HTML/CSS/Tailwind', percentage: 100, icon: <Code className="w-5 h-5 text-primary" /> },
    { name: 'MongoDB/MySQL', percentage: 95, icon: <Database className="w-5 h-5 text-primary" /> },
    { name: 'WordPress', percentage: 95, icon: <Code className="w-5 h-5 text-primary" /> },
    { name: 'Python', percentage: 80, icon: <Code className="w-5 h-5 text-primary" /> },
    { name: 'Java', percentage: 80, icon: <Code className="w-5 h-5 text-primary" /> },
  ];

  const scrollToSection = (sectionId: string) => {
    let sectionRef: React.RefObject<HTMLElement> | null = null;

    switch (sectionId) {
      case 'home':
        sectionRef = homeRef;
        break;
      case 'about':
        sectionRef = aboutRef;
        break;
      case 'projects':
        sectionRef = projectsRef;
        break;
      case 'contact':
        sectionRef = contactRef;
        break;
      default:
        break;
    }

    if (sectionRef?.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    } else {
      console.error(`Section with id ${sectionId} not found`);
    }
  };

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

  // Container variants for page transitions
  const pageVariants = {
    hidden: { opacity: 0, x: -200 },
    enter: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 200 }
  };

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

  return (
    <>
      <Head>
        <title>Aditya Kumar - Full-stack Developer</title>
        <meta name="description" content="Personal portfolio website of Aditya Kumar, a Full-stack Developer specializing in web development." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen relative overflow-hidden bg-background">

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

        {/* Navigation */}
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
                {['home', 'about', 'projects', 'contact'].map((section, index) => (
                  <motion.button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`capitalize text-lg md:text-xl font-medium whitespace-nowrap px-2 py-1 ${activeSection === section ? 'text-primary font-semibold' : 'text-muted-foreground'} hover:text-primary transition-colors relative`}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {section}
                    {activeSection === section && (
                      <motion.span
                        className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full"
                        layoutId="activeSection"
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      ></motion.span>
                    )}
                  </motion.button>
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
                Aditya
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
                {['home', 'about', 'projects', 'contact'].map((section, index) => (
                  <motion.button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`capitalize select-none text-2xl font-medium py-3 ${activeSection === section ? 'text-primary font-semibold' : 'text-muted-foreground'}`}
                    variants={menuItemVariants}
                    custom={index}
                    transition={{ delay: index * 0.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {section}
                  </motion.button>
                ))}
                <motion.div
                  className="mt-8"
                  variants={menuItemVariants}
                  custom={5}
                >
                  <SocialIcons />
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <main className="pt-28 px-4 md:px-6 lg:px-12 xl:px-0">
          <ParticlesBackground />
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial="hidden"
              animate="enter"
              exit="exit"
              variants={pageVariants}
              transition={{ type: "tween", ease: "anticipate", duration: 0.5 }}
            >
              {/* Hero Section */}
              <section
                id="home"
                ref={homeRef}
                className="min-h-[90vh] flex items-center"
              >
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
                          <a href="#projects" onClick={() => scrollToSection('projects')}>Check out my work</a>
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

              {/* About Section */}
              <section
                id="about"
                ref={aboutRef}
                className="min-h-screen py-32"
              >
                <div className="max-w-6xl mx-auto">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-4">
                      <span className="text-primary">#</span>
                      <span>About Me</span>
                      <motion.div
                        className="h-[1px] w-0 bg-primary/30"
                        animate={{ width: 100 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                      ></motion.div>
                    </h2>
                  </motion.div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
                    <motion.div
                      className="space-y-6 text-muted-foreground"
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <motion.p
                        className="text-base leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        I&#39;m a passionate full-stack developer with experience in building web applications
                        using modern technologies. My journey began with an internship at eWeblink Web Design
                        and Development, where I honed my skills in HTML, CSS, JavaScript, and WordPress.
                      </motion.p>
                      <motion.p
                        className="text-base leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                      >
                        Currently working as a freelance developer, I&#39;ve expanded my expertise to include
                        Node.js, Next.js, MongoDB, APIs, and SQL. I focus on creating accessible,
                        user-friendly applications that solve real-world problems.
                      </motion.p>

                      <motion.div
                        className="flex flex-wrap gap-3 mt-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                      >
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          className="flex items-center gap-2 text-sm bg-primary/10 px-3 py-1.5 rounded-full"
                        >
                          <MapPin className="h-4 w-4 text-primary" />
                          <span>New Delhi, India</span>
                        </motion.div>
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          className="flex items-center gap-2 text-sm bg-primary/10 px-3 py-1.5 rounded-full"
                        >
                          <Calendar className="h-4 w-4 text-primary" />
                          <span>Available for Freelance</span>
                        </motion.div>
                      </motion.div>
                      <motion.div
                        className="space-y-6 mt-12"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                      >
                        <h3 className="text-2xl font-semibold text-foreground flex items-center gap-2">
                          <span className="text-primary">#</span> Technical Skills
                        </h3>
                        <Swiper
                          slidesPerView={1}
                          spaceBetween={10}
                          autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                          }}
                          pagination={{
                            clickable: true,
                            el: '.swiper-pagination',
                            bulletClass: 'swiper-pagination-bullet',
                            bulletActiveClass: 'swiper-pagination-bullet-active',
                          }}
                          breakpoints={{
                            1024: {
                              slidesPerView: 2,
                              grid: {
                                rows: 2,
                                fill: 'row',
                              },
                              spaceBetween: 20,
                            },
                          }}
                          modules={[Autoplay, Pagination, Grid]}
                          className="mySwiper"
                        >
                          {skills.map((skill, index) => (
                            <SwiperSlide key={skill.name}>
                              <motion.div
                                className="h-full bg-card/30 backdrop-blur p-4 rounded-lg border border-primary/10 hover:border-primary/30 transition-colors"
                                whileHover={{ scale: 1.02, boxShadow: "0px 5px 15px rgba(0,0,0,0.1)" }}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 * index }}
                              >
                                <div className="flex items-center gap-3 mb-2">
                                  <motion.div
                                    animate={{ rotate: [0, 10, 0] }}
                                    transition={{ repeat: Infinity, duration: 2, delay: index * 0.2 }}
                                  >
                                    {skill.icon}
                                  </motion.div>
                                  <h4 className="font-medium text-foreground">{skill.name}</h4>
                                </div>
                                <SkillBar
                                  name={skill.name}
                                  percentage={skill.percentage}
                                />
                              </motion.div>
                            </SwiperSlide>
                          ))}
                        </Swiper>
                      </motion.div>
                    </motion.div>
                    <motion.div
                      className="relative group"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      whileHover={{ rotate: 2 }}
                    >
                      <motion.div
                        className="relative w-full aspect-square rounded-lg overflow-hidden shadow-xl"
                        whileHover={{ scale: 1.02 }}
                      >
                        <Image
                          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80"
                          alt="Developer workspace"
                          fill
                          className="object-cover transition-transform group-hover:scale-105 duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                      </motion.div>
                      <motion.div
                        className="absolute -inset-2 border-2 border-primary rounded-lg -z-10"
                        animate={{
                          x: [0, 5, 0],
                          y: [0, 5, 0],
                        }}
                        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                      ></motion.div>
                    </motion.div>
                  </div>
                </div>
              </section>

              {/* Projects Section */}
              <section
                id="projects"
                ref={projectsRef}
                className="min-h-screen py-32"
              >
                <div className="max-w-6xl mx-auto">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-4">
                      <span className="text-primary">#</span>
                      <span>Featured Projects</span>
                      <motion.div
                        className="h-[1px] w-0 bg-primary/30"
                        animate={{ width: 25 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                      ></motion.div>
                    </h2>
                  </motion.div>
                  <div className="space-y-32">
                    <motion.div
                      className="relative grid md:grid-cols-2 gap-8 md:gap-12"
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      <motion.div
                        className="relative group"
                        whileHover={{ scale: 1.02 }}
                      >
                        <motion.div
                          className="relative w-full aspect-video rounded-lg overflow-hidden shadow-xl"
                          initial={{ opacity: 0, x: -30 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 }}
                        >
                          <Image
                            src="./patticircle.png"
                            alt="Patti Winner"
                            fill
                            className="object-cover transition-transform group-hover:scale-105 duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60 group-hover:opacity-30 transition-opacity"></div>
                          <motion.div
                            className="absolute top-4 right-4 p-2 bg-primary/90 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Link href={'https://www.patticircle.com/'} target='_blank'><ExternalLink className="h-5 w-5" /></Link>
                          </motion.div>
                        </motion.div>
                      </motion.div>
                      <motion.div
                        className="flex flex-col justify-center max-w-lg"
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                      >
                        <h3 className="text-2xl md:text-3xl font-bold mb-4">Patti Winner</h3>
                        <Card className="bg-card/30 backdrop-blur-sm p-6 mb-6 border-primary/20 shadow-lg">
                          <p className="text-muted-foreground leading-relaxed">
                            An interactive single-player card game built with Next.js, featuring smooth animations and a seamless user experience. Integrated with MongoDB for user progress tracking and leaderboards.
                          </p>
                        </Card>
                        <div className="flex flex-wrap gap-3 mb-6">
                          {['Next.js', 'Node.js', 'MongoDB', 'Tailwind'].map((tech, index) => (
                            <motion.span
                              key={tech}
                              className="px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary"
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.6 + (index * 0.1) }}
                              whileHover={{ y: -2 }}
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                        <div className="flex gap-4">
                          <motion.a
                            href="https://www.patticircle.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <ExternalLink className="h-6 w-6" />
                          </motion.a>
                        </div>
                      </motion.div>
                    </motion.div>

                    <motion.div
                      className="relative grid md:grid-cols-2 gap-8 md:gap-12"
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      <motion.div
                        className="flex flex-col justify-center max-w-lg md:order-first"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        <h3 className="text-2xl md:text-3xl font-bold mb-4">KindnessNetwork</h3>
                        <Card className="bg-card/30 backdrop-blur-sm p-6 mb-6 border-primary/20 shadow-lg">
                          <p className="text-muted-foreground leading-relaxed">
                            A platform connecting donors with NGOs for impactful contributions. Built with Next.js and MongoDB, featuring real-time updates, secure payment integration, and comprehensive analytics dashboard.
                          </p>
                        </Card>
                        <div className="flex flex-wrap gap-3 mb-6">
                          {['Next.js', 'Tailwind CSS', 'MongoDB', 'Stripe API'].map((tech, index) => (
                            <motion.span
                              key={tech}
                              className="px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary"
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.6 + (index * 0.1) }}
                              whileHover={{ y: -2 }}
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                        <div className="flex gap-4">
                          <motion.a
                            href="https://github.com/adityasingh7402/adityasingh7402/Kindness-Network-SI"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Github className="h-6 w-6" />
                          </motion.a>
                          <motion.a
                            href="https://kindness-network.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <ExternalLink className="h-6 w-6" />
                          </motion.a>
                        </div>
                      </motion.div>
                      <motion.div
                        className="relative group md:order-2"
                        whileHover={{ scale: 1.02 }}
                      >
                        <motion.div
                          className="relative w-full aspect-video rounded-lg overflow-hidden shadow-xl"
                          initial={{ opacity: 0, x: 30 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4 }}
                        >
                          <Image
                            src="./kindnessNetwork.png"
                            alt="E-Commerce Dashboard"
                            fill
                            className="object-cover transition-transform group-hover:scale-105 duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60 group-hover:opacity-30 transition-opacity"></div>
                          <motion.div
                            className="absolute top-4 right-4 p-2 bg-primary/90 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Link href={'https://kindness-network.vercel.app/'} target='_blank'><ExternalLink className="h-5 w-5" /></Link>
                          </motion.div>
                        </motion.div>
                      </motion.div>
                    </motion.div>

                    <motion.div
                      className="relative grid md:grid-cols-2 gap-8 md:gap-12"
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                    >
                      <motion.div
                        className="relative group"
                        whileHover={{ scale: 1.02 }}
                      >
                        <motion.div
                          className="relative w-full aspect-video rounded-lg overflow-hidden shadow-xl"
                          initial={{ opacity: 0, x: -30 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 }}
                        >
                          <Image
                            src="./fountain.png"
                            alt="Blog Platform"
                            fill
                            className="object-cover transition-transform group-hover:scale-105 duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60 group-hover:opacity-30 transition-opacity"></div>
                          <motion.div
                            className="absolute top-4 right-4 p-2 bg-primary/90 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Link href="https://fountainaqua.com/"><ExternalLink className="h-5 w-5" /></Link>
                          </motion.div>
                        </motion.div>
                      </motion.div>
                      <motion.div
                        className="flex flex-col justify-center max-w-lg"
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                      >
                        <h3 className="text-2xl md:text-3xl font-bold mb-4">Fountainaqua</h3>
                        <Card className="bg-card/30 backdrop-blur-sm p-6 mb-6 border-primary/20 shadow-lg">
                          <p className="text-muted-foreground leading-relaxed">
                            Created an e-commerce site for purchasing water from multiple brands. Utilized WordPress and Elementor to design and implement a user-friendly shopping experience, allowing customers to easily browse and purchase products.
                          </p>
                        </Card>
                        <div className="flex flex-wrap gap-3 mb-6">
                          {['Next.js', 'MongoDB', 'Tailwind CSS', 'NextAuth.js', 'Vercel'].map((tech, index) => (
                            <motion.span
                              key={tech}
                              className="px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary"
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.6 + (index * 0.1) }}
                              whileHover={{ y: -2 }}
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                        <div className="flex gap-4">
                          <motion.a
                            href="https://fountainaqua.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <ExternalLink className="h-6 w-6" />
                          </motion.a>
                        </div>
                      </motion.div>
                    </motion.div>

                    <motion.div
                      className="text-center pt-16"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                    >
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>

                      </motion.div>
                    </motion.div>
                  </div>
                </div>
              </section>

              {/* Contact Section */}
              <section
                id="contact"
                ref={contactRef}
                className="min-h-screen py-32"
              >
                <div className="max-w-6xl mx-auto">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-4">
                      <span className="text-primary">#</span>
                      <span>Get In Touch</span>
                      <motion.div
                        className="h-[1px] w-0 bg-primary/30"
                        animate={{ width: 100 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                      ></motion.div>
                    </h2>
                  </motion.div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <motion.div
                      className="space-y-6"
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <h3 className="text-2xl font-semibold mb-4">Let&#39;s Connect</h3>
                      <p className="text-lg text-muted-foreground mb-8">
                        I&#39;m currently available for freelance work and full-time opportunities.
                        If you have a project that requires my expertise or just want to say hi,
                        feel free to reach out!
                      </p>
                      <div className="space-y-4">
                        <motion.div
                          className="flex items-center gap-4 group"
                          whileHover={{ x: 5 }}
                        >
                          <div className="p-3 bg-primary/10 rounded-full text-primary">
                            <Mail className="h-6 w-6" />
                          </div>
                          <div>
                            <h4 className="text-sm font-medium text-muted-foreground">EMAIL</h4>
                            <a href="mailto:adityasingh7402@gmail.com" className="text-lg font-medium group-hover:text-primary transition-colors">
                              adityasingh7402@gmail.com
                            </a>
                          </div>
                        </motion.div>

                        <motion.div
                          className="flex items-center gap-4 group"
                          whileHover={{ x: 5 }}
                        >
                          <div className="p-3 bg-primary/10 rounded-full text-primary">
                            <Phone className="h-6 w-6" />
                          </div>
                          <div>
                            <h4 className="text-sm font-medium text-muted-foreground">PHONE</h4>
                            <a href="tel:+911234567890" className="text-lg font-medium group-hover:text-primary transition-colors">
                              +91 828 775 0147
                            </a>
                          </div>
                        </motion.div>

                        <motion.div
                          className="flex items-center gap-4 group"
                          whileHover={{ x: 5 }}
                        >
                          <div className="p-3 bg-primary/10 rounded-full text-primary">
                            <MapPin className="h-6 w-6" />
                          </div>
                          <div>
                            <h4 className="text-sm font-medium text-muted-foreground">LOCATION</h4>
                            <p className="text-lg font-medium group-hover:text-primary transition-colors">
                              New Delhi, India
                            </p>
                          </div>
                        </motion.div>
                      </div>

                      <motion.div
                        className="flex gap-6 mt-12"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                      >
                        {[
                          { icon: <Github className="h-8 w-8" />, href: "https://github.com/adityasingh7402" },
                          { icon: <Linkedin className="h-8 w-8" />, href: "https://www.linkedin.com/in/aditya-kumar-04412b170/" },
                          { icon: <Instagram className="h-8 w-8" />, href: "https://www.instagram.com/_aditya_kumar003/" },
                        ].map((social, index) => (
                          <motion.a
                            key={index}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-card/50 backdrop-blur-sm text-muted-foreground hover:text-primary border border-primary/10 rounded-lg transition-colors"
                            whileHover={{
                              scale: 1.1,
                              backgroundColor: "rgba(var(--primary-rgb), 0.1)",
                              borderColor: "rgba(var(--primary-rgb), 0.3)"
                            }}
                            whileTap={{ scale: 0.95 }}
                          >
                            {social.icon}
                          </motion.a>
                        ))}
                      </motion.div>
                    </motion.div>

                    <motion.div
                      className="relative"
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    >
                      <Card className="p-6 border-primary/20 overflow-hidden relative bg-card/30 backdrop-blur-sm">
                        <form
                          className="space-y-4"
                          action="https://api.web3forms.com/submit"
                          method="POST"
                          onSubmit={handleSubmit}
                        >
                          <input
                            type="hidden"
                            name="access_key"
                            value="0c5a5cf4-2404-4aef-a0e6-88bc1f001117"
                          />

                          {/* Name Field */}
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                          >
                            <label className="block text-sm font-medium mb-2" htmlFor="name">
                              Your Name
                            </label>
                            <input
                              type="text"
                              id="name"
                              name="name"
                              className="w-full p-3 rounded-lg bg-background/80 border border-primary/10 outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-colors"
                              placeholder="John Doe"
                              required
                            />
                          </motion.div>

                          {/* Email Field */}
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                          >
                            <label className="block text-sm font-medium mb-2" htmlFor="email">
                              Your Email
                            </label>
                            <input
                              type="email"
                              id="email"
                              name="email"
                              className="w-full p-3 rounded-lg bg-background/80 border border-primary/10 outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-colors"
                              placeholder="john@example.com"
                              required
                            />
                          </motion.div>

                          {/* Subject Field */}
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 }}
                          >
                            <label className="block text-sm font-medium mb-2" htmlFor="subject">
                              Subject
                            </label>
                            <input
                              type="text"
                              id="subject"
                              name="subject"
                              className="w-full p-3 rounded-lg bg-background/80 border border-primary/10 outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-colors"
                              placeholder="Project Inquiry"
                              required
                            />
                          </motion.div>

                          {/* Message Field */}
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                          >
                            <label className="block text-sm font-medium mb-2" htmlFor="message">
                              Your Message
                            </label>
                            <textarea
                              id="message"
                              name="message"
                              rows={5}
                              className="w-full p-3 rounded-lg bg-background/80 border border-primary/10 outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-colors"
                              placeholder="Hi Aditya, I'd like to talk about..."
                              required
                            />
                          </motion.div>

                          {/* Submit Button */}
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.9 }}
                            className="mt-8"
                          >
                            <Button
                              type="submit"
                              className="w-full py-6 text-base group"
                              disabled={isSubmitting}
                            >
                              {isSubmitting ? 'Sending...' : 'Send Message'}
                              <motion.div
                                initial={{ x: 0 }}
                                animate={{ x: [0, 5, 0] }}
                                transition={{ repeat: Infinity, repeatDelay: 1, duration: 0.5 }}
                              >
                                <Send className="ml-2 h-4 w-4" />
                              </motion.div>
                            </Button>
                          </motion.div>
                        </form>

                        {/* Success Popup */}
                        <AnimatePresence>
                          {showSuccess && (
                            <motion.div
                              initial={{ opacity: 0, scale: 0.8, y: 20 }}
                              animate={{ opacity: 1, scale: 1, y: 0 }}
                              exit={{ opacity: 0, scale: 0.8, y: 20 }}
                              transition={{ type: "spring", damping: 15, stiffness: 300 }}
                              className="fixed inset-0 flex items-center justify-center z-50"
                            >
                              <motion.div
                                className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setShowSuccess(false)}
                              />

                              <motion.div
                                className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-6 max-w-md w-full mx-4 z-10 relative overflow-hidden"
                                initial={{ y: 50 }}
                                animate={{ y: 0 }}
                                exit={{ y: 50 }}
                              >
                                {/* Success icon with animation */}
                                <motion.div
                                  className="flex justify-center mb-4"
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1, rotate: [0, 15, -15, 0] }}
                                  transition={{ delay: 0.2, duration: 0.5 }}
                                >
                                  <div className="relative">
                                    <motion.div
                                      className="absolute inset-0 bg-green-500/20 rounded-full"
                                      initial={{ scale: 0 }}
                                      animate={{ scale: [1, 1.5, 1] }}
                                      transition={{ repeat: Infinity, repeatDelay: 2, duration: 1 }}
                                    />
                                    <CheckCircle className="h-16 w-16 text-green-500" />
                                  </div>
                                </motion.div>

                                {/* Success message */}
                                <motion.h3
                                  className="text-xl font-bold text-center text-gray-900 dark:text-white mb-2"
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: 0.3 }}
                                >
                                  Message Sent Successfully!
                                </motion.h3>

                                <motion.p
                                  className="text-gray-600 dark:text-gray-300 text-center mb-6"
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: 0.4 }}
                                >
                                  Thank you for reaching out. I&#39;ll get back to you as soon as possible.
                                </motion.p>

                                {/* Close button */}
                                <motion.div
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: 0.5 }}
                                  className="flex justify-center"
                                >
                                  <Button
                                    onClick={() => setShowSuccess(false)}
                                    className="bg-green-500 hover:bg-green-600 text-white"
                                  >
                                    Got it!
                                  </Button>
                                </motion.div>

                                {/* Animated shapes in background */}
                                <motion.div
                                  className="absolute -top-16 -right-16 w-32 h-32 rounded-full bg-green-500/10"
                                  animate={{ scale: [1, 1.2, 1], rotate: 360 }}
                                  transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                                />
                                <motion.div
                                  className="absolute -bottom-10 -left-10 w-24 h-24 rounded-full bg-green-500/10"
                                  animate={{ scale: [1.2, 1, 1.2], rotate: -360 }}
                                  transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                                />
                              </motion.div>
                            </motion.div>
                          )}
                        </AnimatePresence>

                        <motion.div
                          className="absolute -bottom-12 -right-12 w-40 h-40 bg-primary/10 rounded-full blur-3xl"
                          animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.3, 0.5, 0.3]
                          }}
                          transition={{ repeat: Infinity, duration: 5 }}
                        ></motion.div>
                      </Card>
                    </motion.div>
                  </div>
                </div>
              </section>
            </motion.div>
          </AnimatePresence>
        </main>

        <motion.footer
          className="py-12 border-t border-primary/10 mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold">Aditya Kumar</h3>
              <p className="text-sm text-muted-foreground mt-1">Full-stack Developer</p>
            </div>

            <div className="flex flex-wrap justify-center gap-6">
              {['home', 'about', 'projects', 'contact'].map((section) => (
                <motion.button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="capitalize text-sm text-muted-foreground hover:text-primary transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {section}
                </motion.button>
              ))}
            </div>

            <div className="flex gap-6">
              <motion.a
                href="https://github.com/adityasingh7402"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/aditya-kumar-04412b170/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="mailto:adityasingh7402@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Mail className="h-5 w-5" />
              </motion.a>
            </div>
          </div>

          <div className="max-w-6xl mx-auto px-6 mt-8">
            <div className="text-center text-sm text-muted-foreground">
              <p>&copy; {new Date().getFullYear()} Aditya Kumar. All rights reserved.</p>
            </div>
          </div>
        </motion.footer>
      </div>
    </>
  );
}