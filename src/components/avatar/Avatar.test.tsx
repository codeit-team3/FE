import { render, screen } from '@testing-library/react';
import Avatar from './Avatar';
import userEvent from '@testing-library/user-event';

describe('Avatar 컴포넌트', () => {
  const defaultProps = {
    src: '/test-image.jpg',
    alt: '테스트 이미지',
  };

  it('onClick 이벤트가 정상적으로 동작해야 한다', async () => {
    const user = userEvent.setup();
    const handleClick = jest.fn();
    render(<Avatar {...defaultProps} onClick={handleClick} />);

    const avatarContainer = screen.getByRole('img').parentElement;
    await user.click(avatarContainer!);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
