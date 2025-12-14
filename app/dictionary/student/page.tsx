import React, { cache } from 'react';
import { TargetAudienceEnum } from '@/lib/models';
import PageContent from '../_components/PageContent';

// Типы для данных
interface Entry {
  id: number;
  title: string;
  description: string;
}

interface Category {
  id: number;
  title: string;
  target: 'EMPLOYEE' | 'STUDENT';
  entries: Entry[];
  created_at: string;
  updated_at: string;
}

interface ApiResponse {
  success: boolean;
  categories: Category[];
  filters: {
    target: string | null;
  };
}

// Функция для получения категорий с кэшированием
const getStudentCategories = cache(async (): Promise<Category[]> => {
  try {
    const response = await fetch(`http://localhost:3000/categories?target=${TargetAudienceEnum.Student}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'force-cache',
    });

    if (!response.ok) {
      throw new Error(`Ошибка HTTP: ${response.status}`);
    }

    const data: ApiResponse = await response.json();

    if (!data.success) {
      throw new Error('Не удалось получить категории');
    }

    return data.categories;
  } catch (error) {
    console.error('Ошибка при загрузке категорий:', error);
    return [];
  }
});

export default async function StudentPage() {
  const categories = await getStudentCategories();

  return (
    <PageContent items={categories} />
  );
}
