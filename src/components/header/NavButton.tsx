import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavButtonProps {
  href: string;
  children: React.ReactNode;
}

function NavButton({ href, children }: NavButtonProps) {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={`hover:scale-105 md:text-base ${
        pathname === href ? 'font-bold text-black' : ''
      }`}
    >
      {children}
    </Link>
  );
}

export default NavButton;
