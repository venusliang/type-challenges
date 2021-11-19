/*
  517 - Multiply
  -------
  by null (@uid11) #extreme #math #template-literal
  
  ### Question
  
  **This challenge continues from [476 - Sum](https://tsch.js.org/476), it is recommended that you finish that one first, and modify your code based on it to start this challenge.**
  
  Implement a type `Multiply<A, B>` that multiplies two non-negative integers and returns their product as a string. Numbers can be specified as string, number, or bigint.
  
  For example,
  
  ```ts
  type T0 = Multiply<2, 3> // '6'
  type T1 = Multiply<3, '5'> // '15'
  type T2 = Multiply<'4', 10> // '40'
  type T3 = Multiply<0, 16> // '0'
  type T4 = Multiply<'13', '21'> // '273'
  type T5 = Multiply<'43423', 321543n> // '13962361689'
  ```
  
  > View on GitHub: https://tsch.js.org/517
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

type Num = string | number | bigint;

type TupleSumTuple<A extends any[], B extends any[], R extends any[] = [], C extends any = ''> = A extends []
    ? (C extends '' ? [...B, ...R] : TupleSumTuple<B, [C], R>) : B extends []
    ? (C extends '' ? [...A, ...R] : TupleSumTuple<A, [C], R>) : SumToCarry<TuplePop<A>, TuplePop<B>, C> extends [infer C1, infer T]
    ? TupleSumTuple<TupleTail<A>, TupleTail<B>, [T, ...R], C1> : R;

type Cumulative<A extends any[], N extends Num, L extends any[] = [any], R extends any[] = A> = `${N}` extends `${L['length']}` ? R : Cumulative<A, N, [...L, any], TupleSumTuple<R, A>>;

type MultiplyByTuple<A extends any[], B extends any[], C extends any[] = [], R extends any[] = []> = B extends [] ? R : MultiplyByTuple<A, TupleTail<B>, [...C, '0'], TupleSumTuple<R, [...Cumulative<A, TuplePop<B>>, ...C]>>

type Multiply<A extends string | number | bigint, B extends string | number | bigint> = `${A}` extends '0'
    ? '0' : `${B}` extends '0'
    ? '0' : TupleToString<MultiplyByTuple<ToTuple<A>, ToTuple<B>>>;


/* _____________ Test Cases _____________ */

type cases = [
  Expect<Equal<Multiply<2, 3>, '6'>>,
  Expect<Equal<Multiply<3, '5'>, '15'>>,
  Expect<Equal<Multiply<'4', 10>, '40'>>,
  Expect<Equal<Multiply<0, 16>, '0'>>,
  Expect<Equal<Multiply<'13', '21'>, '273'>>,
  Expect<Equal<Multiply<'43423', 321543n>, '13962361689'>>,
  Expect<Equal<Multiply<9999, 1>, '9999'>>,
  Expect<Equal<Multiply<4325234, '39532'>, '170985150488'>>,
  Expect<Equal<Multiply<100_000n, '1'>, '100000'>>,
  Expect<Equal<Multiply<259, 9125385>, '2363474715'>>,
  Expect<Equal<Multiply<9, 99>, '891'>>,
  Expect<Equal<Multiply<315, '100'>, '31500'>>,
  Expect<Equal<Multiply<11n, 13n>, '143'>>,
  Expect<Equal<Multiply<728, 0>, '0'>>,
  Expect<Equal<Multiply<'0', 213>, '0'>>,
  Expect<Equal<Multiply<0, '0'>, '0'>>
]



/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/517/answer
  > View solutions: https://tsch.js.org/517/solutions
  > More Challenges: https://tsch.js.org
*/

