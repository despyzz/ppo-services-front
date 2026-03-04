import React from 'react';
import { getStudentCategories } from '@/lib/api';
import type { DictionaryCategory } from '@/lib/models';
import PageContent from '../_components/PageContent';

export default async function StudentPage() {
  const categories: DictionaryCategory[] = await getStudentCategories();

  return (
    <PageContent items={categories} />
  );
}
