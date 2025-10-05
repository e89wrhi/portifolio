import Link from 'next/link';
import { Project } from '.contentlayer/generated';

import { cn, formatDate, placeholderBlurhash } from '@/lib/utils';
import BlurImage from '@/components/shared/blur-image';

export function ProjectCard({
  data,
  priority,
}: {
  data: Project & {
    blurDataURL: string;
  };
  priority?: boolean;
}) {
  return (
    <article
      className={cn(
        'group relative grid grid-cols-2 gap-3 md:grid-cols-1 md:gap-6 items-start'
      )}
    >
      {data.image && (
        <div className="rounded-xl">
          <BlurImage
            alt={data.title}
            blurDataURL={data.blurDataURL ?? placeholderBlurhash}
            className={cn('h-40 w-40 object-cover object-center')}
            width={300}
            height={300}
            priority={priority}
            placeholder="blur"
            src={data.image}
            sizes=""
          />
        </div>
      )}
      <div className={cn('flex flex-1 flex-col justify-between')}>
        <div className="w-full">
          <h2 className="my-1.5 line-clamp-2 font-heading text-2xl">
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
      <Link href={`project/${data.slug}`} className="absolute inset-0">
        <span className="sr-only">View Project</span>
      </Link>
    </article>
  );
}
