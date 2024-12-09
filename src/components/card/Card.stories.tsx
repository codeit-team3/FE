import type { Meta, StoryObj } from '@storybook/react';
import Card, { type CardProps } from './Card';

const meta = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

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
          { src: 'https://picsum.photos/seed/5/200', alt: '참가자5' },
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
