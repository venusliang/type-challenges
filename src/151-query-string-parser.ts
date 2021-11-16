/*
  151 - Query String Parser
  -------
  by Pig Fang (@g-plane) #extreme #template-literal
  
  ### Question
  
  You're required to implement a type-level parser to parse URL query string into a object literal type.
  
  Some detailed requirements:
  
  - Value of a key in query string can be ignored but still be parsed to `true`. For example, `'key'` is without value, so the parser result is `{ key: true }`.
  - Duplicated keys must be merged into one. If there are different values with the same key, values must be merged into a tuple type.
  - When a key has only one value, that value can't be wrapped into a tuple type.
  - If values with the same key appear more than once, it must be treated as once. For example, `key=value&key=value` must be treated as `key=value` only.
  
  > View on GitHub: https://tsch.js.org/151
*/
import { Equal, Expect } from "@type-challenges/utils";

/* _____________ Your Code Here _____________ */
type Result<V1, V2> = V1 extends V2 ? V1 : V1 extends [...infer O] ? [...O, V2] : [V1, V2];

type MergeResult<T, K extends string, V, R = T & { [key in K]: V }> = K extends keyof T
    ? { [K1 in keyof T]: K extends K1 ? Result<T[K1], V> : T[K1] }
    : { [K2 in keyof R]: R[K2] };

type ParseKV<S extends string, R> = S extends `${infer K}=${infer V}` ? MergeResult<R, K, V extends '' ? true : V> : '' extends S ? R : MergeResult<R, S, true>

type ParseQueryString<S extends string, R = {}> = S extends `${infer F}&${infer O}` ? ParseQueryString<O, ParseKV<F, R>> : ParseKV<S, R>;

/* _____________ Test Cases _____________ */

type cases = [
  Expect<Equal<ParseQueryString<"">, {}>>,
  Expect<Equal<ParseQueryString<"k1">, { k1: true }>>,
  Expect<Equal<ParseQueryString<"k1&k1">, { k1: true }>>,
  Expect<Equal<ParseQueryString<"k1&k2">, { k1: true; k2: true }>>,
  Expect<Equal<ParseQueryString<"k1=v1">, { k1: "v1" }>>,
  Expect<Equal<ParseQueryString<"k1=v1&k1=v2">, { k1: ["v1", "v2"] }>>,
  Expect<Equal<ParseQueryString<"k1=v1&k2=v2">, { k1: "v1"; k2: "v2" }>>,
  Expect<
    Equal<ParseQueryString<"k1=v1&k2=v2&k1=v2">, { k1: ["v1", "v2"]; k2: "v2" }>
  >,
  Expect<Equal<ParseQueryString<"k1=v1&k2">, { k1: "v1"; k2: true }>>,
  Expect<Equal<ParseQueryString<"k1=v1&k1=v1">, { k1: "v1" }>>
];

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/151/answer
  > View solutions: https://tsch.js.org/151/solutions
  > More Challenges: https://tsch.js.org
*/
