import prisma from '@/lib/prisma';
import { constructMetadata } from '@/lib/utils';
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
      orderBy: { createdAt: 'desc' },
    });

    return <NotePostsWrapper initialPosts={postsFromDb} initialQuery={query} />;
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return <NotePosts posts={[]} initialQuery={query} />;
  }
}
