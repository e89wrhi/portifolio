'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Icons } from '@/components/shared/icons';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu';

export function LocaleChange({ pathname }: { pathname: string }) {
  const router = useRouter();

  function switchTo(locale: string) {
    // Save language preference in a cookie (expires in 1 year)
    document.cookie = `NEXT_LOCALE=${locale}; path=/; max-age=31536000`;

    // Update the URL
    const segments = pathname.split('/');
    segments[1] = locale;
    router.replace(segments.join('/'));
    window.location.href = segments.join('/');
    //router.push(`/${locale}/` + url);
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className=" 
                rounded-full h-8 w-8 px-0"
        >
          <Icons.lang className="" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="start"
        className="bg-gray-100 dark:bg-gray-900 border-none 
        rounded-xl backdrop-blur-xl m-4 text-lg space-y-2"
      >
        <DropdownMenuItem
          className="rounded-full px-2"
          onClick={() => {
            switchTo('en');
          }}
        >
          <span>English</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          className="rounded-full px-2"
          onClick={() => {
            switchTo('ja');
          }}
        >
          <span>日本語</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          className="rounded-full px-2"
          onClick={() => {
            switchTo('zh');
          }}
        >
          <span>中文</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          className="rounded-full px-2"
          onClick={() => {
            switchTo('ar');
          }}
        >
          <span>العربية</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          className="rounded-full px-2"
          onClick={() => {
            switchTo('am');
          }}
        >
          <span>አማርኛ</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
