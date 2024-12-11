import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import PopUp from './PopUp';

const POPUP_LABEL = {
  large: `정말 나가시겠어요?\n작성된 내용이 모두 삭제됩니다.`,
  small: `가입이 완료되었습니다!`,
};

const mockHandlePopUpClose = jest.fn();
const mockHandlePopUpConfirm = jest.fn();

describe('PopUp 렌더링 테스트', () => {
  it('small, single button 렌더링 테스트', () => {
    render(
      <PopUp
        isOpen={true}
        label={POPUP_LABEL.small}
        handlePopUpClose={mockHandlePopUpClose}
        handlePopUpConfirm={mockHandlePopUpConfirm}
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
        isTwoButton={true}
        label={POPUP_LABEL.small}
        handlePopUpClose={mockHandlePopUpClose}
        handlePopUpConfirm={mockHandlePopUpConfirm}
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
        label={POPUP_LABEL.large}
        handlePopUpClose={mockHandlePopUpClose}
        handlePopUpConfirm={mockHandlePopUpConfirm}
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
        handlePopUpClose={mockHandlePopUpClose}
        handlePopUpConfirm={mockHandlePopUpConfirm}
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
