/*
  112 - Capitalize Words
  -------
  by Anthony Fu (@antfu) #hard #template-literal
  
  ### Question
  
  Implement `CapitalizeWords<T>` which converts the first letter of **each word of a string** to uppercase and leaves the rest as-is.
  
  For example
  
  ```ts
  type capitalized = CapitalizeWords<'hello world, my friends'> // expected to be 'Hello World, My Friends'
  ```
  
  > View on GitHub: https://tsch.js.org/112
*/

import { Equal, Expect } from '@type-challenges/utils'

/* _____________ Your Code Here _____________ */
type CapitalizeRecursive<S extends string, R extends string> =
    S extends `${infer F} ${infer O}` ? CapitalizeRecursive<O, `${R}${Capitalize<F>} `> :
    S extends `${infer F}.${infer O}` ? CapitalizeRecursive<O, `${R}${Capitalize<F>}.`> :
    S extends `${infer F},${infer O}` ? CapitalizeRecursive<O, `${R}${Capitalize<F>},`> :
    S extends `${infer F}` ? `${R}${Capitalize<F>}` : never;


type CapitalizeWords<S extends string> = CapitalizeRecursive<S, ''>


/* _____________ Test Cases _____________ */

type cases = [
  Expect<Equal<CapitalizeWords<'foobar'>, 'Foobar'>>,
  Expect<Equal<CapitalizeWords<'FOOBAR'>, 'FOOBAR'>>,
  Expect<Equal<CapitalizeWords<'foo bar'>, 'Foo Bar'>>,
  Expect<Equal<CapitalizeWords<'foo bar hello world'>, 'Foo Bar Hello World'>>,
  Expect<Equal<CapitalizeWords<'foo bar.hello,world'>, 'Foo Bar.Hello,World'>>,
  Expect<Equal<CapitalizeWords<''>, ''>>,
]



/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/112/answer
  > View solutions: https://tsch.js.org/112/solutions
  > More Challenges: https://tsch.js.org
*/

