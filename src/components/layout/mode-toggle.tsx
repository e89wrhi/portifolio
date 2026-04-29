'use client';

import * as React from 'react';
import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Icons } from '@/components/shared/icons';
import { useTranslations } from 'next-intl';

export function ModeToggle() {
  const { setTheme } = useTheme();
  const t = useTranslations();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="h-8 w-8 px-0 rounded-full">
          <Icons.sun className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Icons.moon className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="start"
        className="bg-neutral-100 dark:bg-neutral-900 border-none rounded-xl 
        backdrop-blur-xl m-4"
      >
        <DropdownMenuItem
          className="rounded-full px-2"
          onClick={() => {
            setTheme('light');
          }}
        >
          <Icons.sun className="mr-2 h-4 w-4" />
          <span>{t('theme.light')}</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          className="rounded-full px-2"
          onClick={() => {
            setTheme('dark');
          }}
        >
          <Icons.moon className="mr-2 h-4 w-4" />
          <span>{t('theme.dark')}</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          className="rounded-full px-2"
          onClick={() => {
            setTheme('system');
          }}
        >
          <Icons.settings className="mr-2 h-4 w-4" />
          <span>{t('theme.system')}</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
