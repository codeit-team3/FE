'use client';

import React, {
  createContext,
  useState,
  useContext,
  useCallback,
  useEffect,
} from 'react';
import { useAuthStore } from '@/store/authStore';

interface LikeContextType {
  likedClubs: Set<number> | undefined;
  toggleLike: (clubId: number, isLiked?: boolean) => void;
  isLiked: (clubId: number) => boolean;
}

const LikeContext = createContext<LikeContextType | undefined>(undefined);

export const LikeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [likedClubs, setLikedClubs] = useState<Set<number> | undefined>(
    undefined,
  );
  const { isLoggedIn } = useAuthStore();

  // ✅ localStorage에서 찜한 목록 불러오기 (초기 로드)
  useEffect(() => {
    const storedLikes = localStorage.getItem('likedClubs');
    if (storedLikes) {
      setLikedClubs(new Set(JSON.parse(storedLikes)));
    } else {
      setLikedClubs(new Set());
    }
  }, []);

  // ✅ 로그아웃 시 찜한 목록 초기화
  useEffect(() => {
    if (!isLoggedIn) {
      setLikedClubs(new Set()); // ✅ 찜한 상태 초기화
      localStorage.removeItem('likedClubs'); // ✅ localStorage에서도 삭제
    }
  }, [isLoggedIn]);

  const toggleLike = useCallback((clubId: number, isLiked?: boolean) => {
    setLikedClubs((prev) => {
      if (!prev) return prev; // 로딩 중이면 변경 X
      const newSet = new Set(prev);
      if (isLiked !== undefined) {
        isLiked ? newSet.add(clubId) : newSet.delete(clubId);
      } else {
        newSet.has(clubId) ? newSet.delete(clubId) : newSet.add(clubId);
      }
      localStorage.setItem('likedClubs', JSON.stringify(Array.from(newSet)));
      return newSet;
    });
  }, []);

  const isLiked = useCallback(
    (clubId: number) => likedClubs?.has(clubId) ?? false, // `undefined`일 경우 `false` 반환
    [likedClubs],
  );

  return (
    <LikeContext.Provider value={{ likedClubs, toggleLike, isLiked }}>
      {children}
    </LikeContext.Provider>
  );
};

export const useLikeContext = () => {
  const context = useContext(LikeContext);
  if (context === undefined) {
    throw new Error('useLikeContext must be used within a LikeProvider');
  }
  return context;
};
