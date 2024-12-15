import apiClient from '@/lib/utils/apiClient';
import { useEffect, useState } from 'react';

export const useFetchBookClubList = () => {
  const [bookClubList, setBookClubList] = useState([]); // 목록 데이터 저장
  const [isLoading, setIsLoading] = useState(false); // 로딩 상태 관리

  useEffect(() => {
    const fetchBookClubs = async () => {
      setIsLoading(true);
      try {
        const response = await apiClient.get('/api/v1/book-clubs');
        setBookClubList(response.data.bookClubs);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchBookClubs();
  }, []);

  return { bookClubList, isLoading };
};
