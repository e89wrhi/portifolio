import MaxWidthWrapper from '@/components/shared/max-width-wrapper';

export function ProjectHeaderLayout() {
  return (
    <>
      <MaxWidthWrapper className="py-6 md:pb-8 md:pt-10">
        <div className="max-w-screen-sm">
          <h1 className="font-heading text-4xl font-extrabold md:text-4xl">
            Projects
          </h1>
          <p className="mt-3.5 text-base text-muted-foreground md:text-lg">
            Latest projects from Mark.
          </p>
        </div>

        <nav className="mt-8 hidden w-full md:flex">
          <ul
            role="list"
            className="flex w-full flex-1 gap-x-2 border-b text-[15px] text-muted-foreground"
          ></ul>
        </nav>
      </MaxWidthWrapper>
    </>
  );
}
