export const SIZE = {
  modal: 'min-w-[120px] h-[44px] px-4 text-base',
  large: 'min-w-[402px] h-[44px] px-4 text-base',
  medium: 'min-w-[332px] h-[44px] px-4 text-base',
  small: 'min-w-[120px] h-[40px] px-3 text-sm',
} as const;

export const BASE_CLASSES = {
  solid: 'text-white',
  outline: 'bg-white border',
  lightSolid: '',
  lightOutline: 'border',
} as const;

export const COLOR_GROUPS = {
  'green-normal-01': {
    bg: 'bg-green-normal-01',
    text: 'text-green-normal-01',
    border: 'border-green-normal-01',
  },
  'green-light-03': {
    bg: 'bg-green-light-03',
    text: 'text-green-normal-01',
    border: 'border-green-normal-01',
  },
  'gray-normal-03': {
    bg: 'bg-gray-normal-03',
    text: 'text-gray-darker',
    border: 'border-gray-darker',
  },
  'gray-darker': {
    bg: 'bg-gray-darker',
    text: 'text-gray-darker',
    border: 'border-gray-darker',
  },
} as const;

export type ButtonSize = keyof typeof SIZE;
export type ButtonFillType = keyof typeof BASE_CLASSES;
export type ButtonColorGroup = keyof typeof COLOR_GROUPS;
