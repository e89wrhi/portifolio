'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Icons } from '@/components/shared/icons';
import { useTranslations, useLocale } from 'next-intl';

export default function PortifolioHeroLanding() {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32">
      <div className="container max-w-5xl">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          {/* Left Side: Profile Image & Basic Info */}
          <div className="flex-shrink-0 relative group">
            <div className="size-40 md:size-56 rounded-full overflow-hidden relative z-10">
              <Image
                src="/logo.png"
                alt="Portrait"
                width={224}
                height={224}
                className="object-cover size-full grayscale transition-all duration-700"
              />
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="flex-1 space-y-10 animate-in fade-in slide-in-from-right-10 duration-1000 fill-mode-forwards">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-extrabold tracking-tighter leading-[0.9]">
                {t('portifolio.about_title1')}{' '}
                <span className="text-green-500">
                  {t('portifolio.about_title2')}
                </span>
                <br />
                <span className="text-muted-foreground font-light text-4xl md:text-6xl lg:text-7xl">
                  {t('portifolio.about_title3')}{' '}
                  <span className="text-foreground italic">
                    {t('portifolio.about_title4')}
                  </span>
                </span>
              </h1>
              <div className="max-w-2xl">
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-medium">
                  {t('portifolio.about_description')}
                </p>
              </div>
            </div>

            {/* Social Links & Action */}
            <div className="flex flex-wrap items-center gap-8">
              <div className="flex items-center gap-5 border-r border-border/50 pr-8">
                <Link
                  href="https://github.com/e89wrhi"
                  target="_blank"
                  className="text-muted-foreground hover:text-foreground transition-all hover:scale-110"
                >
                  <Icons.gitHub className="size-7" />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/endashaw-markos-15b240231/"
                  target="_blank"
                  className="text-muted-foreground hover:text-foreground transition-all hover:scale-110"
                >
                  <Icons.linkedin className="size-7" />
                </Link>
                <Link
                  href="https://x.com/nolimitprima"
                  target="_blank"
                  className="text-muted-foreground hover:text-foreground transition-all hover:scale-110"
                >
                  <Icons.twitter className="size-7" />
                </Link>
              </div>

              <Link
                href={`/${locale}/resume`}
                target="_blank"
                className="group inline-flex items-center gap-3 font-bold text-sm tracking-[0.2em] text-foreground/80 hover:text-green-500 transition-all"
              >
                <span>{t('portifolio.view_resume')}</span>
                <Icons.arrowRight className="size-5 transition-transform group-hover:translate-x-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
