export interface NewsItem {
  id: number;
  title: string;
  description: string;
  date: string;
  image_src: string;
  created_at: string;
  updated_at: string;
}

export interface NewsListResponse {
  success: boolean;
  news: NewsItem[];
}

export interface LatestNewsResponse {
  success: boolean;
  news: NewsItem[];
  limit: number;
}
