import { render, screen } from '@testing-library/react';
import HeaderBar from './HeaderBar';
import '@testing-library/jest-dom';

const navigationLinks = [
  { name: 'bookco' },
  { name: '책 모임' },
  { name: '책 교환' },
  { name: '찜 목록' },
  { name: '로그인' },
];

describe('HeaderBar 컴포넌트 테스트', () => {
  beforeEach(() => {
    render(<HeaderBar />);
  });

  describe('네비게이션 링크', () => {
    it('모든 네비게이션 링크가 올바르게 렌더링되어야 한다', () => {
      navigationLinks.forEach((link) => {
        const linkElement = screen.getByRole('link', { name: link.name });
        expect(linkElement).toBeInTheDocument();
      });
    });

    it('홈 링크에 올바른 스타일이 적용되어야 한다', () => {
      const homeLink = screen.getByRole('link', { name: 'bookco' });
      expect(homeLink).toHaveClass('hover:scale-105 md:text-base');
    });
  });
});

jest.mock('next/navigation', () => ({
  usePathname: () => '/',
}));

describe('HeaderBar 컴포넌트 테스트', () => {
  beforeEach(() => {
    render(<HeaderBar />);
  });

  it('책 모임 링크가 올바른 href를 가져야 한다', () => {
    const bookclubLink = screen.getByRole('link', { name: '책 모임' });
    expect(bookclubLink).toHaveAttribute('href', '/bookclub');
  });
});

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
  usePathname: jest.fn(),
}));

describe('HeaderBar 네비게이션 테스트', () => {
  it('각 네비게이션 버튼 클릭시 올바른 href 속성을 가져야 한다', () => {
    render(<HeaderBar />);

    const homeLink = screen.getByRole('link', { name: 'bookco' });
    expect(homeLink).toHaveAttribute('href', '/exchange');
  });
});
