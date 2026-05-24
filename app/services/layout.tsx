'use client';

import React, { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SERVICE_ROUTES } from '@/constants';

function isCardRoute(pathname: string) {
  return pathname === SERVICE_ROUTES.Card || pathname === '/services';
}

export default function ServicesLayout({ children }: Readonly<{
  children: ReactNode;
}>) {
  const pathname = usePathname();
  const cardActive = isCardRoute(pathname);

  return (
    <div className="flex flex-col items-center">
      <div className="relative h-[206px] w-full lg:h-[342px]">
        <Image
          src="/images/main_page_image.png"
          fill
          alt="Сервисы профкома."
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex justify-center">
          <div className="flex w-full max-w-screen-xl items-center px-5">
            <p className="text-[30px] font-bold text-white lg:text-[64px]">
              Ваши помощники
            </p>
          </div>
        </div>
      </div>

      <div className="flex w-full text-[18px] lg:text-[35px]">
        <Link
          href={SERVICE_ROUTES.Card}
          className={`flex h-[52px] flex-1 items-center justify-center border-2 border-[#F34252] text-center transition-colors lg:h-[106px]
            ${cardActive
            ? 'bg-[#ffffff] text-[#F34252]'
            : 'bg-[#F34252] text-[#ffffff]'}
          `}
        >
          <p>Мой профбилет</p>
        </Link>
        <Link
          href={SERVICE_ROUTES.Calculator}
          className={`flex h-[52px] flex-1 items-center justify-center border-2 border-[#207EEB] text-center transition-colors lg:h-[106px]
            ${!cardActive
            ? 'bg-[#ffffff] text-[#207EEB]'
            : 'bg-[#207EEB] text-[#ffffff]'}
          `}
        >
          <p>Калькулятор выплат</p>
        </Link>
      </div>

      {children}
    </div>
  );
}
