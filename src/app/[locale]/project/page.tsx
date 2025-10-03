import { allProjects } from '.contentlayer/generated';

import { constructMetadata, getBlurDataURL } from '@/lib/utils';
import { ProjectPosts } from '@/components/content/project-posts';

export const metadata = constructMetadata({
  title: 'Projects – Mark',
  description: 'Latest projects from mark.',
});

export default async function ProjectsPage() {
  const posts = await Promise.all(
    allProjects
      .sort((a, b) => b.date.localeCompare(a.date))
      .map(async (post) => ({
        ...post,
        blurDataURL: await getBlurDataURL(post.image ?? ``),
      }))
  );

  return <ProjectPosts posts={posts} />;
}
