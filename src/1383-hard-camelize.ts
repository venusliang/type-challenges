/*
  1383 - Camelize
  -------
  by Denis (@denchiklut) #hard #union #recursion
  
  ### Question
  
  Implement Camelize which converts object from snake_case to to camelCase
  
  ```ts
  Camelize<{
    some_prop: string, 
    prop: { another_prop: string },
    array: [{ snake_case: string }]
  }>
  
  // expected to be
  // {
  //   someProp: string, 
  //   prop: { anotherProp: string },
  //   array: [{ snakeCase: string }]
  // }
  ```
  
  > View on GitHub: https://tsch.js.org/1383
*/
import { Equal, Expect } from '@type-challenges/utils'


/* _____________ Your Code Here _____________ */

type CamelizeKey<T> = T extends `${infer F}_${infer S}${infer O}` ? `${F}${Capitalize<S>}${CamelizeKey<O>}` : T;

type CamelizeTuple<T extends any[]> = T extends [infer F, ...infer O] ? [Camelize<F>, ...CamelizeTuple<O>] : [];

type Camelize<T> = T extends any[] ? CamelizeTuple<T> : T extends {} ? { [K in keyof T as CamelizeKey<K>]: T[K] extends object ? Camelize<T[K]> : T[K] } : never


/* _____________ Test Cases _____________ */

type cases = [
  Expect<Equal<
  Camelize<{
    some_prop: string, 
    prop: { another_prop: string },
    array: [{ snake_case: string }]
  }>,
  {
    someProp: string, 
    prop: { anotherProp: string },
    array: [{ snakeCase: string }]
  }
  >>
]



/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/1383/answer
  > View solutions: https://tsch.js.org/1383/solutions
  > More Challenges: https://tsch.js.org
*/

