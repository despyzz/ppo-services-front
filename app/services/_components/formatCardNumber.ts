export function formatCardNumber(number: string): string {
  const digits = number.replace(/\D/g, '');

  if (!digits) {
    return number;
  }

  return digits.match(/.{1,4}/g)?.join(' ') ?? number;
}
