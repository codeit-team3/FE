import '@testing-library/jest-dom';
import Profile from './Profile';
import { render } from '@testing-library/react';

describe('Profile 테스트', () => {
  it('프로필 컴포넌트의 데이터 렌더링 확인', () => {
    render(<Profile />);
  });

  it('수정하기 아이콘 버튼 클릭 시 수정하기 모달 렌더링 확인', () => {});

  it('수정하기 모달에서 닫기 버튼/취소 버튼 클릭 시 모달이 닫히는지 확인', () => {});

  it("수정하기 모달에서 프로필 정보 수정 후 닫기 버튼/취소 버튼 클릭 시 '정말 나가시겠어요? 지금까지 작성한 내용이 모두 삭제됩니다.' 팝업창 렌더링 확인", () => {});

  it("수정하기 모달에서 닉네임을 입력하지 않고 수정하기 버튼 클릭 시 '닉네임을 입력해주세요' 팝업창 렌더링 확인", () => {});

  it('수정하기 모달에서 수정 후 수정하기 버튼 클릭 시 onSubmitEditProfile 함수 호출 확인', () => {});
});
