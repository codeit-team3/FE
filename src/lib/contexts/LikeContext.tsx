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

// 초깃값과 함께 컨텍스트 생성
const LikeContext = createContext<LikeContextType | undefined>(undefined);

export const LikeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [likedClubs, setLikedClubs] = useState<Set<number> | undefined>(
    undefined,
  );
  const { isLoggedIn } = useAuthStore();

  // // ✅ localStorage에서 찜한 목록 불러오기 (초기 로드)
  useEffect(() => {
    const storedLikes = localStorage.getItem('likedClubs');
    if (storedLikes) {
      setLikedClubs(new Set(JSON.parse(storedLikes)));
    } else {
      setLikedClubs(new Set());
    }
  }, []);

  // ✅ `localStorage`에서 찜 목록 다시 불러오기 (새로고침 시)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedLikes = localStorage.getItem('likedClubs');
      setLikedClubs(storedLikes ? new Set(JSON.parse(storedLikes)) : new Set());
    }
  }, []);

  // ✅ likedClubs가 변경될 때마다 `localStorage`에 저장
  useEffect(() => {
    if (typeof window !== 'undefined' && likedClubs) {
      localStorage.setItem(
        'likedClubs',
        JSON.stringify(Array.from(likedClubs)),
      );
    }
  }, [likedClubs]);

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

  // 컨텍스트 생서자로 데이터 제공
  return (
    <LikeContext.Provider value={{ likedClubs, toggleLike, isLiked }}>
      {children}
    </LikeContext.Provider>
  );
};

export const useLikeContext = () => {
  // 컨텍스트 사용으로 데이터 얻기
  const context = useContext(LikeContext);
  if (context === undefined) {
    throw new Error('useLikeContext must be used within a LikeProvider');
  }
  return context;
};
