'use client';
import React, { useState, useEffect } from 'react';
import { MainNav } from "@/components/main-nav";
import { ParticlesBackground } from "@/components/particles-background";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import Head from 'next/head';
import TransitionEffect from '@/components/transition-effect';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [canAnimate, setCanAnimate] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

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

  return (
    <>
      <Head>
        <title>Contact - Aditya Kumar</title>
        <meta name="description" content="Get in touch with Aditya Kumar for web development projects and collaborations." />
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
                <span>Get In Touch</span>
              </h2>
              <motion.div
                className="absolute -bottom-4 left-0 h-1 bg-gradient-to-r from-primary/50 to-transparent"
                initial={{ width: 0 }}
                animate={{ width: "50%" }}
                transition={{ delay: 0.5, duration: 1 }}
              />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <motion.p
                  className="text-lg text-muted-foreground leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  I&#39;m currently looking for new opportunities and my inbox is always open.
                  Whether you have a question, a project idea, or just want to say hi,
                  I&#39;ll do my best to get back to you!
                </motion.p>

                <motion.div
                  className="space-y-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <Card className="bg-card/30 backdrop-blur-sm p-6 border-primary/20 shadow-lg hover:border-primary/40 transition-colors">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">Email</h3>
                        <a href="mailto:adityasingh7402@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                          adityasingh7402@gmail.com
                        </a>
                      </div>
                    </div>
                  </Card>

                  <Card className="bg-card/30 backdrop-blur-sm p-6 border-primary/20 shadow-lg hover:border-primary/40 transition-colors">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">Phone</h3>
                        <a href="tel:+919999999999" className="text-muted-foreground hover:text-primary transition-colors">
                          +91 9999999999
                        </a>
                      </div>
                    </div>
                  </Card>

                  <Card className="bg-card/30 backdrop-blur-sm p-6 border-primary/20 shadow-lg hover:border-primary/40 transition-colors">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">Location</h3>
                        <p className="text-muted-foreground">
                          New Delhi, India
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              </motion.div>

              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-lg blur-lg opacity-50"
                  animate={{
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                ></motion.div>
                <Card className="relative bg-card/80 backdrop-blur-sm p-8 border-primary/20 shadow-lg">
                  <h3 className="text-2xl font-semibold mb-6">Send me a message</h3>
                  {showSuccess ? (
                    <motion.div
                      className="relative overflow-hidden bg-gradient-to-r from-green-500/20 via-primary/20 to-green-500/20 border border-green-500/30 rounded-lg p-6 shadow-lg"
                      initial={{ opacity: 0, y: 10, height: 0 }}
                      animate={{ 
                        opacity: 1, 
                        y: 0, 
                        height: 'auto',
                        transition: {
                          duration: 0.5,
                          ease: "easeOut"
                        }
                      }}
                      exit={{ 
                        opacity: 0, 
                        y: -10, 
                        height: 0,
                        transition: { duration: 0.3 }
                      }}
                    >
                      <motion.div 
                        className="absolute -inset-0.5 bg-gradient-to-r from-green-500/10 to-primary/10 rounded-lg blur opacity-30"
                        animate={{
                          opacity: [0.3, 0.6, 0.3],
                          background: [
                            "linear-gradient(to right, rgba(34, 197, 94, 0.1), rgba(var(--primary), 0.1))",
                            "linear-gradient(to right, rgba(var(--primary), 0.1), rgba(34, 197, 94, 0.1))",
                            "linear-gradient(to right, rgba(34, 197, 94, 0.1), rgba(var(--primary), 0.1))"
                          ]
                        }}
                        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                      />
                      <div className="relative z-10 flex flex-col items-center text-center py-4">
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ 
                            delay: 0.2, 
                            duration: 0.5, 
                            type: "spring",
                            stiffness: 200
                          }}
                          className="bg-green-500/20 p-4 rounded-full mb-4 relative"
                        >
                          <motion.div
                            className="absolute inset-0 rounded-full bg-green-500/10"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                          />
                          <CheckCircle className="h-10 w-10 text-green-500 relative z-10" />
                        </motion.div>
                        <motion.h3 
                          className="text-xl font-bold mb-2 text-foreground"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                        >
                          Message Sent Successfully!
                        </motion.h3>
                        <motion.p 
                          className="text-muted-foreground mb-4"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4 }}
                        >
                          Thanks for reaching out. I'll get back to you as soon as possible.
                        </motion.p>
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5 }}
                          className="w-full max-w-[200px]"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Button 
                            onClick={() => setShowSuccess(false)}
                            variant="outline" 
                            className="w-full border-green-500/30 text-green-600 hover:bg-green-500/10"
                          >
                            Send Another Message
                          </Button>
                        </motion.div>
                      </div>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <input type="hidden" name="access_key" value="0c5a5cf4-2404-4aef-a0e6-88bc1f001117" />
                      <input type="hidden" name="subject" value="New contact form submission from portfolio" />
                      <input type="hidden" name="from_name" value="Portfolio Contact Form" />
                      <input type="checkbox" name="botcheck" className="hidden" />

                      <div className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                          >
                            <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                            <input
                              type="text"
                              id="name"
                              name="name"
                              required
                              className="w-full px-4 py-3 rounded-lg border border-primary/20 bg-card/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all hover:border-primary/40"
                              placeholder="Your name"
                            />
                          </motion.div>
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                          >
                            <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                            <input
                              type="email"
                              id="email"
                              name="email"
                              required
                              className="w-full px-4 py-3 rounded-lg border border-primary/20 bg-card/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all hover:border-primary/40"
                              placeholder="Your email"
                            />
                          </motion.div>
                        </div>
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5 }}
                        >
                          <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                          <input
                            type="text"
                            id="subject"
                            name="subject"
                            required
                            className="w-full px-4 py-3 rounded-lg border border-primary/20 bg-card/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all hover:border-primary/40"
                            placeholder="Subject"
                          />
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.6 }}
                        >
                          <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                          <textarea
                            id="message"
                            name="message"
                            required
                            rows={5}
                            className="w-full px-4 py-3 rounded-lg border border-primary/20 bg-card/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all hover:border-primary/40 resize-none"
                            placeholder="Your message"
                          ></textarea>
                        </motion.div>
                      </div>

                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                      >
                        <Button
                          type="submit"
                          className="w-full py-6 text-base flex items-center justify-center gap-2"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <>Sending...</>
                          ) : (
                            <>
                              Send Message
                              <Send className="h-5 w-5" />
                            </>
                          )}
                        </Button>
                      </motion.div>
                    </form>
                  )}
                </Card>
              </motion.div>
            </div>
          </div>
        </main>)}
      </div>
    </>
  );
}