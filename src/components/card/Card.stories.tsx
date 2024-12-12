import type { Meta, StoryObj } from '@storybook/react';
import Card from './Card';

const meta = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof Card>;

// Box Story
export const Box: Story = {
  render: () => (
    <Card.Box>
      <p>Card Box Content</p>
    </Card.Box>
  ),
};

// Image Story
export const Image: Story = {
  render: () => (
    <Card.Image
      url="https://picsum.photos/400/300"
      alt="샘플 이미지"
      isLiked={false}
      onLikeClick={() => alert('좋아요 클릭!')}
    />
  ),
};

// Title Story
export const Title: Story = {
  render: () => <Card.Title>모임 제목 예시</Card.Title>,
};

// Location Story
export const Location: Story = {
  render: () => <Card.Location>서울특별시 강남구</Card.Location>,
};

// DateTime Story
export const DateTime: Story = {
  render: () => <Card.DateTime>2024.03.15 (금) 19:00</Card.DateTime>,
};

// Overlay Story
export const Overlay: Story = {
  render: () => (
    <div className="relative h-[200px] w-[336px]">
      <Card isCanceled>
        <Card.Overlay onDelete={() => alert('삭제 버튼 클릭!')} />
      </Card>
    </div>
  ),
};

// 각 컴포넌트의 다양한 상태를 보여주는 추가 스토리들
export const ImageWithLike: Story = {
  render: () => (
    <Card.Image
      url="https://picsum.photos/400/300"
      alt="좋아요된 이미지"
      isLiked={true}
      onLikeClick={() => alert('좋아요 클릭!')}
    />
  ),
};

export const BoxWithClick: Story = {
  render: () => (
    <Card.Box onClick={() => alert('박스 클릭!')}>
      <p>클릭 가능한 Card Box</p>
    </Card.Box>
  ),
};

// 모든 컴포넌트를 조합한 예시
export const AllComponents: Story = {
  render: () => (
    <Card>
      <Card.Box>
        <Card.Image
          url="https://picsum.photos/400/300"
          alt="샘플 이미지"
          isLiked={false}
          onLikeClick={() => alert('좋아요 클릭!')}
        />
        <Card.Title>모임 제목 예시</Card.Title>
        <Card.Location>서울특별시 강남구</Card.Location>
        <Card.DateTime>2024.03.15 (금) 19:00</Card.DateTime>
      </Card.Box>
    </Card>
  ),
};
