import React, { cache } from 'react';
import { About } from '@/app/_blocks/about/About';
import Switcher from '@/app/_blocks/switcher/Switcher';
import NewsList from '@/app/_blocks/news/NewsList';
import { Partners } from './_blocks';

// Типы данных
interface AboutData {
  success: boolean;
  stats: {
    projectsCount: number;
    paymentsCount: number;
    choiceCount: number;
  };
}

export interface NewsItem {
  id: number;
  title: string;
  description: string;
  date: string;
  image_src: string;
  created_at: Date;
  updated_at: Date;
}

export interface NewsResponse {
  success: boolean;
  news: NewsItem[];
  limit: number;
}

// Кэшируем запрос на уровне React
const getStats = cache(async (): Promise<AboutData> => {
  try {
    const response = await fetch('http://localhost:3000/main-page-stats', {
      next: { revalidate: 3600 }, // 1 час
    });

    if (!response.ok) {
      throw new Error('Failed to fetch stats');
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching stats:', error);
    // Возвращаем данные по умолчанию при ошибке
    return {
      success: false,
      stats: {
        projectsCount: 50,
        paymentsCount: 300,
        choiceCount: 9216,
      },
    };
  }
});

// Кэшируем запрос для новостей
const getLatestNews = cache(async (): Promise<NewsResponse> => {
  try {
    const response = await fetch('http://localhost:3000/news/latest?limit=2', {
      next: { revalidate: 3600 }, // 1 час
    });

    if (!response.ok) throw new Error('Failed to fetch news');
    return await response.json();
  } catch (error) {
    console.error('Error fetching news:', error);
    return {
      success: false,
      news: [],
      limit: 2,
    };
  }
});

export default async function AboutPage() {
  const [aboutData, newsData] = await Promise.all([getStats(), getLatestNews()]);

  return (
    <div>
      <Switcher />
      <div className="flex flex-col gap-[30px] py-[30px] lg:gap-[50px] lg:py-[50px]">
        <About stats={aboutData.stats} />
        <NewsList items={newsData.news} />
        <Partners />
      </div>
    </div>
  );
}
