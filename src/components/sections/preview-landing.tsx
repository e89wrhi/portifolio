'use client';

import Image from 'next/image';
import MaxWidthWrapper from '@/components/shared/max-width-wrapper';
import Link from 'next/link';
import { Icons } from '@/components/shared/icons';
import { Project } from '.contentlayer/generated';

import { useTranslations } from 'next-intl';

interface ProjectWithBlur extends Project {
  blurDataURL: string;
}

export default function PortifolioPreviewLanding({
  projects,
}: {
  projects: ProjectWithBlur[];
}) {
  const t = useTranslations();

  return (
    <section className="py-4">
      <MaxWidthWrapper>
        <div className="flex flex-col space-y-4 mb-20 px-4 md:px-0">
          <div className="flex items-center pl-10 gap-2 font-bold tracking-widest text-lg">
            <div className="h-[2px] w-8 bg-black dark:bg-white" />
            {t('portifolio.projects')}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Link
              key={project._id}
              href={`/project/${project.slug}`}
              className="group relative flex flex-col rounded-[3rem] overflow-hidden transition-all duration-700"
            >
              <div className="p-8 md:p-10 flex flex-col h-full gap-8">
                {/* Top: Icon & Metadata */}
                <div className="flex items-start justify-between gap-6">
                  <div className="flex items-start gap-6">
                    <div className="size-20 md:size-24 rounded-[1.8rem] shadow-sm overflow-hidden flex items-center justify-center shrink-0 border border-border/10">
                      {project.image ? (
                        <Image
                          src={project.image}
                          alt={`${project.title} logo`}
                          width={96}
                          height={96}
                          className="object-cover size-full transition-transform duration-700"
                        />
                      ) : (
                        <Icons.logo className="size-1/2 opacity-20" />
                      )}
                    </div>
                    <div className="space-y-1 pt-2">
                      <h3 className="text-2xl md:text-3xl font-heading font-bold tracking-tight leading-tight">
                        {project.title}
                      </h3>
                      <div className="flex flex-wrap gap-2 pt-1">
                        {project.categories?.slice(0, 2).map((cat) => (
                          <span
                            key={cat}
                            className="text-[10px] tracking-widest bg-neutral-100 dark:bg-neutral-900 px-2 py-0.5 rounded-full"
                          >
                            {cat}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mid: Description */}
                <div className="flex-1">
                  <p className="text-muted-foreground text-lg leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
