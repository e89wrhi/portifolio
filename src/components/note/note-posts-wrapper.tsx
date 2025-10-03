'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { NotePosts } from './note-posts';
import { BlogPost } from '@prisma/client';
import NotePostsError from './note-posts-error';
import NotePostsNotFound from './note-posts-not-found';
import NotePostsLoading from './note-posts-loading';
import { NotesHeader } from './note-posts-header';

interface WrapperProps {
  initialPosts: NotePost[];
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

export default function NotePostsWrapper({
  initialPosts,
  initialQuery = '',
}: WrapperProps) {
  const [posts, setPosts] = useState<NotePost[]>(initialPosts);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [query, setQuery] = useState(initialQuery);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const handler = setTimeout(async () => {
      if (query.trim() === initialQuery) return;
      setLoading(true);
      setError(null);

      try {
        const params = new URLSearchParams();
        if (query.trim() !== '') params.set('search', query.trim());

        const res = await fetch(`/api/posts?${params.toString()}`);
        if (!res.ok) throw new Error(`Error ${res.status}: ${res.statusText}`);

        const data: NotePost[] = await res.json();
        setPosts(data || []);

        router.replace(`/note?q=${query.trim()}`);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err: any) {
        console.error(err);
        setError(err.message || 'Something went wrong while fetching posts.');
        setPosts([]);
      } finally {
        setLoading(false);
      }
    }, 400);

    return () => clearTimeout(handler);
  }, [query, initialQuery, router]);

  return (
    <main>
      <NotesHeader />
      {/* Show error */}
      {error && <NotePostsError />}

      {/* Show loading */}
      {loading && !error && <NotePostsLoading />}

      {/* No results */}
      {!loading && !error && posts.length === 0 && <NotePostsNotFound />}

      {/* Posts */}
      {!loading && !error && posts.length > 0 && (
        <NotePosts posts={posts} initialQuery={query} />
      )}
    </main>
  );
}
