import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Input from './Input';

describe('Input', () => {
  const mockOnChange = jest.fn();
  const defaultProps = {
    value: '',
    onChange: mockOnChange,
  };

  beforeEach(() => {
    mockOnChange.mockClear();
  });

  it('placeholder가 올바르게 렌더링되는지 확인', () => {
    render(<Input {...defaultProps} placeholder="입력해주세요" />);
    expect(screen.getByPlaceholderText('입력해주세요')).toBeInTheDocument();
  });

  it('입력값이 변경될 때 onChange 핸들러가 호출되는지 확인', async () => {
    const user = userEvent.setup();
    render(<Input {...defaultProps} />);
    const input = screen.getByRole('textbox');

    await user.type(input, '테스트 입력값');
    expect(mockOnChange).toHaveBeenCalled();
  });

  it('초기 value prop이 올바르게 설정되는지 확인', () => {
    const initialValue = '초기 입력값';
    render(<Input {...defaultProps} value={initialValue} />);

    const input = screen.getByRole('textbox') as HTMLInputElement;
    expect(input.value).toBe(initialValue);
  });

  it('아이콘이 전달되면 렌더링되는지 확인', () => {
    render(
      <Input
        {...defaultProps}
        icon={<span data-testid="test-icon">아이콘</span>}
      />,
    );
    expect(screen.getByTestId('test-icon')).toBeInTheDocument();
  });
});
