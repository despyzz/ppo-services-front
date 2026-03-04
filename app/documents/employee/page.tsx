'use client';

import { PPOPageContentWrapper, PPOSectionWrapper } from '@/components';
import React, { useEffect, useState } from 'react';
import { getEmployeeDocuments } from '@/lib/api';
import type { DocumentItem } from '@/lib/models';
import DocumentsList from '../_components/DocumentsList';

export default function EmployeePage() {
  const [documents, setDocuments] = useState<DocumentItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getEmployeeDocuments();
      setDocuments(response);
    };

    fetchData();
  }, []);

  return (
    <PPOPageContentWrapper>
      <PPOSectionWrapper>
        <DocumentsList items={documents} />
      </PPOSectionWrapper>
    </PPOPageContentWrapper>
  );
}
