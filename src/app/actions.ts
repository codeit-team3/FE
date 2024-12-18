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
    const { accessToken, refreshToken } = json;

    const cookieStore = await cookies();
    cookieStore.set('auth_token', accessToken);
    cookieStore.set('refresh_token', refreshToken);
    return json;
  } catch (error) {
    console.error(error);
    return null;
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
