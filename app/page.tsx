'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, Grid } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/grid';
import { useState, useEffect } from 'react';
import { Github, Mail, Linkedin, Instagram, ExternalLink, Circle, Triangle, Square, FileDown, MapPin, Calendar, Code, Server, Database } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ParticlesBackground } from "@/components/particles-background"
import { ModeToggle } from "../components/mode-toggle";
import { SkillBar } from "../components/skill-bar";
import Image from 'next/image';
import Head from 'next/head';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    setIsVisible(true);

    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
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
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  const SocialIcons = () => (
    <>
      <a
        href="https://github.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted-foreground hover:text-primary transition-colors transform hover:scale-110"
      >
        <Github className="h-6 w-6" />
      </a>
      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted-foreground hover:text-primary transition-colors transform hover:scale-110"
      >
        <Linkedin className="h-6 w-6" />
      </a>
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted-foreground hover:text-primary transition-colors transform hover:scale-110"
      >
        <Instagram className="h-6 w-6" />
      </a>
      <a
        href="mailto:hello@example.com"
        className="text-muted-foreground hover:text-primary transition-colors transform hover:scale-110"
      >
        <Mail className="h-6 w-6" />
      </a>
    </>
  );

  return (
    <>
      <Head>
        <title>Aditya Kumar - Full-stack Developer</title>
        <meta name="description" content="Personal portfolio website of Aditya Kumar, a Full-stack Developer specializing in web development." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen relative overflow-hidden bg-background">
        <ParticlesBackground />
        {/* Social Icons - Desktop */}
        {!isMobile && (
          <div className="fixed left-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-8">
            <SocialIcons />
            <div className="h-24 w-[2px] bg-primary/30 mx-auto"></div>
          </div>
        )}

        {/* Decorative Shapes */}
        <div className="fixed top-20 left-10 w-24 md:w-32 h-24 md:h-32 floating-shape opacity-20">
          <Circle className="w-full h-full text-primary" />
        </div>
        <div className="fixed bottom-20 right-10 w-16 md:w-24 h-16 md:h-24 floating-shape opacity-20 animation-delay-2000">
          <Triangle className="w-full h-full text-primary" />
        </div>
        <div className="fixed top-1/2 right-20 w-12 md:w-16 h-12 md:h-16 floating-shape opacity-20 animation-delay-1000">
          <Square className="w-full h-full text-primary" />
        </div>

        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 bg-background/90 backdrop-blur-md z-50 border-b border-primary/10 shadow-sm">
          <div className="max-w-6xl mx-auto px-6 md:px-8 h-20 flex items-center justify-between">
            <div className="flex gap-6 md:gap-12 overflow-x-auto hide-scrollbar">
              {['home', 'about', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize text-lg md:text-xl font-medium whitespace-nowrap px-2 py-1 ${activeSection === section ? 'text-primary font-semibold' : 'text-muted-foreground'} hover:text-primary transition-colors relative`}
                >
                  {section}
                  {activeSection === section && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full"></span>
                  )}
                </button>
              ))}
            </div>
            <div className="ml-4 border-l border-primary/10 pl-4">
              <ModeToggle />
            </div>
          </div>
        </nav>

        <main className="pt-28 px-4 md:px-6 lg:px-12 xl:px-0">
          {/* Hero Section */}
          <section
            id="home"
            className={`min-h-[90vh] flex items-center ${isVisible ? 'section-slide-up' : 'opacity-0'
              }`}
          >
            <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="md:pr-6">
                <div className="p-1 bg-primary/10 rounded-lg inline-block mb-4">
                  <p className="text-primary font-medium px-3 py-1">Hi, my name is</p>
                </div>
                <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">Aditya Kumar</h1>
                <h2 className="text-3xl md:text-5xl text-muted-foreground font-semibold mb-6 leading-tight">
                  Full-stack Developer
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl leading-relaxed">
                  Soon-to-be BCA graduate with a strong foundation in full-stack development.
                  Specializing in building exceptional digital experiences with modern web technologies.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="text-base px-8 py-6" asChild>
                    <a href="#projects">Check out my work</a>
                  </Button>
                  <Button size="lg" variant="outline" className="group text-base px-8 py-6" asChild>
                    <a href="/Aditya_Resume.pdf" download>
                      Download Resume
                      <FileDown className="ml-2 h-5 w-5 group-hover:translate-y-0.5 transition-transform" />
                    </a>
                  </Button>
                </div>
              </div>
              <div className="relative aspect-square w-full max-w-md mx-auto transition-transform floating-shape animation-delay-2000 hover:scale-105 duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-full transform -rotate-12 scale-110"></div>
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary/30 shadow-lg">
                  <Image
                    src="./profile.jpg"
                    alt="Aditya Kumar"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="absolute inset-0 rounded-full border-2 border-primary/40 transform scale-110 animate-pulse"></div>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="min-h-screen py-32 section-slide-up">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-4">
                <span className="text-primary">#</span>
                <span>About Me</span>
                <div className="h-[1px] w-32 bg-primary/30"></div>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
                <div className="space-y-6 text-muted-foreground">
                  <p className="text-base leading-relaxed">
                    I&#39;m a passionate full-stack developer with experience in building web applications
                    using modern technologies. My journey began with an internship at eWeblink Web Design
                    and Development, where I honed my skills in HTML, CSS, JavaScript, and WordPress.
                  </p>
                  <p className="text-base leading-relaxed">
                    Currently working as a freelance developer, I&#39;ve expanded my expertise to include
                    Node.js, Next.js, MongoDB, APIs, and SQL. I focus on creating accessible,
                    user-friendly applications that solve real-world problems.
                  </p>

                  <div className="flex flex-wrap gap-3 mt-6">
                    <div className="flex items-center gap-2 text-sm bg-primary/10 px-3 py-1.5 rounded-full">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span>New Delhi, India</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm bg-primary/10 px-3 py-1.5 rounded-full">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span>Available for Freelance</span>
                    </div>
                  </div>
                  <div className="space-y-6 mt-12">
                    <h3 className="text-2xl font-semibold text-foreground flex items-center gap-2"> <span className="text-primary">#</span> Technical Skills</h3>
                    <Swiper
                      slidesPerView={1} // Default: Show 1 slide at a time on mobile
                      spaceBetween={10}
                      autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                      }}
                      pagination={{
                        clickable: true,
                        el: '.swiper-pagination', // Custom pagination container
                        bulletClass: 'swiper-pagination-bullet', // Custom bullet class
                        bulletActiveClass: 'swiper-pagination-bullet-active', // Custom active bullet class
                      }}
                      breakpoints={{
                        1024: { // Desktop breakpoint
                          slidesPerView: 2, // Show 2 slides at a time
                          grid: {
                            rows: 2, // Create a 2x2 grid
                            fill: 'row', // Fill rows first
                          },
                          spaceBetween: 20, // Adjust spacing for desktop
                        },
                      }}
                      modules={[Autoplay, Pagination, Grid]}
                      className="mySwiper"
                    >
                      {skills.map((skill) => (
                        <SwiperSlide key={skill.name}>
                          <div className="h-full bg-card/30 backdrop-blur p-4 rounded-lg border border-primary/10 hover:border-primary/30 transition-colors">
                            <div className="flex items-center gap-3 mb-2">
                              {skill.icon}
                              <h4 className="font-medium text-foreground">{skill.name}</h4>
                            </div>
                            <SkillBar
                              name={skill.name}
                              percentage={skill.percentage}
                            />
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                </div>
                <div className="relative group">
                  <div className="relative w-full aspect-square rounded-lg overflow-hidden shadow-xl">
                    <Image
                      src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80"
                      alt="Developer workspace"
                      fill
                      className="object-cover transition-transform group-hover:scale-105 duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                  </div>
                  <div className="absolute -inset-2 border-2 border-primary rounded-lg -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>
                </div>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="min-h-screen py-32 section-slide-up">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-4">
                <span className="text-primary">#</span>
                <span>Featured Projects</span>
                <div className="h-[1px] w-32 bg-primary/30"></div>
              </h2>
              <div className="space-y-32">
                <div className="relative grid md:grid-cols-2 gap-8 md:gap-12">
                  <div className="relative group">
                    <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-xl">
                      <Image
                        src="./patticircle.png"
                        alt="Patti Winner"
                        fill
                        className="object-cover transition-transform group-hover:scale-105 duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60 group-hover:opacity-30 transition-opacity"></div>
                    </div>
                    <div className="absolute -inset-2 border-2 border-primary/50 rounded-lg -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>
                  </div>
                  <div className="space-y-6">
                    <div className="p-1 bg-primary/10 rounded-lg inline-block">
                      <p className="text-primary font-medium px-3 py-1">Featured Project</p>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold">Patti Winner</h3>
                    <Card className="p-6 bg-card/50 backdrop-blur border-primary/20 shadow-md">
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        An interactive single-player card game built with Next.js, featuring smooth animations
                        and a seamless user experience. Integrated with MongoDB for user progress tracking
                        and leaderboards.
                      </p>
                    </Card>
                    <div className="flex flex-wrap gap-3 text-sm">
                      {['Next.js', 'MongoDB', 'Tailwind', 'Framer Motion'].map(tech => (
                        <span key={tech} className="bg-primary/10 text-primary px-3 py-1 rounded-full">{tech}</span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <a href="https://www.patticircle.com/" className="text-muted-foreground hover:text-primary transition-colors">
                        <ExternalLink className="h-6 w-6" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="relative grid md:grid-cols-2 gap-8 md:gap-12">
                  <div className="relative group order-1 md:order-2">
                    <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-xl">
                      <Image
                        src="./kindnessNetwork.png"
                        alt="KindnessNetwork"
                        fill
                        className="object-cover transition-transform group-hover:scale-105 duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60 group-hover:opacity-30 transition-opacity"></div>
                    </div>
                    <div className="absolute -inset-2 border-2 border-primary/50 rounded-lg -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>
                  </div>
                  <div className="space-y-6 order-2 md:order-1 text-right">
                    <div className="p-1 bg-primary/10 rounded-lg inline-block">
                      <p className="text-primary font-medium px-3 py-1">Featured Project</p>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold">KindnessNetwork</h3>
                    <Card className="p-6 bg-card/50 backdrop-blur border-primary/20 shadow-md">
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        A platform connecting donors with NGOs for impactful contributions.
                        Built with Next.js and MongoDB, featuring real-time updates, secure payment integration,
                        and comprehensive analytics dashboard.
                      </p>
                    </Card>
                    <div className="flex flex-wrap gap-3 justify-end text-sm">
                      {['Next.js', 'MongoDB', 'Node.js', 'Stripe API'].map(tech => (
                        <span key={tech} className="bg-primary/10 text-primary px-3 py-1 rounded-full">{tech}</span>
                      ))}
                    </div>
                    <div className="flex gap-4 justify-end">
                      <a href="https://github.com/adityasingh7402/KindnessNetwork-M" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                        <Github className="h-6 w-6" />
                      </a>
                      <a href="https://kindness-network.vercel.app/" target='_blank' className="text-muted-foreground hover:text-primary transition-colors">
                        <ExternalLink className="h-6 w-6" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="relative grid md:grid-cols-2 gap-8 md:gap-12">
                  <div className="relative group">
                    <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-xl">
                      <Image
                        src="fountain.png"
                        alt="Patti Winner"
                        fill
                        className="object-cover transition-transform group-hover:scale-105 duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60 group-hover:opacity-30 transition-opacity"></div>
                    </div>
                    <div className="absolute -inset-2 border-2 border-primary/50 rounded-lg -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>
                  </div>
                  <div className="space-y-6">
                    <div className="p-1 bg-primary/10 rounded-lg inline-block">
                      <p className="text-primary font-medium px-3 py-1">Featured Project</p>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold">Fountainaqua</h3>
                    <Card className="p-6 bg-card/50 backdrop-blur border-primary/20 shadow-md">
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        Created an e-commerce site for purchasing water from multiple brands. Utilized WordPress and Elementor to design and implement a user-friendly shopping experience, allowing customers to easily browse and purchase products.
                      </p>
                    </Card>
                    <div className="flex flex-wrap gap-3 text-sm">
                      {['WordPress', 'Elementor'].map(tech => (
                        <span key={tech} className="bg-primary/10 text-primary px-3 py-1 rounded-full">{tech}</span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <a href="https://fountainaqua.com/" className="text-muted-foreground hover:text-primary transition-colors">
                        <ExternalLink className="h-6 w-6" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="min-h-screen py-32 flex items-center justify-center section-slide-up">
            <div className="max-w-2xl text-center px-4">
              <div className="p-1 bg-primary/10 rounded-lg inline-block mb-4">
                <p className="text-primary font-medium px-3 py-1">What&#39;s Next?</p>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">Get In Touch</h2>
              <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
                I&#39;m currently looking for new opportunities in full-stack development.
                Whether you have a question or just want to say hi, I&#39;ll try my best to get back to you!
              </p>
              <Button size="lg" className="text-lg px-10 py-7" asChild>
                <a href="mailto:adityasingh7402@gmail.com">Say Hello</a>
              </Button>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="py-8 border-t border-primary/10">
          <div className="max-w-6xl mx-auto px-4 md:px-8 flex flex-col items-center gap-6">
            {/* Show social icons in footer only on mobile */}
            {isMobile && (
              <div className="flex gap-8 mb-4">
                <SocialIcons />
              </div>
            )}
            <p className="text-base text-muted-foreground text-center">
              Designed & Built by Aditya Kumar © {new Date().getFullYear()}
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}