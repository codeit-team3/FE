export const formatDateForUI = (
  isoString: string,
  outputFormat: 'KOREAN' | 'DATE_ONLY',
): string => {
  const date = new Date(isoString);

  const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];
  const dayOfWeek = daysOfWeek[date.getDay()];

  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');

  let hour = date.getHours();
  const minute = date.getMinutes().toString().padStart(2, '0');
  const meridiem = hour < 12 ? '오전' : '오후';
  hour = hour % 12 || 12;

  switch (outputFormat) {
    case 'KOREAN':
      return `${month}/${day}(${dayOfWeek}) ${meridiem} ${hour}:${minute}`;
    case 'DATE_ONLY':
      return `${year}.${month}.${day}`;
  }
};
