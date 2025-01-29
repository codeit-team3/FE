import { mockBookClubs } from '@/mocks/mockDatas';
import { fetchBookClubs } from './fetchBookClubs';

describe('fetchBookClub', () => {
  beforeEach(() => {
    // fetch mocking
    global.fetch = jest.fn();
  });

  afterAll(() => {
    // 테스트 후  모킹 초기화
    jest.resetAllMocks();
  });

  it('요청 성공시 bookClubs를 반환해야 한다', async () => {
    // fetch 모킹
    (global.fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue({ bookClubs: mockBookClubs }),
    });

    const result = await fetchBookClubs();

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(
      `${process.env.NEXT_PUBLIC_API_URL}/book-clubs?size=100`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    expect(result).toEqual(mockBookClubs);
  });

  it('HTTP 에러가 발생하면 빈 배열을 반환해야 한다', async () => {
    // fetch를 에러 상태로 모킹
    (global.fetch as jest.Mock).mockResolvedValue({
      ok: false,
      status: 500,
    });

    const result = await fetchBookClubs();

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(result).toEqual([]);
  });

  it('fetch 호출 중에 에러가 발생하면 빈 배열을 반환해야 한다', async () => {
    // fetch 가 에러를 던지도록 모킹
    (global.fetch as jest.Mock).mockRejectedValue(new Error('Network Error'));

    const result = await fetchBookClubs();

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(result).toEqual([]);
  });
});
