import Link from 'next/link';
import { cn, formatDate } from '@/lib/utils';
import BlurImage from '@/components/shared/blur-image';
import { BlogPost } from '@prisma/client';
import NoteAuthor from './note-posts-item-author';

type NotePost = Omit<BlogPost, 'coverImageId' | 'authorId'> & {
  blurDataURL: string | null;
  coverImageUrl: string | null;
  author?: {
    id: string;
    name: string;
    bio: string | null;
    avatarUrl: string | null;
  } | null;
};

export function NoteItem({
  data,
  priority,
  horizontale = false,
}: {
  data: NotePost;
  priority?: boolean;
  horizontale?: boolean;
}) {
  if (!data) return null; // Guard against undefined

  return (
    <article
      className={cn(
        'group relative',
        horizontale
          ? 'grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-6'
          : 'flex flex-col space-y-2'
      )}
    >
      {data.coverImageUrl && (
        <div className="w-full overflow-hidden rounded-xl border">
          <BlurImage
            alt={data.title}
            blurDataURL={data.coverImageUrl ?? undefined}
            className={cn(
              'w-full object-cover object-center rounded-3xl',
              horizontale ? 'lg:h-70' : 'h-60'
            )}
            width={800}
            height={400}
            priority={priority}
            placeholder="blur"
            src={data.coverImageUrl || ''}
            sizes="(max-width: 768px) 750px, 600px"
          />
        </div>
      )}

      <div
        className={cn(
          'flex flex-1 flex-col',
          horizontale ? 'justify-center' : 'justify-between'
        )}
      >
        <div className="w-full">
          <h2 className="my-1.5 line-clamp-2 font-heading text-2xl">
            {data.title}
          </h2>
          {data.excerpt && (
            <p className="line-clamp-2 text-muted-foreground">{data.excerpt}</p>
          )}
        </div>

        {data.author && (
          <div className="mt-4 flex items-center space-x-3">
            <NoteAuthor
              username={data.author.name}
              key={data.author.id}
              image={data.author.avatarUrl ?? undefined}
              imageOnly
            />
            {data.createdAt && (
              <p className="text-sm text-muted-foreground">
                {formatDate(data.createdAt.toISOString())}
              </p>
            )}
          </div>
        )}
      </div>

      <Link href={`/note/${data.id}`} className="absolute inset-0">
        <span className="sr-only">View Article</span>
      </Link>
    </article>
  );
}
