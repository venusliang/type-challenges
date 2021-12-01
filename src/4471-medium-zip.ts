/*
  4471 - Zip
  -------
  by キリサメ qianxi (@qianxi0410) #medium #tuple
  
  ### Question
  
  In This Challenge, You should implement a type `Zip<T, U>`, T and U must be `Tuple`
  ```ts
  type exp = Zip<[1, 2], [true, false]> // expected to be [[1, true], [2, false]]
  ```
  
  > View on GitHub: https://tsch.js.org/4471
*/
import { Equal, Expect } from "@type-challenges/utils";

/* _____________ Your Code Here _____________ */

type TupleTail<T extends any[]> = T extends [any, ...(infer O)] ? O : never;

type Zip<L extends any[], R extends any[]> = [] extends L | R
  ? []
  : [[L[0], R[0]], ...Zip<TupleTail<L>, TupleTail<R>>];

/* _____________ Test Cases _____________ */

type cases = [
  Expect<Equal<Zip<[], []>, []>>,
  Expect<Equal<Zip<[1, 2], [true, false]>, [[1, true], [2, false]]>>,
  Expect<Equal<Zip<[1, 2, 3], ["1", "2"]>, [[1, "1"], [2, "2"]]>>,
  Expect<Equal<Zip<[], [1, 2, 3]>, []>>,
  Expect<Equal<Zip<[[1, 2]], [3]>, [[[1, 2], 3]]>>
];

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/4471/answer
  > View solutions: https://tsch.js.org/4471/solutions
  > More Challenges: https://tsch.js.org
*/
