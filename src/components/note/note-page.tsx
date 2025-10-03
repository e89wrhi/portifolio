import React from 'react';
import Link from 'next/link';
import BlurImage from '@/components/shared/blur-image';
import MaxWidthWrapper from '@/components/shared/max-width-wrapper';
import Author from '@/components/note/note-posts-item-author';
import { cn, formatDate } from '@/lib/utils';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string; // Markdown or plain text
  coverImage?: { url: string } | null;
  author: { id: string; name: string };
  tags: string[];
  createdAt: Date;
}

interface NotePageProps {
  post: BlogPost;
}

export default async function NotePage({ post }: NotePageProps) {
  return (
    <MaxWidthWrapper className="pt-6 md:pt-10">
      <div className="flex flex-col space-y-4">
        <div className="flex items-center space-x-4">
          {post.tags[0] && (
            <Link
              href={`/blog/category/${post.tags[0]}`}
              className={cn('h-8 rounded-lg border px-3 text-sm font-medium')}
            >
              {post.tags[0]}
            </Link>
          )}
          <time
            dateTime={post.createdAt.toISOString()}
            className="text-sm font-medium text-muted-foreground"
          >
            {formatDate(post.createdAt.toISOString())}
          </time>
        </div>

        <h1 className="font-heading text-3xl text-foreground sm:text-4xl">
          {post.title}
        </h1>
        <p className="text-base text-muted-foreground md:text-lg">
          {post.excerpt}
        </p>

        <div className="flex flex-nowrap items-center space-x-5 pt-1 md:space-x-8">
          <Author username={post.author.id} />
        </div>
      </div>

      {post.coverImage?.url && (
        <div className="mt-6 w-full overflow-hidden rounded-xl border">
          <BlurImage
            src={post.coverImage.url}
            alt={post.title}
            width={1200}
            height={630}
            placeholder="blur"
            blurDataURL={post.coverImage.url}
            className="aspect-[1200/630] object-cover md:rounded-xl"
            priority
          />
        </div>
      )}

      {/* Render content as paragraphs (or consider using a Markdown parser later) */}
      <div className="prose max-w-full pt-8">
        {post.content.split('\n').map((line, i) => (
          <p key={i}>{line}</p>
        ))}
      </div>
    </MaxWidthWrapper>
  );
}
