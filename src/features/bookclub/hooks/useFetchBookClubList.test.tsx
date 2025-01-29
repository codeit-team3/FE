import { bookClubs } from '@/api/book-club/react-query';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { renderHook, act, waitFor } from '@testing-library/react';
import useBookClubList from './useFetchBookClubList';
import { BookClubParams } from '@/types/bookclubs';
import { mockBookClubs } from '@/mocks/mockDatas';

// API 호출 모킹
jest.mock('@/api/book-club/react-query');

describe('useBookClubList', () => {
  const queryClient = new QueryClient();

  const wrapper = ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );

  beforeEach(() => {
    jest.clearAllMocks();
    queryClient.clear();
  });

  it('초기 데이터가 올바르게 설정되는지 테스트', () => {
    (bookClubs.list as unknown as jest.Mock).mockReturnValue({
      queryKey: ['bookClubs', { filters: {} }],
      queryFn: jest.fn().mockResolvedValue({ bookClubs: mockBookClubs }),
    });

    const { result } = renderHook(
      () => useBookClubList({ initialData: mockBookClubs }),
      {
        wrapper,
      },
    );

    expect(result.current.clubList).toEqual(mockBookClubs);
    expect(result.current.isLoading).toBe(false);
    expect(result.current.isFetching).toBe(false);
  });

  it('필터 업데이트하고 다시 쿼리를 호출하는지 테스트', async () => {
    const filters: BookClubParams = { bookClubType: 'FREE' };
    (bookClubs.list as unknown as jest.Mock).mockReturnValue({
      queryKey: ['bookClubs', filters],
      queryFn: jest.fn().mockResolvedValue({}),
    });

    const { result } = renderHook(
      () => useBookClubList({ initialData: mockBookClubs }),
      {
        wrapper,
      },
    );

    act(() => {
      result.current.updateFilters(filters);
    });

    await waitFor(() =>
      expect(bookClubs.list).toHaveBeenCalledWith(
        expect.objectContaining(filters),
      ),
    );
    expect(result.current.filters.bookClubType).toBe('FREE');
  });

  it('API 호출 실패 시 에러 반환', async () => {
    const mockError = new Error('Network Error');
    const mockQueryFn = jest.fn().mockRejectedValue(mockError);

    (bookClubs.list as unknown as jest.Mock).mockReturnValue({
      queryKey: ['bookClubs', {}],
      queryFn: mockQueryFn,
    });

    const { result } = renderHook(() => useBookClubList({ initialData: [] }), {
      wrapper,
    });

    await act(async () => {
      await queryClient.prefetchQuery(bookClubs.list());
    });

    await waitFor(() => {
      expect(result.current.error).toBeDefined();
    });

    expect(result.current.error?.message).toBe('Network Error');
  });
});
