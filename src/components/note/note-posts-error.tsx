import Image from 'next/image';
import Link from 'next/link';

export default function NotePostsError() {
  return (
    <div className="flex min-h-screen flex-col items-center">
      <h1 className="text-6xl mt-15 font-bold">Opps.!</h1>
      <Image
        src="/_static/illustrations/rocket-crashed.svg"
        alt="404"
        width={200}
        height={200}
        className="pointer-events-none h-50 w-50 mb-5 mt-6 dark:invert"
      />
      <p className="text-balance px-4 text-center text-xl">
        Page error.{' '}
        <Link href="/" className="text-muted-foreground hover:text-green-500">
          Go Back
        </Link>
      </p>
    </div>
  );
}
