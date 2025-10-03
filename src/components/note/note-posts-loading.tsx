import { Icons } from '@/components/shared/icons';

export default function NotePostsLoading() {
  return (
    <div className="flex space-x-2 mt-10 items-center justify-center">
      <Icons.spinner />
      <p>Loading...</p>
    </div>
  );
}
