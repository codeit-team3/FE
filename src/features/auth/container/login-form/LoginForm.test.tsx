import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import LoginForm from './LoginForm';

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

  it('폼 제출 시 이벤트가 발생해야 한다', async () => {
    const handleSubmit = jest.fn((e) => e.preventDefault());
    render(<LoginForm />);

    const form = screen.getByTestId('login-form');
    form.onsubmit = handleSubmit;

    await userEvent.click(screen.getByRole('button', { name: '로그인' }));

    expect(handleSubmit).toHaveBeenCalled();
  });
});
