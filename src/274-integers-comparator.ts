/*
  274 - Integers Comparator
  -------
  by Pig Fang (@g-plane) #extreme #template-literal #math
  
  ### Question
  
  Implement a type-level integers comparator. We've provided an enum for indicating the comparison result, like this:
  
  - If `a` is greater than `b`, type should be `Comparison.Greater`.
  - If `a` and `b` are equal, type should be `Comparison.Equal`.
  - If `a` is lower than `b`, type should be `Comparison.Lower`.
  
  **Note that `a` and `b` can be positive integers or negative integers or zero, even one is positive while another one is negative.**
  
  > View on GitHub: https://tsch.js.org/274
*/
import { Equal, Expect } from '@type-challenges/utils'


/* _____________ Your Code Here _____________ */

enum Comparison {
  Greater,
  Equal,
  Lower,
}

type TupleTail<T extends any[]> = T extends [any, ...infer O] ? O : [];

type IsNegative<N extends number> = `${N}` extends `-${string}` ? 1 : 0;

type NumToTuple<N extends string | number, R extends any[] = []> = `${R['length']}` extends `${N}` ? R : NumToTuple<N, [...R, any]>;

type GetNumLen<N extends number, S extends string = `${N}`, R extends any[] = []> = S extends `${string}${infer O}` ? GetNumLen<N, O, [...R, any]> : R['length'];

type SomeIsNegative<T extends number[]> = T extends [] ? false : IsNegative<T[0]> extends 1 ? true : SomeIsNegative<TupleTail<T>>

type FirstString<T extends string> = T extends `${infer S}${infer O}` ? [S, O] : [T, ''];

type TupleLenComparator<L extends any[], R extends any[]> = L extends [...R, ...infer O] ? O['length'] extends 0 ? 0 : 1 : -1;

type NumToString<T extends number> = IsNegative<T> extends 1 ? `${T}` extends `-${infer O}` ? O : `${T}` : `${T}`;

type PositionComparator<L extends string, R extends string,
    LA extends [string, string] = FirstString<L>,
    RA extends [string, string] = FirstString<R>,
    C = TupleLenComparator<NumToTuple<LA[0]>, NumToTuple<RA[0]>>> = C extends 0 ? (LA[1] extends '' ? 0 : PositionComparator<LA[1], RA[1]>) : C;


// number length comparator
type NumLenComparator<L extends number, R extends number> = TupleLenComparator<NumToTuple<GetNumLen<L>>, NumToTuple<GetNumLen<R>>>;

type NegativeComparator<A extends number, B extends number, LR = NumLenComparator<A, B>> = IsNegative<B> extends 0
    ? Comparison.Lower : IsNegative<A> extends 0
    ? Comparison.Greater : LR extends 1
    ? Comparison.Lower : LR extends -1
    ? Comparison.Greater : PositionComparator<NumToString<A>, NumToString<B>> extends -1
    ? Comparison.Greater : Comparison.Lower;

type NaturalComparator<A extends number, B extends number, LR = NumLenComparator<A, B>> = LR extends 1
    ? Comparison.Greater : LR extends -1
    ? Comparison.Lower : PositionComparator<NumToString<A>, NumToString<B>> extends -1
    ? Comparison.Lower : Comparison.Greater;

type Comparator<A extends number, B extends number> = A extends B
    ? Comparison.Equal : SomeIsNegative<[A, B]> extends true // include negative comparator
    ? NegativeComparator<A, B> : NaturalComparator<A, B>; // natural comparator 

/* _____________ Test Cases _____________ */

type cases = [
  Expect<Equal<Comparator<5, 5>, Comparison.Equal>>,
  Expect<Equal<Comparator<5, 6>, Comparison.Lower>>,
  Expect<Equal<Comparator<5, 8>, Comparison.Lower>>,
  Expect<Equal<Comparator<5, 0>, Comparison.Greater>>,
  Expect<Equal<Comparator<-5, 0>, Comparison.Lower>>,
  Expect<Equal<Comparator<0, 0>, Comparison.Equal>>,
  Expect<Equal<Comparator<0, -5>, Comparison.Greater>>,
  Expect<Equal<Comparator<5, -3>, Comparison.Greater>>,
  Expect<Equal<Comparator<5, -7>, Comparison.Greater>>,
  Expect<Equal<Comparator<-5, -7>, Comparison.Greater>>,
  Expect<Equal<Comparator<-5, -3>, Comparison.Lower>>,
  Expect<Equal<Comparator<-25, -30>, Comparison.Greater>>,
  Expect<Equal<Comparator<15, -23>, Comparison.Greater>>,
  Expect<Equal<Comparator<40, 37>, Comparison.Greater>>,
  Expect<Equal<Comparator<-36, 36>, Comparison.Lower>>,
  Expect<Equal<Comparator<27, 27>, Comparison.Equal>>,
  Expect<Equal<Comparator<-38, -38>, Comparison.Equal>>,
]



/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/274/answer
  > View solutions: https://tsch.js.org/274/solutions
  > More Challenges: https://tsch.js.org
*/

