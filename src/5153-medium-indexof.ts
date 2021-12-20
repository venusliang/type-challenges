/*
  5153 - IndexOf
  -------
  by Pineapple (@Pineapple0919) #medium #array
  
  ### Question
  
  Implement the type version of Array.indexOf, indexOf<T, U> takes an Array T, any U and returns the index of the first U in Array T.
  
  ```ts
  type Res = IndexOf<[1, 2, 3], 2>; // excepted to be 1
  type Res1 = IndexOf<[2,6, 3,8,4,1,7, 3,9], 3>; // excepted to be 2
  type Res2 = IndexOf<[0, 0, 0], 2>; // excepted to be -1
  ```
  
  > View on GitHub: https://tsch.js.org/5153
*/
import { Equal, Expect } from "@type-challenges/utils";

/* _____________ Your Code Here _____________ */

type IsEqual<L, F> = [L, F] extends [F, L] ? 1 : 0;

type IndexOf<T extends any[], U, I extends any[] = []> = T extends [
  infer F,
  ...(infer O)
]
  ? IsEqual<F, U> extends 1
    ? I["length"]
    : IndexOf<O, U, [...I, any]>
  : -1;

/* _____________ Test Cases _____________ */

type cases = [
  Expect<Equal<IndexOf<[1, 2, 3], 2>, 1>>,
  Expect<Equal<IndexOf<[2, 6, 3, 8, 4, 1, 7, 3, 9], 3>, 2>>,
  Expect<Equal<IndexOf<[0, 0, 0], 2>, -1>>
];

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/5153/answer
  > View solutions: https://tsch.js.org/5153/solutions
  > More Challenges: https://tsch.js.org
*/
