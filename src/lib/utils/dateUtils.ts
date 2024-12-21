export const toKoreanTime = (date: Date): string => {
  const kstDate = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
  return kstDate.toISOString().slice(0, 19);
};

export function formatDateWithTime(inputDateString: string) {
  const isUTC = /Z|[+-]\d{2}:\d{2}$/.test(inputDateString);
  const week = ['일', '월', '화', '수', '목', '금', '토'];

  const inputDate = new Date(inputDateString);
  const kstDate = isUTC
    ? new Date(inputDate.getTime() - inputDate.getTimezoneOffset() * 60000)
    : inputDate;

  const year = kstDate.getFullYear();
  const month = String(kstDate.getMonth() + 1).padStart(2, '0');
  const day = String(kstDate.getDate()).padStart(2, '0');
  const dayOfWeek = String(week[kstDate.getDay()]);
  const hours = String(kstDate.getHours()).padStart(2, '0');
  const minutes = String(kstDate.getMinutes()).padStart(2, '0');
  const formattedDate = `${year}/${month}/${day}(${dayOfWeek}) ${hours}:${minutes}`;
  return formattedDate;
}

export function formatDateSimple(inputDateString: string) {
  const isUTC = /Z|[+-]\d{2}:\d{2}$/.test(inputDateString);

  const inputDate = new Date(inputDateString);
  const kstDate = isUTC
    ? new Date(inputDate.getTime() - inputDate.getTimezoneOffset() * 60000)
    : inputDate;

  const year = kstDate.getFullYear();
  const month = String(kstDate.getMonth() + 1).padStart(2, '0');
  const day = String(kstDate.getDate()).padStart(2, '0');

  return `${year}.${month}.${day}`;
}
