'use client';

import Link from 'next/link';
import Image from 'next/image';
import MaxWidthWrapper from '@/components/shared/max-width-wrapper';
import { Icons } from '@/components/shared/icons';

import { useTranslations } from 'next-intl';

interface Note {
  _id: string;
  slug: string;
  title: string;
  description?: string;
  date: string;
  image?: string;
  blurDataURL?: string;
}

export default function RecentNotes({ posts }: { posts: Note[] }) {
  const t = useTranslations();

  return (
    <section className="py-24">
      <MaxWidthWrapper>
        <div className="flex flex-col space-y-4 mb-20 px-4 md:px-0">
          <div className="flex items-center pl-10 gap-2 font-bold tracking-widest text-lg">
            <div className="h-[2px] w-8 bg-black dark:bg-white" />
            {t('portifolio.thoughts')}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.slice(0, 3).map((post) => (
            <Link
              key={post._id}
              href={`/note/${post.slug}`}
              className="group flex flex-col space-y-4 p-6 rounded-[2rem] transition-all"
            >
              {post.image && (
                <div className="relative aspect-video rounded-2xl overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    placeholder="blur"
                    blurDataURL={post.blurDataURL}
                  />
                </div>
              )}
              <div className="space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="text-xs font-bold text-neutral-500 tracking-wider">
                    {new Date(post.date).toLocaleDateString(undefined, {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </div>
                  <h3 className="text-xl font-heading font-bold tracking-tight line-clamp-2 transition-colors">
                    {post.title}
                  </h3>
                  {post.description && (
                    <p className="text-muted-foreground text-sm line-clamp-2 leading-relaxed">
                      {post.description}
                    </p>
                  )}
                </div>
                <div className="pt-2">
                  <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 transition-transform font-urban">
                    {t('portifolio.read_more')}{' '}
                    <Icons.arrowRight className="size-3" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
