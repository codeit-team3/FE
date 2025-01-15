'use client';
import {
  QueryClientProvider,
  QueryClient,
  QueryCache,
  // MutationCache,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { showToast } from '@/components/toast/toast';
import { AxiosError } from 'axios';

export const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error) => {
      if (error instanceof AxiosError) {
        showToast({
          message: '데이터를 조회하는 중 에러가 발생했습니다.',
          type: 'error',
        });
      }
    },
  }),
  // mutationCache: new MutationCache({
  //   onError: (error) => {
  //     if (error instanceof AxiosError) {
  //       showToast({
  //         message: '요청을 처리하는 중 오류가 발생했습니다',
  //         type: 'error',
  //       });
  //     }
  //   },
  // }),
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // 윈도우가 다시 포커스될 때 데이터를 다시 가져올지 여부
      refetchOnMount: true, // 컴포넌트가 마운트될 때 데이터를 다시 가져올지 여부
      retry: 0, // 실패한 쿼리 재시도 횟수
      refetchOnReconnect: false, // 네트워크 재연결시 데이터를 다시 가져올지 여부
      // retryOnMount: false, // 마운트 시 실패한 쿼리 재시도 여부
      staleTime: 1000 * 60 * 5, // 데이터가 'fresh'한 상태로 유지되는 시간 (5분)
      gcTime: 1000 * 60 * 10, // 사용하지 않는 캐시 데이터가 메모리에서 제거되기까지의 시간 (10분)
      throwOnError: true,
    },
    mutations: {
      throwOnError: true,
    },
  },
});

export default function ReactQueryProviders({
  children,
}: React.PropsWithChildren) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
