function PopUp() {
  return (
    <div className="flex h-[212px] w-[450px] flex-col items-center justify-between rounded-lg border border-gray-900 bg-white p-[24px]">
      <button className="ml-auto">닫기</button>
      <div className="flex flex-col items-center">가입이 완료되었습니다!</div>
      <div className="flex items-center">
        <button className="mr-[8px] h-[44px] w-[120px] rounded-lg border border-orange-600 bg-white text-orange-600">
          취소
        </button>
        <button className="h-[44px] w-[120px] rounded-lg bg-orange-600 text-white">
          확인
        </button>
      </div>
    </div>
  );
}

export default PopUp;
