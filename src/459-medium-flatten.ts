/*
  459 - Flatten
  -------
  by zhouyiming (@chbro) #中等 #array
  
  ### 题目
  
  In this challenge, you would need to write a type that takes an array and emitted the flatten array type.
  
  For example:
  
  ```ts
  type flatten = Flatten<[1, 2, [3, 4], [[[5]]]]> // [1, 2, 3, 4, 5]
  ```
  
  > 在 Github 上查看：https://tsch.js.org/459/zh-CN
*/
import { Equal, Expect } from "@type-challenges/utils";

/* _____________ 你的代码 _____________ */
type Flatten<A> = A extends [infer F, ...(infer O)]
  ? [...(F extends any[] ? Flatten<F> : [F]), ...Flatten<O>]
  : [];

/* _____________ 测试用例 _____________ */

type cases = [
  Expect<Equal<Flatten<[]>, []>>,
  Expect<Equal<Flatten<[1, 2, 3, 4]>, [1, 2, 3, 4]>>,
  Expect<Equal<Flatten<[1, [2]]>, [1, 2]>>,
  Expect<Equal<Flatten<[1, 2, [3, 4], [[[5]]]]>, [1, 2, 3, 4, 5]>>,
  Expect<
    Equal<
      Flatten<[{ foo: "bar"; 2: 10 }, "foobar"]>,
      [{ foo: "bar"; 2: 10 }, "foobar"]
    >
  >
];

/* _____________ 下一步 _____________ */
/*
  > 分享你的解答：https://tsch.js.org/459/answer/zh-CN
  > 查看解答：https://tsch.js.org/459/solutions
  > 更多题目：https://tsch.js.org/zh-CN
*/
