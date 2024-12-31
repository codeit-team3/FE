import type { Meta, StoryObj } from '@storybook/react';
import Card from './Card';

const meta = {
  title: 'Components/Card/Elements',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof Card>;

export const Box: Story = {
  render: () => (
    <Card.Box>
      <p>Card Box Content</p>
    </Card.Box>
  ),
};

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

export const Title: Story = {
  render: () => <Card.Title>모임 제목 예시</Card.Title>,
};

export const Location: Story = {
  render: () => (
    <>
      <Card.Location meetingType="OFFLINE">서울특별시 강남구</Card.Location>
      <div className="mt-4">
        <Card.Location meetingType="ONLINE">서울특별시 강남구</Card.Location>
      </div>
      <div className="mt-4">
        <Card.Location meetingType="OFFLINE" isPast={true}>
          서울특별시 강남구
        </Card.Location>
      </div>
      <div className="mt-4">
        <Card.Location meetingType="ONLINE" isPast={true}>
          서울특별시 강남구
        </Card.Location>
      </div>
    </>
  ),
};

export const DateTime: Story = {
  render: () => <Card.DateTime>2024.03.15 (금) 19:00</Card.DateTime>,
};

export const Overlay: Story = {
  render: () => (
    <div className="relative h-[200px] w-[336px]">
      <Card.Overlay onDelete={() => alert('삭제 버튼 클릭!')} />
    </div>
  ),
};

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
