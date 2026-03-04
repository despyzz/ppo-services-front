import {
  PPOPageContentWrapper, PPOSectionWrapper,
} from '@/components';
import React from 'react';
import { getStudentProjects } from '@/lib/api';
import type { ProjectItem } from '@/lib/models';
import ProjectsList from '@/app/projects/_components/ProjectsList';

export default async function StudentPage() {
  const projects: ProjectItem[] = await getStudentProjects();

  return (
    <PPOPageContentWrapper>
      <PPOSectionWrapper>
        <ProjectsList items={projects} />
      </PPOSectionWrapper>
    </PPOPageContentWrapper>
  );
}
