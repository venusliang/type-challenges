/*
  89 - Required Keys
  -------
  by yituan (@yi-tuan) #困难 #utils
  
  ### 题目
  
  > 由谷歌自动翻译，欢迎 PR 改进翻译质量。
  
  实现高级util类型`RequiredKeys<T>`，该类型将所有必需的键都选择为一个并集。
  
  例如
  
  ```ts
  type Result = RequiredKeys<{ foo: number; bar?: string }>;
  // expected to be “foo”
  ```
  
  > 在 Github 上查看：https://tsch.js.org/89/zh-CN
*/
import { Equal, Expect } from "@type-challenges/utils";

/* _____________ 你的代码 _____________ */

type RequiredKeys<T> = keyof {
  [K in keyof T as {} extends Pick<T, K> ? never : K]: K;
};

/* _____________ 测试用例 _____________ */

type cases = [
  Expect<Equal<RequiredKeys<{ a: number; b?: string }>, "a">>,
  Expect<Equal<RequiredKeys<{ a: undefined; b?: undefined }>, "a">>,
  Expect<
    Equal<
      RequiredKeys<{ a: undefined; b?: undefined; c: string; d: null }>,
      "a" | "c" | "d"
    >
  >,
  Expect<Equal<RequiredKeys<{}>, never>>
];

/* _____________ 下一步 _____________ */
/*
  > 分享你的解答：https://tsch.js.org/89/answer/zh-CN
  > 查看解答：https://tsch.js.org/89/solutions
  > 更多题目：https://tsch.js.org/zh-CN
*/
