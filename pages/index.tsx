'use client';

import { useState, useEffect } from 'react';
import { Github, Mail, Linkedin, Instagram, Code, Laptop, Server, ExternalLink, ArrowRight, Circle, Triangle, Square, FileDown } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ModeToggle } from "@/components/mode-toggle";
import { SkillBar } from "@/components/skill-bar";
import { ParticlesBackground } from "@/components/particles-background";
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
    { name: 'JavaScript/TypeScript', percentage: 90 },
    { name: 'React.js/Next.js', percentage: 85 },
    { name: 'Node.js', percentage: 80 },
    { name: 'HTML/CSS/Tailwind', percentage: 90 },
    { name: 'MongoDB/MySQL', percentage: 75 },
    { name: 'WordPress', percentage: 80 },
    { name: 'Python', percentage: 70 },
    { name: 'Java', percentage: 65 },
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
        className="text-muted-foreground hover:text-primary transition-colors"
      >
        <Github className="h-6 w-6" />
      </a>
      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted-foreground hover:text-primary transition-colors"
      >
        <Linkedin className="h-6 w-6" />
      </a>
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted-foreground hover:text-primary transition-colors"
      >
        <Instagram className="h-6 w-6" />
      </a>
      <a
        href="mailto:hello@example.com"
        className="text-muted-foreground hover:text-primary transition-colors"
      >
        <Mail className="h-6 w-6" />
      </a>
    </>
  );

  return (
    <>
      <Head>
        <title>Aditya Kumar - Software Developer</title>
        <meta name="description" content="Personal portfolio website of Aditya Kumar, a software developer specializing in web development." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen relative overflow-hidden">
        <ParticlesBackground />
        
        {/* Social Icons - Desktop */}
        {!isMobile && (
          <div className="fixed left-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-6">
            <SocialIcons />
            <div className="h-24 w-[2px] bg-border mx-auto"></div>
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
        <nav className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-sm z-50 border-b">
          <div className="max-w-5xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
            <div className="flex gap-4 md:gap-8 overflow-x-auto hide-scrollbar">
              {['home', 'about', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`nav-link capitalize whitespace-nowrap ${
                    activeSection === section ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
            <ModeToggle />
          </div>
        </nav>

        <main className="pt-24 px-4 md:px-6 lg:px-24">
          {/* Hero Section */}
          <section
            id="home"
            className={`min-h-screen flex items-center ${
              isVisible ? 'section-slide-up' : 'opacity-0'
            }`}
          >
            <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-primary mb-4">Hi, my name is</p>
                <h1 className="text-4xl md:text-6xl font-bold mb-4">Aditya Kumar</h1>
                <h2 className="text-2xl md:text-4xl text-muted-foreground font-semibold mb-6">
                  Full-stack Developer
                </h2>
                <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-xl">
                  Soon-to-be BCA graduate with a strong foundation in full-stack development.
                  Specializing in building exceptional digital experiences with modern web technologies.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" asChild>
                    <a href="#projects">Check out my work</a>
                  </Button>
                  <Button size="lg" variant="outline" className="group" asChild>
                    <a href="/resume.pdf" download>
                      Download Resume
                      <FileDown className="ml-2 h-4 w-4 group-hover:translate-y-0.5 transition-transform" />
                    </a>
                  </Button>
                </div>
              </div>
              <div className="relative aspect-square w-full max-w-md mx-auto">
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary/20">
                  <Image
                    src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&q=80"
                    alt="Aditya Kumar"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="absolute inset-0 rounded-full border-2 border-primary/40 transform scale-110"></div>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="min-h-screen py-24 section-slide-up">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-4">
                <span>About Me</span>
                <div className="h-[1px] w-32 bg-border"></div>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    I'm a passionate full-stack developer with experience in building web applications
                    using modern technologies. My journey began with an internship at eWeblink Web Design
                    and Development, where I honed my skills in HTML, CSS, JavaScript, and WordPress.
                  </p>
                  <p>
                    Currently working as a freelance developer, I've expanded my expertise to include
                    Node.js, Next.js, MongoDB, APIs, and SQL. I focus on creating accessible,
                    user-friendly applications that solve real-world problems.
                  </p>
                  <div className="space-y-6 mt-8">
                    <h3 className="text-xl font-semibold text-foreground">Skills</h3>
                    <div className="grid grid-cols-1 gap-4">
                      {skills.map((skill) => (
                        <SkillBar
                          key={skill.name}
                          name={skill.name}
                          percentage={skill.percentage}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="relative group">
                  <div className="relative w-full aspect-square rounded-lg overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80"
                      alt="Developer workspace"
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors"></div>
                  </div>
                  <div className="absolute -inset-2 border-2 border-primary rounded-lg -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform"></div>
                </div>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="min-h-screen py-24 section-slide-up">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-12 flex items-center gap-4">
                <span>Featured Projects</span>
                <div className="h-[1px] w-32 bg-border"></div>
              </h2>
              <div className="space-y-24">
                <div className="relative grid md:grid-cols-2 gap-8 md:gap-12">
                  <div className="relative group">
                    <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                      <Image
                        src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
                        alt="Patti Winner"
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors"></div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <p className="text-primary">Featured Project</p>
                    <h3 className="text-xl md:text-2xl font-bold">Patti Winner</h3>
                    <Card className="p-6 bg-card/50 backdrop-blur">
                      <p className="text-muted-foreground">
                        An interactive single-player card game built with Next.js, featuring smooth animations
                        and a seamless user experience. Integrated with MongoDB for user progress tracking.
                      </p>
                    </Card>
                    <div className="flex gap-4 text-sm text-muted-foreground">
                      <span>Next.js</span>
                      <span>MongoDB</span>
                      <span>Tailwind</span>
                    </div>
                    <div className="flex gap-4">
                      <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                        <Github className="h-5 w-5" />
                      </a>
                      <a href="#" className="text-muted-foreground hover:text-primary">
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="relative grid md:grid-cols-2 gap-8 md:gap-12">
                  <div className="relative group order-1 md:order-2">
                    <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                      <Image
                        src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80"
                        alt="KindnessNetwork"
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors"></div>
                    </div>
                  </div>
                  <div className="space-y-4 order-2 md:order-1 text-right">
                    <p className="text-primary">Featured Project</p>
                    <h3 className="text-xl md:text-2xl font-bold">KindnessNetwork</h3>
                    <Card className="p-6 bg-card/50 backdrop-blur">
                      <p className="text-muted-foreground">
                        A platform connecting donors with NGOs for impactful contributions.
                        Built with Next.js and MongoDB, featuring real-time updates and secure payment integration.
                      </p>
                    </Card>
                    <div className="flex gap-4 justify-end text-sm text-muted-foreground">
                      <span>Next.js</span>
                      <span>MongoDB</span>
                      <span>Node.js</span>
                    </div>
                    <div className="flex gap-4 justify-end">
                      <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                        <Github className="h-5 w-5" />
                      </a>
                      <a href="#" className="text-muted-foreground hover:text-primary">
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="min-h-screen py-24 flex items-center justify-center section-slide-up">
            <div className="max-w-xl text-center px-4">
              <p className="text-primary mb-4">What's Next?</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Get In Touch</h2>
              <p className="text-muted-foreground mb-8">
                I'm currently looking for new opportunities in full-stack development.
                Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
              <Button size="lg" asChild>
                <a href="mailto:hello@example.com">Say Hello</a>
              </Button>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="py-6 border-t">
          <div className="max-w-5xl mx-auto px-4 md:px-6 flex flex-col items-center gap-4">
            {/* Show social icons in footer only on mobile */}
            {isMobile && (
              <div className="flex gap-6 mb-4">
                <SocialIcons />
              </div>
            )}
            <p className="text-sm text-muted-foreground text-center">
              Designed & Built by Aditya Kumar © {new Date().getFullYear()}
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}