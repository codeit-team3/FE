import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AvatarGroup from './AvatarGroup';
import Avatar from '../avatar/Avatar';

const createMockAvatars = (count: number) => {
  return Array.from({ length: count }, (_, index) => (
    <Avatar
      key={index}
      src={`https://example.com/avatar${index}.jpg`}
      alt={`Avatar ${index}`}
    />
  ));
};

describe('AvatarGroup', () => {
  it('maxCount만큼의 아바타를 렌더링해야 한다', () => {
    const maxCount = 3;
    const totalAvatars = 5;

    render(
      <AvatarGroup maxCount={maxCount}>
        {createMockAvatars(totalAvatars)}
      </AvatarGroup>,
    );

    const avatarImages = screen.getAllByRole('img');
    expect(avatarImages).toHaveLength(maxCount);
  });

  it('남은 아바타 개수를 표시해야 한다', () => {
    const maxCount = 2;
    const totalAvatars = 5;
    const remainingCount = totalAvatars - maxCount;

    render(
      <AvatarGroup maxCount={maxCount}>
        {createMockAvatars(totalAvatars)}
      </AvatarGroup>,
    );

    const remainingCountElement = screen.getByText(/^\+\d+$/);
    expect(remainingCountElement).toBeInTheDocument();
    expect(remainingCountElement.textContent).toBe(`+${remainingCount}`);
  });

  it('maxCount보다 적은 아바타가 있으면 남은 개수를 표시하지 않아야 한다', () => {
    const maxCount = 4;
    const totalAvatars = 3;

    render(
      <AvatarGroup maxCount={maxCount}>
        {createMockAvatars(totalAvatars)}
      </AvatarGroup>,
    );

    const remainingCountElement = screen.queryByText(/^\+\d+$/);
    expect(remainingCountElement).not.toBeInTheDocument();
  });

  it('기본 maxCount는 4여야 한다', () => {
    const totalAvatars = 6;
    const defaultMaxCount = 4;

    render(<AvatarGroup>{createMockAvatars(totalAvatars)}</AvatarGroup>);

    const avatarImages = screen.getAllByRole('img');
    expect(avatarImages).toHaveLength(defaultMaxCount);
  });
});
