import type { Meta, StoryObj } from '@storybook/react';
import ConfirmedLabel from './ConfirmedLabel';

const meta = {
  title: 'Components/ConfirmedLabel',
  component: ConfirmedLabel,
  parameters: {
    componentSubtitle: '스터디 개설확정 상태를 표시하는 컴포넌트',
  },
} satisfies Meta<typeof ConfirmedLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    visible: true,
  },
};

export const Hidden: Story = {
  args: {
    visible: false,
  },
};
