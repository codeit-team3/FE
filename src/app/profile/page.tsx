'use client';

import { ProfilePage } from '@/features/profile/container';
import React from 'react';

export default function MyProfile() {
  return <ProfilePage isMyPage={true} />;
}
