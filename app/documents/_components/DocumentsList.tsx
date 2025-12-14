import React from 'react';
import { TargetAudienceEnum } from '@/lib/models';
import DocumentsItem from './DocumentsItem';

interface FileInfo {
  name: string,
  mime_type: string,
  url: string,
  size: number
}

interface DocumentItemProps {
  id: number,
  title: string,
  target: TargetAudienceEnum,
  file: FileInfo,
  created_at: Date,
  updated_at: Date,
}

interface DocumentsListProps {
  items: Array<DocumentItemProps>
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
