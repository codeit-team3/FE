import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import FormField from './FormField';

describe('FormField', () => {
  const defaultProps = {
    label: '아이디',
    type: 'text',
    placeholder: '이메일을 입력해주세요',
    id: 'email',
    register: {
      onChange: jest.fn(),
      onBlur: jest.fn(),
      ref: jest.fn(),
      name: 'email',
    },
  };

  it('label과 input이 올바르게 렌더링되어야 한다', () => {
    render(<FormField {...defaultProps} />);

    expect(screen.getByLabelText('아이디')).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText('이메일을 입력해주세요'),
    ).toBeInTheDocument();
  });

  describe('password type input', () => {
    const passwordProps = {
      ...defaultProps,
      type: 'password',
      label: '비밀번호',
      placeholder: '비밀번호를 입력해주세요',
      id: 'password',
      register: {
        onChange: jest.fn(),
        onBlur: jest.fn(),
        ref: jest.fn(),
        name: 'password',
      },
    };

    it('토글 버튼 클릭 시 input type이 변경되어야 한다', async () => {
      render(<FormField {...passwordProps} />);

      const input = screen.getByPlaceholderText('비밀번호를 입력해주세요');
      const toggleButton = screen.getByRole('button');

      await userEvent.click(toggleButton);
      expect(input).toHaveAttribute('type', 'text');

      await userEvent.click(toggleButton);
      expect(input).toHaveAttribute('type', 'password');
    });
  });
});
