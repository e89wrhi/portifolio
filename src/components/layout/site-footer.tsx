import * as React from 'react';
import { cn } from '@/lib/utils';

import { useTranslations } from 'next-intl';

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  const t = useTranslations();

  return (
    <footer className={cn('', className)}>
      <div className="container max-w-6xl py-16 md:py-24">
        <div className="mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} {t('portifolio.mark')}.{' '}
            {t('portifolio.all_rights')}
          </p>
          <div className="flex items-center gap-6">
            <div className="size-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm font-bold uppercase tracking-widest text-foreground/60">
              Available for hire
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
