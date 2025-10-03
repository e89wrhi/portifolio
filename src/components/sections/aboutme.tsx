'use client';

import { Icons } from '@/components/shared/icons';
//import { siteConfig } from '@/config/site';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useTranslations } from 'next-intl';

export default function AboutMe() {
  const t = useTranslations();
  return (
    <section className="space-y-6 py-12 sm:py-20 lg:py-20">
      <div className="container flex max-w-5xl flex-col items-center gap-5 text-center">
        <p>{t('portifolio.aboutme')}</p>
        <h1 className="align-middle inline-block mx-10 text-balance font-urban text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-[66px]">
          {t('portifolio.about_title1')}{' '}
          <span className="text-gradient_green-yellow">
            {t('portifolio.about_title2')}{' '}
          </span>{' '}
          {t('portifolio.about_title3')}{' '}
          <span>
            <Avatar className="h-10 w-10 bg-gray-100 dark:bg-gray-900 align-middle inline-block">
              <AvatarImage
                alt="Picture"
                height={200}
                width={200}
                src="/_avatars/a9.png"
                referrerPolicy="no-referrer"
              />
              <AvatarFallback>
                <span className="sr-only">A</span>
                <Icons.user className="size-11" />
              </AvatarFallback>
            </Avatar>
          </span>
          <span>{t('portifolio.about_title4')} </span>
        </h1>

        <p
          className="align-middle inline-block max-w-2xl text-balance leading-normal text-muted-foreground sm:text-xl sm:leading-8"
          style={{ animationDelay: '0.35s', animationFillMode: 'forwards' }}
        >
          I specialize in building modern web and mobile apps using{' '}
          <Icons.nextjs className="align-middle inline-block text-green-400 size-5" />{' '}
          Next.js,{' '}
          <Icons.web className="align-middle inline-block text-purple-400 size-5" />{' '}
          .NET, and{' '}
          <Icons.appdesign className="align-middle inline-block text-blue-400 size-5" />{' '}
          React Native. Alongside development, I bring a design-driven approach
          and offer consulting to help transform ideas into polished digital
          solutions.
        </p>
      </div>
    </section>
  );
}
