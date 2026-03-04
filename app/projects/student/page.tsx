'use client';

import {
  PPOPageContentWrapper, PPOSectionWrapper,
} from '@/components';
import React, { useEffect, useState } from 'react';
import { getStudentProjects } from '@/lib/api';
import type { ProjectItem } from '@/lib/models';
import ProjectsList from '@/app/projects/_components/ProjectsList';

export default function StudentPage() {
  const [projects, setProjects] = useState<ProjectItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getStudentProjects();
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
