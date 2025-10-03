'use client';

import Link from 'next/link';
//import { env } from '@/../env.mjs';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import { Icons } from '@/components/shared/icons';
//import { siteConfig } from '@/config/site';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useTranslations } from 'next-intl';

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

        <div className="flex flex-row border rounded-full items-center space-x-3 px-5 py-3">
          <div className="flex flex-row -space-x-4 md:-space-x-5">
            <Avatar className="h-8 w-8 md:h-10 border border-4 border-white dark:border-black md:w-10 bg-gray-100 dark:bg-gray-900">
              <AvatarImage
                alt="Picture"
                height={50}
                width={50}
                src="/_avatars/a1.png"
                referrerPolicy="no-referrer"
              />
              <AvatarFallback>
                <span className="sr-only">A</span>
              </AvatarFallback>
            </Avatar>
            <Avatar className="h-8 w-8 md:h-10 border border-4 border-white dark:border-black md:w-10 bg-gray-100 dark:bg-gray-900">
              <AvatarImage
                alt="Picture"
                height={50}
                width={50}
                src="/_avatars/a2.png"
                referrerPolicy="no-referrer"
              />
              <AvatarFallback>
                <span className="sr-only">A</span>
              </AvatarFallback>
            </Avatar>
            <Avatar className="h-8 w-8 md:h-10 border border-4 border-white dark:border-black md:w-10 bg-gray-100 dark:bg-gray-900">
              <AvatarImage
                alt="Picture"
                height={50}
                width={50}
                src="/_avatars/a3.png"
                referrerPolicy="no-referrer"
              />
              <AvatarFallback>
                <span className="sr-only">A</span>
              </AvatarFallback>
            </Avatar>
          </div>

          <p>Trusted by 12k Customers</p>
        </div>
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
            href="/note"
            prefetch={true}
            className={cn(buttonVariants({ size: 'lg' }), 'gap-2 rounded-full')}
          >
            <Icons.note className="size-4" />
            <span>{t('portifolio.notes')}</span>
          </Link>
          <Link
            href="/project"
            className={cn(
              buttonVariants({
                variant: 'outline',
                size: 'lg',
              }),
              'px-5 rounded-full'
            )}
          >
            <Icons.project className="mr-2 size-4" />
            <p>{t('portifolio.projects')}</p>
          </Link>
        </div>
      </div>
    </section>
  );
}
