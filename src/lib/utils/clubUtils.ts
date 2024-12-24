import { isPastDate } from './formatDateForUI';

const isClubClosed = (
  endDate: string,
  memberCount: number,
  memberLimit: number,
  today: Date,
): boolean => {
  return isPastDate(endDate, today) || memberCount === memberLimit;
};

export const clubStatus = (
  memberCount: number,
  memberLimit: number,
  endDate: string,
  today: Date,
) => {
  if (isClubClosed(endDate, memberCount, memberLimit, today)) {
    return 'closed';
  }
  return 3 < memberCount ? 'confirmed' : 'pending';
};
