import { renderHook, act } from '@testing-library/react';
import useBookClubList from '@/features/bookclub/hooks/useFetchBookClubList';
import { DEFAULT_FILTERS } from '@/lib/constants/filters';

describe('useBookClubList', () => {
  it('초기 필터 상태는 DEFAULT_FILTERS와 동일해야 한다', () => {
    const { result } = renderHook(() => useBookClubList());

    expect(result.current.filters).toEqual(DEFAULT_FILTERS);
  });

  it('updateFilters를 호출하면 필터 상태가 업데이트되어야 한다', () => {
    const { result } = renderHook(() => useBookClubList());

    act(() => {
      result.current.updateFilters({ meetingType: 'ONLINE' });
    });

    expect(result.current.filters.meetingType).toBe('ONLINE');
  });

  it('updateFilters는 기존 필터 상태를 유지하면서 새로운 필터 값을 반영해야 한다', () => {
    const { result } = renderHook(() => useBookClubList());

    act(() => {
      result.current.updateFilters({ location: '서울' });
    });

    expect(result.current.filters.location).toBe('서울');
    expect(result.current.filters.meetingType).toBe(
      DEFAULT_FILTERS.meetingType,
    );
  });
});
