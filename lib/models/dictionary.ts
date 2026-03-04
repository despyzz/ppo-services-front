import { TargetAudienceEnum } from './targetAudienceEnum';

export interface DictionaryEntry {
  id: number;
  title: string;
  description: string;
}

export interface DictionaryCategory {
  id: number;
  title: string;
  target: TargetAudienceEnum;
  entries: DictionaryEntry[];
  created_at: string;
  updated_at: string;
}

export interface DictionaryCategoriesResponse {
  success: boolean;
  categories: DictionaryCategory[];
  filters: {
    target: string | null;
  };
}
