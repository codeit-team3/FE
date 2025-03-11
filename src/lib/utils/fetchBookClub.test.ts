import { mockBookClubs } from '@/mocks/mockDatas';
import { fetchBookClubs } from './fetchBookClubs';
import { DEFAULT_FILTERS } from '@/constants/filters';
import axios from 'axios';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('fetchBookClubs', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('요청 성공 시 bookClubs를 반환해야 한다', async () => {
    mockedAxios.get.mockResolvedValue({
      data: { bookClubs: mockBookClubs },
    });

    const result = await fetchBookClubs(DEFAULT_FILTERS);

    expect(mockedAxios.get).toHaveBeenCalledTimes(1);
    expect(mockedAxios.get).toHaveBeenCalledWith(
      `${process.env.NEXT_PUBLIC_API_URL}/book-clubs`,
      {
        params: DEFAULT_FILTERS,
        headers: {
          'Cache-Control': 'no-cache',
          Pragma: 'no-cache',
        },
      },
    );
    expect(result).toEqual(mockBookClubs);
  });

  it('인증된 요청 시 토큰이 헤더에 포함되어야 한다', async () => {
    mockedAxios.get.mockResolvedValue({
      data: { bookClubs: mockBookClubs },
    });

    const token = 'test-token';
    await fetchBookClubs(DEFAULT_FILTERS, token);

    expect(mockedAxios.get).toHaveBeenCalledWith(
      `${process.env.NEXT_PUBLIC_API_URL}/book-clubs`,
      {
        params: DEFAULT_FILTERS,
        headers: {
          Authorization: `Bearer ${token}`,
          'Cache-Control': 'no-cache',
          Pragma: 'no-cache',
        },
      },
    );
  });

  it('HTTP 에러 발생 시 빈 배열을 반환해야 한다', async () => {
    mockedAxios.get.mockResolvedValue({
      response: { status: 500 },
    });

    const result = await fetchBookClubs(DEFAULT_FILTERS);

    expect(mockedAxios.get).toHaveBeenCalledTimes(1);
    expect(result).toEqual([]);
  });

  it('네트워크 에러 발생 시 빈 배열을 반환해야 한다', async () => {
    mockedAxios.get.mockResolvedValue(new Error('Network Error'));

    const result = await fetchBookClubs(DEFAULT_FILTERS);

    expect(mockedAxios.get).toHaveBeenCalledTimes(1);
    expect(result).toEqual([]);
  });
});
