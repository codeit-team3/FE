export const BOOK_TABS = ['전체', '자유책', '지정책'] as const;

export const CONTENT_TABS = ['모임', '교환'] as const;

export enum CLUB_TABS {
  MY_JOINED = '나의 모임',
  MY_HOSTED = '내가 만든 모임',
  MY_REVIEW = '나의 리뷰',
}

export const EXCHANGE_TABS = [
  '나의 교환',
  '내가 등록한 책',
  '교환 리뷰',
] as const;

export type TabType = 'MAIN_TAB' | 'SUB_TAB';
export type clubTabType = 'MY_JOINED' | 'MY_HOSTED' | 'MY_REVIEW';
export type BookTab = (typeof BOOK_TABS)[number];
export type ContentTab = (typeof CONTENT_TABS)[number];
export type ClubTab = (typeof CLUB_TABS)[clubTabType];
export type ExchangeTab = (typeof EXCHANGE_TABS)[number];
