import type { Meta, StoryObj } from '@storybook/react';
import Card from './Card';
import { CardProps } from '@/components/card/types';
import SimpleCard from './SimpleCard';
import FullCard from './FullCard';

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

// 모바일 레이아웃 (기본)
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

// 태블릿/데스크톱 레이아웃
export const Desktop: Story = {
  render: (args: CardProps) => (
    <div className="h-full w-[800px]">
      <Card {...args}>
        <div className="flex h-full flex-col md:flex-row md:gap-6">
          <div className="md:h-full md:w-[360px]">
            <Card.Image
              url="https://picsum.photos/seed/bookclub/800/450"
              alt="독서 모임 이미지"
              isLiked={true}
              onLikeClick={() => console.log('좋아요 클릭')}
              className="h-[200px] md:h-full"
            />
          </div>
          <div className="flex flex-1 flex-col gap-4">
            <Card.Host nickname="김모임" />
            <Card.Box className="flex-1">
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
          </div>
        </div>
      </Card>
    </div>
  ),
};

// SimpleCard - 기본
export const Simple: Story = {
  render: () => (
    <div className="w-[360px] md:w-[800px]">
      <SimpleCard
        title="을지로에서 만나는 독서 모임"
        category="자유책"
        location="을지로 3가"
        datetime="12/14(토) 오전 10:00"
        currentParticipants={17}
        maxParticipants={20}
        isConfirmed={true}
        imageUrl="https://picsum.photos/seed/bookclub/800/450"
        isLiked={true}
        onLikeClick={() => console.log('좋아요 클릭')}
        participants={[
          { src: 'https://picsum.photos/seed/1/200', alt: '참가자1' },
          { src: 'https://picsum.photos/seed/2/200', alt: '참가자2' },
          { src: 'https://picsum.photos/seed/3/200', alt: '참가자3' },
        ]}
      />
    </div>
  ),
};

// SimpleCard - 취소된 모임 (모바일)
export const SimpleCanceledMobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile',
    },
  },
  render: () => (
    <div className="w-[360px]">
      <SimpleCard
        title="을지로에서 만나는 독서 모임"
        category="자유책"
        location="을지로 3가"
        datetime="12/14(토) 오전 10:00"
        currentParticipants={17}
        maxParticipants={20}
        isConfirmed={true}
        imageUrl="https://picsum.photos/seed/bookclub/800/450"
        isLiked={true}
        onLikeClick={() => console.log('좋아요 클릭')}
        participants={[
          { src: 'https://picsum.photos/seed/1/200', alt: '참가자1' },
          { src: 'https://picsum.photos/seed/2/200', alt: '참가자2' },
          { src: 'https://picsum.photos/seed/3/200', alt: '참가자3' },
        ]}
        isEnded={true}
      />
    </div>
  ),
};

// SimpleCard - 취소된 모임 (데스크톱)
export const SimpleCanceledDesktop: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
  },
  render: () => (
    <div className="w-[1000px]">
      <SimpleCard
        title="을지로에서 만나는 독서 모임"
        category="자유책"
        location="을지로 3가"
        datetime="12/14(토) 오전 10:00"
        currentParticipants={17}
        maxParticipants={20}
        isConfirmed={true}
        imageUrl="https://picsum.photos/seed/bookclub/800/450"
        isLiked={true}
        onLikeClick={() => console.log('좋아요 클릭')}
        participants={[
          { src: 'https://picsum.photos/seed/1/200', alt: '참가자1' },
          { src: 'https://picsum.photos/seed/2/200', alt: '참가자2' },
          { src: 'https://picsum.photos/seed/3/200', alt: '참가자3' },
        ]}
        isEnded={true}
      />
    </div>
  ),
};

// FullCard 스토리들
export const FullMobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile',
    },
  },
  render: () => (
    <div className="w-[360px]">
      <FullCard
        title="을지로에서 만나는 독서 모임"
        category="자유책"
        location="을지로 3가"
        datetime="12/14(토) 오전 10:00"
        currentParticipants={17}
        maxParticipants={20}
        isConfirmed={true}
        imageUrl="https://picsum.photos/seed/bookclub/800/450"
        isLiked={true}
        onLikeClick={() => console.log('좋아요 클릭')}
        hostNickname="김모임"
        onJoinClick={() => console.log('참여하기 클릭')}
        participants={[
          { src: 'https://picsum.photos/seed/1/200', alt: '참가자1' },
          { src: 'https://picsum.photos/seed/2/200', alt: '참가자2' },
          { src: 'https://picsum.photos/seed/3/200', alt: '참가자3' },
        ]}
      />
    </div>
  ),
};

export const FullTablet: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'tablet',
    },
  },
  render: () => (
    <div className="w-[744px]">
      <FullCard
        title="을지로에서 만나는 독서 ��임"
        category="자유책"
        location="을지로 3가"
        datetime="12/14(토) 오전 10:00"
        currentParticipants={17}
        maxParticipants={20}
        isConfirmed={true}
        imageUrl="https://picsum.photos/seed/bookclub/800/450"
        isLiked={true}
        onLikeClick={() => console.log('좋아요 클릭')}
        hostNickname="김모임"
        onJoinClick={() => console.log('참여하기 클릭')}
        participants={[
          { src: 'https://picsum.photos/seed/1/200', alt: '참가자1' },
          { src: 'https://picsum.photos/seed/2/200', alt: '참가자2' },
          { src: 'https://picsum.photos/seed/3/200', alt: '참가자3' },
        ]}
      />
    </div>
  ),
};

export const FullDesktop: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
  },
  render: () => (
    <div className="w-[1000px]">
      <FullCard
        title="을지로에서 만나는 독서 모임"
        category="자유책"
        location="을지로 3가"
        datetime="12/14(토) 오전 10:00"
        currentParticipants={17}
        maxParticipants={20}
        isConfirmed={true}
        imageUrl="https://picsum.photos/seed/bookclub/800/450"
        isLiked={true}
        onLikeClick={() => console.log('좋아요 클릭')}
        hostNickname="김모임"
        onJoinClick={() => console.log('참여하기 클릭')}
        participants={[
          { src: 'https://picsum.photos/seed/1/200', alt: '참가자1' },
          { src: 'https://picsum.photos/seed/2/200', alt: '참가자2' },
          { src: 'https://picsum.photos/seed/3/200', alt: '참가자3' },
        ]}
      />
    </div>
  ),
};
