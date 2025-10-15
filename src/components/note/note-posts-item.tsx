import Link from 'next/link';
import { Note } from '.contentlayer/generated';

import { cn, formatDate } from '@/lib/utils';

export function NoteCard({ data }: { data: Note }) {
  return (
    <article
      className={cn(
        'group relative grid gap-3 md:grid-cols-1 md:gap-6 items-start'
      )}
    >
      <div className={cn('flex flex-1 flex-col justify-between')}>
        <div className="w-full">
          <h2 className="my-1.5 font-bold line-clamp-2 font-heading text-2xl">
            {data.title}
          </h2>
          {data.description && (
            <p className="line-clamp-2 text-muted-foreground">
              {data.description}
            </p>
          )}
        </div>
        <div className="mt-4 flex items-center space-x-3">
          {data.date && (
            <p className="text-sm text-muted-foreground">
              {formatDate(data.date)}
            </p>
          )}
        </div>
      </div>
      <Link href={`note/${data.slug}`} className="absolute inset-0">
        <span className="sr-only">View Note</span>
      </Link>
    </article>
  );
}
