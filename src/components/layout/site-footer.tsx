import * as React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { siteConfig } from '@/config/site';
import { ContactForm } from './contact-form';
import { Icons } from '../shared/icons';

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer className={cn('border-t', className)}>
      <div className="container grid max-w-6xl grid-cols-2 gap-6 py-14 md:grid-cols-5">
        <div className="col-span-full flex flex-col items-end sm:col-span-1 md:col-span-2">
          <ContactForm />
        </div>
      </div>

      <div className="py-4 mb-5">
        <div className="container flex max-w-6xl items-center justify-between">
          {/* <span className="text-muted-foreground text-sm">
            Copyright &copy; 2024. All rights reserved.
          </span> */}
          <p className="gap-4 text-left text-sm text-muted-foreground">
            @2024 All rights reserved
            <Link href="\privacy">{'  '}Privacy</Link>
            <Link href="\terms">{'  '}Terms</Link>
          </p>

          <div className="flex items-center gap-5 md:gap-11">
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              <Icons.gitHub className="size-5" />
            </Link>
            <Link
              href={siteConfig.links.twitter}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              <Icons.linkedin className="size-5" />
            </Link>
            <Link
              href={siteConfig.links.twitter}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              <Icons.twitter className="size-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
