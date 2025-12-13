import React from 'react';
import {
  PPOListTitle, PPOListWrapper, PPOPageContentWrapper, PPOSectionWrapper,
} from '@/components';

export default function Documents() {
  return (
    <div className="flex flex-col items-center">
      <PPOPageContentWrapper>

        <PPOSectionWrapper>

          <PPOListTitle>
            О разделе
          </PPOListTitle>

          <PPOListWrapper>
            <p className="text-[14px] font-normal lg:text-[26px]">
              В этом разделе вы найдете все документы, которые могут понадобиться для работы или
              учебы: положения, заявления, формы и другие важные материалы. Всё удобно
              структурировано и легко доступно, чтобы вы могли быстро находить нужные
              файлы и использовать их без лишних сложностей.
            </p>
          </PPOListWrapper>

        </PPOSectionWrapper>
      </PPOPageContentWrapper>
    </div>
  );
}
