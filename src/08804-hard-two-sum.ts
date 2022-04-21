/*
  8804 - Two Sum
  -------
  by PsiloLau (@Psilocine) #hard #array #math
  
  ### Question
  
  Given an array of integers `nums` and an integer `target`, return true if two numbers such that they add up to `target`.
  
  > View on GitHub: https://tsch.js.org/8804
*/
import type { Equal, Expect } from "@type-challenges/utils";

/* _____________ Your Code Here _____________ */
type ConstructTuple<
  L extends number,
  R extends unknown[] = []
> = R["length"] extends L ? R : ConstructTuple<L, [...R, unknown]>;

type TwoSumRemain<
  T extends any[],
  Left extends any[],
  Rright extends any[]
> = T extends [infer F, ...(infer L)]
  ? [...Left, ...ConstructTuple<F & number>] extends Rright
    ? true
    : TwoSumRemain<L, Left, Rright>
  : false;

type TwoSumTup<T extends any[], U extends any[]> = T extends [
  infer F,
  ...(infer L)
]
  ? TwoSumRemain<L, ConstructTuple<F & number>, U> extends true
    ? true
    : TwoSumTup<L, U>
  : false;

type TwoSum<T extends any[], U extends number> = TwoSumTup<
  T,
  ConstructTuple<U>
>;

/* _____________ Test Cases _____________ */

type cases = [
  Expect<Equal<TwoSum<[3, 3], 6>, true>>,
  Expect<Equal<TwoSum<[3, 2, 4], 6>, true>>,
  Expect<Equal<TwoSum<[2, 7, 11, 15], 15>, false>>,
  Expect<Equal<TwoSum<[2, 7, 11, 15], 9>, true>>,
  Expect<Equal<TwoSum<[1, 2, 3], 0>, false>>,
  Expect<Equal<TwoSum<[1, 2, 3], 1>, false>>,
  Expect<Equal<TwoSum<[1, 2, 3], 2>, false>>,
  Expect<Equal<TwoSum<[1, 2, 3], 3>, true>>,
  Expect<Equal<TwoSum<[1, 2, 3], 4>, true>>,
  Expect<Equal<TwoSum<[1, 2, 3], 5>, true>>,
  Expect<Equal<TwoSum<[1, 2, 3], 6>, false>>
];

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/8804/answer
  > View solutions: https://tsch.js.org/8804/solutions
  > More Challenges: https://tsch.js.org
*/
