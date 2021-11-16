/*
  2949 - ObjectFromEntries
  -------
  by jiangshan (@jiangshanmeta) #hard #object
  
  ### Question
  
  Implement the type version of ```Object.fromEntries```
  
  For example:
  
  ```typescript
  interface Model {
    name: string;
    age: number;
    locations: string[] | null;
  }
  
  type ModelEntries = ['name', string] | ['age', number] | ['locations', string[] | null];
  
  type result = ObjectFromEntries<ModelEntries> // expected to be Model
  ```
  
  > View on GitHub: https://tsch.js.org/2949
*/
import { Equal, Expect, ExpectFalse, NotEqual } from "@type-challenges/utils";

/* _____________ Your Code Here _____________ */

type UnionToFunc<T> = T extends any ? (x: T) => 0 : never;

type UnionToIntersect<T> = UnionToFunc<T> extends (x: infer I) => 0 ? I : never;

type ObjectFromEntries<T> = Omit<
  UnionToIntersect<
    T extends [infer K, infer V]
      ? K extends string
        ? { [key in K]: V }
        : {}
      : {}
  >,
  ""
>;

/* _____________ Test Cases _____________ */

interface Model {
  name: string;
  age: number;
  locations: string[] | null;
}

type ModelEntries =
  | ["name", string]
  | ["age", number]
  | ["locations", string[] | null];

type cases = [Expect<Equal<ObjectFromEntries<ModelEntries>, Model>>];

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/2949/answer
  > View solutions: https://tsch.js.org/2949/solutions
  > More Challenges: https://tsch.js.org
*/
