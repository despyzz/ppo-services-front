'use client';

import React, { useEffect, useState } from 'react';
import { getStudentCategories } from '@/lib/api';
import type { DictionaryCategory } from '@/lib/models';
import PageContent from '../_components/PageContent';

export default function StudentPage() {
  const [categories, setCategories] = useState<DictionaryCategory[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getStudentCategories();
      setCategories(response);
    };

    fetchData();
  }, []);

  return (
    <PageContent items={categories} />
  );
}
