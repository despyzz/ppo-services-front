'use client';

import React from 'react';
import type { DocumentItem as DocumentItemDto } from '@/lib/models';
import DocumentsItem from './DocumentsItem';

interface DocumentsListProps {
  items: DocumentItemDto[]
}

export default function DocumentsList({ items }: DocumentsListProps) {
  if (!items || items.length === 0) {
    return 'Пока что не было загружено ни одного документа';
  }

  return (
    <div className="flex flex-wrap gap-4 p-[clamp(10px,_2vw,_22px)]">
      {items.map((documentItem) => (
        <DocumentsItem key={documentItem.id} {...documentItem} />
      ))}
    </div>
  );
}
