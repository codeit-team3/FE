import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchBox from './SearchBox';
import PencilIcon from '../../../public/icons/PencilIcon';

describe('SearchBox', () => {
  const mockOnChange = jest.fn();
  const defaultProps = {
    value: '',
    onChange: mockOnChange,
  };

  beforeEach(() => {
    mockOnChange.mockClear();
  });

  it('기본 placeholder 텍스트가 올바르게 렌더링되는지 확인', () => {
    render(<SearchBox {...defaultProps} />);
    expect(
      screen.getByPlaceholderText('검색어를 입력해주세요'),
    ).toBeInTheDocument();
  });

  it('사용자 정의 placeholder가 올바르게 렌더링되는지 확인', () => {
    const customPlaceholder = '메세지를 입력해주세요';
    render(<SearchBox {...defaultProps} placeholder={customPlaceholder} />);
    expect(screen.getByPlaceholderText(customPlaceholder)).toBeInTheDocument();
  });

  it('입력값이 변경될 때 onChange 핸들러가 호출되는지 확인', () => {
    render(<SearchBox {...defaultProps} />);
    const input = screen.getByRole('textbox');

    fireEvent.change(input, { target: { value: '테스트 검색어' } });
    expect(mockOnChange).toHaveBeenCalledTimes(1);
  });

  it('초기 value prop이 올바르게 설정되는지 확인', () => {
    const initialValue = '초기 검색어';
    render(<SearchBox {...defaultProps} value={initialValue} />);

    const input = screen.getByRole('textbox') as HTMLInputElement;
    expect(input.value).toBe(initialValue);
  });

  it('커스텀 아이콘이 올바르게 렌더링되는지 확인', () => {
    render(
      <SearchBox
        {...defaultProps}
        icon={<PencilIcon data-testid="pencil-icon" />}
      />,
    );
    expect(screen.getByTestId('pencil-icon')).toBeInTheDocument();
  });
});
