import React from 'react';
import { Square } from './Square';

interface Stats {
  projectsCount: number;
  paymentsCount: number;
  choiceCount: number;
}

interface MobileVersionProps {
  stats: Stats;
}

export function MobileVersion({ stats }: MobileVersionProps) {
  return (
    <div className="flex flex-wrap justify-center gap-[clamp(10px,_2vw,_22px)] lg:hidden">
      <Square>
        <p className="text-center text-[clamp(24px,_5vw,_50px)] font-bold">
          О нас
        </p>
      </Square>
      <Square changeOnHover className="bg-[#F34252] text-[#ffffff]">
        <p className="text-center text-[clamp(40px,_8vw,_70px)] font-bold">
          {stats.projectsCount}
          +
        </p>
        <p className="text-center text-[clamp(15px,_3vw,_32px)] font-bold">
          Проектов каждый год
        </p>
      </Square>
      <Square className="border-2 border-black p-[24px]">
        <p className="text-center text-[clamp(15px,_3vw,_32px)] font-bold">
          Создаем возможности
        </p>
      </Square>
      <Square changeOnHover className="bg-[#207EEB] text-[#ffffff]">
        <p className="text-center text-[clamp(40px,_8vw,_70px)] font-bold">
          {stats.choiceCount}
        </p>
        <p className="text-center text-[clamp(12px,_2.5vw,_32px)] font-bold">
          Студентов и работников уже выбрали нас
        </p>
      </Square>
      <Square className="border-2 border-black">
        <p className="text-center text-[clamp(15px,_3vw,_32px)] font-bold">
          Помогаем
        </p>
      </Square>
      <Square changeOnHover className="bg-[#207EEB] text-[#ffffff]">
        <p className="text-center text-[clamp(40px,_8vw,_70px)] font-bold">
          {stats.paymentsCount}
          +
        </p>
        <p className="text-center text-[clamp(15px,_3vw,_32px)] font-bold">
          Выплат по заявлениям
        </p>
      </Square>
    </div>
  );
}
