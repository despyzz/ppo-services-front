'use client';

import {
  PPOAccordion, PPOAccordionDetails,
  PPOAccordionSummary,
  PPOListTitle,
  PPOListWrapper,
  PPOPageContentWrapper,
  PPOSectionWrapper,
} from '@/components';
import React from 'react';
import { CustomMarkdown } from '@/components/CustomMarkdown';
import type { DictionaryCategory } from '@/lib/models';

interface PageContentProps {
  items: DictionaryCategory[];
}

export default function PageContent({ items }: PageContentProps) {
  if (items.length === 0) {
    return (
      <PPOPageContentWrapper>
        <PPOSectionWrapper>
          Справочники не найдены
        </PPOSectionWrapper>
      </PPOPageContentWrapper>
    );
  }

  return (
    <div className="flex w-full max-w-screen-xl flex-col gap-[8px] px-5 py-[20px] lg:py-[50px]">
      {items.map((category) => (
        <PPOSectionWrapper key={category.id}>
          <PPOListTitle>
            {category.title}
          </PPOListTitle>

          {category.entries.map((entry) => (
            <PPOListWrapper key={entry.id}>
              <PPOAccordion>
                <PPOAccordionSummary>
                  <p>
                    {entry.title}
                  </p>
                </PPOAccordionSummary>
                <PPOAccordionDetails>
                  <CustomMarkdown>
                    {entry.description}
                  </CustomMarkdown>
                </PPOAccordionDetails>
              </PPOAccordion>
            </PPOListWrapper>
          ))}
        </PPOSectionWrapper>
      ))}
    </div>
  );
}
