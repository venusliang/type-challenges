/*
  2595 - PickByType
  -------
  by jiangshan (@jiangshanmeta) #medium #object
  
  ### Question
  
  From `T`, pick a set of properties whose type are assignable to `U`.
  
  For Example
  
  ```typescript
  type OnlyBoolean = PickByType<{
    name: string
    count: number
    isReadonly: boolean
    isEnable: boolean
  }, boolean> // { isReadonly: boolean; isEnable: boolean; }
  ```
  
  > View on GitHub: https://tsch.js.org/2595
*/
import { Equal, Expect } from "@type-challenges/utils";

/* _____________ Your Code Here _____________ */

type PickByType<T, U> = {
  [K in keyof T as U extends T[K] ? K : never]: T[K];
};

/* _____________ Test Cases _____________ */

interface Model {
  name: string;
  count: number;
  isReadonly: boolean;
  isEnable: boolean;
}

type cases = [
  Expect<
    Equal<
      PickByType<Model, boolean>,
      { isReadonly: boolean; isEnable: boolean }
    >
  >,
  Expect<Equal<PickByType<Model, string>, { name: string }>>,
  Expect<Equal<PickByType<Model, number>, { count: number }>>
];

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/2595/answer
  > View solutions: https://tsch.js.org/2595/solutions
  > More Challenges: https://tsch.js.org
*/
