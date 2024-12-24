// import { useCallback, useEffect, useState } from 'react';
// import { BookClub, myJoinedParams } from '../types';
// import { getMyJoined } from '../api/myJoinedApi';

// const useFetchMyJoinedList = (params: myJoinedParams) => {
//   const [myJoinedList, setMyJoinedList] = useState<BookClub[]>([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState<Error | null>(null);

//   const fetchMyJoined = useCallback(async () => {
//     setIsLoading(true);
//     setError(null);
//     try {
//       const { bookClubs } = await getMyJoined(params);
//       setMyJoinedList(bookClubs);
//     } catch (err) {
//       setError(err as Error);
//     } finally {
//       setIsLoading(false);
//     }
//   }, [params]);

//   useEffect(() => {
//     fetchMyJoined();
//   }, [fetchMyJoined]);

//   return { myJoinedList, isLoading, error };
// };

// export default useFetchMyJoinedList;
