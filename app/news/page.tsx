'use client';

import {
  PPOListWrapper,
  PPOPageContentWrapper,
  PPOSectionWrapper,
} from '@/components';
import Image from 'next/image';
import React from 'react';
import NewsList from '@/app/news/_components/NewsList';

export default function News() {
  return (
    <div className="flex flex-col items-center">
      {/* Изображение */}
      <div className="relative h-[206px] w-full lg:h-[342px]">
        <Image src="/images/pages/news/news_image.jpg" fill alt="News image." className="object-cover" />
        <div className="absolute inset-0 flex justify-center">
          <div className="flex w-full max-w-screen-xl items-center px-5">
            <p className="text-[30px] font-bold text-white lg:text-[64px]">
              То, что нельзя пропустить
            </p>
          </div>
        </div>
      </div>
      <PPOPageContentWrapper>
        <PPOSectionWrapper>
          <PPOListWrapper>
            <NewsList />
          </PPOListWrapper>
        </PPOSectionWrapper>
      </PPOPageContentWrapper>
    </div>
  );
}
