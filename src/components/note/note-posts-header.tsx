import { Separator } from '../ui/separator';

export function NoteHeaderLayout() {
  return (
    <>
      <div className="max-w-screen-sm">
        <h1 className="font-heading text-4xl font-extrabold md:text-4xl">
          Notes
        </h1>
        <p className="mt-3.5 text-base text-muted-foreground md:text-lg">
          Latest notes from Mark.
        </p>
      </div>
      <Separator className="" orientation="horizontal" />
    </>
  );
}
