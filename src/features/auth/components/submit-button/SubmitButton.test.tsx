import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import SubmitButton from './SubmitButton';

describe('SubmitButton', () => {
  it('버튼이 올바르게 렌더링되어야 한다', () => {
    render(<SubmitButton>테스트 버튼</SubmitButton>);

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('type', 'submit');
  });

  it('children prop이 올바르게 표시되어야 한다', () => {
    render(<SubmitButton>로그인</SubmitButton>);

    expect(screen.getByText('로그인')).toBeInTheDocument();
  });

  it('isSubmitting prop이 true일 때 버튼이 비활성화되어야 한다', () => {
    render(<SubmitButton isSubmitting>로그인</SubmitButton>);

    expect(screen.getByRole('button')).toBeDisabled();
  });
});
