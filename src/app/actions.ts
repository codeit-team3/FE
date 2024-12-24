'use server';

import { LoginFormData } from '@/features/auth/types/loginFormSchema';
import { cookies } from 'next/headers';

export async function loginServer(data: LoginFormData) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/auths/signin`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      },
    );
    const json = await response.json();

    if (response.ok && json.accessToken && json.refreshToken) {
      const cookieStore = await cookies();
      cookieStore.set('auth_token', json.accessToken, {
        maxAge: 60 * 15,
      });
      cookieStore.set('refresh_token', json.refreshToken, {
        maxAge: 60 * 60 * 24 * 14,
      });
      return json;
    }

    return { error: json.message || '로그인에 실패했습니다.' };
  } catch (error) {
    console.error(error);
    return { error: '로그인 처리 중 오류가 발생했습니다.' };
  }
}

export async function logoutServer(
  accessToken: string | null,
  refreshToken: string | null,
) {
  const cookieStore = await cookies();
  cookieStore.delete('auth_token');
  cookieStore.delete('refresh_token');
  try {
    if (accessToken && refreshToken) {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/auths/signout`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ accessToken, refreshToken }),
        },
      );
      const json = await response.json();
      return json;
    } else {
      return { success: true };
    }
  } catch (error) {
    console.error(error);
    return null;
  }
}
