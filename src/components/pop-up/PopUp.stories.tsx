import type { Meta, StoryObj } from '@storybook/react';
import PopUp from './PopUp';

const meta: Meta<typeof PopUp> = {
  title: 'components/PopUp',
  component: PopUp,
  parameters: {
    layout: 'centerd',
  },
};

type Story = StoryObj<typeof PopUp>;
export const Primary: Story = {
  args: {
    // 팝업 props
  },
};

export default meta;
