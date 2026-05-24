export type FindUnionCardRequest = {
  fullName: string;
  birthDate: string;
};

export type FindUnionCardSuccess = {
  number: string;
};

export type FindUnionCardError = {
  error: string;
};

export type FindUnionCardResult =
  | { ok: true; number: string }
  | { ok: false; error: string };
