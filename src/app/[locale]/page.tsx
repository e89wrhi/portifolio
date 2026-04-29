import HeroLanding from '@/components/sections/hero-landing';
import PreviewLanding from '@/components/sections/preview-landing';
import CFASection from '@/components/sections/cfa-section';
import RecentNotes from '@/components/sections/recent-notes';
import { allNotes, allProjects } from '.contentlayer/generated';
import { getBlurDataURL } from '@/lib/utils';

export default async function IndexPage() {
  const posts = await Promise.all(
    allNotes
      .sort((a, b) => b.date.localeCompare(a.date))
      .slice(0, 3)
      .map(async (post) => ({
        ...post,
        blurDataURL: await getBlurDataURL(post.image ?? ``),
      }))
  );

  const projects = await Promise.all(
    allProjects
      .sort((a, b) => b.date.localeCompare(a.date))
      .slice(0, 6)
      .map(async (project) => ({
        ...project,
        blurDataURL: await getBlurDataURL(project.image ?? ``),
      }))
  );

  return (
    <div className="flex flex-col gap-0">
      <HeroLanding />
      <PreviewLanding projects={projects.slice(0, 4)} />
      <RecentNotes posts={posts} />
      <CFASection />
    </div>
  );
}
