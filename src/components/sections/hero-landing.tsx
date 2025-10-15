'use client';

import Link from 'next/link';
//import { env } from '@/../env.mjs';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import { Icons } from '@/components/shared/icons';
//import { siteConfig } from '@/config/site';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useTranslations } from 'next-intl';
import SkillsGroup from './skills-group';

export default function PortifolioHeroLanding() {
  const t = useTranslations();
  /*const { stargazers_count: stars } = await fetch(
    'https://api.github.com/repos/mickasmt/next-saas-stripe-starter',
    {
      ...(env.GITHUB_OAUTH_TOKEN && {
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_OAUTH_TOKEN}`,
          'Content-Type': 'application/json',
        },
      }),
      // data will revalidate every hour
      next: { revalidate: 3600 },
    }
  )
    .then((res) => res.json())
    .catch((e) => console.log(e));
*/
  return (
    <section className="space-y-6 py-12 sm:py-20 lg:py-20">
      <div className="container flex max-w-5xl flex-col items-center gap-5 text-center">
        <Avatar className="h-30 w-30 md:h-40 md:w-40 bg-gray-100 dark:bg-gray-900">
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
        <SkillsGroup />
        <h1 className="mx-10 text-balance font-urban text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-[66px]">
          {t('portifolio.title1')}{' '}
          <span className="text-gradient_green-yellow font-extrabold">
            {t('portifolio.title2')}
          </span>
        </h1>

        <p
          className="max-w-2xl text-balance leading-normal text-muted-foreground sm:text-xl sm:leading-8"
          style={{ animationDelay: '0.35s', animationFillMode: 'forwards' }}
        >
          {t('portifolio.subtitle')}
        </p>

        <div
          className="flex justify-center space-x-2 md:space-x-4"
          style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
        >
          <Link
            href="https://x.com/username"
            target="_blank"
            className={cn(buttonVariants({ size: 'lg' }), 'gap-2 rounded-full')}
          >
            <Icons.twitter className="size-4" />
            <span>{t('portifolio.twitter')}</span>
          </Link>
          <Link
            href="https://linkedin.com/username"
            target="_blank"
            className={cn(
              buttonVariants({
                variant: 'secondary',
                size: 'lg',
              }),
              'px-5 rounded-full'
            )}
          >
            <Icons.linkedin className="mr-2 size-4" />
            <p>{t('portifolio.linkedin')}</p>
          </Link>
        </div>
      </div>
    </section>
  );
}
