import { render, screen } from '@testing-library/react';
import Avatar from './Avatar';

describe('Avatar 컴포넌트', () => {
  const defaultProps = {
    src: '/test-image.jpg',
    alt: '테스트 이미지',
  };

  it('이미지가 정상적으로 렌더링되어야 한다', () => {
    render(<Avatar {...defaultProps} />);
    const image = screen.getByRole('img');

    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src');
    expect(image).toHaveAttribute('alt', '테스트 이미지');
  });

  it('각각의 size prop에 따라 렌더링되어야 한다', () => {
    const sizes: Array<'sm' | 'md' | 'lg'> = ['sm', 'md', 'lg'];

    sizes.forEach((size) => {
      render(<Avatar {...defaultProps} size={size} />);
      const image = screen.getByRole('img');
      expect(image).toBeInTheDocument();
    });
  });
});
