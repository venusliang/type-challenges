/*
  741 - Sort
  -------
  by Sg (@suica) #extreme #infer #array
  
  ### Question
  
  In this challenge, you are required to sort natural number arrays in either ascend order or descent order.
  
  Ascend order examples:
  ```ts
  Sort<[]> // []
  Sort<[1]> // [1]
  Sort<[2, 4, 7, 6, 6, 6, 5, 8, 9]> //  [2, 4, 5, 6, 6, 6, 7, 8, 9]
  ```
  
  The `Sort` type should also accept a boolean type. When it is `true`, the sorted result should be in descent order. Some examples:
  
  ```ts
  Sort<[3, 2, 1], true> // [3, 2, 1]
  Sort<[3, 2, 0, 1, 0, 0, 0], true> // [3, 2, 1, 0, 0, 0, 0]
  ```
  
  Extra challenges:
  1. Support natural numbers with 15+ digits.
  2. Support float numbers.
  
  > View on GitHub: https://tsch.js.org/741
*/
import { Equal, Expect } from "@type-challenges/utils";

/* _____________ Your Code Here _____________ */

type N1 = [any];
type N2 = [any, any];
type N3 = [any, any, any];
type N4 = [any, any, any, any];
type N5 = [any, any, any, any, any];
type N6 = [any, any, any, any, any, any];
type N7 = [any, any, any, any, any, any, any];
type N8 = [any, any, any, any, any, any, any, any];
type N9 = [any, any, any, any, any, any, any, any, any];

type DigitNumToTuple<N, L = N extends string | number ? `${N}` : ''> = L extends `${N1['length']}`
    ? N1 : L extends `${N2['length']}`
    ? N2 : L extends `${N3['length']}`
    ? N3 : L extends `${N4['length']}`
    ? N4 : L extends `${N5['length']}`
    ? N5 : L extends `${N6['length']}`
    ? N6 : L extends `${N7['length']}`
    ? N7 : L extends `${N8['length']}`
    ? N8 : L extends `${N9['length']}`
    ? N9 : [];

type TupleTail<T extends any[]> = T extends [...infer O, any] ? O : never;

type TupleLast<T extends any[]> = T extends [...any, infer L] ? L : never;

type TupleLenComparator<L extends any[], R extends any[]> = L extends [...R, ...infer O] ? O['length'] extends 0 ? 0 : 1 : -1;

type Bubble<T extends any[], F extends boolean, R extends any[] = []> = T extends [infer C, infer N, ...infer O] ? TupleLenComparator<DigitNumToTuple<C>, DigitNumToTuple<N>> extends (F extends true ? -1 : 1) ? Bubble<[C, ...O], F, [...R, N]> : Bubble<[N, ...O], F, [...R, C]> : [...R, ...T];

type Sort<T extends any[], F extends boolean = false, R extends any[] = [], B extends any[] = Bubble<T, F>> = T extends [] ? [] : T extends [any] ? [...T, ...R] : Sort<TupleTail<B>, F, [TupleLast<B>, ...R]>;


/* _____________ Test Cases _____________ */

type cases = [
  Expect<Equal<Sort<[]>, []>>,
  Expect<Equal<Sort<[1]>, [1]>>,
  Expect<Equal<Sort<[2, 1]>, [1, 2]>>,
  Expect<Equal<Sort<[0, 0, 0]>, [0, 0, 0]>>,
  Expect<Equal<Sort<[1, 2, 3]>, [1, 2, 3]>>,
  Expect<Equal<Sort<[3, 2, 1]>, [1, 2, 3]>>,
  Expect<Equal<Sort<[3, 2, 1, 2]>, [1, 2, 2, 3]>>,
  Expect<Equal<Sort<[3, 2, 0, 1, 0, 0, 0]>, [0, 0, 0, 0, 1, 2, 3]>>,
  Expect<Equal<Sort<[2, 4, 7, 6, 6, 6, 5, 8, 9]>, [2, 4, 5, 6, 6, 6, 7, 8, 9]>>,
  Expect<Equal<Sort<[1, 1, 2, 1, 1, 1, 1, 1, 1]>, [1, 1, 1, 1, 1, 1, 1, 1, 2]>>,
  Expect<Equal<Sort<[], true>, []>>,
  Expect<Equal<Sort<[1], true>, [1]>>,
  Expect<Equal<Sort<[2, 1], true>, [2, 1]>>,
  Expect<Equal<Sort<[0, 0, 0], true>, [0, 0, 0]>>,
  Expect<Equal<Sort<[1, 2, 3], true>, [3, 2, 1]>>,
  Expect<Equal<Sort<[3, 2, 1], true>, [3, 2, 1]>>,
  Expect<Equal<Sort<[3, 2, 1, 2], true>, [3, 2, 2, 1]>>,
  Expect<Equal<Sort<[3, 2, 0, 1, 0, 0, 0], true>, [3, 2, 1, 0, 0, 0, 0]>>,
  Expect<
    Equal<Sort<[2, 4, 7, 6, 6, 6, 5, 8, 9], true>, [9, 8, 7, 6, 6, 6, 5, 4, 2]>
  >
];

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/741/answer
  > View solutions: https://tsch.js.org/741/solutions
  > More Challenges: https://tsch.js.org
*/
