'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Grid } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/grid';
import { useState, useEffect } from 'react';
import { Code, Server, Database, MapPin, Calendar } from 'lucide-react';
import { MainNav } from "@/components/main-nav";
import { SkillBar } from "@/components/skill-bar";
import Image from 'next/image';
import Head from 'next/head';
import { motion } from "framer-motion";
import { ParticlesBackground } from "@/components/particles-background";
import { Card } from "@/components/ui/card";
import TransitionEffect from '@/components/transition-effect';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [canAnimate, setCanAnimate] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);
  useEffect(() => {
    const handleTransitionComplete = () => {
      setCanAnimate(true);
    };

    window.addEventListener('transitionComplete', handleTransitionComplete);
    setIsVisible(true);

    return () => window.removeEventListener('transitionComplete', handleTransitionComplete);
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

  return (
    <>
      <Head>
        <title>About - Aditya Kumar</title>
        <meta name="description" content="Learn more about Aditya Kumar, a Full-stack Developer specializing in web development." />
      </Head>

      <div className="min-h-screen relative overflow-hidden bg-background">
        <TransitionEffect />
        <MainNav />
        <ParticlesBackground />

        {canAnimate && (<main className="pt-14 px-4 md:px-6 lg:px-12 xl:px-0">
          <section className="min-h-screen py-16">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-4">
                  <span className="text-primary">#</span>
                  <span>About Me</span>
                </h2>
                <motion.div
                  className="absolute -bottom-4 left-0 h-1 bg-gradient-to-r from-primary/50 to-transparent"
                  initial={{ width: 0 }}
                  animate={{ width: "50%" }}
                  transition={{ delay: 0.5, duration: 1 }}
                />
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
                <motion.div
                  className="space-y-6"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Card className="bg-card/30 backdrop-blur-sm p-6 border-primary/20">
                    <motion.p
                      className="text-base leading-relaxed text-muted-foreground"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      I&#39;m a passionate full-stack developer with experience in building web applications
                      using modern technologies. My journey began with an internship at eWeblink Web Design
                      and Development, where I honed my skills in HTML, CSS, JavaScript, and WordPress.
                    </motion.p>
                  </Card>

                  <Card className="bg-card/30 backdrop-blur-sm p-6 border-primary/20">
                    <motion.p
                      className="text-base leading-relaxed text-muted-foreground"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      Currently working as a freelance developer, I&#39;ve expanded my expertise to include
                      Node.js, Next.js, MongoDB, APIs, and SQL. I focus on creating accessible,
                      user-friendly applications that solve real-world problems.
                    </motion.p>
                  </Card>

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
                      src="about.jpg"
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
        </main>)}
      </div>
    </>
  );
}