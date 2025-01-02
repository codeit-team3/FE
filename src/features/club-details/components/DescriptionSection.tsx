import { BookClub } from '@/types/bookclubs';

function DescriptionSection({ clubInfo }: { clubInfo: BookClub }) {
  return (
    <section>
      <h2 className="mb-[10px] text-[20px] font-semibold text-gray-black">
        모임 상세 설명
      </h2>
      <div className="rounded-xl border-2 border-gray-normal-01 px-12 py-6">
        <p className="text-[16px] font-medium leading-6 text-gray-darker">
          {clubInfo.description}
        </p>
      </div>
    </section>
  );
}
export default DescriptionSection;
