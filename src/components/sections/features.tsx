import { portifolioFeatures } from '@/config/landing';
import { Icons } from '@/components/shared/icons';
import MaxWidthWrapper from '@/components/shared/max-width-wrapper';

export default function PortifolioFeatures() {
  return (
    <section>
      <div className="pb-6 pt-28">
        <MaxWidthWrapper>
          <h1 className="font-extrabold text-4xl md:text-5xl">Skills</h1>
          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {portifolioFeatures.map((feature) => {
              const Icon = Icons[feature.icon || 'nextjs'];
              return (
                <div
                  className="group relative overflow-hidden rounded-2xl border bg-background p-5 md:p-8"
                  key={feature.title}
                >
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 aspect-video -translate-y-1/2 rounded-full border bg-gradient-to-b from-green-500/80 to-white opacity-25 blur-2xl duration-300 group-hover:-translate-y-1/4 dark:from-white dark:to-white dark:opacity-5 dark:group-hover:opacity-10"
                  />
                  <div className="relative">
                    <div className="relative flex size-15 rounded-2xl m-4 *:size-8">
                      <Icon />
                    </div>

                    <p className="mt-6 pb-6 text-muted-foreground">
                      {feature.description}
                    </p>

                    <div className="-mb-5 flex gap-3 border-t border-muted py-4 md:-mb-7">
                      <div className="flex items-center gap-2">
                        <span>{feature.title}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </MaxWidthWrapper>
      </div>
    </section>
  );
}
