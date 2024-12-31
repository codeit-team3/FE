import { render, screen } from '@testing-library/react';
import HeaderBar from './HeaderBar';
import '@testing-library/jest-dom';
import { NAV_ITEMS } from '@/constants/navigation';
import { useAuthStore } from '@/store/authStore';

jest.mock('next/navigation', () => ({
  usePathname: jest.fn(() => '/exchange'),
  useRouter: jest.fn(() => ({
    push: jest.fn(),
    replace: jest.fn(),
    back: jest.fn(),
  })),
}));

describe('HeaderBar 컴포넌트 테스트', () => {
  beforeEach(() => {
    useAuthStore.setState({ isLoggedIn: false, user: null });
    render(<HeaderBar />);
  });

  describe('네비게이션 링크', () => {
    it('NAV_ITEMS의 모든 링크가 올바르게 렌더링되어야 한다', () => {
      NAV_ITEMS.forEach((item) => {
        const linkElement = screen.getByRole('link', { name: item.label });
        expect(linkElement).toBeInTheDocument();
        expect(linkElement).toHaveAttribute('href', item.href);
      });
    });

    it('로그인 링크가 올바르게 렌더링되어야 한다', () => {
      const loginLink = screen.getByRole('link', { name: '로그인' });
      expect(loginLink).toBeInTheDocument();
      expect(loginLink).toHaveAttribute('href', '/login');
    });

    it('bookco 링크는 항상 활성화되어야 한다', () => {
      const bookcoItem = NAV_ITEMS.find((item) => item.id === 'bookco');
      const bookcoLink = screen.getByRole('link', { name: bookcoItem!.label });
      expect(bookcoLink).toHaveClass('font-bold');
    });

    it('현재 경로와 일치하는 링크는 활성화되어야 한다', () => {
      const exchangeItem = NAV_ITEMS.find((item) => item.id === 'exchange');
      const exchangeLink = screen.getByRole('link', {
        name: exchangeItem!.label,
      });
      expect(exchangeLink).toHaveClass('font-bold');
    });

    it('현재 경로와 일치하는 않는 링크는 비활성화되어야 한다', () => {
      const bookclubItem = NAV_ITEMS.find((item) => item.id === 'bookclub');
      const bookclubLink = screen.getByRole('link', {
        name: bookclubItem!.label,
      });
      expect(bookclubLink).toHaveClass('text-green-light-01');
    });
  });
});

describe('로그인 상태에 따른 버튼 렌더링', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    useAuthStore.setState({
      isLoggedIn: false,
      user: null,
      checkLoginStatus: jest.fn(),
    });
  });

  it('로그인 상태일 때 드롭다운 버튼이 렌더링되어야 한다', () => {
    useAuthStore.setState({
      isLoggedIn: true,
      user: {
        image: '/images/profile.png',
        id: 1,
        email: 'user@example.com',
        nickname: 'Nick Name',
        name: 'User Name',
        description: 'description',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      checkLoginStatus: jest.fn(),
    });

    render(<HeaderBar />);

    const avatarElement = screen.getByAltText('nav_profile');
    expect(avatarElement).toBeInTheDocument();

    const dropDownButton = avatarElement.closest('button');
    expect(dropDownButton).toBeInTheDocument();
  });

  it('비로그인 상태일 때 로그인 버튼이 렌더링되어야 한다', () => {
    render(<HeaderBar />);

    const loginButton = screen.getByRole('link', { name: '로그인' });
    expect(loginButton).toBeInTheDocument();
    expect(loginButton).toHaveAttribute('href', '/login');

    const avatarElement = screen.queryByAltText('nav_profile');
    expect(avatarElement).not.toBeInTheDocument();
  });
});
