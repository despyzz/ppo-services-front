'use client';

import React from 'react';
import { PPOPageContentWrapper } from '@/components';
import { UnionCardForm } from './_components/UnionCardForm';

export default function ServicesPage() {
  return (
    <PPOPageContentWrapper>
      <div className="flex w-full justify-center py-4 lg:py-8">
        <UnionCardForm />
      </div>
    </PPOPageContentWrapper>
  );
}
