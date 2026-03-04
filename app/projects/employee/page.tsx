import { PPOPageContentWrapper, PPOSectionWrapper } from '@/components';
import React from 'react';
import { getEmployeeProjects } from '@/lib/api';
import type { ProjectItem } from '@/lib/models';
import ProjectsList from '../_components/ProjectsList';

export default async function EmployeePage() {
  const projects: ProjectItem[] = await getEmployeeProjects();

  return (
    <PPOPageContentWrapper>
      <PPOSectionWrapper>
        <ProjectsList items={projects} />
      </PPOSectionWrapper>
    </PPOPageContentWrapper>
  );
}
