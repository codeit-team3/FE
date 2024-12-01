import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import PopUp from './PopUp';

const POPUP_LABEL = {
  large: `정말 나가시겠어요?\n작성된 내용이 모두 삭제됩니다.`,
  small: `가입이 완료되었습니다!`,
};

// const mockFn = jest.fn();
// const user = userEvent.setup();

describe('PopUp 렌더링 테스트', () => {
  it('small, single button 렌더링 테스트', () => {
    render(
      <PopUp
        isOpen={true}
        isLarge={false}
        isTwoButton={false}
        label={POPUP_LABEL.small}
      />,
    );
    const popUp = screen.getByRole('pop-up');
    const confirm = screen.getByText('확인');
    const cancel = screen.queryByText('취소');
    expect(popUp).toBeInTheDocument();
    expect(confirm).toBeInTheDocument();
    expect(cancel).not.toBeInTheDocument();
  });
  it('small, two button 렌더링 테스트', () => {
    render(
      <PopUp
        isOpen={true}
        isLarge={false}
        isTwoButton={true}
        label={POPUP_LABEL.small}
      />,
    );
    const popUp = screen.getByRole('pop-up');
    const confirm = screen.getByText('확인');
    const cancel = screen.getByText('취소');
    expect(popUp).toBeInTheDocument();
    expect(confirm).toBeInTheDocument();
    expect(cancel).toBeInTheDocument();
  });
  it('large, single button 렌더링 테스트', () => {
    render(
      <PopUp
        isOpen={true}
        isLarge={true}
        isTwoButton={false}
        label={POPUP_LABEL.large}
      />,
    );
    const popUp = screen.getByRole('pop-up');
    const confirm = screen.getByText('확인');
    const cancel = screen.queryByText('취소');
    expect(popUp).toBeInTheDocument();
    expect(confirm).toBeInTheDocument();
    expect(cancel).not.toBeInTheDocument();
  });
  it('large, two button 렌더링 테스트', () => {
    render(
      <PopUp
        isOpen={true}
        isLarge={false}
        isTwoButton={true}
        label={POPUP_LABEL.large}
      />,
    );
    const popUp = screen.getByRole('pop-up');
    const confirm = screen.getByText('확인');
    const cancel = screen.getByText('취소');
    expect(popUp).toBeInTheDocument();
    expect(confirm).toBeInTheDocument();
    expect(cancel).toBeInTheDocument();
  });
});

// describe('PopUp 버튼클릭 이벤트 핸들러 테스트', () => {
//   it('닫기 아이콘 클릭 시 팝업창 닫기 이벤트 핸들러 호출', async () => {
//     render(
//       <PopUp
//         isOpen={true}
//         isLarge={false}
//         isTwoButton={true}
//         label={POPUP_LABEL.small}
//       />,
//     );
//   });

//   it('확인 버튼 클릭 시 버튼 클릭 이벤트 호출', async () => {});

//   it('취소 버튼 클릭 시 버튼 늘릭 이벤트 핸들러 호출', async () => {});
// });
