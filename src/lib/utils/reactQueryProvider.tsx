'use client';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useState } from 'react';

export default function ReactQueryProviders({
  children,
}: React.PropsWithChildren) {
  const [client] = useState(
    new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false, // 윈도우 다시 포커스되었을때 데이터 refetch X
          refetchOnMount: false, // 컴포넌트 마운트될 때 데이터 refetch X
          retry: 0, // API 요청 실패시 재시도 X
          refetchOnReconnect: false, // 네트워크가 재연결될 때 데이터를 refetch X
          retryOnMount: false, // 컴포넌트가 마운트될 때 실패한 쿼리를 재시도 X
          staleTime: 1000 * 60 * 5,
          gcTime: 1000 * 60 * 10,
        },
      },
    }),
  );

  return (
    <QueryClientProvider client={client}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
