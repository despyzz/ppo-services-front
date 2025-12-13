import {
  PPOAccordion, PPOAccordionDetails, PPOAccordionImageSummary,
  PPOListWrapper, PPOPageContentWrapper, PPOSectionWrapper,
} from '@/components';
import React from 'react';
import Image from 'next/image';

export default function StudentPage() {
  return (
    <PPOPageContentWrapper>

      <PPOSectionWrapper>

        <PPOListWrapper>
          <PPOAccordion>
            <PPOAccordionImageSummary>
              <div className="aspect-[352/91] w-full">
                <Image
                  src="/images/pages/projects/projects_pushka.jpg"
                  alt="Проект 'Пушка'"
                  fill
                  className="object-cover"
                />
              </div>
            </PPOAccordionImageSummary>
            <PPOAccordionDetails>
              <div className="mt-5 flex flex-col gap-5">
                <div>
                  <p>
                    Ученье — свет, а неученье — любимое время для каждого студента.
                    Мы знаем об этом, поэтому приготовили для тебя кое-что особенное.
                  </p>
                </div>
                <div>
                  <p>
                    Забудь о лекциях до следующего семестра, сегодня твоя задача — отдохнуть так,
                    как ты еще никогда не отдыхал.
                  </p>
                </div>
                <div>
                  <p>
                    Профком Политеха приглашает тебя на зимний отдых «ПУШКА».
                  </p>
                </div>
              </div>
            </PPOAccordionDetails>
          </PPOAccordion>

          <PPOAccordion>
            <PPOAccordionImageSummary>
              <div className="aspect-[352/91] w-full">
                <Image
                  src="/images/pages/projects/projects_stl.jpg"
                  alt="Проект 'СТЛ'"
                  fill
                  className="object-cover"
                />
              </div>
            </PPOAccordionImageSummary>
            <PPOAccordionDetails>
              <div className="mt-5 flex flex-col gap-5">
                <div>
                  <p>
                    Цель конкурса — выявление людей с лидерскими и организаторскими способностями,
                    готовых менять жизнь студентов университета к лучшему.
                  </p>
                </div>
              </div>
            </PPOAccordionDetails>
          </PPOAccordion>

        </PPOListWrapper>

      </PPOSectionWrapper>

    </PPOPageContentWrapper>
  );
}
