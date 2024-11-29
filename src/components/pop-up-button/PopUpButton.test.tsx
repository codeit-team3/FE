import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import PopUpButton from './PopUpButton';

describe('PopUp Button 렌더링 테스트', () => {
  it('isConfirm이 true일 때 확인 버튼 렌더링', () => {
    render(<PopUpButton isConfirm={true} />);
    const popUpButton = screen.getByRole('button');
    expect(popUpButton.textContent).toBe('확인');
  });
  it('isConfirm이 true일 때 취소 버튼 렌더링 실패 테스트', () => {
    render(<PopUpButton isConfirm={true} />);
    const popUpButton = screen.getByRole('button');
    expect(popUpButton.textContent).not.toBe('취소');
  });
  it('isConfirm이 false일 때 취소 버튼 렌더링', () => {
    render(<PopUpButton isConfirm={false} />);
    const popUpButton = screen.getByRole('button');
    expect(popUpButton.textContent).toBe('취소');
  });

  it('isConfirm이 false일 때 확인 버튼 렌더링 실패 테스트', () => {
    render(<PopUpButton isConfirm={false} />);
    const popUpButton = screen.getByRole('button');
    expect(popUpButton.textContent).not.toBe('확인');
  });
});
