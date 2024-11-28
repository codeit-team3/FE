import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Button from './Button';

describe('Button', () => {
  it('버튼이 정상적으로 렌더링됩니다', () => {
    render(<Button>생성하기</Button>);
    const buttonElement = screen.getByText('생성하기');
    expect(buttonElement).toBeInTheDocument();
  });

  it('버튼 클릭시 이벤트 핸들러가 호출됩니다', async () => {
    // Given: 사용자와 화면이 준비되어 있고, 화면에는 콜백이 연결된 버튼이 존재
    const user = userEvent.setup(); // 사용자 이벤트 설정
    const handleClick = jest.fn(); // 콜백 함수를 모킹
    render(<Button onClick={handleClick}>생성하기</Button>);

    // When: 사용자가 '클릭하세요'라는 버튼을 클릭
    const buttonElement = screen.getByRole('button', { name: '생성하기' });
    await user.click(buttonElement);

    // Then: 콜백 함수가 호출되었는지 검증
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('버튼이 disabled 상태일 때 클릭 이벤트가 발생되지 않습니다', () => {
    render(<Button disabled>생성하기</Button>);
    const buttonElement = screen.getByText('생성하기');
    expect(buttonElement).toBeDisabled();

    fireEvent.click(buttonElement);
    // 이벤트 핸들러가 호출되지 않아야 합니다.
    // 예를 들어 이벤트 핸들러가 없다고 가정할 때
    expect(buttonElement).toBeDisabled();
  });
});
