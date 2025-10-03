import MaxWidthWrapper from '@/components/shared/max-width-wrapper';

export default function NoteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <MaxWidthWrapper className="pb-16">{children}</MaxWidthWrapper>
    </>
  );
}
