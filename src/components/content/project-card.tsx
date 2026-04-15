import Link from 'next/link';
import { Project } from '.contentlayer/generated';

import { cn, formatDate, placeholderBlurhash } from '@/lib/utils';
import BlurImage from '@/components/shared/blur-image';

export function ProjectCard({
  data,
}: {
  data: Project & {
    blurDataURL: string;
  };
  priority?: boolean;
}) {
  return (
    <article
      className={cn(
        'relative flex flex-col items-center my-5 justify-center md:gap-6',
      )}
    >
      {data.image && (
        <div className="flex items-center">
          <BlurImage
            alt={data.title}
            blurDataURL={data.blurDataURL ?? placeholderBlurhash}
            className={cn('h-35 w-35 object-cover rounded-4xl object-center')}
            width={300}
            height={300}
            placeholder="blur"
            src={data.image}
            sizes=""
          />
        </div>
      )}
      <div className={cn('flex flex-1 flex-col justify-between text-center')}>
        <h2 className="my-1.5 line-clamp-2 font-heading text-2xl">
          {data.title}
        </h2>
        {data.date && (
          <p className="text-sm text-muted-foreground">
            {formatDate(data.date)}
          </p>
        )}
      </div>
      <Link href={`/project/${data.slug}`} className="absolute inset-0">
        <span className="sr-only">View Project</span>
      </Link>
    </article>
  );
}
