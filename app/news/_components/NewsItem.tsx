'use client';

import { PPOAccordion, PPOAccordionDetails, PPOAccordionImageSummary } from '@/components';
import Image from 'next/image';
import React from 'react';
import { CustomMarkdown } from '@/components/CustomMarkdown';
import type { NewsItem as NewsItemDto } from '@/lib/models';

type NewsItemProps = Pick<NewsItemDto, 'title' | 'description' | 'date' | 'image_src'>;

export default function NewsItem({
  title,
  description,
  date,
  image_src,
}: NewsItemProps) {
  const reversedDate = date.split('-').reverse().join('.');

  return (
    <PPOAccordion>
      <PPOAccordionImageSummary>
        <div className="aspect-[352/91] w-full">
          <Image
            src={image_src}
            alt={`${title} newspaper image`}
            fill
            className="object-cover"
          />
        </div>

        <div className="absolute inset-0 grid grid-rows-[auto_1fr_auto] p-4 text-white">
          <div className="text-[clamp(12px,_2.5vw,_40px)] font-normal">
            {reversedDate}
          </div>

          <p className="self-end text-[clamp(14px,_3vw,_40px)] font-normal">
            {title}
          </p>
        </div>
      </PPOAccordionImageSummary>
      <PPOAccordionDetails>
        <div className="mt-5 flex flex-col gap-5">
          <CustomMarkdown>
            {String(description)}
          </CustomMarkdown>
        </div>
      </PPOAccordionDetails>
    </PPOAccordion>
  );
}
