'use client';

import { MainContent, ProfileHeader } from '../container';
import { ProfilePageProps } from '../types';

export default function ProfilePage({ user, isMyPage }: ProfilePageProps) {
  return (
    <div className="flex w-full min-w-[375px] flex-1 flex-col">
      <ProfileHeader user={user} isMyPage={isMyPage} />
      <MainContent user={user} isMyPage={isMyPage} />
    </div>
  );
}
