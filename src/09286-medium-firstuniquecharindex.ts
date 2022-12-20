/*
  9286 - FirstUniqueCharIndex
  -------
  by jiangshan (@jiangshanmeta) #medium #string
  
  ### Question
  
  Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1. (Inspired by [leetcode 387](https://leetcode.com/problems/first-unique-character-in-a-string/))
  
  > View on GitHub: https://tsch.js.org/9286
*/

import type { Equal, Expect } from '@type-challenges/utils'

/* _____________ Your Code Here _____________ */
type FirstUniqueCharIndex<T extends string, N extends string = T, R extends unknown[] = []> = T extends '' ? -1 :
    (N extends `${infer F1}${infer S}` ?
        (T extends `${string}${F1}${string}${F1}${string}` ? FirstUniqueCharIndex<T, S, [...R, unknown]> : R['length']) : -1
    );
/* _____________ Test Cases _____________ */

type cases = [
  Expect<Equal<FirstUniqueCharIndex<'leetcode'>, 0>>,
  Expect<Equal<FirstUniqueCharIndex<'loveleetcode'>, 2>>,
  Expect<Equal<FirstUniqueCharIndex<'aabb'>, -1>>,
  Expect<Equal<FirstUniqueCharIndex<''>, -1>>,
]



/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/9286/answer
  > View solutions: https://tsch.js.org/9286/solutions
  > More Challenges: https://tsch.js.org
*/

