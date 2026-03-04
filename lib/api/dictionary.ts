import { apiFetch } from './httpClient';
import type { DictionaryCategoriesResponse, DictionaryCategory } from '../models';
import { TargetAudienceEnum } from '../models';

async function getCategoriesByTarget(target: TargetAudienceEnum): Promise<DictionaryCategory[]> {
  try {
    const data = await apiFetch<DictionaryCategoriesResponse>(`/categories?target=${target}`);

    if (!data.success) {
      throw new Error('Не удалось получить категории');
    }

    return data.categories;
  } catch (error) {
    return [];
  }
}

export function getStudentCategories(): Promise<DictionaryCategory[]> {
  return getCategoriesByTarget(TargetAudienceEnum.Student);
}

export function getEmployeeCategories(): Promise<DictionaryCategory[]> {
  return getCategoriesByTarget(TargetAudienceEnum.Employee);
}
