import React from 'react';
import {
  PPOListTitle, PPOListWrapper, PPOPageContentWrapper, PPOSectionWrapper,
} from '@/components';

export default function Projects() {
  return (
    <div className="flex flex-col items-center">
      <PPOPageContentWrapper>

        <PPOSectionWrapper>

          <PPOListTitle>
            О разделе
          </PPOListTitle>

          <PPOListWrapper>
            <p className="text-[14px] font-normal lg:text-[26px]">
              В данном разделе представлены программы и инициативы,
              реализуемые Профсоюзом для членов организации.
            </p>
          </PPOListWrapper>

        </PPOSectionWrapper>
      </PPOPageContentWrapper>
    </div>
  );
}
