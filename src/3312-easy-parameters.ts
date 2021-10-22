/*
  3312 - Parameters
  -------
  by midorizemi (@midorizemi) #简单 #infer #tuple #built-in
  
  ### 题目
  
  实现内置的 Parameters<T> 类型，而不是直接使用它，可参考[TypeScript官方文档](https://www.typescriptlang.org/docs/handbook/utility-types.html#parameterstype)。
  
  > 在 Github 上查看：https://tsch.js.org/3312/zh-CN
*/
import { Equal, Expect, ExpectFalse, NotEqual } from "@type-challenges/utils";

/* _____________ 你的代码 _____________ */

type MyParameters<T extends (...args: any[]) => any> = T extends (
  ...args: infer P
) => any
  ? P
  : never;

/* _____________ 测试用例 _____________ */

const foo = (arg1: string, arg2: number): void => {};
const bar = (arg1: boolean, arg2: { a: "A" }): void => {};
const baz = (): void => {};

type cases = [
  Expect<Equal<MyParameters<typeof foo>, [string, number]>>,
  Expect<Equal<MyParameters<typeof bar>, [boolean, { a: "A" }]>>,
  Expect<Equal<MyParameters<typeof baz>, []>>
];

/* _____________ 下一步 _____________ */
/*
  > 分享你的解答：https://tsch.js.org/3312/answer/zh-CN
  > 查看解答：https://tsch.js.org/3312/solutions
  > 更多题目：https://tsch.js.org/zh-CN
*/
