import { notFound } from 'next/navigation';
import BlurImage from '@/components/shared/blur-image';
import MaxWidthWrapper from '@/components/shared/max-width-wrapper';
import Author from '@/components/note/note-posts-item-author';
import { DashboardTableOfContents } from '@/components/shared/toc';
import prisma from '@/lib/prisma';
import {
  constructMetadata,
  formatDate,
  getBlurDataURL,
  placeholderBlurhash,
} from '@/lib/utils';
import { getTableOfContents } from '@/lib/toc';
import '@/styles/mdx.css';
import { Metadata } from 'next';
import NotePageClient from '@/components/note/note-page';

interface NotePageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateStaticParams() {
  const posts = await prisma.blogPost.findMany({
    where: { published: true },
    select: { slug: true },
  });

  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: NotePageProps): Promise<Metadata | undefined> {
  const { id } = await params;
  const post = await prisma.blogPost.findUnique({
    where: { id: id },
    include: { coverImage: true },
  });

  if (!post) return;

  return constructMetadata({
    title: `Note | ${post.title}`,
    description: post.excerpt,
    image: post.coverImage?.url,
  });
}

export default async function NotePage({ params }: NotePageProps) {
  const { id } = await params;
  const post = await prisma.blogPost.findUnique({
    where: { id: id },
    include: {
      coverImage: true,
      author: true,
    },
  });

  if (!post) notFound();

  // TODO: implement related articles logic based on your DB, currently empty
  //const relatedArticles: post[] = [];

  const toc = await getTableOfContents(post.content);

  const thumbnailBlurhash = post.coverImage
    ? await getBlurDataURL(post.coverImage.url)
    : undefined;

  return (
    <>
      <MaxWidthWrapper className="pt-6 md:pt-10">
        <div className="flex flex-col space-y-4">
          <div className="flex items-center space-x-4">
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
            <Author username={post.author.name} />
          </div>
        </div>
      </MaxWidthWrapper>

      <div className="relative">
        <div className="absolute top-52 w-full border-t" />

        <MaxWidthWrapper className="grid grid-cols-4 gap-10 pt-8 max-md:px-0">
          <div className="relative col-span-4 mb-10 flex flex-col space-y-8 border-y bg-background md:rounded-xl md:border lg:col-span-3">
            {post.coverImage?.url && (
              <BlurImage
                alt={post.title}
                blurDataURL={thumbnailBlurhash ?? placeholderBlurhash}
                className="aspect-[1200/630] border-b object-cover md:rounded-t-xl"
                width={1200}
                height={630}
                priority
                placeholder="blur"
                src={post.coverImage.url}
                sizes="(max-width: 768px) 770px, 1000px"
              />
            )}
            <div className="px-[.8rem] pb-10 md:px-8">
              <NotePageClient post={post} />
            </div>
          </div>

          <div className="sticky top-20 col-span-1 mt-52 hidden flex-col divide-y divide-muted self-start pb-24 lg:flex">
            <DashboardTableOfContents toc={toc} />
          </div>
        </MaxWidthWrapper>
      </div>

      {/*
      <MaxWidthWrapper>
        {relatedArticles.length > 0 && (
          <div className="flex flex-col space-y-4 pb-16">
            <p className="font-heading text-2xl text-foreground">
              More Articles
            </p>

            <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:gap-6">
              {relatedArticles.map((related) => (
                <Link
                  key={related.slug}
                  href={`/blog/${related.slug}`}
                  className="flex flex-col space-y-2 rounded-xl border p-5 transition-colors duration-300 hover:bg-muted/80"
                >
                  <h3 className="font-heading text-xl text-foreground">
                    {related.title}
                  </h3>
                  <p className="line-clamp-2 text-[15px] text-muted-foreground">
                    {related.excerpt}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {formatDate(related.createdAt.toISOString())}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </MaxWidthWrapper>
      */}
    </>
  );
}
