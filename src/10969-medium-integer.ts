/*
  10969 - Integer
  -------
  by HuaBing (@hbcraft) #medium #template-literal
  
  ### Question
  
  Please complete type `Integer<T>`, type `T` inherits from `number`, if `T` is an integer return it, otherwise return `never`.
  
  > View on GitHub: https://tsch.js.org/10969
*/

import { ExpectFalse, NotEqual } from "@type-challenges/utils";
import type { Equal, Expect } from "@type-challenges/utils";

/* _____________ Your Code Here _____________ */
type Integer<T> = number extends T ? never : T extends number
    ? `${T}` extends `${number}.${string}`
    ? never
    : T
    : never;

/* _____________ Test Cases _____________ */

let x = 1;
let y = 1 as const;

type cases1 = [
  Expect<Equal<Integer<1>, 1>>,
  Expect<Equal<Integer<1.1>, never>>,
  Expect<Equal<Integer<1.0>, 1>>,
  Expect<Equal<Integer<typeof x>, never>>,
  Expect<Equal<Integer<typeof y>, 1>>
];

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/10969/answer
  > View solutions: https://tsch.js.org/10969/solutions
  > More Challenges: https://tsch.js.org
*/
