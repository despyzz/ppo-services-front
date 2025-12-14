import React from 'react';
import { TargetAudienceEnum } from '@/lib/models';
import ProjectsItem from './ProjectsItem';

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

interface ProjectsListProps {
  items: Array<Project>
}

export default async function ProjectsList({ items }: ProjectsListProps) {
  if (!items || items.length === 0) {
    return 'Пока что не было загружено ни одного проекта';
  }

  return (
    <div className="flex flex-col gap-4 lg:gap-6">
      {items.map((project) => (
        <ProjectsItem key={project.id} {...project} />
      ))}
    </div>
  );
}
