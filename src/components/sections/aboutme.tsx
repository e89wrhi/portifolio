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
          <span> {t('portifolio.about_title4')} </span>
        </h1>

        <p className="align-middle inline-block max-w-3xl text-balance leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          {t('portifolio.about_description')}
        </p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 mt-10 w-full lg:max-w-none">
          {[
            { key: 'dotnet', icon: Icons.settings, color: 'text-purple-400' },
            { key: 'nextjs', icon: Icons.nextjs, color: 'text-green-400' },
            { key: 'ui', icon: Icons.webdesign, color: 'text-pink-400' },
            { key: 'system', icon: Icons.logo, color: 'text-orange-400' },
          ].map((item) => (
            <div
              key={item.key}
              className="flex flex-col items-center gap-2 p-6 rounded-2xl bg-muted/50 border border-border/50 transition-all hover:bg-muted"
            >
              <item.icon className={`${item.color} size-8`} />
              <span className="font-semibold text-sm">
                {t(`portifolio.expertise_${item.key}`)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
