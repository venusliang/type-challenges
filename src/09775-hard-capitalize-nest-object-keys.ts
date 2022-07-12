/*
  9775 - Capitalize Nest Object Keys
  -------
  by MayanDev (@Mayandev) #hard #object #array
  
  ### Question
  
  Capitalize the key of the object, and if the value is an array, iterate through the objects in the array.
  
  > View on GitHub: https://tsch.js.org/9775
*/

import type { Equal, Expect } from '@type-challenges/utils'
import { ExpectFalse, NotEqual } from '@type-challenges/utils'

/* _____________ Your Code Here _____________ */

type CapitalizeNestArrayKeys<T extends any[], R extends any[]=[]> = T extends [infer F, ...infer O]
  ? CapitalizeNestArrayKeys<O, [...R, F extends Object ? CapitalizeNestObjectKeys<F>: F]> 
  : R;

type CapitalizeNestObjectKeys<T> = {
  [K in keyof T as Capitalize<K & string>]: T[K] extends any[] ? CapitalizeNestArrayKeys<T[K]> : T[K]
};

/* _____________ Test Cases _____________ */

type foo = {
  foo: string
  bars: [{ foo: string }]
}

type Foo = {
  Foo: string
  Bars: [{
    Foo: string
  }]
}

type cases = [
  Expect<Equal<Foo, CapitalizeNestObjectKeys<foo>>>,
]



/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/9775/answer
  > View solutions: https://tsch.js.org/9775/solutions
  > More Challenges: https://tsch.js.org
*/

