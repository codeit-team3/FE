export const toKoreanTime = (date: Date): string => {
  const kstDate = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
  return kstDate.toISOString().slice(0, 19);
};
