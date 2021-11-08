/*
  4182 - Fibonacci Sequence
  -------
  by windliang (@wind-liang) #medium 
  
  ### Question
  
  Implement a generic Fibonacci\<T\> takes an number T and returns it's corresponding [Fibonacci number](https://en.wikipedia.org/wiki/Fibonacci_number).
  
  The sequence starts:
  1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...
  
  For example
  ```js
  type Result1 = Fibonacci<3> // 2
  type Result2 = Fibonacci<8> // 21
  ```
  
  > View on GitHub: https://tsch.js.org/4182
*/
import { Equal, Expect } from "@type-challenges/utils";

/* _____________ Your Code Here _____________ */

type Tranfer<
  P extends any[],
  N extends any[],
  L extends any[],
  T extends number
> = T extends L["length"]
  ? [...P, ...N]
  : Tranfer<N, [...P, ...N], [...L, 1], T>;

type Fibonacci<T extends number, S extends any[] = []> = T extends S["length"]
  ? S["length"]
  : Tranfer<[], [1], [1, 1], T>["length"];

/* _____________ Test Cases _____________ */

type cases = [Expect<Equal<Fibonacci<3>, 2>>, Expect<Equal<Fibonacci<8>, 21>>];

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/4182/answer
  > View solutions: https://tsch.js.org/4182/solutions
  > More Challenges: https://tsch.js.org
*/
