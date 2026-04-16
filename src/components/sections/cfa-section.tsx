'use client';

import { motion } from 'framer-motion';
import { Icons } from '@/components/shared/icons';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function CFASection() {
  return (
    <section className="relative overflow-hidden py-32 lg:py-48">
      {/* Minimalistic Background Pattern / Glow */}
      <div className="absolute inset-x-0 top-0 h-px" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 aspect-square w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gray-100/50 dark:bg-gray-900/50 blur-[100px]" />

      <div className="container relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center px-4">
        {/* Animated Icon Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 10 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mb-10 flex h-20 w-20 items-center justify-center rounded-2xl bg-gray-50 dark:bg-gray-900 ring-1 ring-gray-200 dark:ring-gray-800 shadow-sm"
        >
          <Icons.handshake className="h-8 w-8 text-gray-900 dark:text-gray-100" />
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
          className="font-extrabold text-5xl md:text-6xl lg:text-7xl tracking-tight mb-8 text-gray-900 dark:text-white leading-tight"
        >
          Tell me about your <br className="hidden sm:block" />
          <span className="text-gray-400 dark:text-gray-500">next project</span>
        </motion.h1>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
          className="max-w-2xl text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-12"
        >
          Ready to bring your vision to life? Let&apos;s connect and explore how
          we can turn your ideas into reality.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          <Link href="mailto:hello@example.com" className="w-full sm:w-auto">
            <Button
              size="lg"
              className="w-full rounded-full px-8 h-14 text-base font-medium shadow-sm transition-all hover:-translate-y-0.5"
            >
              <Icons.mail className="mr-2 h-5 w-5" />
              Email Me
            </Button>
          </Link>

          <Link
            href="https://wa.me/something"
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto"
          >
            <Button
              variant="outline"
              size="lg"
              className="w-full rounded-full px-8 h-14 text-base font-medium border-gray-200 dark:border-gray-800 bg-transparent transition-all hover:-translate-y-0.5 hover:bg-gray-50 dark:hover:bg-gray-900"
            >
              <Icons.message className="mr-2 h-5 w-5" />
              WhatsApp
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
