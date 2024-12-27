import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { refreshAccessToken } from '@/features/auth/api/auth';
const AUTH_REQUIRED_PATHS = ['/wish', '/profile', '/bookclub/create', '/chat'];

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const accessToken = request.cookies.get('auth_token');
  const refreshToken = request.cookies.get('refresh_token');

  if (AUTH_REQUIRED_PATHS.includes(pathname)) {
    if (!accessToken) {
      if (refreshToken) {
        try {
          const data = await refreshAccessToken(refreshToken.value);
          const nextResponse = NextResponse.next();
          nextResponse.cookies.set('auth_token', data.accessToken, {
            maxAge: 60 * 15,
          });
          return nextResponse;
        } catch (error) {
          console.error('토큰 갱신 실패:', error);
        }
      }

      const loginUrl = new URL('/login', request.url);
      loginUrl.searchParams.set('returnUrl', pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  if (pathname === '/login' && accessToken) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/wish', '/profile', '/login', '/bookclub/create', '/chat'],
};
