import React from 'react';
import { Square } from './Square';

interface Stats {
  projectsCount: number;
  paymentsCount: number;
  choiceCount: number;
}

interface DesktopVersionProps {
  stats: Stats;
}

export function DesktopVersion({ stats }: DesktopVersionProps) {
  return (
    <div className="hidden max-w-[1130px] flex-wrap justify-center gap-[clamp(10px,_2vw,_22px)] lg:flex">
      <Square>
        <p className="text-center text-[50px] font-bold">
          О нас
        </p>
      </Square>
      <Square className="border-2 border-black">
        <p className="text-center text-[clamp(15px,_3vw,_32px)] font-bold">
          Помогаем
        </p>
      </Square>
      <Square changeOnHover className="bg-[#F34252] text-[#ffffff]">
        <p className="text-center text-[clamp(40px,_8vw,_70px)] font-bold">
          {stats.projectsCount}
          +
        </p>
        <p className="text-center text-[clamp(15px,_3vw,_25px)] font-bold">
          Проектов каждый год
        </p>
      </Square>
      <Square className="border-2 border-black">
        <p className="text-center text-[clamp(15px,_3vw,_32px)] font-bold">
          Развлекаем
        </p>
      </Square>
      <Square changeOnHover className="aspect-[2.083/1] bg-[#207EEB] text-[#ffffff] lg:aspect-auto lg:w-[clamp(470px,_46vw,_552px)]">
        <p className="text-center text-[clamp(40px,_8vw,_70px)] font-bold">
          {stats.choiceCount}
        </p>
        <p className="text-center text-[clamp(15px,_3vw,_25px)] font-bold">
          Студентов и работников университета уже выбрали нас
        </p>
      </Square>
      <Square className="border-2 border-black">
        <p className="text-center text-[clamp(15px,_3vw,_32px)] font-bold">
          Создаем возможности
        </p>
      </Square>
      <Square changeOnHover className="bg-[#207EEB] text-[#ffffff]">
        <p className="text-center text-[clamp(40px,_8vw,_70px)] font-bold">
          {stats.paymentsCount}
          +
        </p>
        <p className="text-center text-[clamp(15px,_3vw,_25px)] font-bold">
          Выплат по заявлениям
        </p>
      </Square>
    </div>
  );
}
