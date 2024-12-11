import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Button from './Button';

describe('Button', () => {
  it('버튼이 정상적으로 렌더링', () => {
    render(
      <Button
        size="small"
        fillType="solid"
        themeColor="green-normal-01"
        text="생성하기"
      />,
    );
    const buttonElement = screen.getByText('생성하기');
    expect(buttonElement).toBeInTheDocument();
  });

  it('버튼 클릭시 이벤트 핸들러 호출', async () => {
    const user = userEvent.setup();
    const handleClick = jest.fn();
    render(
      <Button
        onClick={handleClick}
        size="small"
        fillType="solid"
        themeColor="green-normal-01"
        text="제출하기"
      />,
    );

    const buttonElement = screen.getByRole('button', { name: '제출하기' });
    await user.click(buttonElement);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
