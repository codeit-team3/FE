export const BOOK_TABS = ['전체', '자유책', '지정책'] as const;
export const CONTENT_TABS = ['모임', '교환'] as const;
export const MY_PAGE_TABS = [
  '나의 모임',
  '내가 만든 모임',
  '나의 리뷰',
] as const;

export type TabType = 'MAIN_TAB' | 'SUB_TAB';
export type BookTab = (typeof BOOK_TABS)[number];
export type ContentTab = (typeof CONTENT_TABS)[number];
export type MyPageTab = (typeof MY_PAGE_TABS)[number];
