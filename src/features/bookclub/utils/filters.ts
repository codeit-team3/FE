import { ApiBookClubType, UiBookClubType } from '../types/bookclubs';

// 매핑 객체
const bookClubTypeMap: Record<UiBookClubType, ApiBookClubType> = {
  전체: 'ALL',
  자유책: 'FREE',
  지정책: 'FIXED',
};

const apiToUiBookClubTypeMap: Record<ApiBookClubType, UiBookClubType> = {
  ALL: '전체',
  FREE: '자유책',
  FIXED: '지정책',
};

// UI → API 변환
export const mapToApiBookClubType = (
  uiValue: UiBookClubType,
): ApiBookClubType => {
  return bookClubTypeMap[uiValue];
};

// API → UI 변환
export const mapToUiBookClubType = (
  apiValue: ApiBookClubType,
): UiBookClubType => {
  return apiToUiBookClubTypeMap[apiValue];
};
