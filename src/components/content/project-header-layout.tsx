'use client';

import { List } from 'lucide-react';
import { useState } from 'react';
import { Drawer } from 'vaul';

import MaxWidthWrapper from '@/components/shared/max-width-wrapper';

export function ProjectHeaderLayout() {
  const [open, setOpen] = useState(false);

  const closeDrawer = () => {
    setOpen(false);
  };

  return (
    <>
      <MaxWidthWrapper className="py-6 md:pb-8 md:pt-10">
        <div className="max-w-screen-sm">
          <h1 className="font-heading text-3xl md:text-4xl">Projects</h1>
          <p className="mt-3.5 text-base text-muted-foreground md:text-lg">
            Latest projects from Mark.
          </p>
        </div>

        <nav className="mt-8 hidden w-full md:flex">
          <ul
            role="list"
            className="flex w-full flex-1 gap-x-2 border-b text-[15px] text-muted-foreground"
          ></ul>
        </nav>
      </MaxWidthWrapper>

      <Drawer.Root open={open} onClose={closeDrawer}>
        <Drawer.Trigger
          onClick={() => setOpen(true)}
          className="mb-8 flex w-full items-center border-y p-3 text-foreground/90 md:hidden"
        >
          <List className="size-[18px]" />
          <p className="ml-2.5 text-sm font-medium">Categories</p>
        </Drawer.Trigger>
        <Drawer.Overlay
          className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm"
          onClick={closeDrawer}
        />
        <Drawer.Portal>
          <Drawer.Content className="fixed inset-x-0 bottom-0 z-50 mt-24 overflow-hidden rounded-t-[10px] border bg-background">
            <div className="sticky top-0 z-20 flex w-full items-center justify-center bg-inherit">
              <div className="my-3 h-1.5 w-16 rounded-full bg-muted-foreground/20" />
            </div>
            <ul
              role="list"
              className="mb-14 w-full p-3 text-muted-foreground"
            ></ul>
          </Drawer.Content>
          <Drawer.Overlay />
        </Drawer.Portal>
      </Drawer.Root>
    </>
  );
}
