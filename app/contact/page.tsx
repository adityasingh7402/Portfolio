'use client';
import React, { useState } from 'react';
import { MainNav } from "@/components/main-nav";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import TransitionEffect from '@/components/transition-effect';

const EASE = [0.16, 1, 0.3, 1] as const;

const fadeUp = (i = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { delay: i * 0.1, duration: 0.6, ease: EASE },
});

const contactDetails = [
  {
    icon: <Mail className="h-5 w-5" />,
    label: 'Email',
    value: 'adityasingh7402@gmail.com',
    href: 'mailto:adityasingh7402@gmail.com',
  },
  {
    icon: <Phone className="h-5 w-5" />,
    label: 'Phone',
    value: '+91 9999999999',
    href: 'tel:+919999999999',
  },
  {
    icon: <MapPin className="h-5 w-5" />,
    label: 'Location',
    value: 'New Delhi, India',
  },
];

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const form = e.currentTarget;
      const formData = new FormData(form);
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });
      if (response.ok) {
        setShowSuccess(true);
        form.reset();
        setTimeout(() => setShowSuccess(false), 5000);
      }
    } catch (err) {
      console.error('Error submitting form:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    'w-full px-4 py-3 rounded-md border border-white/10 bg-white/[0.03] text-[#EDEDED] placeholder-[#A1A1AA] focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/40 transition-colors text-sm';

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
                  Contact
                </motion.p>
                <div className="overflow-hidden">
                  <motion.h1
                    className="text-5xl md:text-7xl font-bold tracking-[-0.03em] leading-[0.95] text-[#EDEDED]"
                    initial={{ y: '110%' }}
                    animate={{ y: 0 }}
                    transition={{ delay: 0.3, duration: 0.7, ease: EASE }}
                  >
                    Get In<br />Touch
                  </motion.h1>
                </div>
                <motion.div
                  className="h-px w-12 bg-primary mt-6"
                  initial={{ scaleX: 0, originX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.7, duration: 0.5, ease: EASE }}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">

                {/* Left: info */}
                <div className="space-y-8">
                  <motion.p
                    className="text-[#A1A1AA] leading-relaxed text-base"
                    {...fadeUp(0)}
                  >
                    Open to new projects, full-time roles, and collaborations.
                    Whether you have a question or just want to say hello — my inbox is always open.
                  </motion.p>

                  <div className="space-y-4">
                    {contactDetails.map((c, i) => (
                      <motion.div
                        key={c.label}
                        className="glass-card rounded-md p-5 flex items-start gap-4 hover:border-white/20 transition-colors"
                        {...fadeUp(i + 1)}
                      >
                        <span className="mt-0.5 text-primary">{c.icon}</span>
                        <div>
                          <p className="text-xs font-semibold tracking-wider uppercase text-[#A1A1AA] mb-1">{c.label}</p>
                          {c.href ? (
                            <a
                              href={c.href}
                              className="text-sm text-[#EDEDED] hover:text-primary transition-colors"
                            >
                              {c.value}
                            </a>
                          ) : (
                            <p className="text-sm text-[#EDEDED]">{c.value}</p>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Right: form */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.7, ease: EASE }}
                >
                  <div className="glass-card rounded-md p-8">
                    <h2 className="text-lg font-semibold tracking-tight text-[#EDEDED] mb-6">Send a Message</h2>

                    {showSuccess ? (
                      <motion.div
                        className="flex flex-col items-center text-center py-10 gap-4"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4 }}
                      >
                        <CheckCircle className="h-12 w-12 text-primary" />
                        <h3 className="text-xl font-bold text-[#EDEDED]">Message Sent</h3>
                        <p className="text-sm text-[#A1A1AA]">
                          Thanks for reaching out. I&apos;ll respond as soon as possible.
                        </p>
                        <Button
                          variant="outline"
                          className="border-white/10 text-[#EDEDED] hover:bg-white/5 rounded-md mt-2 text-sm"
                          onClick={() => setShowSuccess(false)}
                        >
                          Send Another
                        </Button>
                      </motion.div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-5">
                        <input type="hidden" name="access_key" value="0c5a5cf4-2404-4aef-a0e6-88bc1f001117" />
                        <input type="hidden" name="subject" value="New contact form submission from portfolio" />
                        <input type="hidden" name="from_name" value="Portfolio Contact Form" />
                        <input type="checkbox" name="botcheck" className="hidden" />

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-[#A1A1AA] mb-2">Name</label>
                            <input type="text" id="name" name="name" required className={inputClass} placeholder="Your name" />
                          </div>
                          <div>
                            <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-[#A1A1AA] mb-2">Email</label>
                            <input type="email" id="email" name="email" required className={inputClass} placeholder="you@example.com" />
                          </div>
                        </div>

                        <div>
                          <label htmlFor="subject" className="block text-xs font-semibold uppercase tracking-wider text-[#A1A1AA] mb-2">Subject</label>
                          <input type="text" id="subject" name="subject" required className={inputClass} placeholder="Subject" />
                        </div>

                        <div>
                          <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-[#A1A1AA] mb-2">Message</label>
                          <textarea id="message" name="message" required rows={5} className={`${inputClass} resize-none`} placeholder="Your message" />
                        </div>

                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full bg-primary text-background font-semibold rounded-md hover:bg-primary/90 transition-colors gap-2 py-5"
                        >
                          {isSubmitting ? 'Sending…' : (
                            <>
                              Send Message
                              <Send className="h-4 w-4" />
                            </>
                          )}
                        </Button>
                      </form>
                    )}
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
