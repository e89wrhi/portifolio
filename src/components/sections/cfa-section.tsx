'use client';

import { motion } from 'framer-motion';
import { Icons } from '@/components/shared/icons';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

import { useTranslations } from 'next-intl';

import { siteConfig } from '@/config/site';

export default function CFASection() {
  const t = useTranslations();

  return (
    <section className="relative overflow-hidden py-6">
      <div className="container relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center px-4">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-8 px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-400 text-xs font-bold uppercase tracking-widest"
        >
          {t('portifolio.cta_badge')}
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-5xl md:text-7xl font-heading font-extrabold tracking-tight mb-8 leading-[1.1]"
        >
          {t('portifolio.cta_title')} <br />
          <span className="text-muted-foreground italic font-light">
            {t('portifolio.cta_subtitle')}
          </span>
        </motion.h2>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
          className="max-w-xl text-xl text-muted-foreground mb-12 leading-relaxed"
        >
          {t('portifolio.cta_description')}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto"
        >
          <Link
            href={`mailto:${siteConfig.mailSupport}`}
            className="w-full sm:w-auto overflow-hidden rounded-full"
          >
            <Button
              size="lg"
              className="group w-full rounded-full px-12 h-16 text-lg font-bold shadow-2xl shadow-green-500/20 transition-all hover:scale-105 active:scale-95"
            >
              <Icons.mail className="mr-3 h-5 w-5 transition-transform group-hover:-rotate-12" />
              {t('portifolio.get_in_touch')}
            </Button>
          </Link>

          <Link
            href="#"
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto"
          >
            <Button
              variant="outline"
              size="lg"
              className="w-full rounded-full px-12 h-16 text-lg font-bold border-border bg-background/50 backdrop-blur-sm transition-all hover:bg-neutral-50 dark:hover:bg-neutral-900"
            >
              <Icons.message className="mr-3 h-5 w-5 text-green-500" />
              {t('portifolio.whatsapp')}
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
