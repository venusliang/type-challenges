/*
  8987 - Subsequence
  -------
  by jiangshan (@jiangshanmeta) #medium #union
  
  ### Question
  
  Given an array of unique elements, return all possible subsequences.
  
  A subsequence is a sequence that can be derived from an array by deleting some or no elements without changing the order of the remaining elements.
  
  For example: 
  
  ```typescript
  type A = Subsequence<[1, 2] // [] | [1] | [2] | [1, 2]
  ```
  
  > View on GitHub: https://tsch.js.org/8987
*/
import type { Equal, Expect } from "@type-challenges/utils";

/* _____________ Your Code Here _____________ */

type Subsequence<T extends any[], P extends any[] = []> = T extends [
  infer F,
  ...(infer L)
]
  ? Subsequence<L, [...P, F] | [F] | P>
  : P;

/* _____________ Test Cases _____________ */

type cases = [
  Expect<Equal<Subsequence<[1, 2]>, [] | [1] | [2] | [1, 2]>>,
  Expect<
    Equal<
      Subsequence<[1, 2, 3]>,
      [] | [1] | [2] | [1, 2] | [3] | [1, 3] | [2, 3] | [1, 2, 3]
    >
  >
];

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/8987/answer
  > View solutions: https://tsch.js.org/8987/solutions
  > More Challenges: https://tsch.js.org
*/
