export const AVATAR_SIZE = {
  sm: 'h-[29px] w-[29px]',
  md: 'h-[38px] w-[38px]',
  lg: 'h-[56px] w-[56px]',
  xl: 'h-[74px] w-[71px]',
  max: 'h-[74px] w-[74px]',
} as const;

export type AvatarSize = keyof typeof AVATAR_SIZE;
