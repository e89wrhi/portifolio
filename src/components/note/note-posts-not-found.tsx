import Image from 'next/image';

export default function NotePostsNotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center mt-5 md:mt-10">
      <Image
        src="/_illustration/illu_phone_dark.png"
        alt="404"
        width={200}
        height={200}
        className="pointer-events-none h-100 w-50 mb-5 mt-6 dark:invert"
      />
      <p className="text-balance px-4 text-center text-xl font-medium">
        No note found.
      </p>
    </div>
  );
}
