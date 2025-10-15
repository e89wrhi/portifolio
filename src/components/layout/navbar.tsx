'use client';

import Link from 'next/link';
import { useScroll } from '@/hooks/use-scroll';
import MaxWidthWrapper from '@/components/shared/max-width-wrapper';
import { NavOptions } from './nav-options';
import { TabConfigs } from '@/config/landing';
import { cn } from '@/lib/utils';
import { useSelectedLayoutSegment } from 'next/navigation';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';

interface NavBarProps {
  scroll?: boolean;
  large?: boolean;
}

export function NavBar({ scroll = false }: NavBarProps) {
  const scrolled = useScroll(50);
  const selectedLayout = useSelectedLayoutSegment();

  return (
    <header
      className={`sticky top-0 z-40 flex w-full justify-center bg-background/80 backdrop-blur-xl transition-all ${
        scroll ? (scrolled ? '' : 'bg-transparent') : 'border-b'
      }`}
    >
      <MaxWidthWrapper className="flex h-19 items-center justify-between py-4">
        <div className="flex gap-6 md:gap-10">
          <div className="flex items-center space-x-3">
            <NavOptions />
          </div>
        </div>
        {TabConfigs() && TabConfigs().mainNav.length > 0 ? (
          <nav className="gap-6 flex flex-row">
            {TabConfigs().mainNav.map((item, index) => (
              <Link
                key={index}
                href={item.disabled ? '#' : item.href}
                prefetch={true}
                className={cn(
                  'flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm',
                  item.href.startsWith(`/${selectedLayout}`)
                    ? 'text-foreground font-bold'
                    : 'text-foreground/60',
                  item.disabled && 'cursor-not-allowed opacity-80'
                )}
              >
                {item.title}
              </Link>
            ))}
          </nav>
        ) : null}

        <Tooltip>
          <TooltipTrigger>
            <p> - </p>
          </TooltipTrigger>
          <TooltipContent className="rounded-full">Hi There!</TooltipContent>
        </Tooltip>
      </MaxWidthWrapper>
    </header>
  );
}
