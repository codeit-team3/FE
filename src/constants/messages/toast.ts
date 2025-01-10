export const TOAST_MESSAGES = {
  SUCCESS: {
    // 인증 관련
    LOGIN: '로그인에 성공했습니다.',
    LOGOUT: '로그아웃되었습니다.',
    SIGNUP: '회원가입이 완료되었습니다.',

    // 프로필 관련
    PROFILE_EDIT: '프로필 수정이 완료되었습니다.',

    // 북클럽 관련
    CLUB_CREATE: '북클럽이 생성되었습니다.',
    CLUB_JOIN: '참여 완료! 함께하게 돼서 기뻐요🥰',
    CLUB_CANCEL: '모임을 취소하였습니다.',
    CLUB_LEAVE: '모임 참여를 취소하였습니다.',
    CLUB_DELETE: '취소된 모임을 삭제하였습니다.',
    CLUB_LIKE: '찜 완료! 찜한 모임은 찜 목록 페이지에서 확인하세요',
    CLUB_UNLIKE: '찜이 취소되었습니다',

    // 리뷰 관련
    REVIEW_CREATE: '리뷰 작성을 완료하였습니다',
  },

  ERROR: {
    // 인증 관련
    LOGIN_FAILED: '로그인에 실패했습니다.',
    LOGOUT_FAILED: '로그아웃에 실패했습니다.',

    // 프로필 관련
    PROFILE_EDIT_FAILED: '프로필 수정을 실패하였습니다',

    // 북클럽 관련
    CLUB_CREATE_FAILED: '북클럽 생성에 실패했습니다.',
    CLUB_JOIN_FAILED: '참여 요청 중 문제가 발생했습니다. 다시 시도해주세요.',
    CLUB_CANCEL_FAILED: '모임 취소를 실패하였습니다.',
    CLUB_LEAVE_FAILED: '모임 참여 취소를 실패하였습니다.',

    // 리뷰 관련
    REVIEW_CREATE_FAILED: '리뷰 작성을 실패하였습니다.',
    REVIEW_VALIDATION: '점수와 리뷰 내용을 입력해주세요',

    // 일반 에러
    UNKNOWN: '알 수 없는 오류가 발생했습니다.',
  },
} as const;
