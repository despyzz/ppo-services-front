'use client';

import React, { useEffect, useState } from 'react';
import { getEmployeeCategories } from '@/lib/api';
import type { DictionaryCategory } from '@/lib/models';
import PageContent from '../_components/PageContent';

export default function EmployeePage() {
  const [categories, setCategories] = useState<DictionaryCategory[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getEmployeeCategories();
      setCategories(response);
    };

    fetchData();
  }, []);

  return (
    <PageContent items={categories} />
  );
}
