/*
  4037 - IsPalindrome
  -------
  by jiangshan (@jiangshanmeta) #hard #string
  
  ### Question
  
  Implement type ```IsPalindrome<T>``` to check whether  a string or number is palindrome.
  
  For example:
  
  ```typescript
  IsPalindrome<'abc'> // false
  IsPalindrome<121> // true
  ```
  
  > View on GitHub: https://tsch.js.org/4037
*/
import { Equal, Expect, ExpectFalse, NotEqual } from '@type-challenges/utils'


/* _____________ Your Code Here _____________ */

type ToTuple<T extends string | number, S = `${T}`> = S extends `${infer F}${infer O}` ? [F, ...ToTuple<O>] : []

type IsPalindrome<T extends string | number, S extends any[] = ToTuple<T>> = S extends [infer A, ...infer O, infer L] ? A extends L ? IsPalindrome<T, O> : false : true;


/* _____________ Test Cases _____________ */

type cases = [
  Expect<Equal<IsPalindrome<'abc'>, false>>,
  Expect<Equal<IsPalindrome<'b'>, true>>,
  Expect<Equal<IsPalindrome<'abca'>, false>>,
  Expect<Equal<IsPalindrome<121>, true>>,
  Expect<Equal<IsPalindrome<19260817>, false>>,
]



/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/4037/answer
  > View solutions: https://tsch.js.org/4037/solutions
  > More Challenges: https://tsch.js.org
*/

