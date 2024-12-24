import apiClient from '@/lib/utils/apiClient';

export const leaveBookClub = async (id: number) => {
  try {
    await apiClient.delete(`/book-clubs/${id}/leave`);
    //TODO:토스트 알림 추가 구현
    alert(`${id} 모임 탈퇴 완료`);
  } catch (err) {
    console.error(err);
    alert(err);
  }
};
