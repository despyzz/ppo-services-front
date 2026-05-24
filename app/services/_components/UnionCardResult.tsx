import React from 'react';
import { formatCardNumber } from './formatCardNumber';

type UnionCardResultProps = {
  number: string;
};

export function UnionCardResult({ number }: UnionCardResultProps) {
  return (
    <div className="flex w-full flex-col items-center gap-6 lg:gap-10">
      <h2 className="text-center text-[20px] font-bold leading-tight lg:text-[35px]">
        Ваш профсоюзный билет
      </h2>

      <div className="relative flex aspect-[1.6/1] w-full max-w-[720px] flex-col justify-between overflow-hidden rounded-[16px] bg-[#207EEB] px-5 py-6 text-white shadow-lg lg:rounded-[24px] lg:px-10 lg:py-8">
        <p className="max-w-[70%] text-[10px] font-semibold uppercase leading-snug tracking-wide lg:text-[14px]">
          Общероссийский профсоюз образования
        </p>

        <div className="flex flex-col items-center gap-3">
          <p className="text-center text-[28px] font-bold tracking-[0.2em] lg:text-[48px]">
            {formatCardNumber(number)}
          </p>
          <p className="self-end text-[10px] font-semibold uppercase tracking-wide lg:text-[12px]">
            Профсоюзный билет
          </p>
        </div>
      </div>
    </div>
  );
}
