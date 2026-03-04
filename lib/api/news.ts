import { apiFetch } from './httpClient';
import type { NewsItem, NewsListResponse } from '../models';

export async function getNews(): Promise<NewsItem[]> {
  try {
    const data = await apiFetch<NewsListResponse>('/news');

    if (!data.success) {
      throw new Error('Не удалось получить новости');
    }

    return data.news;
  } catch (error) {
    return [];
  }
}
