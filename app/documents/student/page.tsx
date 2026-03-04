import { PPOPageContentWrapper, PPOSectionWrapper } from '@/components';
import React from 'react';
import { getStudentDocuments } from '@/lib/api';
import type { DocumentItem } from '@/lib/models';
import DocumentsList from '../_components/DocumentsList';

export default async function StudentPage() {
  const documents: DocumentItem[] = await getStudentDocuments();

  return (
    <PPOPageContentWrapper>
      <PPOSectionWrapper>
        <DocumentsList items={documents} />
      </PPOSectionWrapper>
    </PPOPageContentWrapper>
  );
}
