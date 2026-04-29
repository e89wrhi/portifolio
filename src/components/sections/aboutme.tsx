'use client';

import { Icons } from '@/components/shared/icons';
import { useTranslations } from 'next-intl';

export default function AboutMe() {
  const t = useTranslations();
  return (
    <section className="py-20 md:py-32">
      <div className="container max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-heading font-extrabold tracking-tight sm:text-4xl md:text-5xl">
              {t('portifolio.aboutme')}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t('portifolio.about_description')}
            </p>
            <div className="flex gap-4 pt-2">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-green-500">
                  {t('portifolio.years_count')}
                </span>
                <span className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                  {t('portifolio.years_exp')}
                </span>
              </div>
              <div className="h-10 w-[1px] bg-border mx-2" />
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-green-500">
                  {t('portifolio.completed_projects')}
                </span>
                <span className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                  {t('portifolio.projects_count')}
                </span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              {
                key: 'dotnet',
                icon: Icons.settings,
                color: 'bg-purple-500/10 text-purple-500',
              },
              {
                key: 'nextjs',
                icon: Icons.nextjs,
                color: 'bg-green-500/10 text-green-500',
              },
              {
                key: 'ui',
                icon: Icons.webdesign,
                color: 'bg-pink-500/10 text-pink-500',
              },
              {
                key: 'system',
                icon: Icons.logo,
                color: 'bg-orange-500/10 text-orange-500',
              },
            ].map((item) => (
              <div
                key={item.key}
                className="flex flex-col items-start gap-4 p-6 rounded-3xl border border-border/50 bg-background/50 backdrop-blur-sm transition-all hover:border-green-500/50 hover:shadow-lg hover:shadow-green-500/5"
              >
                <div className={`${item.color} p-3 rounded-2xl`}>
                  <item.icon className="size-6" />
                </div>
                <span className="font-bold text-sm tracking-tight">
                  {t(`portifolio.expertise_${item.key}`)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
