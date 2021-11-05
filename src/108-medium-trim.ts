/*
  108 - Trim
  -------
  by Anthony Fu (@antfu) #medium #template-literal
  
  ### Question
  
  Implement `Trim<T>` which takes an exact string type and returns a new string with the whitespace from both ends removed.
  
  For example
  
  ```ts
  type trimed = Trim<'  Hello World  '> // expected to be 'Hello World'
  ```
  
  > View on GitHub: https://tsch.js.org/108
*/
import { Equal, Expect } from '@type-challenges/utils'

/* _____________ Your Code Here _____________ */

type Space = ' ' | '\n' | '\t'
type TrimLeft<S extends string> = S extends `${Space}${infer O}` ? TrimLeft<O>:S;
type TrimRight<S extends string> = S extends `${infer O}${Space}` ? TrimRight<O>:S;

type Trim<S extends string> = TrimRight<TrimLeft<S>>;


/* _____________ Test Cases _____________ */

type cases = [
  Expect<Equal<Trim<'str'>, 'str'>>,
  Expect<Equal<Trim<' str'>, 'str'>>,
  Expect<Equal<Trim<'     str'>, 'str'>>,
  Expect<Equal<Trim<'str   '>, 'str'>>,
  Expect<Equal<Trim<'     str     '>, 'str'>>,
  Expect<Equal<Trim<'   \n\t foo bar \t'>, 'foo bar'>>,
]



/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/108/answer
  > View solutions: https://tsch.js.org/108/solutions
  > More Challenges: https://tsch.js.org
*/

