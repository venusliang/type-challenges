/*
  2852 - OmitByType
  -------
  by jiangshan (@jiangshanmeta) #medium #object
  
  ### Question
  
  From ```T```, pick a set of properties whose type are not assignable to ```U```.
  
  For Example
  
  ```typescript
  type OmitBoolean = OmitByType<{
    name: string
    count: number
    isReadonly: boolean
    isEnable: boolean
  }, boolean> // { name: string; count: number }
  ```
  
  > View on GitHub: https://tsch.js.org/2852
*/
import { Equal, Expect, ExpectFalse, NotEqual } from "@type-challenges/utils";

/* _____________ Your Code Here _____________ */

type OmitByType<T, U> = {
  [K in keyof T as U extends T[K] ? never :K]: T[K]
};

/* _____________ Test Cases _____________ */

interface Model {
  name: string;
  count: number;
  isReadonly: boolean;
  isEnable: boolean;
}

type cases = [
  Expect<Equal<OmitByType<Model, boolean>, { name: string; count: number }>>,
  Expect<
    Equal<
      OmitByType<Model, string>,
      { count: number; isReadonly: boolean; isEnable: boolean }
    >
  >,
  Expect<
    Equal<
      OmitByType<Model, number>,
      { name: string; isReadonly: boolean; isEnable: boolean }
    >
  >
];

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/2852/answer
  > View solutions: https://tsch.js.org/2852/solutions
  > More Challenges: https://tsch.js.org
*/
