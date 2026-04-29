'use client';

import Link from 'next/link';
import { useScroll } from '@/hooks/use-scroll';
import { TabConfigs } from '@/config/landing';
import { cn } from '@/lib/utils';
import { useSelectedLayoutSegment } from 'next/navigation';
import { LocaleChange } from './change-locale';
import { ModeToggle } from './mode-toggle';

interface NavBarProps {
  scroll?: boolean;
  large?: boolean;
}

import { useTranslations } from 'next-intl';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function NavBar({ scroll = false }: NavBarProps) {
  const scrolled = useScroll(50);
  const selectedLayout = useSelectedLayoutSegment();
  const t = useTranslations();

  return (
    <header
      className={cn(
        'sticky top-6 z-40 flex w-full justify-center transition-all px-4',
        scrolled ? 'top-4' : ''
      )}
    >
      <div
        className={cn(
          'flex h-14 items-center justify-between gap-6 rounded-full border border-border/40 bg-background/60 px-6 backdrop-blur-xl transition-all shadow-sm',
          scrolled
            ? 'w-full max-w-2xl border-white/20 shadow-lg dark:bg-black/60'
            : 'w-full max-w-4xl'
        )}
      >
        <div className="flex items-center gap-2">
          <Link
            href="/"
            className="flex items-center gap-2 font-heading font-bold tracking-tight"
          >
            <span className="hidden sm:inline-block">
              {t('portifolio.mark')}
            </span>
          </Link>
        </div>

        <nav className="flex items-center gap-6">
          {TabConfigs()?.mainNav.map((item, index) => (
            <Link
              key={index}
              href={item.disabled ? '#' : item.href}
              className={cn(
                'text-sm font-medium transition-colors hover:text-green-500',
                item.href.startsWith(`/${selectedLayout}`)
                  ? 'text-green-500 font-bold'
                  : 'text-foreground/60',
                item.disabled && 'cursor-not-allowed opacity-40'
              )}
            >
              {item.title}
            </Link>
          ))}
          <div className="h-4 w-[px] bg-border/50 mx-2 hidden sm:block" />
          <div className="flex items-center gap-1 scale-90">
            <LocaleChange pathname="" />
            <ModeToggle />
          </div>
        </nav>
      </div>
    </header>
  );
}
