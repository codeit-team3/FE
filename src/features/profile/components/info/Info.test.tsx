import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Info from './Info';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { User } from '@/types/user';

const mockUser: User = {
  id: 123,
  email: 'john.doe@example.com',
  name: 'John Doe',
  nickname: 'DoeJon',
  description: 'Example Company',
  image: 'https://example.com/profile.jpg',
  createdAt: new Date('2024-01-01T00:00:00Z'),
  updatedAt: new Date('2024-01-10T00:00:00Z'),
};

const queryClient = new QueryClient();

describe('Info 테스트', () => {
  it('Info 컴포넌트의 데이터 렌더링 확인', () => {
    render(
      <QueryClientProvider client={queryClient}>
        <Info user={mockUser} isMyPage={true} />
      </QueryClientProvider>,
    );

    //프로필 컴포넌트 데이터 렌더링 확인
    expect(screen.getByText('DoeJon님의 프로필')).toBeInTheDocument;
    expect(screen.getByText('john.doe@example.com')).toBeInTheDocument;
    expect(screen.getByText('Example Company')).toBeInTheDocument;
  });

  it('수정하기 아이콘 버튼 클릭 후 프로필 수정하기 모달 렌더링 테스트', async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <Info user={mockUser} isMyPage={true} />
      </QueryClientProvider>,
    );
    const editButton = screen.getByLabelText('프로필 수정');

    expect(screen.queryByText('프로필 수정하기')).not.toBeInTheDocument;

    //수정 아이콘 버튼 클릭 시 프로필 수정하기 모달 표시
    await userEvent.click(editButton);
    expect(screen.queryByText('프로필 수정하기')).toBeInTheDocument;

    //취소하기 버튼 클릭 시 프로필 수정하기 모달 닫힘
    const cancelButton = screen.getByText('취소하기');
    await userEvent.click(cancelButton);
    expect(screen.queryByText('프로필 수정하기')).not.toBeInTheDocument;

    //수정 아이콘 버튼 클릭 시 프로필 수정하기 모달 표시
    await userEvent.click(editButton);
    expect(screen.queryByText('프로필 수정하기')).toBeInTheDocument;

    //닫기 아이콘 버튼 클릭 시 프로필 수정하기 모달 닫힘
    const closeButton = screen.getByLabelText('닫기');
    await userEvent.click(closeButton);
    expect(screen.queryByText('프로필 수정하기')).not.toBeInTheDocument;
  });

  it("수정하기 모달에서 프로필 정보 수정 후 닫기 버튼/취소 버튼 클릭 시 '정말 나가시겠어요? 지금까지 작성한 내용이 모두 삭제됩니다.' 팝업창 렌더링 확인", () => {});

  it("수정하기 모달에서 닉네임을 입력하지 않고 수정하기 버튼 클릭 시 '닉네임을 입력해주세요' 팝업창 렌더링 확인", () => {});

  it('수정하기 모달에서 수정 후 수정하기 버튼 클릭 시 onSubmitEditInfo 함수 호출 확인', async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <Info user={mockUser} isMyPage={true} />
      </QueryClientProvider>,
    );

    const editButton = screen.getByLabelText('프로필 수정');
    await userEvent.click(editButton);

    //닉네임 수정
    const nameInput = screen.getByRole('textbox', { name: 'nickname' });
    await userEvent.clear(nameInput);
    await userEvent.type(nameInput, 'Edited Name');

    //한 줄 소개 수정
    const descriptionInput = screen.getByRole('textbox', {
      name: 'description',
    });
    await userEvent.clear(descriptionInput);
    await userEvent.type(descriptionInput, 'Edited Description');

    //수정하기 버튼 클릭
    const confirmButton = screen.getByText('수정하기');
    await userEvent.click(confirmButton);

    //TODO:함수 호출 확인

    // expect(mockSubmit).toHaveBeenCalledTimes(1);
    // expect(mockSubmit).toHaveBeenCalledWith({
    //   name: 'Edited Name',
    //   description: 'Edited Description',
    // });
  });
});
