/*
  2857 - IsRequiredKey
  -------
  by jiangshan (@jiangshanmeta) #hard #utils
  
  ### Question
  
  Implement a generic ```IsRequiredKey<T, K>```  that return whether ```K``` are required keys of ```T``` .
  
  For example
  
  ```typescript
  type A = IsRequiredKey<{ a: number, b?: string },'a'> // true
  type B = IsRequiredKey<{ a: number, b?: string },'b'> // false
  type C = IsRequiredKey<{ a: number, b?: string },'b' | 'a'> // false
  ``` 
  
  > View on GitHub: https://tsch.js.org/2857
*/
import { Equal, Expect, ExpectFalse, NotEqual } from '@type-challenges/utils'


/* _____________ Your Code Here _____________ */

type IsRequiredKey<T, K extends keyof T, F = Pick<T, K>> = keyof {
  [K1 in keyof F as {} extends Pick<F, K1> ? K1 : never]: K1;
} extends never ? true : false;


/* _____________ Test Cases _____________ */

type cases = [
    Expect<Equal<IsRequiredKey<{ a: number, b?: string },'a'>, true>>,
    Expect<Equal<IsRequiredKey<{ a: number, b?: string },'b'>, false>>,
    Expect<Equal<IsRequiredKey<{ a: number, b?: string },'b' | 'a'>, false>>,
]



/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/2857/answer
  > View solutions: https://tsch.js.org/2857/solutions
  > More Challenges: https://tsch.js.org
*/

