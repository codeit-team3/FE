import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavButtonProps {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
}

function NavButton({ href, children, isActive }: NavButtonProps) {
  const pathname = usePathname();

  const active = isActive ?? pathname === href;

  return (
    <Link
      href={href}
      className={`hover:scale-105 ${active ? 'font-bold' : 'text-green-light-01'}`}
    >
      {children}
    </Link>
  );
}

export default NavButton;
