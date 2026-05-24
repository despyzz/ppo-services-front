import Link from 'next/link';
import React from 'react';

export interface NavigationItemProps {
  route: string;
  label: string;
}

export function Item(props: NavigationItemProps) {
  const { label, route } = props;

  return (
    <li className="px-2 lg:px-2.5 xl:px-3">
      <Link href={route}>
        {label}
      </Link>
    </li>
  );
}
