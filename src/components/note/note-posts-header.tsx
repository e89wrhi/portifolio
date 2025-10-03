'use client';

import { Icons } from '@/components/shared/icons';
import MaxWidthWrapper from '@/components/shared/max-width-wrapper';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Link from 'next/link';

export function NotesHeader() {
  return (
    <>
      <MaxWidthWrapper className="flex items-center space-x-6 md:space-x-9 py-6 md:pb-8 md:pt-10">
        <Link href="/">
          <Avatar className="h-20 w-20">
            <AvatarImage
              alt="Picture"
              height={120}
              width={120}
              src="/_avatars/a9.png"
              referrerPolicy="no-referrer"
            />
            <AvatarFallback>
              <span className="sr-only">A</span>
              <Icons.user className="size-8" />
            </AvatarFallback>
          </Avatar>
        </Link>

        <div className="max-w-screen-sm">
          <h1 className="font-heading font-extrabold text-3xl md:5xl md:text-4xl">
            Notes
          </h1>
          <p className="mt-3.5 text-base text-muted-foreground md:text-lg">
            Latest notes from mark
          </p>
        </div>
      </MaxWidthWrapper>
    </>
  );
}
