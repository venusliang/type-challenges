/*
  612 - KebabCase
  -------
  by Johnson Chu (@johnsoncodehk) #medium #template-literal
  
  ### Question
  
  `FooBarBaz` -> `for-bar-baz`
  
  > View on GitHub: https://tsch.js.org/612
*/
import { Equal, Expect } from "@type-challenges/utils";

/* _____________ Your Code Here _____________ */
type IsLetter<S extends string> = Uppercase<S> extends Lowercase<S> ? false : true;

type IsCapital<S extends string> = IsLetter<S> extends true ? (S extends Capitalize<S> ? true : false) : false;

type KebabCase<S extends string, C extends string = ''> = S extends `${infer F}${infer O}` ? `${IsCapital<F> extends true ? `${C}${Lowercase<F>}` : F}${KebabCase<O, '-'>}` : S;

type s1 = KebabCase<"FooBarBaz">
/* _____________ Test Cases _____________ */

type cases = [
  Expect<Equal<KebabCase<"FooBarBaz">, "foo-bar-baz">>,
  Expect<Equal<KebabCase<"fooBarBaz">, "foo-bar-baz">>,
  Expect<Equal<KebabCase<"foo-bar">, "foo-bar">>,
  Expect<Equal<KebabCase<"foo_bar">, "foo_bar">>,
  Expect<Equal<KebabCase<"Foo-Bar">, "foo--bar">>,
  Expect<Equal<KebabCase<"ABC">, "a-b-c">>,
  Expect<Equal<KebabCase<"-">, "-">>,
  Expect<Equal<KebabCase<"">, "">>,
  Expect<Equal<KebabCase<"😎">, "😎">>
];

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/612/answer
  > View solutions: https://tsch.js.org/612/solutions
  > More Challenges: https://tsch.js.org
*/
