'use client';

import { Button } from '@/components/ui/button';
import { Icons } from '@/components/shared/icons';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { LocaleChange } from './change-locale';
import { ModeToggle } from './mode-toggle';

export function NavOptions() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="
                rounded-full h-8 w-8 px-0"
        >
          <Icons.options className="" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="start"
        className="m-5 bg-gray-100 dark:bg-gray-900 border-none 
        flex ml-4 backdrop-blur-xl rounded-full"
      >
        <DropdownMenuItem className="rounded-full">
          <LocaleChange pathname={''} />
        </DropdownMenuItem>
        <DropdownMenuItem className="rounded-full">
          <ModeToggle />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
