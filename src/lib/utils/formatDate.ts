export const formatDate = (dateString: string | number | Date) => {
  const date = new Date(dateString);

  const days = ['일', '월', '화', '수', '목', '금', '토'];
  const dayOfWeek = days[date.getDay()];

  let hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const period = hours < 12 ? '오전' : '오후';

  hours = hours % 12 || 12;

  return `${date.getMonth() + 1}/${date.getDate()}(${dayOfWeek}) ${period} ${hours}:${minutes}`;
};
