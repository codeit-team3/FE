import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import LoginForm from './LoginForm';

jest.mock('react-hook-form', () => ({
  useForm: () => ({
    register: () => ({}),
    handleSubmit: (fn: any) => fn,
    formState: {
      isSubmitting: false,
      errors: {},
      isValid: true,
    },
    setError: jest.fn(),
    reset: jest.fn(),
  }),
}));

// next/navigation mock
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    replace: jest.fn(),
  }),
  useSearchParams: () => null,
}));

describe('LoginForm', () => {
  it('폼이 올바르게 렌더링되어야 한다', () => {
    render(<LoginForm />);

    expect(screen.getByRole('heading', { name: '로그인' })).toBeInTheDocument();
    expect(screen.getByLabelText('아이디')).toBeInTheDocument();
    expect(screen.getByLabelText('비밀번호')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '로그인' })).toBeInTheDocument();
  });

  it('이메일과 비밀번호를 입력할 수 있어야 한다', async () => {
    render(<LoginForm />);

    const emailInput = screen.getByLabelText('아이디');
    const passwordInput = screen.getByLabelText('비밀번호');

    await userEvent.type(emailInput, 'test@example.com');
    await userEvent.type(passwordInput, 'password123');

    expect(emailInput).toHaveValue('test@example.com');
    expect(passwordInput).toHaveValue('password123');
  });

  it('로그인 버튼이 제출 가능한 상태여야 한다', () => {
    render(<LoginForm />);

    const submitButton = screen.getByRole('button', { name: '로그인' });
    expect(submitButton).toBeEnabled();
  });
});
