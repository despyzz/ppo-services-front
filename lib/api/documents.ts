import { apiFetch } from './httpClient';
import type { DocumentsResponse, DocumentItem } from '../models';
import { TargetAudienceEnum } from '../models';

async function getDocumentsByTarget(target: TargetAudienceEnum): Promise<DocumentItem[]> {
  try {
    const data = await apiFetch<DocumentsResponse>(`/documents/?target=${target}`);

    if (!data.success) {
      throw new Error('Не удалось получить документы');
    }

    return data.documents;
  } catch (error) {
    return [];
  }
}

export function getStudentDocuments(): Promise<DocumentItem[]> {
  return getDocumentsByTarget(TargetAudienceEnum.Student);
}

export function getEmployeeDocuments(): Promise<DocumentItem[]> {
  return getDocumentsByTarget(TargetAudienceEnum.Employee);
}
