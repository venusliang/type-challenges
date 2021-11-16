/*
  2059 - Drop String
  -------
  by CaptainOfPhB (@CaptainOfPhB) #hard #template-literal #infer
  
  ### Question
  
  Drop the specified chars from a string.
  
  For example:
  
  ```ts
  type Butterfly = DropString<'foobar!', 'fb'> // 'ooar!'
  ```
  
  > View on GitHub: https://tsch.js.org/2059
*/
import { Equal, Expect } from '@type-challenges/utils'


/* _____________ Your Code Here _____________ */
type StringToTuple<S extends string> = S extends `${infer F}${infer O}` ? [F, ...StringToTuple<O>] : [];

type DropChar<S extends string, C extends string> = S extends `${infer F}${C}${infer O}` ? `${F}${DropChar<O, C>}` : S;

type TupleRest<T extends any[]> = T extends [infer F, ...infer O] ? O : [];

type DropString<S extends string, R extends string, T extends string[] = StringToTuple<R>> = T extends [] ? S : DropString<DropChar<S, T[0]>, R, TupleRest<T>>;


/* _____________ Test Cases _____________ */

type cases = [
  Expect<Equal<DropString<'butter fly!', ''>, 'butter fly!'>>,
  Expect<Equal<DropString<'butter fly!', ' '>, 'butterfly!'>>,
  Expect<Equal<DropString<'butter fly!', 'but'>, 'er fly!'>>,
  Expect<Equal<DropString<' b u t t e r f l y ! ', 'but'>, '     e r f l y ! '>>,
  Expect<Equal<DropString<'    butter fly!        ', ' '>, 'butterfly!'>>,
  Expect<Equal<DropString<' b u t t e r f l y ! ', ' '>, 'butterfly!'>>,
  Expect<Equal<DropString<' b u t t e r f l y ! ', 'but'>, '     e r f l y ! '>>,
  Expect<Equal<DropString<' b u t t e r f l y ! ', 'tub'>, '     e r f l y ! '>>,
  Expect<Equal<DropString<' b u t t e r f l y ! ', 'b'>, '  u t t e r f l y ! '>>,
  Expect<Equal<DropString<' b u t t e r f l y ! ', 't'>, ' b u   e r f l y ! '>>,
]



/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/2059/answer
  > View solutions: https://tsch.js.org/2059/solutions
  > More Challenges: https://tsch.js.org
*/

