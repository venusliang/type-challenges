/*
  5317 - LastIndexOf
  -------
  by jiangshan (@jiangshanmeta) #medium #array
  
  ### Question
  
  Implement the type version of ```Array.lastIndexOf```, ```LastIndexOf<T, U>```  takes an Array ```T```, any ```U``` and returns the index of the last ```U``` in Array ```T```
  
  For example:
  
  ```typescript
  type Res1 = LastIndexOf<[1, 2, 3, 2, 1], 2> // 3
  type Res2 = LastIndexOf<[0, 0, 0], 2> // -1
  ```
  
  > View on GitHub: https://tsch.js.org/5317
*/
import { Equal, Expect, ExpectFalse, NotEqual } from "@type-challenges/utils";

/* _____________ Your Code Here _____________ */

type SplitLen<L extends any[], R extends any[]> = L extends [...(infer O), ...R]
  ? O["length"]
  : "";

type LastIndexOf<T extends any[], U, L extends any[] = []> = T extends [
  ...any,
  infer N,
  ...L
]
  ? N extends U
    ? SplitLen<T, [...L, any]>
    : LastIndexOf<T, U, [...L, any]>
  : -1;

/* _____________ Test Cases _____________ */

type cases = [
  Expect<Equal<LastIndexOf<[1, 2, 3, 2, 1], 2>, 3>>,
  Expect<Equal<LastIndexOf<[2, 6, 3, 8, 4, 1, 7, 3, 9], 3>, 7>>,
  Expect<Equal<LastIndexOf<[0, 0, 0], 2>, -1>>
];

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/5317/answer
  > View solutions: https://tsch.js.org/5317/solutions
  > More Challenges: https://tsch.js.org
*/
