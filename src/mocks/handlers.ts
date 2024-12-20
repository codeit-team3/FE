import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get('/api/bookclubs', () => {
    return HttpResponse.json({
      bookClubs: [
        {
          id: 0,
          title: '함께 읽는 해리포터',
          description: '해리포터를 함께 읽어요',
          meetingType: 'ONLINE',
          bookClubType: 'FREE',
          targetDate: '2024-04-01T14:00:00Z',
          endDate: '2024-03-25T00:00:00Z',
          memberLimit: 0,
          town: '서울 강남구',
          memberCount: 0,
          isLiked: true,
        },
        {
          id: 0,
          title: '소설 읽기 모임',
          description: '매주 토요일 소설 읽기',
          meetingType: 'ONLINE',
          bookClubType: 'FREE',
          targetDate: '2024-04-05T15:00:00Z',
          endDate: '2024-03-30T00:00:00Z',
          memberLimit: 0,
          town: '서울 마포구',
          memberCount: 0,
          isLiked: true,
        },
      ],
    });
  }),
];
