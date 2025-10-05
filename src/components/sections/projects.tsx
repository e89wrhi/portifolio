import Link from 'next/link';

import MaxWidthWrapper from '@/components/shared/max-width-wrapper';
import { Project } from 'contentlayer/generated';
import Image from 'next/image';

interface ProjectsProps {
  projects: Project[];
}

export default function Projects({ projects }: ProjectsProps) {
  return (
    <section className="py-14 text-muted-foreground">
      <MaxWidthWrapper>
        <Link href={'/project'}>
          <h2 className="text-center text-sm font-semibold uppercase">
            Projects
          </h2>
        </Link>

        <div className="mt-10 grid grid-cols-2 place-items-center gap-8 md:grid-cols-4">
          {projects.map((item) => (
            <Link
              target="_blank"
              key={item.title}
              href={`/project/${item.slug}`}
              aria-label={item.title}
              className="duration-250 transition hover:text-foreground hover:grayscale-0"
            >
              <div
                className="flex flex-col items-center text-center
              space-y-3 justify-start"
              >
                <Image
                  height={300}
                  width={300}
                  src={item.image || ''}
                  alt={item.title}
                  className="h-20 w-20 rounded-xl"
                ></Image>
                <p>{item.title}</p>
              </div>
            </Link>
          ))}
        </div>

        <Link href={'/project'}>
          <div
            className="justify-center
        flex rounded-full p-3 mt-11"
          >
            <p>More</p>
          </div>
        </Link>
      </MaxWidthWrapper>
    </section>
  );
}
