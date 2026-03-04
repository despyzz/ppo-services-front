'use client';

import React, { useEffect, useState } from 'react';
import { About } from '@/app/_blocks/about/About';
import Switcher from '@/app/_blocks/switcher/Switcher';
import NewsList from '@/app/_blocks/news/NewsList';
import { getLatestNews, getMainPageStats } from '@/lib/api';
import { LatestNewsResponse, MainPageStatsResponse } from '@/lib/models';
import { Partners } from './_blocks';

export default function AboutPage() {
  const [aboutData, setAboutData] = useState<MainPageStatsResponse>();
  const [newsData, setNewsData] = useState<LatestNewsResponse>();

  useEffect(() => {
    const fetchData = async () => {
      const [about, news] = await Promise.all([
        getMainPageStats(),
        getLatestNews(2),
      ]);

      if (about) {
        setAboutData(about);
      }

      if (news) {
        setNewsData(news);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Switcher />
      <div className="flex flex-col gap-[30px] py-[30px] lg:gap-[50px] lg:py-[50px]">
        <About stats={aboutData?.stats} />
        <NewsList items={newsData?.news} />
        <Partners />
      </div>
    </div>
  );
}
