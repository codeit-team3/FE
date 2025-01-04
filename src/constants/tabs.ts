// export const BOOK_TABS = ['전체', '자유책', '지정책'] as const;
export enum BOOK_TABS {
  ALL = '전체',
  FREE = '자유책',
  FIXED = '지정책',
}

// export const CONTENT_TABS = ['모임', '교환'] as const;

export enum CONTENT_TABS {
  CLUB = '모임',
  EXCHANGE = '교환',
}

export enum CLUB_TABS {
  JOINED = '참여한 모임',
  CREATED = '만든 모임',
  REVIEW = '작성한 리뷰',
}

export enum EXCHANGE_TABS {
  EXCHANGED = '교환 내역',
  UPLOADED = '등록한 책',
  REVIEW = '교환 리뷰',
}

type ValueOf<T> = T[keyof T];
export type TabType = 'MAIN_TAB' | 'SUB_TAB';

// export type clubTabType = 'JOINED' | 'CREATED' | 'REVIEW';
// export type exchangeTabType = 'EXCHANGED' | 'UPLOADED' | 'REVIEW';

// export type bookTab = (typeof BOOK_TABS)[number];
// export type contentTab = (typeof CONTENT_TABS)[number];

// export type clubTab = (typeof CLUB_TABS)[clubTabType];
// export type exchangeTab = (typeof EXCHANGE_TABS)[exchangeTabType];

export type bookTab = ValueOf<typeof BOOK_TABS>;
export type contentTab = ValueOf<typeof CONTENT_TABS>;
export type clubTab = ValueOf<typeof CLUB_TABS>;
export type exchangeTab = ValueOf<typeof EXCHANGE_TABS>;
