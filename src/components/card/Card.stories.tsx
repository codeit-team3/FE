import type { Meta, StoryObj } from '@storybook/react';
import Card, { type CardProps } from './Card';

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

// 기본 데스크톱 레이아웃
export const Desktop: Story = {
  render: (args: CardProps) => (
    <div className="w-[800px]">
      <Card {...args}>
        <Card.Image
          url="https://picsum.photos/seed/bookclub/800/450"
          alt="독서 모임 이미지"
        />
        <Card.Box className="flex-1 justify-between">
          <Card.Info
            title="을지로에서 만나는 독서 모임"
            category="자유책"
            location="을지로 3가"
            datetime="12/14(토) 오전 10:00"
          />
          <Card.Status
            currentParticipants={17}
            maxParticipants={20}
            isConfirmed={true}
            isPast={false}
            participants={[
              { src: 'https://picsum.photos/seed/1/200', alt: '참가자1' },
              { src: 'https://picsum.photos/seed/2/200', alt: '참가자2' },
              { src: 'https://picsum.photos/seed/3/200', alt: '참가자3' },
            ]}
          />
        </Card.Box>
      </Card>
    </div>
  ),
};

// 호스트 정보가 포함된 레이아웃
export const WithHost: Story = {
  render: (args: CardProps) => (
    <div className="w-[800px]">
      <Card {...args}>
        <Card.Image
          url="https://picsum.photos/seed/bookclub/800/450"
          alt="독서 모임 이미지"
        />
        <Card.Box className="flex-1 justify-between">
          <div className="space-y-4">
            <Card.Info
              title="을지로에서 만나는 독서 모임"
              category="자유책"
              location="을지로 3가"
              datetime="12/14(토) 오전 10:00"
            />
            <Card.Host nickname="김모임" />
          </div>
          <Card.Status
            currentParticipants={17}
            maxParticipants={20}
            isConfirmed={true}
            isPast={false}
            participants={[
              { src: 'https://picsum.photos/seed/1/200', alt: '참가자1' },
              { src: 'https://picsum.photos/seed/2/200', alt: '참가자2' },
              { src: 'https://picsum.photos/seed/3/200', alt: '참가자3' },
            ]}
          />
        </Card.Box>
      </Card>
    </div>
  ),
};

// 모바일 레이아웃
export const Mobile: Story = {
  render: (args: CardProps) => (
    <div className="w-[360px]">
      <Card {...args}>
        <Card.Image
          url="https://picsum.photos/seed/bookclub/800/450"
          alt="독서 모임 이미지"
          isLiked={true}
          onLikeClick={() => console.log('좋아요 클릭')}
        />
        <Card.Host nickname="김모임" />
        <Card.Box>
          <Card.Info
            title="을지로에서 만나는 독서 모임"
            category="자유책"
            location="을지로 3가"
            datetime="12/14(토) 오전 10:00"
          />
          <Card.Status
            currentParticipants={17}
            maxParticipants={20}
            isConfirmed={true}
            isPast={false}
            participants={[
              { src: 'https://picsum.photos/seed/1/200', alt: '참가자1' },
              { src: 'https://picsum.photos/seed/2/200', alt: '참가자2' },
              { src: 'https://picsum.photos/seed/3/200', alt: '참가자3' },
            ]}
          />
        </Card.Box>
        <button className="w-full rounded-xl bg-green-normal-01 py-4 text-white">
          참여하기
        </button>
      </Card>
    </div>
  ),
};

// 종료된 모임 카드
export const Ended: Story = {
  render: (args: CardProps) => (
    <div className="w-[800px]">
      <Card {...args}>
        <Card.Image
          url="https://picsum.photos/seed/bookclub/800/450"
          alt="독서 모임 이미지"
        />
        <Card.Box className="flex-1 justify-between">
          <div className="space-y-4">
            <Card.Info
              title="을지로에서 만나는 독서 모임"
              category="자유책"
              location="을지로 3가"
              datetime="12/14(토) 오전 10:00"
              isPast={true}
            />
            <Card.Host nickname="김모임" />
          </div>
          <Card.Status
            currentParticipants={17}
            maxParticipants={20}
            isConfirmed={true}
            isPast={true}
            participants={[
              { src: 'https://picsum.photos/seed/1/200', alt: '참가자1' },
              { src: 'https://picsum.photos/seed/2/200', alt: '참가자2' },
              { src: 'https://picsum.photos/seed/3/200', alt: '참가자3' },
            ]}
          />
        </Card.Box>
        <Card.EndedOverlay />
      </Card>
    </div>
  ),
  args: {
    isEnded: true,
  },
};

// 좋아요 기능이 있는 카드
export const WithLike: Story = {
  render: (args: CardProps) => (
    <div className="w-[800px]">
      <Card {...args}>
        <Card.Image
          url="https://picsum.photos/seed/bookclub/800/450"
          alt="독서 모임 이미지"
          isLiked={true}
          onLikeClick={() => console.log('좋아요 클릭')}
        />
        <Card.Box className="flex-1 justify-between">
          <Card.Info
            title="을지로에서 만나는 독서 모임"
            category="자유책"
            location="을지로 3가"
            datetime="12/14(토) 오전 10:00"
          />
          <Card.Status
            currentParticipants={17}
            maxParticipants={20}
            isConfirmed={true}
            isPast={false}
            participants={[
              { src: 'https://picsum.photos/seed/1/200', alt: '참가자1' },
              { src: 'https://picsum.photos/seed/2/200', alt: '참가자2' },
              { src: 'https://picsum.photos/seed/3/200', alt: '참가자3' },
            ]}
          />
        </Card.Box>
      </Card>
    </div>
  ),
};
