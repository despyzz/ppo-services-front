'use client';

import React, { useEffect, useState } from 'react';
import { getNews } from '@/lib/api';
import { NewsItem as NewsItemDto } from '@/lib/models';
import NewsItem from './NewsItem';

export default function NewsList() {
  const [news, setNews] = useState<NewsItemDto[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getNews();
      setNews(response);
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col gap-4 lg:gap-6">
      {news.map((newsItem) => (
        <NewsItem key={newsItem.id} {...newsItem} />
      ))}
    </div>
  );
}
