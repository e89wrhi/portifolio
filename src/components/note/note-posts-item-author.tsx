import Link from 'next/link';
import BlurImage from '@/components/shared/blur-image';

export default function NoteAuthor({
  username,
  imageOnly,
  image,
  blurDataURL,
}: {
  username: string;
  imageOnly?: boolean;
  image?: string;
  blurDataURL?: string;
}) {
  if (!image) return null;

  return imageOnly ? (
    <BlurImage
      src={image}
      alt={username}
      width={32}
      height={32}
      priority
      placeholder="blur"
      blurDataURL={blurDataURL}
      className="size-8 rounded-full transition-all group-hover:brightness-90"
    />
  ) : (
    <Link
      href={`https://twitter.com/${username}`}
      className="group flex w-max items-center space-x-2.5"
      target="_blank"
      rel="noopener noreferrer"
    >
      <BlurImage
        src={image}
        alt={username}
        width={40}
        height={40}
        priority
        placeholder="blur"
        blurDataURL={blurDataURL}
        className="size-8 rounded-full transition-all group-hover:brightness-90 md:size-10"
      />
      <div className="flex flex-col -space-y-0.5">
        <p className="font-semibold text-foreground max-md:text-sm">
          {username}
        </p>
        <p className="text-sm text-muted-foreground">@{username}</p>
      </div>
    </Link>
  );
}
