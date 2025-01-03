export const findRecentMessage = (
  recentMessages: Array<{
    bookClubId: number;
    content: string;
    date: string;
  }>,
  chatId: number,
) => {
  return recentMessages.find((msg) => msg.bookClubId === chatId);
};
