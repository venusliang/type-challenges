/*
  14188 - Run-length encoding
  -------
  by Hen Hedymdeith (@alfaproxima) #hard 
  
  ### Question
  
  Given a `string` sequence of a letters f.e. `AAABCCXXXXXXY`. Return run-length encoded string `3AB2C6XY`.
  Also make a decoder for that string.
  
  > View on GitHub: https://tsch.js.org/14188
*/
/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type StrF<S> = S extends `${infer F}${string}` ? F : never;
type StrL<S> = S extends `${any}${infer L}` ? L : never;

type RepeatStr<S extends string, N extends string, T extends string[] = [], R extends string = ""> = N extends `${T['length']}` ? R : RepeatStr<S, N, [...T, S], `${R}${S}`>;

type Len<T extends any[]> = T extends [any] ? "" : T['length'];

type GetRepeat<S extends string, R extends string, T extends any[] = []> = S extends `${infer F1}${infer L}`
    ? (F1 extends R ? GetRepeat<L, R, [...T, any]> : [`${Len<T>}${R}`, S])
    : [`${Len<T>}${R}`, ''];

/* _____________ Your Code Here _____________ */

type Encode<S extends string, R extends string = ""> = S extends `${infer F1}${any}`
    ? (GetRepeat<S, F1> extends [infer R1, infer R2] ? Encode<R2 & string, `${R}${R1 & string}`> : never)
    : R;

type Decode<S extends string, R extends string = ""> = S extends `${infer F1}${infer L}`
    ? (F1 extends `${number}` ? Decode<StrL<L>, `${R}${RepeatStr<StrF<L>, F1>}`> : Decode<L, `${R}${F1}`>)
    : R;


type cases = [
  // Raw string -> encoded string
  Expect<Equal<Encode<'AAABCCXXXXXXY'>, '3AB2C6XY'>>,

  // Encoded string -> decoded string
  Expect<Equal<Decode<'3AB2C6XY'>, 'AAABCCXXXXXXY'>>,
]



/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/14188/answer
  > View solutions: https://tsch.js.org/14188/solutions
  > More Challenges: https://tsch.js.org
*/

