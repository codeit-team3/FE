import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import LoginForm from './LoginForm';

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    replace: jest.fn(),
  }),
  useSearchParams: () => null,
}));
describe('LoginForm UI 테스트', () => {
  it('로그인 폼의 모든 UI 요소가 올바르게 렌더링되어야 한다', () => {
    render(<LoginForm />);

    expect(screen.getByLabelText('아이디')).toBeInTheDocument();
    expect(screen.getByLabelText('비밀번호')).toBeInTheDocument();

    expect(screen.getByRole('button', { name: '로그인' })).toBeInTheDocument();

    expect(screen.getByText('회원가입')).toBeInTheDocument();
  });

  it('입력 필드에 올바른 placeholder가 표시되어야 한다', () => {
    render(<LoginForm />);

    expect(screen.getByPlaceholderText('이메일')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('비밀번호')).toBeInTheDocument();
  });
});

describe('LoginForm', () => {
  it('이메일과 비밀번호를 입력했을 때 로그인 버튼이 활성화되어야 한다', async () => {
    render(<LoginForm />);

    const emailInput = screen.getByLabelText('아이디');
    const passwordInput = screen.getByLabelText('비밀번호');
    const submitButton = screen.getByRole('button', { name: '로그인' });

    expect(submitButton).toBeDisabled();

    await userEvent.type(emailInput, 'test@example.com');
    await userEvent.type(passwordInput, 'password123');

    expect(emailInput).toHaveValue('test@example.com');
    expect(passwordInput).toHaveValue('password123');

    expect(submitButton).toBeEnabled();
  });

  it('유효하지 않은 이메일 형식을 입력하면 에러 메시지가 표시되어야 한다', async () => {
    render(<LoginForm />);

    const emailInput = screen.getByLabelText('아이디');
    await userEvent.type(emailInput, 'invalid-email');
    await userEvent.tab();

    await waitFor(() => {
      expect(
        screen.getByText('올바른 이메일 형식이 아닙니다.'),
      ).toBeInTheDocument();
    });
  });
});
