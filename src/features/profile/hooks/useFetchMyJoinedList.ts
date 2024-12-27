import { useCallback, useEffect, useState } from 'react';
import { BookClub, myJoinedParams, orderType } from '../types';
import { getMyJoined } from '../api/myJoinedApi';

const useFetchMyJoinedList = (order: orderType) => {
  const [myJoinedList, setMyJoinedList] = useState<BookClub[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [params, setParams] = useState<myJoinedParams>({
    order: order,
    size: 10,
    page: 1,
  });

  const fetchMyJoined = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const { bookClubs } = await getMyJoined(params);
      setMyJoinedList(bookClubs);
    } catch (err) {
      setError(err as Error);
    } finally {
      setIsLoading(false);
    }
  }, [params]);

  useEffect(() => {
    fetchMyJoined();
  }, [fetchMyJoined]);

  const updateParams = (newParam: Partial<myJoinedParams>) => {
    setParams((prevParams) => ({
      ...prevParams,
      ...newParam,
    }));
  };

  return { myJoinedList, isLoading, error, updateParams };
};

export default useFetchMyJoinedList;
