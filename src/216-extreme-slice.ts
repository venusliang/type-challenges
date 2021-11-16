/*
  216 - Slice
  -------
  by Anthony Fu (@antfu) #extreme #array
  
  ### Question
  
  Implement the JavaScript `Array.slice` function in the type system. `Slice<Arr, Start, End>` takes the tree argument. The output should be a subarray of `Arr` from index `Start` to `End`. Indexes with negative numbers should be counted from reversely.
  
  For example
  
  ```ts
  type Arr = [1, 2, 3, 4, 5]
  type Result = Slice<Arr, 2, 4> // expected to be [3, 4]
  ```
  
  > View on GitHub: https://tsch.js.org/216
*/
import { Equal, Expect } from '@type-challenges/utils'


/* _____________ Your Code Here _____________ */


type IsNegative<N extends number> = `${N}` extends `-${string}` ? 1 : 2;

type TupleTail<T extends any[], Head extends any[]> = T extends [...Head, ...infer O] ? O : [];

type TupleHead<T extends any[], Tail extends any[]> = T extends [...infer F, ...Tail] ? F : [];

type TupleMiddle<T extends any[], Head extends any[], Tail extends any[]> = T extends [...Head, ...infer O, ...Tail] ? O : [];

type TupleLast<T extends any[]> = T extends [...(any[]), infer L] ? L : undefined;

type NumToTuple<N, R extends any[] = []> = R['length'] extends N ? R : NumToTuple<N, [...R, any]>;

type NegativeToTuple<N extends number, R extends any[] = []> = `-${R['length']}` extends `${N}` ? R : NegativeToTuple<N, [...R, any]>;

type SliceObey<Arr extends any[],
    Start extends number,
    End extends number,
    Len extends any[] = []> = Len['length'] extends End
    ? TupleTail<Len, NumToTuple<Start>> : Arr[0] extends undefined
    ? TupleTail<Len, NumToTuple<Start>> : SliceObey<TupleTail<Arr, [any]>, Start, End, [...Len, Arr[0]]>;

type SliceReverse<Arr extends any[],
    Start extends number,
    End extends number,
    Len extends any[] = []> = `-${Len['length']}` extends `${Start}`
    ? TupleHead<Len, NegativeToTuple<End>> : SliceReverse<TupleHead<Arr, [any]>, Start, End, [TupleLast<Arr>, ...Len]>;

type Slice<Arr extends any[], Start extends number = 0, End extends number = Arr['length']> =
    IsNegative<Start> extends 1
    ? SliceReverse<Arr, Start, End> : IsNegative<End> extends 1
    ? TupleMiddle<Arr, NumToTuple<Start>, NegativeToTuple<End>> : SliceObey<Arr, Start, End>;

/* _____________ Test Cases _____________ */

type Arr = [1, 2, 3, 4, 5]

type cases = [
  // basic
  Expect<Equal<Slice<Arr, 0, 1>, [1]>>,
  Expect<Equal<Slice<Arr, 0, 0>, []>>,
  Expect<Equal<Slice<Arr, 2, 4>, [3, 4]>>,

  // optional args
  Expect<Equal<Slice<[]>, []>>,
  Expect<Equal<Slice<Arr>, Arr>>,
  Expect<Equal<Slice<Arr, 0>, Arr>>,
  Expect<Equal<Slice<Arr, 2>, [3, 4, 5]>>,

  // negative index
  Expect<Equal<Slice<Arr, 0, -1>, [1,2,3,4]>>,
  Expect<Equal<Slice<Arr, -3, -1>, [3,4]>>,

  // invalid
  Expect<Equal<Slice<Arr, 10>, []>>,
  Expect<Equal<Slice<Arr, 1, 0>, []>>,
  Expect<Equal<Slice<Arr, 10, 20>, []>>,
]



/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/216/answer
  > View solutions: https://tsch.js.org/216/solutions
  > More Challenges: https://tsch.js.org
*/

