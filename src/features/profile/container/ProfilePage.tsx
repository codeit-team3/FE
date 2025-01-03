'use client';

import { MainContent, ProfileHeader } from '../container';
import { ProfilePageProps } from '../types';

export default function ProfilePage({ isMyPage }: ProfilePageProps) {
  return (
    <div className="flex w-full min-w-[375px] flex-1 flex-col">
      <ProfileHeader isMyPage={isMyPage} />
      <MainContent isMyPage={isMyPage} />
    </div>
  );
}
