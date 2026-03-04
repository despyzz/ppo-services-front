'use client';

import { PPOPageContentWrapper, PPOSectionWrapper } from '@/components';
import React, { useEffect, useState } from 'react';
import { getEmployeeProjects } from '@/lib/api';
import type { ProjectItem } from '@/lib/models';
import ProjectsList from '../_components/ProjectsList';

export default function EmployeePage() {
  const [projects, setProjects] = useState<ProjectItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getEmployeeProjects();
      setProjects(response);
    };

    fetchData();
  }, []);

  return (
    <PPOPageContentWrapper>
      <PPOSectionWrapper>
        <ProjectsList items={projects} />
      </PPOSectionWrapper>
    </PPOPageContentWrapper>
  );
}
