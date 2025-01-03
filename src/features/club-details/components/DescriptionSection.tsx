import { formatDateForUI } from '@/lib/utils/formatDateForUI';
import { BookClub } from '@/types/bookclubs';
import { LocationIcon } from '../../../../public/icons';

function DescriptionSection({ clubInfo }: { clubInfo: BookClub }) {
  return (
    <section>
      <h2 className="mb-[10px] text-[20px] font-semibold text-gray-black">
        모임 상세 설명
      </h2>
      <div className="rounded-xl border-2 border-gray-normal-01 px-12 py-6 text-gray-dark-03">
        <p className="flex text-[16px] font-medium leading-6">
          <LocationIcon isPast={true} />
          {clubInfo.address}
        </p>
        <p className="pb-[10px] pt-[6px] text-[14px] leading-5">
          <span className="font-bold">마감 날짜 </span>
          {formatDateForUI(clubInfo.endDate, 'KOREAN')}
        </p>
        <p className="text-[16px] font-medium leading-6">
          {clubInfo.description}
        </p>
      </div>
    </section>
  );
}
export default DescriptionSection;
