import { BACKEND_BASE_URL } from './httpClient';
import type { FindUnionCardRequest, FindUnionCardResult } from '../models/unionCard';

export async function findUnionCard(
  payload: FindUnionCardRequest,
): Promise<FindUnionCardResult> {
  try {
    const res = await fetch(`${BACKEND_BASE_URL}/find`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    const data = await res.json();

    if (!res.ok) {
      return { ok: false, error: data.error ?? 'Не удалось найти номер' };
    }

    return { ok: true, number: data.number };
  } catch {
    return {
      ok: false,
      error: 'Ошибка: перепроверьте данные или попробуйте позже',
    };
  }
}
