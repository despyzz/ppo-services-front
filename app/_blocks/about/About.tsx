'use client';

import React from 'react';
import { MobileVersion } from './MobileVersion';
import { DesktopVersion } from './DesktopVersion';

interface Stats {
  projectsCount: number;
  paymentsCount: number;
  choiceCount: number;
}

interface AboutProps {
  stats: Stats;
}

export function About({ stats }: AboutProps) {
  return (
    <div className="flex justify-center">
      <MobileVersion stats={stats} />
      <DesktopVersion stats={stats} />
    </div>
  );
}
