import { cookies } from 'next/headers';

export async function getServerSideToken() {
  try {
    const cookieStore = cookies();
    return (await cookieStore).get('auth_token')?.value;
  } catch {
    return null;
  }
}
