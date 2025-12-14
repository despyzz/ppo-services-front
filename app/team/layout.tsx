import React, { ReactNode } from 'react';
import Image from 'next/image';

export default function TeamLayout({ children }: Readonly<{
  children: ReactNode;
}>) {
  return (
    <div>
      <div className="flex flex-col items-center">
        {/* Изображение */}
        <div className="relative h-[206px] w-full lg:h-[342px]">
          <Image src="/images/pages/projects/projects_image.jpg" fill alt="Projects image." className="object-cover" />
          <div className="absolute inset-0 flex justify-center">
            <div className="flex w-full max-w-screen-xl items-center px-5">
              <p className="text-[30px] font-bold text-white lg:text-[64px]">
                Работаем ради вас
              </p>
            </div>
          </div>
        </div>

        {children}
      </div>
    </div>
  );
}
