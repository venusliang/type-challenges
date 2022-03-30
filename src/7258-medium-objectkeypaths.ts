/*
  7258 - Object Key Paths
  -------
  by CattChen (@ChenKS12138) #hard #object-keys
  
  ### Question
  
  Get all possible paths that could be called by [_.get](https://lodash.com/docs/4.17.15#get) (a lodash function) to get the value of an object
  
  ```typescript
  type T1 = ObjectKeyPaths<{ name: string; age: number }>; // expected to be 'name' | 'age'
  type T2 = ObjectKeyPaths<{
    refCount: number;
    person: { name: string; age: number };
  }>; // expected to be 'refCount' | 'person' | 'person.name' | 'person.age'
  type T3 = ObjectKeyPaths<{ books: [{ name: string; price: number }] }>; // expected to be the superset of 'books' | 'books.0' | 'books[0]' | 'books.[0]' | 'books.0.name' | 'books.0.price' | 'books.length' | 'books.find'
  ```
  
  > View on GitHub: https://tsch.js.org/7258
*/
import { Equal, Expect, ExpectExtends } from "@type-challenges/utils";

/* _____________ Your Code Here _____________ */
type SubKeys<T, K extends string | number> = K extends keyof T ? `${K}${ObjectKeyPaths<T[K], ".">}` : never;

// 示例中的ref数据并非const，无法获取具体下标
type ObjectKeyPaths<T, P extends string = "",  K extends string | number = Extract<keyof T, T extends any[]? number: string>> =
  object extends T ? string :
  T extends  any[] ?  `${P}${K}` | `${P}[${K}]` | `[${K}]` | `${P}${SubKeys<T, K>}` :
  T extends object ? `${P}${K}`| `${P}${SubKeys<T, K>}` :
  never;


/* _____________ Test Cases _____________ */

const ref = {
  count: 1,
  person: {
    name: "cattchen",
    age: 22,
    books: ["book1", "book2"],
    pets: [
      {
        type: "cat"
      }
    ]
  }
};

type cases = [
  Expect<Equal<ObjectKeyPaths<{ name: string; age: number }>, "name" | "age">>,
  Expect<
    Equal<
      ObjectKeyPaths<{
        refCount: number;
        person: { name: string; age: number };
      }>,
      "refCount" | "person" | "person.name" | "person.age"
    >
  >,
  Expect<ExpectExtends<ObjectKeyPaths<typeof ref>, "count">>,
  Expect<ExpectExtends<ObjectKeyPaths<typeof ref>, "person">>,
  Expect<ExpectExtends<ObjectKeyPaths<typeof ref>, "person.name">>,
  Expect<ExpectExtends<ObjectKeyPaths<typeof ref>, "person.age">>,
  Expect<ExpectExtends<ObjectKeyPaths<typeof ref>, "person.books">>,
  Expect<ExpectExtends<ObjectKeyPaths<typeof ref>, "person.pets">>,
  Expect<ExpectExtends<ObjectKeyPaths<typeof ref>, "person.books.0">>,
  Expect<ExpectExtends<ObjectKeyPaths<typeof ref>, "person.books.1">>,
  Expect<ExpectExtends<ObjectKeyPaths<typeof ref>, "person.books[0]">>,
  Expect<ExpectExtends<ObjectKeyPaths<typeof ref>, "person.books.[0]">>,
  Expect<ExpectExtends<ObjectKeyPaths<typeof ref>, "person.pets.0.type">>,
  Expect<Equal<ExpectExtends<ObjectKeyPaths<typeof ref>, "notExist">, false>>
];

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/7258/answer
  > View solutions: https://tsch.js.org/7258/solutions
  > More Challenges: https://tsch.js.org
*/
