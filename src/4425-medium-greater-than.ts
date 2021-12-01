/*
  4425 - Greater Than
  -------
  by ch3cknull (@ch3cknull) #medium #array
  
  ### Question
  
  In This Challenge, You should implement a type `GreaterThan<T, U>` like `T > U`
  
  Negative numbers do not need to be considered.
  
  For example
  
  ```ts
  GreaterThan<2, 1> //should be true
  GreaterThan<1, 1> //should be false
  ```
  
  Good Luck!
  
  > View on GitHub: https://tsch.js.org/4425
*/
import { Equal, Expect } from "@type-challenges/utils";

/* _____________ Your Code Here _____________ */
type NumToTuple<T extends number, R extends any[] = []> = R["length"] extends T
  ? R
  : NumToTuple<T, [...R, any]>;

type GreaterThan<T extends number, U extends number> = T extends U
  ? false
  : NumToTuple<T> extends [...NumToTuple<U>, ...any]
  ? true
  : false;

/* _____________ Test Cases _____________ */

type cases = [
  Expect<Equal<GreaterThan<1, 0>, true>>,
  Expect<Equal<GreaterThan<5, 4>, true>>,
  Expect<Equal<GreaterThan<0, 0>, false>>,
  Expect<Equal<GreaterThan<20, 20>, false>>
];

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/4425/answer
  > View solutions: https://tsch.js.org/4425/solutions
  > More Challenges: https://tsch.js.org
*/
