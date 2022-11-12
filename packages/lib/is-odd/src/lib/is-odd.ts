import { isEven } from '@i-ja/is-even';

export function isOdd(x: number): boolean {
  return !isEven(x);
}