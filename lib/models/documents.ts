import { TargetAudienceEnum } from './targetAudienceEnum';

export interface FileInfo {
  name: string;
  mime_type: string;
  url: string;
  size: number;
}

export interface DocumentItem {
  id: number;
  title: string;
  target: TargetAudienceEnum;
  file: FileInfo;
  created_at: string | Date;
  updated_at: string | Date;
}

export interface DocumentsResponse {
  success: boolean;
  documents: DocumentItem[];
  filters: {
    target: string | null;
  };
}
