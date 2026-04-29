import { useTranslations } from 'next-intl';
import { Separator } from '../ui/separator';

export function NoteHeaderLayout() {
  const t = useTranslations();

  return (
    <>
      <div className="max-w-screen-sm">
        <h1 className="font-heading text-4xl font-extrabold md:text-4xl">
          {t('portifolio.notes')}
        </h1>
        <p className="mt-3.5 text-base text-muted-foreground md:text-lg">
          {t('portifolio.notes_description')}
        </p>
      </div>
      <Separator className="" orientation="horizontal" />
    </>
  );
}
