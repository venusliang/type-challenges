/*
  9155 - ValidDate
  -------
  by ch3cknull (@ch3cknull) #hard 
  
  ### Question
  
  Implement a type `ValidDate`, which takes an input type T and returns whether T is a valid date.
  
  **Leap year is not considered**
  
  Good Luck!
  
  ```ts
  ValidDate<'0102'> // true
  ValidDate<'0131'> // true
  ValidDate<'1231'> // true
  ValidDate<'0229'> // false
  ValidDate<'0100'> // false
  ValidDate<'0132'> // false
  ValidDate<'1301'> // false
  ```
  
  > View on GitHub: https://tsch.js.org/9155
*/
import type { Equal, Expect } from "@type-challenges/utils";

/* _____________ Your Code Here _____________ */
type LenTuple<L extends number | string, R extends any[] = []> = `${R['length']}` extends `${L}` ? R : LenTuple<L, [...R, any]>;

type Month = '01' | '02' | '03' | '04' | '05' | '06' | '07' | '08' | '09' | '10' | '11' | '12';
type LitMonth = "04" | "06" | "09" | "11";
type Feb = "02";
type BigMonth = Exclude<Month, LitMonth | Feb>;

type GetDays<M extends string> = M extends BigMonth
  ? LenTuple<31>
  : M extends LitMonth
  ? LenTuple<30>
  : M extends Feb
  ? LenTuple<28>
  : never;

type ValidDate<T extends string> = T extends `${infer M1}${infer M2}${infer D1}${infer D2}` ?
  (`${M1}${M2}` extends Month ?
    (`${D1}${D2}` extends '00' ? false :
      (GetDays<`${M1}${M2}`> extends [...LenTuple<D1 extends '0' ? D2 : `${D1}${D2}`>, ...any[]] ? true : false)
    ) : false
  ) : false;


/* _____________ Test Cases _____________ */

type cases = [
  Expect<Equal<ValidDate<"0102">, true>>,
  Expect<Equal<ValidDate<"0131">, true>>,
  Expect<Equal<ValidDate<"1231">, true>>,
  Expect<Equal<ValidDate<"0229">, false>>,
  Expect<Equal<ValidDate<"0100">, false>>,
  Expect<Equal<ValidDate<"0132">, false>>,
  Expect<Equal<ValidDate<"1301">, false>>
];

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/9155/answer
  > View solutions: https://tsch.js.org/9155/solutions
  > More Challenges: https://tsch.js.org
*/
