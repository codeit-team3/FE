import { mockBookClubs } from '@/mocks/mockDatas';
import { fetchBookClubs } from './fetchBookClubs';
import { DEFAULT_FILTERS } from '@/constants/filters';

describe('fetchBookClubs', () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('요청 성공 시 bookClubs를 반환해야 한다', async () => {
    (global.fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue({ bookClubs: mockBookClubs }),
    });

    const result = await fetchBookClubs(DEFAULT_FILTERS);

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(
      expect.stringContaining(`${process.env.NEXT_PUBLIC_API_URL}/book-clubs?`),
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    expect(result).toEqual(mockBookClubs);
  });

  it('HTTP 에러 발생 시 빈 배열을 반환해야 한다', async () => {
    (global.fetch as jest.Mock).mockResolvedValue({
      ok: false,
      status: 500,
    });

    const result = await fetchBookClubs(DEFAULT_FILTERS);

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(result).toEqual([]);
  });

  it('fetch 호출 중 에러 발생 시 빈 배열을 반환해야 한다', async () => {
    (global.fetch as jest.Mock).mockRejectedValue(new Error('Network Error'));

    const result = await fetchBookClubs(DEFAULT_FILTERS);

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(result).toEqual([]);
  });
});
