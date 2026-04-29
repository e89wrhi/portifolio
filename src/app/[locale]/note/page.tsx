import { allNotes } from '.contentlayer/generated';
import { NotePosts } from '@/components/note/note-posts';

import { constructMetadata, getBlurDataURL } from '@/lib/utils';

import { getTranslations } from 'next-intl/server';

export async function generateMetadata() {
  const t = await getTranslations('portifolio');
  return constructMetadata({
    title: `${t('notes')} – Mark`,
    description: t('notes_description'),
  });
}

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
