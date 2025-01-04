export const refreshAccessToken = async (refreshToken: string) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/auths/refresh`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ refreshToken }),
      },
    );

    if (!response.ok) {
      throw new Error('토큰 갱신 실패');
    }

    console.log('리프레시 성공');
    return response.json();
  } catch (error) {
    console.error('토큰 갱신 에러:', error);
    throw error;
  }
};
