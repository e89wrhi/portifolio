import { ProjectHeaderLayout } from '@/components/content/project-header-layout';
import MaxWidthWrapper from '@/components/shared/max-width-wrapper';

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ProjectHeaderLayout />
      <MaxWidthWrapper className="pb-16">{children}</MaxWidthWrapper>
    </>
  );
}
