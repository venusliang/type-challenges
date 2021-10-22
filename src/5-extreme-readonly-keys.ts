/*
  5 - 获取只读字段
  -------
  by Anthony Fu (@antfu) #地狱 #utils #object-keys
  
  ### 题目
  
  > 由谷歌自动翻译，欢迎 PR 改进翻译质量。
  
  实现泛型`GetReadonlyKeys<T>`，该`GetReadonlyKeys<T>`返回对象的只读键的并集。
  
  例如
  
  ```ts
  interface Todo {
    readonly title: string
    readonly description: string
    completed: boolean
  }
  
  type Keys = GetReadonlyKeys<Todo> // expected to be "title" | "description"
  ```
  
  > 在 Github 上查看：https://tsch.js.org/5/zh-CN
*/
import { Equal, Expect } from "@type-challenges/utils";

/* _____________ 你的代码 _____________ */

type If<N, S, R, F = never> = (<T>() => T extends N ? 1 : 2) extends <T>() => T extends S
  ? 1
  : 2
  ? R
  : F;

type GetReadonlyKeys<T> = Exclude<
  keyof T,
  {
    [K in keyof T]: If<{ [F in K]: T[F] }, { -readonly [F in K]: T[F] }, K>;
  }[keyof T]
>;

// use as index type 
type GetReadonlyKeys1<T> =keyof {
 [K in keyof T as If<{ [F in K]: T[F] }, { -readonly [F in K]: T[F] }, never, K>]: K;  
}

/* _____________ 测试用例 _____________ */

type cases = [
  Expect<Equal<"title", GetReadonlyKeys<Todo1>>>,
  Expect<Equal<"title" | "description", GetReadonlyKeys<Todo2>>>
];

interface Todo1 {
  readonly title: string;
  description: string;
  completed: boolean;
}

interface Todo2 {
  readonly title: string;
  readonly description: string;
  completed?: boolean;
}

/* _____________ 下一步 _____________ */
/*
  > 分享你的解答：https://tsch.js.org/5/answer/zh-CN
  > 查看解答：https://tsch.js.org/5/solutions
  > 更多题目：https://tsch.js.org/zh-CN
*/
