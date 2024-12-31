'use client';

import { ProfilePage } from '@/features/profile/container';
import { useAuthStore } from '@/store/authStore';
import React from 'react';

export default function MyProfile() {
  const { user } = useAuthStore();
  console.log(user);
  return <ProfilePage user={user} isMyPage={true} />;
}
