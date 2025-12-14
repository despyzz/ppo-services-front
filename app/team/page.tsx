import React, { cache } from 'react';
import {
  PPOListTitle, PPOListWrapper,
  PPOPageContentWrapper, PPOSectionWrapper,
} from '@/components';
import TeamMemberCard from './_components/TeamMemberCard';

// Типы для данных
interface TeamMember {
  id: number;
  role: 'CHAIRMAN' | 'DEPUTY_CHAIRMAN' | 'SUPERVISOR';
  image_src: string;
  name: string;
  description: string;
  created_at: string;
  updated_at: string;
}

interface ChairmanResponse {
  success: boolean;
  member: TeamMember;
}

interface DeputyChairmanResponse {
  success: boolean;
  member: TeamMember;
}

interface SupervisorsResponse {
  success: boolean;
  members: TeamMember[];
}

// Функции для получения участников команды
const getChairman = cache(async (): Promise<TeamMember | null> => {
  try {
    const response = await fetch('http://localhost:3000/team-members/chairman');

    if (!response.ok) {
      throw new Error(`Ошибка HTTP: ${response.status}`);
    }

    const data: ChairmanResponse = await response.json();

    if (!data.success) {
      throw new Error('Не удалось получить председателя');
    }

    return data.member;
  } catch (error) {
    console.error('Ошибка при загрузке председателя:', error);
    return null;
  }
});

const getDeputyChairman = cache(async (): Promise<TeamMember | null> => {
  try {
    const response = await fetch('http://localhost:3000/team-members/deputy-chairman');

    if (!response.ok) {
      throw new Error(`Ошибка HTTP: ${response.status}`);
    }

    const data: DeputyChairmanResponse = await response.json();

    if (!data.success) {
      throw new Error('Не удалось получить заместителя председателя');
    }

    return data.member;
  } catch (error) {
    console.error('Ошибка при загрузке заместителя председателя:', error);
    return null;
  }
});

const getSupervisors = cache(async (): Promise<TeamMember[]> => {
  try {
    const response = await fetch('http://localhost:3000/team-members/supervisors');

    if (!response.ok) {
      throw new Error(`Ошибка HTTP: ${response.status}`);
    }

    const data: SupervisorsResponse = await response.json();

    if (!data.success) {
      throw new Error('Не удалось получить руководителей');
    }

    return data.members;
  } catch (error) {
    console.error('Ошибка при загрузке руководителей:', error);
    return [];
  }
});

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
              <PPOListTitle>Руководители профорганизаций структурных подразделений</PPOListTitle>
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
