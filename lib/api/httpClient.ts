const BACKEND_BASE_URL = '/api';

type FetchOptions = RequestInit;

export async function apiFetch<TResponse>(
  path: string,
  options?: FetchOptions,
): Promise<TResponse> {
  const url = `${BACKEND_BASE_URL}${path}`;

  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error(`HTTP error ${response.status} for ${url}`);
  }

  return response.json() as Promise<TResponse>;
}

export { BACKEND_BASE_URL };
