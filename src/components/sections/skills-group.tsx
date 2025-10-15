'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  AvatarGroup,
  AvatarGroupTooltip,
} from '@/components/ui/shadcn-io/avatar-group';

const AVATARS = [
  {
    src: 'http.jpg',
    fallback: 'RJ',
    tooltip: 'React Js',
  },
  {
    src: 'https.jpg',
    fallback: 'RN',
    tooltip: 'React Native',
  },
  {
    src: 'https:.jpg',
    fallback: 'NE',
    tooltip: '.NET',
  },
];

export const SkillsGroup = () => {
  return (
    <AvatarGroup variant="motion" className="h-12 -space-x-3">
      {AVATARS.map((avatar, index) => (
        <Avatar key={index} className="size-12 border-3 border-background">
          <AvatarImage src={avatar.src} />
          <AvatarFallback>{avatar.fallback}</AvatarFallback>
          <AvatarGroupTooltip className="rounded-full">
            <p>{avatar.tooltip}</p>
          </AvatarGroupTooltip>
        </Avatar>
      ))}
    </AvatarGroup>
  );
};

export default SkillsGroup;
