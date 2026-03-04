import React from 'react';
import {
  PPOListWrapper,
  PPOPageContentWrapper,
  PPOSectionWrapper,
} from '@/components';
import {
  getChairman,
  getDeputyChairman,
  getSupervisors,
} from '@/lib/api';
import TeamMemberCard from './_components/TeamMemberCard';

export default async function TeamPage() {
  // Получаем данные параллельно
  const [chairman, deputyChairman, supervisors] = await Promise.all([
    getChairman(),
    getDeputyChairman(),
    getSupervisors(),
  ]);

  return (
    <div className="flex w-full flex-col items-center">
      <PPOPageContentWrapper>
        <PPOSectionWrapper>
          <div className="flex gap-[16px] lg:gap-[32px]">
            {/* Председатель */}
            {chairman && (
            <TeamMemberCard member={chairman} />
            )}

            {/* Заместитель председателя */}
            {deputyChairman && (
            <TeamMemberCard member={deputyChairman} />
            )}
          </div>

          {/* Руководители */}
          {supervisors.length > 0 && (
            <>
              <p className="text-[clamp(14px,_3vw,_40px)] font-bold">
                Руководители профорганизаций структурных подразделений
              </p>

              <PPOListWrapper>
                <div className="flex gap-[16px] lg:gap-[32px]">
                  {supervisors.map((member) => (
                    <TeamMemberCard key={member.id} member={member} />
                  ))}
                </div>
              </PPOListWrapper>
            </>
          )}

          {/* Если нет данных */}
          {!chairman && !deputyChairman && supervisors.length === 0 && (
            <div className="py-8 text-center">
              <p className="text-gray-500">Данные о команде не найдены</p>
            </div>
          )}
        </PPOSectionWrapper>
      </PPOPageContentWrapper>
    </div>
  );
}
