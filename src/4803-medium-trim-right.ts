/*
  4803 - Trim Right
  -------
  by Yugang Cao (@Talljack) #medium 
  
  ### Question
  
  Implement `TrimRight<T>` which takes an exact string type and returns a new string with the whitespace ending removed.
  
  For example:
  
  ```ts
  type Trimed = TrimRight<'   Hello World    '> // expected to be '   Hello World'
  ```
  
  > View on GitHub: https://tsch.js.org/4803
*/
import { Equal, Expect } from '@type-challenges/utils'


/* _____________ Your Code Here _____________ */

type Space = ' ' | '\n' | '\t'

type TrimRight<S extends string> = S extends `${infer O}${Space}` ? TrimRight<O>:S;


/* _____________ Test Cases _____________ */

type cases = [
  Expect<Equal<TrimRight<'str'>, 'str'>>,
  Expect<Equal<TrimRight<'str '>, 'str'>>,
  Expect<Equal<TrimRight<'str     '>, 'str'>>,
  Expect<Equal<TrimRight<'     str     '>, '     str'>>,
  Expect<Equal<TrimRight<'   foo bar  \n\t '>, '   foo bar'>>,
]



/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/4803/answer
  > View solutions: https://tsch.js.org/4803/solutions
  > More Challenges: https://tsch.js.org
*/

