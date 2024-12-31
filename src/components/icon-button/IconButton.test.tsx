import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import IconButton from './IconButton';
import '@testing-library/jest-dom';

describe('IconButton', () => {
  const mockIcon = <svg data-testid="test-icon" />;
  const mockClick = jest.fn();

  it('아이콘이 올바르게 렌더링된다', () => {
    render(<IconButton icon={mockIcon} aria-label="테스트 버튼" />);

    expect(screen.getByTestId('test-icon')).toBeInTheDocument();
  });

  it('클릭 이벤트가 발생하면 핸들러가 호출된다', async () => {
    const user = userEvent.setup();
    render(
      <IconButton
        icon={mockIcon}
        onClick={mockClick}
        aria-label="테스트 버튼"
      />,
    );

    await user.click(screen.getByRole('button'));
    expect(mockClick).toHaveBeenCalledTimes(1);
  });
});
