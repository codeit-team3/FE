import type { Meta, StoryObj } from '@storybook/react';
import Card from './Card';
import { mockMeeting } from './mock/mock';

const meta = {
  title: 'Components/Card/Base',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    isCanceled: {
      control: 'boolean',
      description: '모임 취소 여부',
    },
    className: {
      control: 'text',
      description: '추가 스타일링을 위한 className',
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    isCanceled: false,
  },
  render: (args) => (
    <Card {...args}>
      <Card.Image {...mockMeeting.imageInfo} />
      <Card.Box>
        <Card.Info {...mockMeeting.meetingInfo} />
        <Card.Status {...mockMeeting.participationStatus} />
        <Card.EndedOverlay onDelete={() => alert('삭제되었습니다')} />
      </Card.Box>
    </Card>
  ),
};
