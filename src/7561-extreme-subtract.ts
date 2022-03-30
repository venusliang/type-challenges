/*
  7561 - Subtract
  -------
  by Lo (@LoTwT) #extreme #tuple
  
  ### Question
  
  Implement the type Subtraction that is ` - ` in Javascript by using BuildTuple.
  
  If the minuend is less than the subtrahend, it should be `never`.
  
  It's a simple version.
  
  For example
  
  ```ts
  Subtract<2, 1> // expect to be 1
  Subtract<1, 2> // expect to be never
  ```
  
  > View on GitHub: https://tsch.js.org/7561
*/
import { Equal, Expect } from '@type-challenges/utils'


/* _____________ Your Code Here _____________ */
type GetLenTuple<L extends number, R extends any[]=[]> = R['length'] extends L ? R:GetLenTuple<L, [...R,any]>;

type N1 = [any];
type N2 = [any, any];
type N3 = [any, any, any];
type N4 = [any, any, any, any];
type N5 = [any, any, any, any, any];
type N6 = [any, any, any, any, any, any];
type N7 = [any, any, any, any, any, any, any];
type N8 = [any, any, any, any, any, any, any, any];
type N9 = [any, any, any, any, any, any, any, any, any];
type N10 = [...N9, any];

type DigitToTuple<N, L = N extends string | number ? `${N}` : ''> = L extends `${N1['length']}` ? N1 
    : L extends `2`? N2 
    : L extends `3`? N3 
    : L extends `4`? N4 
    : L extends `5`? N5 
    : L extends `6`? N6 
    : L extends `7`? N7 
    : L extends `8`? N8 
    : L extends `9`? N9 
    : [];

type ToTuple<T extends bigint | string | number, S = `${T}`> = S extends `${infer F}${infer O}` ? [F, ...ToTuple<O>] : [];

type TupleTail<T extends any[]> = T extends [...infer F, any] ? F : never;

type TupleLast<T extends any[]> = T extends [...any, infer L] ? L : never;

type Comparator<L extends any[], R extends any[]> = L extends [...R, ...infer O] ? O['length'] extends 0 ? 0 : 1 : -1;

type LowSub<M extends any[], S extends any[]> = 
  // 正常相减 
  M extends [...S, ...infer N] ? [N['length'], []] 
  // 进位再减 
  : [...N10, ...M] extends [...S, ...infer N] ? [N['length'],[any]]
  : never;

type OrderSub<M extends any[], S extends any[], R extends any[] = [], P extends any[] = [], ML extends any[] =DigitToTuple<TupleLast<M>>, SL extends any [] = [...DigitToTuple<TupleLast<S>>, ...P] > = 
  // 被减数无了
  M extends [] ? ( P extends [] ? R:never)
  // 无减数
  : S extends []? R
  : LowSub<ML, SL> extends [infer R1, infer N] ? OrderSub<TupleTail<M>, TupleTail<S>, [R1,...R], (N extends any[]?N:[])>
  :never;

type TupleRepeat<T extends any[], N extends any, L extends any[] = [any], NS = N extends string | number ? `${N}` : ''> = NS extends '0'
  ? [] : `${L['length']}` extends NS
  ? T : [...T, ...TupleRepeat<T, N, [...L, any]>];

type Result<T extends any[], B extends any[] = [any], R extends any[]=[]> = T extends [...infer F, infer L] ? Result<F, TupleRepeat<B, 10>, [...R, ...TupleRepeat<B, L>]> : R['length'];

// M => minuend, S => subtrahend
type Subtract<M extends number, S extends number, Mu extends any[] = ToTuple<M>, Su extends any[] = ToTuple<S>> = 
  Comparator<GetLenTuple<Mu['length']>, GetLenTuple<Su['length']>> extends -1 ? never 
  :Result<OrderSub<Mu, Su>>;


/* _____________ Test Cases _____________ */

type cases = [
  Expect<Equal<Subtract<1, 1>, 0>>,
  Expect<Equal<Subtract<2, 1>, 1>>,
  Expect<Equal<Subtract<1, 2>, never>>,
  // @ts-expect-error
  Expect<Equal<Subtract<1000, 999>, 1>>
]



/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/7561/answer
  > View solutions: https://tsch.js.org/7561/solutions
  > More Challenges: https://tsch.js.org
*/

