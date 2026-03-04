'use client';

import React from 'react';
import type { NewsItem as NewsItemDto } from '@/lib/models';
import NewsItem from './NewsItem';

interface NewsListProps {
  items?: NewsItemDto[]
}

export default function NewsList({ items }: NewsListProps) {
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="text-center text-[24px] font-bold lg:text-[50px]">
        Последние новости
      </div>
      <div className="flex flex-wrap justify-center gap-4 px-[clamp(10px,_2vw,_22px)]">
        {items.map((newsItem) => (
          <NewsItem key={newsItem.id} {...newsItem} />
        ))}
      </div>
    </div>
  );
}
