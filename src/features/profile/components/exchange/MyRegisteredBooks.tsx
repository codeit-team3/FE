import { NO_LIST_MESSAGE } from '../../constants/meassage';

export default function MyRegisteredBooks() {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-y-[26px]">
      <div className="flex h-full pt-[255px] text-center text-gray-normal-03">
        <span className="whitespace-pre-wrap">
          {NO_LIST_MESSAGE['REGISTED']}
        </span>
      </div>
    </div>
  );
}
