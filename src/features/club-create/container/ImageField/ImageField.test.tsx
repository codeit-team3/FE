import { render, screen } from '@testing-library/react';
import ImageField from '@/features/club-create/container/ImageField/ImageField';
import { useImageField } from '@/features/club-create/hooks';
import '@testing-library/jest-dom';

jest.mock('@/features/club-create/hooks/useImageField', () => ({
  useImageField: jest.fn(() => ({
    selectedFileName: '',
    handleFileChange: jest.fn(),
  })),
}));

describe('ImageField', () => {
  const mockRegister = jest.fn();
  const mockSetValue = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('이미지가 선택되지 않았을 때 이미지 업로드 UI를 표시한다', () => {
    render(<ImageField register={mockRegister} setValue={mockSetValue} />);

    expect(screen.getByTestId('camera-icon')).toBeInTheDocument();
    expect(screen.getByTestId('file-input')).toBeInTheDocument();
  });

  it('이미지 선택 시 파일명을 표시한다', () => {
    const testFileName = 'test.jpg';
    (useImageField as jest.Mock).mockImplementationOnce(() => ({
      selectedFileName: testFileName,
      handleFileChange: jest.fn(),
    }));

    render(<ImageField register={mockRegister} setValue={mockSetValue} />);

    expect(screen.getByTestId('image-icon')).toBeInTheDocument();
    expect(screen.getByText(testFileName)).toBeInTheDocument();
  });
});
