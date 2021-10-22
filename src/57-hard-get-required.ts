/*
  57 - Get Required
  -------
  by Zheeeng (@zheeeng) #困难 #utils #infer
  
  ### 题目
  
  > 由谷歌自动翻译，欢迎 PR 改进翻译质量。
  
  实现高级util类型`GetRequired<T>`，该类型保留所有必填字段
  
  例如
  
  ```ts
  type I = GetRequired<{ foo: number, bar?: string }> // expected to be { foo: number }
  ```
  
  > 在 Github 上查看：https://tsch.js.org/57/zh-CN
*/
import { Equal, Expect } from "@type-challenges/utils";

/* _____________ 你的代码 _____________ */

type GetRequiredKeys<T, R extends Required<T> = Required<T>> = {
  [K in keyof T]: T[K] extends R[K] ? K : never;
}[keyof T];

type GetRequired1<T> = Pick<T, GetRequiredKeys<T>>;

type GetRequired<T, P extends Required<T> = Required<T>> = {
  [K in keyof T as T[K] extends P[K]?K:never]: P[K];
};


/* _____________ 测试用例 _____________ */

type cases = [
  Expect<Equal<GetRequired<{ foo: number; bar?: string }>, { foo: number }>>,
  Expect<
    Equal<GetRequired<{ foo: undefined; bar?: undefined }>, { foo: undefined }>
  >
];

/* _____________ 下一步 _____________ */
/*
  > 分享你的解答：https://tsch.js.org/57/answer/zh-CN
  > 查看解答：https://tsch.js.org/57/solutions
  > 更多题目：https://tsch.js.org/zh-CN
*/
