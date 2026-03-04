import { apiFetch } from './httpClient';
import type { ProjectsResponse, ProjectItem } from '../models';
import { TargetAudienceEnum } from '../models';

async function getProjectsByTarget(target: TargetAudienceEnum): Promise<ProjectItem[]> {
  try {
    const data = await apiFetch<ProjectsResponse>(`/projects?target=${target}`);

    if (!data.success) {
      throw new Error('Не удалось получить проекты');
    }

    return data.projects;
  } catch (error) {
    return [];
  }
}

export function getStudentProjects(): Promise<ProjectItem[]> {
  return getProjectsByTarget(TargetAudienceEnum.Student);
}

export function getEmployeeProjects(): Promise<ProjectItem[]> {
  return getProjectsByTarget(TargetAudienceEnum.Employee);
}
