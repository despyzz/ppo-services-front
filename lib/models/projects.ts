import { TargetAudienceEnum } from './targetAudienceEnum';

export interface ProjectItem {
  id: number;
  title: string;
  description: string;
  image_src: string;
  target: TargetAudienceEnum;
  created_at: string;
  updated_at: string;
}

export interface ProjectsResponse {
  success: boolean;
  projects: ProjectItem[];
  filters: {
    target: string | null;
  };
}
