/*
  15 - 最后一个元素
  -------
  by Anthony Fu (@antfu) #中等 #array
  
  ### 题目
  
  > 由谷歌自动翻译，欢迎 PR 改进翻译质量。
  
  >在此挑战中建议使用TypeScript 4.0
  
  实现一个通用`Last<T>`，它接受一个数组`T`并返回其最后一个元素的类型。
  
  例如
  
  ```ts
  type arr1 = ['a', 'b', 'c']
  type arr2 = [3, 2, 1]
  
  type tail1 = Last<arr1> // expected to be 'c'
  type tail2 = Last<arr2> // expected to be 1
  ```
  
  > 在 Github 上查看：https://tsch.js.org/15/zh-CN
*/
import { Equal, Expect } from "@type-challenges/utils";

/* _____________ 你的代码 _____________ */

type Last<T extends any[]> = [unknown, ...T][T["length"]];

type Last1<T extends any[]> = T extends [...(infer A), infer L] ? L : never;

/* _____________ 测试用例 _____________ */

type cases = [
  Expect<Equal<Last<[3, 2, 1]>, 1>>,
  Expect<Equal<Last<[() => 123, { a: string }]>, { a: string }>>
];

/* _____________ 下一步 _____________ */
/*
  > 分享你的解答：https://tsch.js.org/15/answer/zh-CN
  > 查看解答：https://tsch.js.org/15/solutions
  > 更多题目：https://tsch.js.org/zh-CN
*/
