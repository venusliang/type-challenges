/*
  298 - Length of String
  -------
  by Pig Fang (@g-plane) #medium #template-literal
  
  ### Question
  
  Compute the length of a string literal, which behaves like `String#length`.
  
  > View on GitHub: https://tsch.js.org/298
*/
import { Equal, Expect } from '@type-challenges/utils'


/* _____________ Your Code Here _____________ */
type LengthOfString<S extends string, L extends any[]= []> = S extends `${string}${infer O}` ? LengthOfString<O, [...L, unknown]> :L['length'];


/* _____________ Test Cases _____________ */

type cases = [
  Expect<Equal<LengthOfString<''>, 0>>,
  Expect<Equal<LengthOfString<'kumiko'>, 6>>,
  Expect<Equal<LengthOfString<'reina'>, 5>>,
  Expect<Equal<LengthOfString<'Sound! Euphonium'>, 16>>,
]



/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/298/answer
  > View solutions: https://tsch.js.org/298/solutions
  > More Challenges: https://tsch.js.org
*/

