import React from 'react';
import Image from 'next/image';
import { CustomMarkdown } from '@/components/CustomMarkdown';
import type { TeamMember } from '@/lib/models';

// Компонент карточки члена команды
export default function TeamMemberCard({ member }: { member: TeamMember }) {
  return (
    <div className="flex w-[calc(50%-8px)] flex-col lg:w-[calc(50%-16px)]">
      {/* Изображение */}
      <div className="relative aspect-[169/180] w-full lg:aspect-[544/352]">
        <Image
          src={member.image_src}
          fill
          alt={member.name}
          className="object-cover"
        />
      </div>

      {/* Информация */}
      <div className="flex-1">
        <h3 className="mb-2 text-xl font-semibold text-gray-900">{member.name}</h3>
        <div className="whitespace-pre-line text-gray-600">
          <CustomMarkdown>
            {member.description}
          </CustomMarkdown>
        </div>
      </div>
    </div>
  );
}
