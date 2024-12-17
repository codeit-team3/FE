import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Modal from './Modal';

describe('Modal 컴포넌트', () => {
  const defaultProps = {
    isOpen: true,
    onClose: jest.fn(),
    title: '테스트 모달',
    onConfirm: jest.fn(),
    cancelText: '취소',
    confirmText: '확인',
    children: <div>모달 내용</div>,
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('isOpen이 true일 때 모달이 렌더링되어야 함', () => {
    render(<Modal {...defaultProps} />);

    expect(screen.getByText('테스트 모달')).toBeInTheDocument();
    expect(screen.getByText('모달 내용')).toBeInTheDocument();
    expect(screen.getByText('취소')).toBeInTheDocument();
    expect(screen.getByText('확인')).toBeInTheDocument();
  });

  it('isOpen이 false일 때 모달이 렌더링되지 않아야 함', () => {
    render(<Modal {...defaultProps} isOpen={false} />);

    expect(screen.queryByText('테스트 모달')).not.toBeInTheDocument();
  });

  it('닫기 버튼 클릭 시 onClose가 호출되어야 함', () => {
    render(<Modal {...defaultProps} />);

    const closeButton = screen.getByLabelText('닫기');
    fireEvent.click(closeButton);
    expect(defaultProps.onClose).toHaveBeenCalledTimes(1);
  });

  it('취소 버튼 클릭 시 onClose가 호출되어야 함', () => {
    render(<Modal {...defaultProps} />);

    fireEvent.click(screen.getByText('취소'));
    expect(defaultProps.onClose).toHaveBeenCalledTimes(1);
  });

  it('확인 버튼 클릭 시 onConfirm이 호출되어야 함', () => {
    render(<Modal {...defaultProps} />);

    fireEvent.click(screen.getByText('확인'));
    expect(defaultProps.onConfirm).toHaveBeenCalledTimes(1);
  });
});
