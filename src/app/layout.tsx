import type { Metadata } from 'next';
import ReactQueryProviders from '@/lib/utils/reactQueryProvider';
import HeaderBar from '@/components/header/HeaderBar';
import Script from 'next/script';
import { MSWComponent } from '@/components/MSWComponent';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="flex h-full min-h-screen flex-col bg-white">
        <Script
          src="//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"
          strategy="beforeInteractive"
        />
        <ReactQueryProviders>
          <HeaderBar />
          <main className="mx-auto flex w-full max-w-[1200px] flex-1 flex-col bg-white">
            <MSWComponent>{children}</MSWComponent>
          </main>
        </ReactQueryProviders>
      </body>
    </html>
  );
}
