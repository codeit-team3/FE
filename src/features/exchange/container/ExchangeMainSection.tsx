export default function ExchangeMainSection() {
  const message = '서비스 준비중이예요!\n조금만 기다려주세요 :)';
  return (
    <main className="flex w-full min-w-[336px] flex-1 flex-col items-center gap-y-[26px] bg-gray-light-01 px-[20px] pt-[255px] sm:justify-between md:px-[24px] lg:px-[102px]">
      <span className="whitespace-pre-wrap text-center text-lg font-medium text-gray-dark-02">
        {message}
      </span>
    </main>
  );
}
