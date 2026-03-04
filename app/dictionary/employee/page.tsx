import React from 'react';
import { getEmployeeCategories } from '@/lib/api';
import type { DictionaryCategory } from '@/lib/models';
import PageContent from '../_components/PageContent';

export default async function EmployeePage() {
  const categories: DictionaryCategory[] = await getEmployeeCategories();

  return (
    <PageContent items={categories} />
  );
}
