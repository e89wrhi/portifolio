'use client';

import { useState } from 'react';
import { NoteItem } from './note-posts-item';
import { BlogPost } from '@prisma/client';
import { useRouter } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Icons } from '@/components/shared/icons';
import Link from 'next/link';

interface NotePostsProps {
  posts: NotePost[];
  initialQuery?: string;
}

type NotePost = Omit<BlogPost, 'coverImageId' | 'authorId'> & {
  blurDataURL: string | null;
  coverImageUrl: string | null;
  author?: {
    id: string;
    name: string;
    bio: string | null;
    avatarUrl: string | null;
  } | null;
};

export function NotePosts({ posts, initialQuery = '' }: NotePostsProps) {
  const [query, setQuery] = useState(initialQuery);
  const router = useRouter();
  const isSearch = initialQuery.trim() !== '';
  // Handle search submit
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (query) params.set('q', query);
    router.push(`/note?${params.toString()}`);
  };

  return (
    <main className="space-y-10">
      <form onSubmit={handleSearch} className="flex flex-col items-center">
        <Input
          className="border-0 mx-5 md:mx-10 w-2/3 focus:border-none focus:ring-0 rounded-full px-8 md:px-12 py-6 md:py-7 bg-gray-100 dark:bg-gray-900"
          placeholder="Search notes..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        {isSearch && (
          <Link href="/note" className="flex flex-row mx-4 my-2">
            <Icons.close />
            <p>clear results</p>
          </Link>
        )}
      </form>

      {isSearch && (
        <p className="text-muted-foreground">
          Search results for &quot;{initialQuery}&quot; ({posts.length}{' '}
          {posts.length === 1 ? 'result' : 'results'})
        </p>
      )}

      <div className="flex grid gap-8 md:grid-cols-2 md:gap-x-6 md:gap-y-10 xl:grid-cols-3">
        {posts.map((post, idx) => (
          <NoteItem data={post} key={post.id} priority={idx <= 2} />
        ))}
      </div>
    </main>
  );
}
