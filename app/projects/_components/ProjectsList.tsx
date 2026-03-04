import React from 'react';
import type { ProjectItem as ProjectItemDto } from '@/lib/models';
import ProjectsItem from './ProjectsItem';

interface ProjectsListProps {
  items: ProjectItemDto[]
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
