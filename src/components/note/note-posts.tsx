import { Note } from '.contentlayer/generated';

import { NoteCard } from './note-posts-item';
import { NoteHeaderLayout } from './note-posts-header';
import MaxWidthWrapper from '../shared/max-width-wrapper';

export function NotePosts({
  posts,
}: {
  posts: (Note & {
    blurDataURL: string;
  })[];
}) {
  return (
    <MaxWidthWrapper>
      <main className="space-y-8 mt-5">
        <NoteHeaderLayout />
        <div className="grid gap-8 mb-10">
          {posts.map((post) => (
            <NoteCard data={post} key={post._id} />
          ))}
        </div>
      </main>
    </MaxWidthWrapper>
  );
}
