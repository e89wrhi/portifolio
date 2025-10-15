import { allNotes } from '.contentlayer/generated';
import { NotePosts } from '@/components/note/note-posts';

import { constructMetadata, getBlurDataURL } from '@/lib/utils';

export const metadata = constructMetadata({
  title: 'Notes – Mark',
  description: 'Latest notes from mark.',
});

export default async function NotesPage() {
  const posts = await Promise.all(
    allNotes
      .sort((a, b) => b.date.localeCompare(a.date))
      .map(async (post) => ({
        ...post,
        blurDataURL: await getBlurDataURL(post.image ?? ``),
      }))
  );

  return (
    <>
      <NotePosts posts={posts} />
    </>
  );
}
