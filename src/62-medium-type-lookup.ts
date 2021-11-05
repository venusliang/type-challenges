/*
  62 - Type Lookup
  -------
  by Anthony Fu (@antfu) #中等 #union #map
  
  ### 题目
  
  > 由谷歌自动翻译，欢迎 PR 改进翻译质量。
  
  有时，您可能希望根据其属性在并集中查找类型。
  
  在此挑战中，我们想通过在联合`Cat | Dog`中搜索公共`type`字段来获取相应的类型。换句话说，在以下示例中，我们期望`LookUp<Dog | Cat, 'dog'>`获得`Dog`，`LookUp<Dog | Cat, 'cat'>`获得`Cat`。
  
  ```ts
  interface Cat {
    type: 'cat'
    breeds: 'Abyssinian' | 'Shorthair' | 'Curl' | 'Bengal'
  }
  
  interface Dog {
    type: 'dog'
    breeds: 'Hound' | 'Brittany' | 'Bulldog' | 'Boxer'
    color: 'brown' | 'white' | 'black'
  }
  
  type MyDog = LookUp<Cat | Dog, 'dog'> // expected to be `Dog`
  ```
  
  > 在 Github 上查看：https://tsch.js.org/62/zh-CN
*/

import { Equal, Expect } from "@type-challenges/utils";

/* _____________ 你的代码 _____________ */
interface Base {
  type: string;
  [key: string]: any;
}

type LookUp<U extends Base, T extends Base["type"]> = any;

/* _____________ 测试用例 _____________ */

interface Cat {
  type: "cat";
  breeds: "Abyssinian" | "Shorthair" | "Curl" | "Bengal";
}

interface Dog {
  type: "dog";
  breeds: "Hound" | "Brittany" | "Bulldog" | "Boxer";
  color: "brown" | "white" | "black";
}

type Animal = Cat | Dog;

type LL = LookUp<Animal, "dog">;

type cases = [
  Expect<Equal<LookUp<Animal, "dog">, Dog>>,
  Expect<Equal<LookUp<Animal, "cat">, Cat>>
];

/* _____________ 下一步 _____________ */
/*
  > 分享你的解答：https://tsch.js.org/62/answer/zh-CN
  > 查看解答：https://tsch.js.org/62/solutions
  > 更多题目：https://tsch.js.org/zh-CN
*/
