import { PortifolioFeaturesData } from '@/config/landing';
import { Icons } from '@/components/shared/icons';
import MaxWidthWrapper from '@/components/shared/max-width-wrapper';

import { useTranslations } from 'next-intl';

export default function PortifolioFeatures() {
  const t = useTranslations();
  const features = PortifolioFeaturesData();

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-green-500/5 rounded-full blur-3xl -z-10" />

      <MaxWidthWrapper>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-heading font-extrabold tracking-tight">
              {t('portifolio.features_title')}{' '}
              <span className="text-green-500">
                {t('portifolio.features_highlight')}
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl">
              {t('portifolio.features_description')}
            </p>
          </div>
          <div className="hidden md:block h-[1px] flex-1 bg-border/60 mx-12 mb-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon =
              Icons[feature.icon as keyof typeof Icons] || Icons.check;
            return (
              <div
                className="group p-8 rounded-3xl border border-border/40 bg-background/50 backdrop-blur-sm hover:border-green-500/20 hover:shadow-2xl hover:shadow-green-500/5 transition-all duration-500"
                key={index}
              >
                <div className="flex flex-col h-full gap-6">
                  <div className="relative flex size-14 items-center justify-center rounded-2xl bg-neutral-100 dark:bg-neutral-900 transition-colors group-hover:bg-green-500/10 *:size-7 *:text-neutral-700 dark:*:text-neutral-300 group-hover:*:text-green-500 group-hover:*:scale-110 *:transition-all">
                    <Icon />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xl font-bold tracking-tight">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>

                {/* Subtle indicator */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-green-500 transition-all duration-500 group-hover:w-full" />
              </div>
            );
          })}
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
