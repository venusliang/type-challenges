/*
  5117 - Without
  -------
  by Pineapple (@Pineapple0919) #medium #union #array
  
  ### Question
  
  Implement the type version of Lodash.without, Without<T, U> takes an Array T, number or array U and returns an Array without the elements of U.
  
  ```ts
  type Res = Without<[1, 2], 1>; // excepted to be [2]
  type Res1 = Without<[1, 2, 4, 1, 5], [1, 2]>; // excepted to be [4, 5]
  type Res2 = Without<[2, 3, 2, 3, 2, 3, 2, 3], [2, 3]>; // excepted to be []
  ```
  
  > View on GitHub: https://tsch.js.org/5117
*/

import { Equal, Expect } from "@type-challenges/utils";

/* _____________ Your Code Here _____________ */

type Without<
  T extends any[],
  U,
  K extends any = U extends any[] ? U[number] : U,
  R extends any[] = []
> = T extends [infer F, ...(infer O)]
  ? Without<O, U, K, [...R, ...(F extends K ? [] : [F])]>
  : R;

/* _____________ Test Cases _____________ */

type cases = [
  Expect<Equal<Without<[1, 2], 1>, [2]>>,
  Expect<Equal<Without<[1, 2, 4, 1, 5], [1, 2]>, [4, 5]>>,
  Expect<Equal<Without<[2, 3, 2, 3, 2, 3, 2, 3], [2, 3]>, []>>
];

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/5117/answer
  > View solutions: https://tsch.js.org/5117/solutions
  > More Challenges: https://tsch.js.org
*/
