import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const AUTH_REQUIRED_PATHS = ['/wish', '/profile', '/bookclub/create'];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get('auth_token');

  if (AUTH_REQUIRED_PATHS.includes(pathname)) {
    if (!token) {
      const loginUrl = new URL('/login', request.url);

      loginUrl.searchParams.set('returnUrl', pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  if (pathname === '/login' && token) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/wish', '/profile', '/login', '/bookclub/create'],
};
