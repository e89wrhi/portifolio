import { Icons } from '@/components/shared/icons';
import { buttonVariants } from '@/components/ui/button';
import { cn, constructMetadata } from '@/lib/utils';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';

export async function generateMetadata() {
  const t = await getTranslations('portifolio');
  return constructMetadata({
    title: `${t('resume_title')} – Mark`,
    description: t('view_resume'),
  });
}

export default async function ResumePage() {
  const t = await getTranslations('portifolio');

  return (
    <div className="container flex flex-col py-10 gap-6 min-h-[calc(100vh-80px)]">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className={cn(
              buttonVariants({ variant: 'ghost', size: 'sm' }),
              'rounded-full'
            )}
          >
            <Icons.chevronLeft className="size-4" />
          </Link>
          <div className="flex items-center gap-2">
            <h1 className="text-3xl font-heading font-bold tracking-tight">
              {t('resume_title')}
            </h1>
          </div>
        </div>
        <Link
          href="/Resume.pdf"
          download="Resume.pdf"
          className={cn(
            buttonVariants({ variant: 'outline', size: 'lg' }),
            'gap-2 rounded-full'
          )}
        >
          <Icons.download className="size-4" />
          <span>{t('download_resume')}</span>
        </Link>
      </div>

      <div className="flex-1 w-full rounded-xl overflow-hidden border shadow-sm bg-muted min-h-[800px]">
        <iframe
          src="/Resume.pdf"
          className="w-full h-full min-h-[800px]"
          title={t('resume_title')}
        />
      </div>
    </div>
  );
}
