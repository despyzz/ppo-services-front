export type TeamMemberRole = 'CHAIRMAN' | 'DEPUTY_CHAIRMAN' | 'SUPERVISOR';

export interface TeamMember {
  id: number;
  role: TeamMemberRole;
  image_src: string;
  name: string;
  description: string;
  created_at: string;
  updated_at: string;
}

export interface ChairmanResponse {
  success: boolean;
  member: TeamMember;
}

export interface DeputyChairmanResponse {
  success: boolean;
  member: TeamMember;
}

export interface SupervisorsResponse {
  success: boolean;
  members: TeamMember[];
}
