/*
  949 - AnyOf
  -------
  by null (@kynefuk) #medium #array
  
  ### Question
  
  Implement Python liked `any` function in the type system. A type takes the Array and returns `true` if any element of the Array is true. If the Array is empty, return `false`.
  
  For example:
  
  ```ts
  type Sample1 = AnyOf<[1, "", false, [], {}]>; // expected to be true.
  type Sample2 = AnyOf<[0, "", false, [], {}]>; // expected to be false.
  ```
  
  > View on GitHub: https://tsch.js.org/949
*/
import { Equal, Expect } from "@type-challenges/utils";

/* _____________ Your Code Here _____________ */

type Empty = false | "" | 0 | [];

type NotEmpty<T> = T extends Empty
  ? never
  : keyof T extends never
  ? never
  : true;

type Each<T extends any[]> = {
  [i in keyof T]: NotEmpty<T[i]>;
}[number];

type AnyOf<T extends readonly any[]> = Each<[...T]> extends never
  ? false
  : true;

/* _____________ Test Cases _____________ */

type cases = [
  Expect<
    Equal<AnyOf<[1, "test", true, [1], { name: "test" }, { 1: "test" }]>, true>
  >,
  Expect<Equal<AnyOf<[1, "", false, [], {}]>, true>>,
  Expect<Equal<AnyOf<[0, "test", false, [], {}]>, true>>,
  Expect<Equal<AnyOf<[0, "", true, [], {}]>, true>>,
  Expect<Equal<AnyOf<[0, "", false, [1], {}]>, true>>,
  Expect<Equal<AnyOf<[0, "", false, [], { name: "test" }]>, true>>,
  Expect<Equal<AnyOf<[0, "", false, [], { 1: "test" }]>, true>>,
  Expect<
    Equal<AnyOf<[0, "", false, [], { name: "test" }, { 1: "test" }]>, true>
  >,
  Expect<Equal<AnyOf<[0, "", false, [], {}]>, false>>,
  Expect<Equal<AnyOf<[]>, false>>
];

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/949/answer
  > View solutions: https://tsch.js.org/949/solutions
  > More Challenges: https://tsch.js.org
*/
