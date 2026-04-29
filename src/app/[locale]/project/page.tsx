import { allProjects } from '.contentlayer/generated';

import { constructMetadata, getBlurDataURL } from '@/lib/utils';
import { ProjectPosts } from '@/components/content/project-posts';
import { ProjectHeaderLayout } from '@/components/content/project-header-layout';

import { getTranslations } from 'next-intl/server';

export async function generateMetadata() {
  const t = await getTranslations('portifolio');
  return constructMetadata({
    title: `${t('projects')} – Mark`,
    description: t('projects_description'),
  });
}

export default async function ProjectsPage() {
  const posts = await Promise.all(
    allProjects
      .sort((a, b) => b.date.localeCompare(a.date))
      .map(async (post) => ({
        ...post,
        blurDataURL: await getBlurDataURL(post.image ?? ``),
      }))
  );

  return (
    <>
      <ProjectHeaderLayout />
      <ProjectPosts posts={posts} />
    </>
  );
}
