/*
  59 - Get Optional
  -------
  by Zheeeng (@zheeeng) #困难 #utils #infer
  
  ### 题目
  
  > 由谷歌自动翻译，欢迎 PR 改进翻译质量。
  
  实现高级util类型`GetOptional<T>`，该类型保留所有可选字段
  
  例如
  
  ```ts
  type I = GetOptional<{ foo: number, bar?: string }> // expected to be { bar?: string }
  ```
  
  > 在 Github 上查看：https://tsch.js.org/59/zh-CN
*/
import { Equal, Expect } from '@type-challenges/utils'


/* _____________ 你的代码 _____________ */

type GetOptional<T> = {
  [K in keyof T as {} extends Pick<T, K>? K:never] : T[K];
}

/* _____________ 测试用例 _____________ */

type cases = [
    Expect<Equal<GetOptional<{ foo: number, bar?: string }>, { bar?: string }>>,
    Expect<Equal<GetOptional<{ foo: undefined, bar?: undefined }>, { bar?: undefined }>>,
]


/* _____________ 下一步 _____________ */
/*
  > 分享你的解答：https://tsch.js.org/59/answer/zh-CN
  > 查看解答：https://tsch.js.org/59/solutions
  > 更多题目：https://tsch.js.org/zh-CN
*/

