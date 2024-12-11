import type { Meta, StoryObj } from '@storybook/react';
import PopUp from './PopUp';

const POPUP_LABEL = {
  large: `정말 나가시겠어요?\n작성된 내용이 모두 삭제됩니다.`,
  small: `가입이 완료되었습니다!`,
};

const meta: Meta<typeof PopUp> = {
  title: 'components/PopUp',
  component: PopUp,
  parameters: {
    layout: 'centerd',
  },
};

type Story = StoryObj<typeof PopUp>;
export const LargeOneButton: Story = {
  args: {
    isOpen: true,
    isLarge: true,
    label: POPUP_LABEL.large,
    handlePopUpClose: (e) => alert(e),
    handlePopUpConfirm: (e) => alert(e),
  },
};

export const LargeTwoButton: Story = {
  args: {
    isOpen: true,
    isLarge: true,
    isTwoButton: true,
    label: POPUP_LABEL.large,
    handlePopUpClose: (e) => alert(e),
    handlePopUpConfirm: (e) => alert(e),
  },
};

export const SmallOneButton: Story = {
  args: {
    isOpen: true,
    label: POPUP_LABEL.small,
    handlePopUpClose: (e) => alert(e),
    handlePopUpConfirm: (e) => alert(e),
  },
};

export const SmallTwoButton: Story = {
  args: {
    isOpen: true,
    isTwoButton: true,
    label: POPUP_LABEL.small,
    handlePopUpClose: (e) => alert(e),
    handlePopUpConfirm: (e) => alert(e),
  },
};

export default meta;
