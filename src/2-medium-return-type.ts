/*
  2 - 获取函数返回类型
  -------
  by Anthony Fu (@antfu) #中等 #infer #built-in
  
  ### 题目
  
  不使用 `ReturnType` 实现 TypeScript 的 `ReturnType<T>` 范型。
  
  例如：
  
  ```ts
  const fn = (v: boolean) => {
    if (v)
      return 1
    else
      return 2
  }
  
  type a = MyReturnType<typeof fn> // 应推导出 "1 | 2"
  ```
  
  > 在 Github 上查看：https://tsch.js.org/2/zh-CN
*/
import { Equal, Expect } from "@type-challenges/utils";

/* _____________ 你的代码 _____________ */

type MyReturnType<T extends (...args: any) => any> = T extends (
  ...args: any
) => infer R
  ? R
  : never;

/* _____________ 测试用例 _____________ */

type ComplexObject = {
  a: [12, "foo"];
  bar: "hello";
  prev(): number;
};

const fn = (v: boolean) => (v ? 1 : 2);
const fn1 = (v: boolean, w: any) => (v ? 1 : 2);

type cases = [
  Expect<Equal<string, MyReturnType<() => string>>>,
  Expect<Equal<123, MyReturnType<() => 123>>>,
  Expect<Equal<ComplexObject, MyReturnType<() => ComplexObject>>>,
  Expect<Equal<Promise<boolean>, MyReturnType<() => Promise<boolean>>>>,
  Expect<Equal<() => "foo", MyReturnType<() => () => "foo">>>,
  Expect<Equal<1 | 2, MyReturnType<typeof fn>>>,
  Expect<Equal<1 | 2, MyReturnType<typeof fn1>>>
];

/* _____________ 下一步 _____________ */
/*
  > 分享你的解答：https://tsch.js.org/2/answer/zh-CN
  > 查看解答：https://tsch.js.org/2/solutions
  > 更多题目：https://tsch.js.org/zh-CN
*/
