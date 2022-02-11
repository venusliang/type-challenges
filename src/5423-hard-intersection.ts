/*
  5423 - Intersection
  -------
  by Pineapple (@Pineapple0919) #hard #union #array
  
  ### Question
  
  Implement the type version of Lodash.intersection, but there is a little different, Intersection<T> takes an Array T containing several arrays or any type element that includes the union type, returns a new array containing all incoming array intersection elements.
  
  ```ts
  type Res = Intersection<[[1, 2], [2, 3], [2, 2]]>; // expected to be 2
  type Res1 = Intersection<[[1, 2, 3], [2, 3, 4], [2, 2, 3]]>; // expected to be 2 | 3
  type Res2 = Intersection<[[1, 2], [3, 4], [5, 6]]>; // expected to be never
  type Res3 = Intersection<[[1, 2, 3], [2, 3, 4], 3]>; // expected to be 3
  type Res4 = Intersection<[[1, 2, 3], 2 | 3 | 4, 2 | 3]>; // expected to be 2 | 3
  type Res5 = Intersection<[[1, 2, 3], 2, 3]>; // expected to be never
  ```
  
  > View on GitHub: https://tsch.js.org/5423
*/

import { Equal, Expect } from "@type-challenges/utils";

/* _____________ Your Code Here _____________ */

type IntersectionUnit<T, R, K = R extends any[] ? R[number] : R> = T extends [
  infer F,
  ...(infer S)
]
  ? [...(F extends K ? [F] : []), ...IntersectionUnit<S, K>]
  : [];

type Intersection<T extends any[]> = T extends [infer F, infer S, ...(infer N)]
  ? Intersection<[IntersectionUnit<F, S>, ...N]>
  : T[0][number];

/* _____________ Test Cases _____________ */

type cases = [
  Expect<Equal<Intersection<[[1, 2], [2, 3], [2, 2]]>, 2>>,
  Expect<Equal<Intersection<[[1, 2, 3], [2, 3, 4], [2, 2, 3]]>, 2 | 3>>,
  Expect<Equal<Intersection<[[1, 2], [3, 4], [5, 6]]>, never>>,
  Expect<Equal<Intersection<[[1, 2, 3], [2, 3, 4], 3]>, 3>>,
  Expect<Equal<Intersection<[[1, 2, 3], 2 | 3 | 4, 2 | 3]>, 2 | 3>>,
  Expect<Equal<Intersection<[[1, 2, 3], 2, 3]>, never>>
];

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/5423/answer
  > View solutions: https://tsch.js.org/5423/solutions
  > More Challenges: https://tsch.js.org
*/
