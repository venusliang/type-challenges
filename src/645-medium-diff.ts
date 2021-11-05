/*
  645 - Diff
  -------
  by ZYSzys (@ZYSzys) #medium #object
  
  ### Question
  
  Get an `Object` that is the difference between `O` & `O1`
  
  > View on GitHub: https://tsch.js.org/645
*/

import { Equal, Expect } from "@type-challenges/utils";

/* _____________ Your Code Here _____________ */

type Diff<O, O1> = keyof O extends keyof O1
  ? Pick<O1, Exclude<keyof O1, keyof O>>
  : Pick<O, Exclude<keyof O, keyof O1>>;

type Test = Diff<Foo, Bar>;
/* _____________ Test Cases _____________ */

type Foo = {
  name: string;
  age: string;
};
type Bar = {
  name: string;
  age: string;
  gender: number;
};

type cases = [Expect<Equal<Diff<Foo, Bar>, { gender: number }>>];

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/645/answer
  > View solutions: https://tsch.js.org/645/solutions
  > More Challenges: https://tsch.js.org
*/
