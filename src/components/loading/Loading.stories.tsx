import type { Meta, StoryObj } from '@storybook/react';
import Loading from './Loading';

const meta = {
  title: 'Components/Loading',
  component: Loading,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Loading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithoutFullHeight: Story = {
  args: {
    fullHeight: false,
  },
};

export const CustomSize: Story = {
  args: {
    className: 'w-12 h-12',
  },
};

export const FullHeightContainer: Story = {
  render: () => (
    <div className="h-[400px] border border-gray-200">
      <Loading />
    </div>
  ),
};

export const WithoutFullHeightContainer: Story = {
  render: () => (
    <div className="h-[400px] border border-gray-200">
      <Loading fullHeight={false} />
    </div>
  ),
};

export const WithTopPadding: Story = {
  render: () => (
    <div className="h-[400px] border border-gray-200">
      <Loading fullHeight={false} className="mt-8" />
    </div>
  ),
};
