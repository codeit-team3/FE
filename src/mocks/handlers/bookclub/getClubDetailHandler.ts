import { http, HttpResponse } from 'msw';

const EXAMPLE_IMAGE = '/images/profile.png';

export const getclubDetailHandler = [
  http.get('/book-clubs/:id', (req) => {
    const id = req.params;

    return HttpResponse.json({
      id: Number(id),
      title: '국적',
      description: '국책 읽기',
      meetingType: 'ONLINE',
      bookClubType: 'FIXED',
      targetDate: '2024-11-30T11:11:10',
      endDate: '2024-11-29T12:30:30',
      memberLimit: 10,
      town: null,
      memberCount: 1,
      isLiked: false,
      imageUrl: EXAMPLE_IMAGE,
      isHost: false,
      isParticipant: false,
    });
  }),
];
