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

const Template = (args: CardProps) => (
  <div className="h-[180px] w-[336px]">
    <Card {...args}>
      <Card.Header
        title="울지로에서 만나는 독서 모임"
        category="자유책"
        location="을지로 3가"
        datetime="12/14(토) 오전 10:00"
      />
      <Card.Footer
        currentParticipants={17}
        maxParticipants={20}
        isConfirmed={true}
        isPast={false}
        participants={[
          { src: 'https://picsum.photos/seed/1/200', alt: '참가자1' },
          { src: 'https://picsum.photos/seed/2/200', alt: '참가자2' },
          { src: 'https://picsum.photos/seed/3/200', alt: '참가자3' },
          { src: 'https://picsum.photos/seed/4/200', alt: '참가자4' },
          { src: 'https://picsum.photos/seed/5/200', alt: '참가��5' },
          { src: 'https://picsum.photos/seed/6/200', alt: '참가자6' },
        ]}
      />
      <Card.EndedOverlay />
    </Card>
  </div>
);

export const Default: Story = {
  render: Template,
  args: {
    isEnded: false,
  },
};

export const Past: Story = {
  render: (args: CardProps) => (
    <div className="h-[180px] w-[336px]">
      <Card {...args}>
        <Card.Header
          title="울지로에서 만나는 독서 모임"
          category="자유책"
          location="을지로 3가"
          datetime="12/14(토) 오전 10:00"
          isPast={true}
        />
        <Card.Footer
          currentParticipants={17}
          maxParticipants={20}
          isConfirmed={true}
          isPast={true}
          participants={[
            { src: 'https://picsum.photos/seed/1/200', alt: '참가자1' },
            { src: 'https://picsum.photos/seed/2/200', alt: '참가자2' },
            { src: 'https://picsum.photos/seed/3/200', alt: '참가자3' },
            { src: 'https://picsum.photos/seed/4/200', alt: '참가자4' },
            { src: 'https://picsum.photos/seed/5/200', alt: '참가자5' },
            { src: 'https://picsum.photos/seed/6/200', alt: '참가자6' },
          ]}
        />
        <Card.EndedOverlay />
      </Card>
    </div>
  ),
  args: {
    isEnded: false,
  },
};

export const Host: Story = {
  args: {
    children: <Card.Host nickname="김모임" />,
  },
};

export const HostOnly: StoryObj<typeof Card.Host> = {
  render: (args) => <Card.Host {...args} />,
  args: {
    nickname: '김모임',
  },
};

// 다양한 호스트 이미지를 보여주기 위한 추가 스토리
export const MultipleHosts: Story = {
  render: () => (
    <div className="flex">
      <Card.Host nickname="김모임" />
      <Card.Host nickname="이모임" />
      <Card.Host nickname="박모임" />
    </div>
  ),
};
