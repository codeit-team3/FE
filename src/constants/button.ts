export const SIZE = {
  modal: 'min-w-[120px] h-[44px] px-4 text-base',
  large: 'min-w-[402px] h-[44px] px-4 text-base',
  medium: 'min-w-[332px] h-[44px] px-4 text-base',
  small: 'min-w-[120px] h-[40px] px-3 text-sm',
  custom: '',
} as const;

export const COLOR_SCHEMES = {
  'gray-white': {
    bg: 'bg-gray-white',
    text: 'text-gray-white',
    border: 'border-gray-white',
  },
  'gray-light-01': {
    bg: 'bg-gray-light-01',
    text: 'text-gray-light-01',
    border: 'border-gray-light-01',
  },
  'gray-light-02': {
    bg: 'bg-gray-light-02',
    text: 'text-gray-light-02',
    border: 'border-gray-light-02',
  },
  'gray-normal-01': {
    bg: 'bg-gray-normal-01',
    text: 'text-gray-normal-01',
    border: 'border-gray-normal-01',
  },
  'gray-normal-02': {
    bg: 'bg-gray-normal-02',
    text: 'text-gray-normal-02',
    border: 'border-gray-normal-02',
  },
  'gray-normal-03': {
    bg: 'bg-gray-normal-03',
    text: 'text-gray-normal-03',
    border: 'border-gray-normal-03',
  },
  'gray-dark-01': {
    bg: 'bg-gray-dark-01',
    text: 'text-gray-dark-01',
    border: 'border-gray-dark-01',
  },
  'gray-dark-02': {
    bg: 'bg-gray-dark-02',
    text: 'text-gray-dark-02',
    border: 'border-gray-dark-02',
  },
  'gray-dark-03': {
    bg: 'bg-gray-dark-03',
    text: 'text-gray-dark-03',
    border: 'border-gray-dark-03',
  },
  'gray-darker': {
    bg: 'bg-gray-darker',
    text: 'text-gray-darker',
    border: 'border-gray-darker',
  },
  'gray-black': {
    bg: 'bg-gray-black',
    text: 'text-gray-black',
    border: 'border-gray-black',
  },
  'green-light-01': {
    bg: 'bg-green-light-01',
    text: 'text-green-light-01',
    border: 'border-green-light-01',
  },
  'green-light-02': {
    bg: 'bg-green-light-02',
    text: 'text-green-light-02',
    border: 'border-green-light-02',
  },
  'green-light-03': {
    bg: 'bg-green-light-03',
    text: 'text-green-light-03',
    border: 'border-green-light-03',
  },
  'green-normal-01': {
    bg: 'bg-green-normal-01',
    text: 'text-green-normal-01',
    border: 'border-green-normal-01',
  },
  'green-normal-02': {
    bg: 'bg-green-normal-02',
    text: 'text-green-normal-02',
    border: 'border-green-normal-02',
  },
  'green-normal-03': {
    bg: 'bg-green-normal-03',
    text: 'text-green-normal-03',
    border: 'border-green-normal-03',
  },
  'green-dark-01': {
    bg: 'bg-green-dark-01',
    text: 'text-green-dark-01',
    border: 'border-green-dark-01',
  },
  'green-dark-02': {
    bg: 'bg-green-dark-02',
    text: 'text-green-dark-02',
    border: 'border-green-dark-02',
  },
  'green-dark-03': {
    bg: 'bg-green-dark-03',
    text: 'text-green-dark-03',
    border: 'border-green-dark-03',
  },
  'green-darker': {
    bg: 'bg-green-darker',
    text: 'text-green-darker',
    border: 'border-green-darker',
  },
  'blue-normal-01': {
    bg: 'bg-blue-normal-01',
    text: 'text-blue-normal-01',
    border: 'border-blue-normal-01',
  },
} as const;

export type ButtonSize = keyof typeof SIZE;
export type ButtonColorGroup = keyof typeof COLOR_SCHEMES;
