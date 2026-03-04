import { apiFetch } from './httpClient';
import type {
  ChairmanResponse,
  DeputyChairmanResponse,
  SupervisorsResponse,
  TeamMember,
} from '../models';

export async function getChairman(): Promise<TeamMember | null> {
  try {
    const data = await apiFetch<ChairmanResponse>('/team-members/chairman');

    if (!data.success) {
      throw new Error('Не удалось получить председателя');
    }

    return data.member;
  } catch (error) {
    return null;
  }
}

export async function getDeputyChairman(): Promise<TeamMember | null> {
  try {
    const data = await apiFetch<DeputyChairmanResponse>('/team-members/deputy-chairman');

    if (!data.success) {
      throw new Error('Не удалось получить заместителя председателя');
    }

    return data.member;
  } catch (error) {
    return null;
  }
}

export async function getSupervisors(): Promise<TeamMember[]> {
  try {
    const data = await apiFetch<SupervisorsResponse>('/team-members/supervisors');

    if (!data.success) {
      throw new Error('Не удалось получить руководителей');
    }

    return data.members;
  } catch (error) {
    return [];
  }
}
