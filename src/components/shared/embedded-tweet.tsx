'use client';

import { Tweet } from 'react-tweet';

interface EmbeddedTweetProps {
  id: string; // the tweet ID
}

export default function EmbeddedTweet({ id }: EmbeddedTweetProps) {
  return <Tweet id={id} />;
}
