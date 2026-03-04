import { apiFetch } from './httpClient';
import type { MainPageStatsResponse, LatestNewsResponse } from '../models';

export async function getMainPageStats(): Promise<MainPageStatsResponse> {
  try {
    return await apiFetch<MainPageStatsResponse>('/main-page-stats');
  } catch (error) {
    return {
      success: false,
      stats: {
        projectsCount: 50,
        paymentsCount: 300,
        choiceCount: 9216,
      },
    };
  }
}

export async function getLatestNews(limit = 2): Promise<LatestNewsResponse> {
  try {
    return await apiFetch<LatestNewsResponse>(`/news/latest?limit=${limit}`);
  } catch (error) {
    return {
      success: false,
      news: [],
      limit,
    };
  }
}
