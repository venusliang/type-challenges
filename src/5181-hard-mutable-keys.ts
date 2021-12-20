/*
  5181 - Mutable Keys
  -------
  by Yugang Cao (@Talljack) #hard #utils
  
  ### Question
  
  Implement the advanced util type MutableKeys<T>, which picks all the mutable (not readonly) keys into a union.
  
  For example:
  
  ```ts
  type Keys = MutableKeys<{ readonly foo: string; bar: number }>;
  // expected to be “bar”
  ```
  
  > View on GitHub: https://tsch.js.org/5181
*/

import { Equal, Expect } from '@type-challenges/utils'

/* _____________ Your Code Here _____________ */
type If<N, S, R, F = never> = (<T>() => T extends N ? 1 : 2) extends <T>() => T extends S
    ? 1
    : 2
    ? R
    : F;

type MutableKeys<T> = keyof {
    [K in keyof T as If<{ [F in K]: T[F] }, { readonly [F in K]: T[F] }, never, K>]: K;
}


/* _____________ Test Cases _____________ */

type cases = [
    Expect<Equal<MutableKeys<{ a: number, readonly b: string }>, "a">>,
    Expect<Equal<MutableKeys<{ a: undefined, readonly b: undefined }>, "a">>,
    Expect<Equal<MutableKeys<{ a: undefined, readonly b?: undefined, c: string, d: null }>, "a" | "c" | "d">>,
    Expect<Equal<MutableKeys<{}>, never>>
]



/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/5181/answer
  > View solutions: https://tsch.js.org/5181/solutions
  > More Challenges: https://tsch.js.org
*/

