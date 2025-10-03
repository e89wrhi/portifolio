import prisma from '@/lib/prisma';
import { constructMetadata, getBlurDataURL } from '@/lib/utils';
import { NotePosts } from '@/components/note/note-posts';
import NotePostsWrapper from '@/components/note/note-posts-wrapper';

export const metadata = constructMetadata({
  title: 'Notes – Port',
  description: 'Latest news and updates from Next SaaS Starter.',
});

interface NotesPageProps {
  searchParams: Promise<{
    q: string;
  }>;
}

export default async function NotePageClient({ searchParams }: NotesPageProps) {
  const { q } = await searchParams;
  const query = q?.trim() || '';

  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const whereFilter: any = { published: true };

    if (query && query.trim() !== '') {
      whereFilter.OR = [
        { title: { contains: query, mode: 'insensitive' } },
        { excerpt: { contains: query, mode: 'insensitive' } },
        { content: { contains: query, mode: 'insensitive' } },
      ];
    }

    const postsFromDb = await prisma.blogPost.findMany({
      where: whereFilter,
      include: {
        coverImage: true,
        author: {
          include: { avatar: true }, // include avatar relation to get URL
        },
      },
      orderBy: { createdAt: 'desc' },
    });

    // Map posts to include blurDataURL and author avatar URL
    const posts = await Promise.all(
      postsFromDb.map(async (post) => ({
        id: post.id,
        title: post.title,
        slug: post.slug,
        excerpt: post.excerpt,
        content: post.content,
        tags: post.tags,
        published: post.published,
        createdAt: post.createdAt,
        updatedAt: post.updatedAt,
        author: post.author
          ? {
              id: post.author.id,
              name: post.author.name,
              bio: post.author.bio,
              avatarUrl: post.author.avatar ? post.author.avatar.url : null,
            }
          : null,
        coverImageUrl: post.coverImage?.url ?? null,
        blurDataURL: post.coverImage
          ? await getBlurDataURL(post.coverImage.url)
          : null,
      }))
    );

    return <NotePostsWrapper initialPosts={posts} initialQuery={query} />;
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return <NotePosts posts={[]} initialQuery={query} />;
  }
}
