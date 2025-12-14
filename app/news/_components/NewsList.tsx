import React, { cache } from 'react';
import NewsItem from './NewsItem';

// Типы для данных
interface NewsItemType {
  id: number;
  title: string;
  description: string;
  date: string;
  image_src: string;
  created_at: string;
  updated_at: string;
}

interface ApiResponse {
  success: boolean;
  news: NewsItemType[];
}

// Функция для получения новостей с кэшированием
const getNews = cache(async (): Promise<NewsItemType[]> => {
  try {
    const response = await fetch('http://localhost:3000/news', {
      next: { revalidate: 3600 }, // 1 час
    });

    if (!response.ok) {
      throw new Error(`Ошибка HTTP: ${response.status}`);
    }

    const data: ApiResponse = await response.json();

    if (!data.success) {
      throw new Error('Не удалось получить новости');
    }

    return data.news;
  } catch (error) {
    console.error('Ошибка при загрузке новостей:', error);
    return [];
  }
});

export default async function NewsList() {
  const news = await getNews();

  return (
    <div className="flex flex-col gap-4 lg:gap-6">
      {news.map((newsItem) => (
        <NewsItem key={newsItem.id} {...newsItem} />
      ))}
    </div>
  );
}
