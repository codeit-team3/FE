import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Button from './Button';

describe('Button', () => {
  it('버튼이 정상적으로 렌더링', () => {
    render(<Button size="small" hasBackground={true} text="생성하기" />);
    const buttonElement = screen.getByText('생성하기');
    expect(buttonElement).toBeInTheDocument();
  });

  it('버튼 클릭시 이벤트 핸들러 호출', async () => {
    // Given: 사용자와 화면이 준비되어 있고, 화면에는 콜백이 연결된 버튼이 존재
    const user = userEvent.setup(); // 사용자 이벤트 설정
    const handleClick = jest.fn(); // 콜백 함수를 모킹
    render(
      <Button
        onClick={handleClick}
        size="small"
        hasBackground={true}
        text="제출하기"
      />,
    );

    // When: 사용자가 '클릭하세요'라는 버튼을 클릭
    const buttonElement = screen.getByRole('button', { name: '제출하기' });
    await user.click(buttonElement);

    // Then: 콜백 함수가 호출되었는지 검증
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
