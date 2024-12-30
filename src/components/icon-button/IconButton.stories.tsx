import type { Meta, StoryObj } from '@storybook/react';
import IconButton from './IconButton';
import { IcEdit, MessageIcon } from '../../../public/icons';

const meta = {
  title: 'Components/IconButton',
  component: IconButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InfoEditButton: Story = {
  args: {
    icon: <IcEdit />,
    'aria-label': '프로필 수정',
  },
};

export const SendMessageButton: Story = {
  args: {
    icon: <MessageIcon />,
    'aria-label': '메시지 전송',
    className: 'h-[52px] w-[52px] bg-green-light-01',
  },
};
