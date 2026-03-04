import React from 'react';
import { About } from '@/app/_blocks/about/About';
import Switcher from '@/app/_blocks/switcher/Switcher';
import NewsList from '@/app/_blocks/news/NewsList';
import { getLatestNews, getMainPageStats } from '@/lib/api';
import { Partners } from './_blocks';

export default async function AboutPage() {
  const [aboutData, newsData] = await Promise.all([
    getMainPageStats(),
    getLatestNews(2),
  ]);

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
