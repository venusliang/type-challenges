/*
  476 - Sum
  -------
  by null (@uid11) #extreme #math #template-literal
  
  ### Question
  
  Implement a type `Sum<A, B>` that summing two non-negative integers and returns the sum as a string. Numbers can be specified as a string, number, or bigint.
  
  For example,
  
  ```ts
  type T0 = Sum<2, 3> // '5'
  type T1 = Sum<'13', '21'> // '34'
  type T2 = Sum<'328', 7> // '335'
  type T3 = Sum<1_000_000_000_000n, '123'> // '1000000000123'
  ```
  
  > View on GitHub: https://tsch.js.org/476
*/
import { Equal, Expect } from '@type-challenges/utils'


/* _____________ Your Code Here _____________ */

type N1 = [any];
type N2 = [any, any];
type N3 = [any, any, any];
type N4 = [any, any, any, any];
type N5 = [any, any, any, any, any];
type N6 = [any, any, any, any, any, any];
type N7 = [any, any, any, any, any, any, any];
type N8 = [any, any, any, any, any, any, any, any];
type N9 = [any, any, any, any, any, any, any, any, any];

type NumToTuple<N, L = N extends string | number ? `${N}` : ''> =
    L extends `${N1['length']}`
    ? N1 : L extends `${N2['length']}`
    ? N2 : L extends `${N3['length']}`
    ? N3 : L extends `${N4['length']}`
    ? N4 : L extends `${N5['length']}`
    ? N5 : L extends `${N6['length']}`
    ? N6 : L extends `${N7['length']}`
    ? N7 : L extends `${N8['length']}`
    ? N8 : L extends `${N9['length']}`
    ? N9 : [];

type ToTuple<T extends bigint | string | number, S = `${T}`> = S extends `${infer F}${infer O}` ? [F, ...ToTuple<O>] : [];

type TuplePop<T extends any[]> = T extends [...any, infer O] ? O : '';

type TupleTail<T extends any[]> = T extends [...infer F, any] ? F : T;

type TensDigitSum<A, B, C = 0, R = [...NumToTuple<A>, ...NumToTuple<B>, ...NumToTuple<C>]['length']> = R extends number ? R : 0;

type SumToCarry<A, B, C, R extends string[] = ToTuple<TensDigitSum<A, B, C>>> = R extends [infer F, infer O] ? [F, O] : ['', R[0]];

type TupleToString<T extends any[]> = T extends [string, ...infer O] ? `${T[0]}${TupleToString<O>}` : '';

type TupleSum<A extends any[], B extends any[], R extends any[] = [], C extends any = ''> = A extends []
    ? (C extends '' ? TupleToString<[...B, ...R]> : TupleSum<B, [C], R>) : B extends []
    ? (C extends '' ? TupleToString<[...A, ...R]> : TupleSum<A, [C], R>) : SumToCarry<TuplePop<A>, TuplePop<B>, C> extends [infer C1, infer T]
    ? TupleSum<TupleTail<A>, TupleTail<B>, [T, ...R], C1> : TupleToString<R>;

type Sum<A extends string | number | bigint, B extends string | number | bigint> = TupleSum<ToTuple<A>, ToTuple<B>, []>;

/* _____________ Test Cases _____________ */

type cases = [
  Expect<Equal<Sum<2, 3>, '5'>>,
  Expect<Equal<Sum<'13', '21'>, '34'>>,
  Expect<Equal<Sum<'328', 7>, '335'>>,
  Expect<Equal<Sum<1_000_000_000_000n, '123'>, '1000000000123'>>,
  Expect<Equal<Sum<9999, 1>, '10000'>>,
  Expect<Equal<Sum<4325234, '39532'>, '4364766'>>,
  Expect<Equal<Sum<728, 0>, '728'>>,
  Expect<Equal<Sum<'0', 213>, '213'>>,
  Expect<Equal<Sum<0, '0'>, '0'>>
]



/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/476/answer
  > View solutions: https://tsch.js.org/476/solutions
  > More Challenges: https://tsch.js.org
*/

