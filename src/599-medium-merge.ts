/*
  599 - Merge
  -------
  by ZYSzys (@ZYSzys) #medium #object
  
  ### Question
  
  Merge two types into a new type. Keys of the second type overrides keys of the first type.
  
  > View on GitHub: https://tsch.js.org/599
*/
import { Equal, Expect } from "@type-challenges/utils";

/* _____________ Your Code Here _____________ */
type Merge<F, S, O = F & S> = {
  [key in keyof O]: O[key] extends never ? S[Extract<keyof S, key>] : O[key];
};
/* _____________ Test Cases _____________ */

type Foo = {
  a: number;
  b: string;
};
type Bar = {
  b: number;
  c: boolean;
};

type cases = [
  Expect<
    Equal<
      Merge<Foo, Bar>,
      {
        a: number;
        b: number;
        c: boolean;
      }
    >
  >
];

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/599/answer
  > View solutions: https://tsch.js.org/599/solutions
  > More Challenges: https://tsch.js.org
*/
