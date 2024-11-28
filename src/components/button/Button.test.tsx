import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Button from './Button';

describe('Button', () => {
  it('버튼이 정상적으로 렌더링', () => {
    render(<Button size="small" state="active" text="생성하기" />);
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
        state="active"
        text="제출하기"
      />,
    );

    // When: 사용자가 '클릭하세요'라는 버튼을 클릭
    const buttonElement = screen.getByRole('button', { name: '제출하기' });
    await user.click(buttonElement);

    // Then: 콜백 함수가 호출되었는지 검증
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('버튼이 disabled 상태일 때 클릭 이벤트가 발생되지 않는다', () => {
    render(
      <Button disabled size="small" state="disabled" text="비활성화 버튼" />,
    );
    const buttonElement = screen.getByText('비활성화 버튼');
    expect(buttonElement).toBeDisabled();

    fireEvent.click(buttonElement);
    expect(buttonElement).toHaveClass(
      'bg-gray-400 text-white cursor-not-allowed',
    );
    expect(buttonElement).toBeDisabled();
  });

  // 스타일 테스트
  it('버튼의 크기와 상태에 따른 스타일 클래스가 올바르게 적용되는지 확인', () => {
    // Large Size Test
    render(<Button size="large" state="none" text="큰 버튼" />);
    const largeButton = screen.getByText('큰 버튼');
    expect(largeButton).toHaveClass('w-[332px] h-[44px] text-base');

    // Small Size Test
    render(<Button size="small" state="none" text="작은 버튼" />);
    const smallButton = screen.getByText('작은 버튼');
    expect(smallButton).toHaveClass('w-[120px] h-[40px] text-sm');
  });

  it('버튼의 상태에 따른 스타일이 올바르게 적용되는지 확인', () => {
    // Active State Test
    render(<Button size="small" state="active" text="활성화된 버튼" />);
    const activeButton = screen.getByText('활성화된 버튼');
    expect(activeButton).toHaveClass('bg-orange-600 text-white');

    // None State Test
    render(<Button size="small" state="none" text="기본 버튼" />);
    const noneButton = screen.getByText('기본 버튼');
    expect(noneButton).toHaveClass(
      'bg-white text-orange-600 border border-orange-600',
    );
  });

  it('사용자 지정 스타일이 인라인 스타일로 올바르게 적용되는지 확인', () => {
    render(
      <Button
        size="large"
        state="none"
        text="사용자 정의 버튼"
        borderColor="red"
        textColor="blue"
      />,
    );
    const buttonElement = screen.getByText('사용자 정의 버튼');
    expect(buttonElement).toHaveStyle({
      borderColor: 'red',
      color: 'blue',
    });
  });
});
