import { PPOPageContentWrapper, PPOSectionWrapper } from '@/components';
import React from 'react';
import { getEmployeeDocuments } from '@/lib/api';
import type { DocumentItem } from '@/lib/models';
import DocumentsList from '../_components/DocumentsList';

export default async function EmployeePage() {
  const documents: DocumentItem[] = await getEmployeeDocuments();

  return (
    <PPOPageContentWrapper>
      <PPOSectionWrapper>
        <DocumentsList items={documents} />
      </PPOSectionWrapper>
    </PPOPageContentWrapper>
  );
}
