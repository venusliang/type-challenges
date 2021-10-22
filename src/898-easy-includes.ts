/*
  898 - Includes
  -------
  by null (@kynefuk) #简单 #array
  
  ### 题目
  
  在类型系统里实现 JavaScript 的 `Array.includes` 方法，这个类型接受两个参数，返回的类型要么是 `true` 要么是 `false`。
  
  举例来说，
  
  ```ts
  type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'> // expected to be `false`
  ```
  
  > 在 Github 上查看：https://tsch.js.org/898/zh-CN
*/
import { Equal, Expect } from '@type-challenges/utils'


/* _____________ 你的代码 _____________ */

type IsEx<C, P> = C extends P ? true : false;
type Eq<L, R> = [L, R] extends [R, L] ? true : false;
type TupleTail<T extends readonly any[]> = T extends [x: any, ...other: infer R] ? R : [];

type IncludesRecursively<T extends readonly any[], Item, Target> = Eq<Item, Target> extends true ? true : T extends [] ? false : IncludesRecursively<TupleTail<T>, T[0], Target>;

type Includes1<T extends readonly any[], U> = IncludesRecursively<TupleTail<T>, T[0], U>;


type Includes<T extends readonly any[], U> = T extends [infer L, ...infer R]
  ? [U, L] extends [L, U]
    ? true
    : Includes<R, U>
  : false;

type S = Includes<[{}], { a: 'A' }>;

/* _____________ 测试用例 _____________ */

type cases = [
  Expect<Equal<Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Kars'>, true>>,
  Expect<Equal<Includes<['Kars', 'Esidisi','Wamuu', 'Santana'], 'Dio'>, false>>,
  Expect<Equal<Includes<[1, 2, 3, 5, 6, 7], 7>, true>>,
  Expect<Equal<Includes<[1, 2, 3, 5, 6, 7], 4>, false>>,
  Expect<Equal<Includes<[1, 2, 3], 2>, true>>,
  Expect<Equal<Includes<[1, 2, 3], 1>, true>>,
  Expect<Equal<Includes<[{}], { a: 'A' }>, false>>,
  Expect<Equal<Includes<[boolean, 2, 3, 5, 6, 7], false>, false>>,
  Expect<Equal<Includes<[true, 2, 3, 5, 6, 7], boolean>, false>>,
  Expect<Equal<Includes<[false, 2, 3, 5, 6, 7], false>, true>>,
]



/* _____________ 下一步 _____________ */
/*
  > 分享你的解答：https://tsch.js.org/898/answer/zh-CN
  > 查看解答：https://tsch.js.org/898/solutions
  > 更多题目：https://tsch.js.org/zh-CN
*/

