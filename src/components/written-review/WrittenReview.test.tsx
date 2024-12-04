import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import WrittenReview from './WrittenReview';
import { act } from 'react';

describe('WrittenReview Component', () => {
  const defaultProfileImage =
    'https://cdn.pixabay.com/photo/2018/02/12/10/45/heart-3147976_1280.jpg';
  const validProfileImage =
    'https://cdn.pixabay.com/photo/2024/02/17/00/18/cat-8578562_1280.jpg';
  const brokenProfileImage = 'https://broken-url.com/image.jpg';

  it('유효한 이미지 경우 정상적으로 렌더링', () => {
    render(
      <WrittenReview
        ratingCount={4}
        comment="Test comment"
        profileImage={validProfileImage}
        userName="Test User"
        createdAt="2024.01.25"
      />,
    );
    const imgElement = screen.getByAltText("Test User's profile picture");

    expect(imgElement.getAttribute('src')).toContain(
      encodeURIComponent(validProfileImage),
    );
  });

  it('유효하지 않은 이미지 경우 기본 이미지로 대체', async () => {
    render(
      <WrittenReview
        ratingCount={4}
        comment="Test comment"
        profileImage={brokenProfileImage}
        userName="Test User"
        createdAt="2024.01.25"
      />,
    );

    const imgElement = screen.getByAltText("Test User's profile picture");

    expect(imgElement.getAttribute('src')).toContain(
      encodeURIComponent(brokenProfileImage),
    );

    await act(async () => {
      imgElement.dispatchEvent(new Event('error'));
    });

    expect(imgElement.getAttribute('src')).toContain(
      encodeURIComponent(defaultProfileImage),
    );
  });
});
