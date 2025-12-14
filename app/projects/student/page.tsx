import {
  PPOPageContentWrapper, PPOSectionWrapper,
} from '@/components';
import React, { cache } from 'react';
import { TargetAudienceEnum } from '@/lib/models';
import ProjectsList from '@/app/projects/_components/ProjectsList';

// Типы для данных
interface Project {
  id: number;
  title: string;
  description: string;
  image_src: string;
  target: TargetAudienceEnum;
  created_at: string;
  updated_at: string;
}

interface ApiResponse {
  success: boolean;
  projects: Project[];
  filters: {
    target: string | null;
  };
}

// Функция для получения проектов с кэшированием
const getStudentProjects = cache(async (): Promise<Project[]> => {
  try {
    const response = await fetch(`http://localhost:3000/projects?target=${TargetAudienceEnum.Student}`, {
      // next: { revalidate: 3600 }, // 1 час
    });

    if (!response.ok) {
      throw new Error(`Ошибка HTTP: ${response.status}`);
    }

    const data: ApiResponse = await response.json();

    if (!data.success) {
      throw new Error('Не удалось получить проекты');
    }

    return data.projects;
  } catch (error) {
    console.error('Ошибка при загрузке проектов:', error);
    return [];
  }
});

export default async function StudentPage() {
  const projects = await getStudentProjects();

  return (
    <PPOPageContentWrapper>
      <PPOSectionWrapper>
        <ProjectsList items={projects} />
      </PPOSectionWrapper>
    </PPOPageContentWrapper>
  );
}
