import type { Meta, StoryObj } from '@storybook/react';
import ProgressBar from './ProgressBar';

const meta = {
  title: 'Components/ProgressBar',
  component: ProgressBar,
  parameters: {
    componentSubtitle: '진행률을 시각적으로 표시하는 프로그레스바 컴포넌트',
  },
} satisfies Meta<typeof ProgressBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    current: 5,
    max: 20,
  },
};

export const CustomSize: Story = {
  args: {
    current: 10,
    max: 20,
    height: 8,
    borderRadius: 8,
  },
};

export const Full: Story = {
  args: {
    current: 20,
    max: 20,
  },
  parameters: {
    docs: {
      description: {
        story: '정원이 다 찼을 때는 프로그레스바 색상이 변경됩니다.',
      },
    },
  },
};

export const WithContainer: Story = {
  args: {
    current: 15,
    max: 20,
  },
  render: (args) => (
    <div className="w-64">
      <ProgressBar {...args} />
    </div>
  ),
};
