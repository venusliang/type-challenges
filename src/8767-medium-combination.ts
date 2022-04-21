/*
  8767 - Combination
  -------
  by Homyee King (@HomyeeKing) #medium #array #application #string
  
  ### Question
  
  Given an array of strings, do Permutation & Combination.
  It's also useful for the prop types like video [controlsList](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/controlsList)
  
  ```ts
  // expected to be `"foo" | "bar" | "baz" | "foo bar baz" | "bar foo" | "baz foo" | "baz bar"`
  type Keys = Combination<['foo', 'bar', 'baz']>
  ```
  
  > View on GitHub: https://tsch.js.org/8767
*/
import type { Equal, Expect } from "@type-challenges/utils";

// type CombinationUnion<T extends string, S extends string = T> = T extends any ? `${T}${[S, T] extends [T, S] ? "" : ` ${CombinationUnion<Exclude<S, T>>}`}` | CombinationUnion<Exclude<S, T>> : never;

// type FileterUnion<T extends string, S extends string = T> = T extends any ? CombinationUnion<Exclude<S, T>> : never;

// type Combination<T extends string[]> = CombinationUnion<T[number]> | FileterUnion<T[number]>;


/* _____________ Your Code Here _____________ */
type Combination<T extends any[], S extends any = never, R extends string = ''> = T extends [...infer F, infer L] ?
  Combination<F, `${L & string} ${F[number] & string}` | L | S, `${L & string}${R extends '' ? '' : ' '}${R}`> :
  S | R;
/* _____________ Test Cases _____________ */

type cases = [
  Expect<
    Equal<
      Combination<["foo", "bar", "baz"]>,
      "foo" | "bar" | "baz" | "foo bar baz" | "bar foo" | "baz foo" | "baz bar"
    >
  >
];

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/8767/answer
  > View solutions: https://tsch.js.org/8767/solutions
  > More Challenges: https://tsch.js.org
*/
