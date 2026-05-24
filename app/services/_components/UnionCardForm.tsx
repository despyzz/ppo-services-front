'use client';

import React, { type FormEvent, useState } from 'react';
import { findUnionCard } from '@/lib/api/unionCard';
import { UnionCardResult } from './UnionCardResult';

export function UnionCardForm() {
  const [fullName, setFullName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [cardNumber, setCardNumber] = useState<string | null>(null);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setError('');
    setCardNumber(null);
    setIsLoading(true);

    const result = await findUnionCard({ fullName, birthDate });

    setIsLoading(false);

    if (!result.ok) {
      setError(result.error);
      return;
    }

    setCardNumber(result.number);
  };

  if (cardNumber) {
    return <UnionCardResult number={cardNumber} />;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full max-w-[720px] flex-col items-center gap-6 lg:gap-10"
    >
      <h2 className="text-center text-[20px] font-bold leading-snug lg:text-[35px]">
        Чтобы узнать номер профбилета, введите Ваши данные
      </h2>

      <div className="flex w-full flex-col gap-4 lg:gap-6">
        <input
          id="fio"
          type="text"
          value={fullName}
          onChange={(event) => setFullName(event.target.value)}
          placeholder="Фамилия Имя Отчество (при наличии)"
          className="h-[52px] w-full rounded-none border border-[#207EEB] px-4 text-[16px] outline-none transition-colors placeholder:text-[#B1B5C3] focus:border-[#1659B8] lg:h-[72px] lg:text-[20px]"
          autoComplete="name"
          required
        />

        <input
          id="birth"
          type="date"
          value={birthDate}
          onChange={(event) => setBirthDate(event.target.value)}
          aria-label="Дата рождения"
          className="h-[52px] w-full rounded-none border border-[#207EEB] px-4 text-[16px] outline-none transition-colors focus:border-[#1659B8] lg:h-[72px] lg:text-[20px] [&::-webkit-datetime-edit]:text-[#777E90] [&:invalid]:text-[#777E90]"
          required
        />
      </div>

      {error && (
        <p className="text-center text-[14px] text-[#F34252] lg:text-[18px]" role="alert">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={isLoading}
        className="h-[52px] w-full max-w-[320px] bg-[#F34252] text-[18px] font-bold text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60 lg:h-[72px] lg:max-w-[400px] lg:text-[24px]"
      >
        {isLoading ? 'Поиск...' : 'Далее'}
      </button>
    </form>
  );
}
