import type { Meta, StoryObj } from '@storybook/react';
import BorderedBox from './BorderedBox';

const meta = {
  title: 'Components/BorderedBox',
  component: BorderedBox,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof BorderedBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <div className="p-4">
        <h3>기본 테두리 색상 (gray-200)</h3>
      </div>
    ),
  },
};

export const OrangeBorder: Story = {
  args: {
    borderColor: 'orange',
    children: (
      <div className="p-4">
        <h3>주황색 테두리</h3>
      </div>
    ),
  },
};
