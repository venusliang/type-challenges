/*
  18 - 获取元组长度
  -------
  by sinoon (@sinoon) #简单 #tuple
  
  ### 题目
  
  > 欢迎 PR 改进翻译质量。
  
  创建一个通用的`Length`，接受一个`readonly`的数组，返回这个数组的长度。
  
  例如：
  
  ```ts
  type tesla = ['tesla', 'model 3', 'model X', 'model Y']
  type spaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT']
  
  type teslaLength = Length<tesla> // expected 4
  type spaceXLength = Length<spaceX> // expected 5
  ```
  
  > 在 Github 上查看：https://tsch.js.org/18/zh-CN
*/
import { Equal, Expect } from "@type-challenges/utils";

/* _____________ 你的代码 _____________ */

type Length<T extends readonly any[]> = T["length"];

/* _____________ 测试用例 _____________ */

const tesla = ["tesla", "model 3", "model X", "model Y"] as const;
const spaceX = [
  "FALCON 9",
  "FALCON HEAVY",
  "DRAGON",
  "STARSHIP",
  "HUMAN SPACEFLIGHT"
] as const;

type cases = [
  Expect<Equal<Length<typeof tesla>, 4>>,
  Expect<Equal<Length<typeof spaceX>, 5>>,
  // @ts-expect-error
  Length<5>,
  // @ts-expect-error
  Length<"hello world">
];

let a = [1, 2, 3];

/* _____________ 下一步 _____________ */
/*
  > 分享你的解答：https://tsch.js.org/18/answer/zh-CN
  > 查看解答：https://tsch.js.org/18/solutions
  > 更多题目：https://tsch.js.org/zh-CN
*/
