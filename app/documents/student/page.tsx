import { PPOPageContentWrapper, PPOSectionWrapper } from '@/components';
import React, { cache } from 'react';
import { TargetAudienceEnum } from '@/lib/models';
import DocumentsList from '../_components/DocumentsList';

interface FileInfo {
  name: string;
  mime_type: string;
  url: string;
  size: number;
}

interface Document {
  id: number;
  title: string;
  target: TargetAudienceEnum;
  file: FileInfo;
  created_at: Date;
  updated_at: Date;
}

interface ApiResponse {
  success: boolean;
  documents: Document[];
  filters: {
    target: string | null;
  };
}

// Функция для получения документов с кэшированием
const getStudentDocuments = cache(async (): Promise<Document[]> => {
  try {
    const response = await fetch(`http://localhost:3000/documents?target=${TargetAudienceEnum.Student}`, {
      next: { revalidate: 3600 }, // 1 час
    });

    if (!response.ok) throw new Error('Failed to fetch student documents');

    const data: ApiResponse = await response.json();

    if (!data.success) {
      throw new Error('Не удалось получить документы');
    }

    return data.documents;
  } catch (error) {
    console.error('Ошибка при загрузке документов:', error);
    return [];
  }
});

export default async function StudentPage() {
  const documents = await getStudentDocuments();

  return (
    <PPOPageContentWrapper>
      <PPOSectionWrapper>
        <DocumentsList items={documents} />
      </PPOSectionWrapper>
    </PPOPageContentWrapper>
  );
}
