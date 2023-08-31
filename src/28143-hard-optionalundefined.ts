/*
  28143 - OptionalUndefined
  -------
  by Jesus The Hun (@JesusTheHun) #hard

  ### Question

  Implement the util type `OptionalUndefined<T, Props>` that turns all the properties of `T` that can be `undefined`, into optional properties. In addition, a second -optional- generic `Props` can be passed to restrict the properties that can be altered.

  ```ts
  OptionalUndefined<{ value: string | undefined, description: string }>
  // { value?: string | undefined; description: string }

  OptionalUndefined<{ value: string | undefined, description: string | undefined, author: string | undefined }, 'description' | 'author'>
  // { value: string | undefined; description?: string | undefined, author?: string | undefined }
  ```

  > View on GitHub: https://tsch.js.org/28143
*/

/* _____________ Your Code Here _____________ */

type OptionalUndefinedKey<T, Props extends keyof T> = {
    [K in keyof T]: undefined extends T[K] ? (K extends Props ? K : never) : never
}[keyof T]

type OptionalUndefined<T, 
Props extends keyof T = keyof T,
 OptionalKey extends keyof T = OptionalUndefinedKey<T, Props>
 > = Omit<{ [K in Exclude<keyof T, OptionalKey>]: T[K] } & { [K in OptionalKey]?: T[K] }, never>

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'
import { ExpectFalse, NotEqual } from '@type-challenges/utils'

type cases = [
  Expect<Equal<OptionalUndefined<{ value: string | undefined }, 'value'>, { value?: string | undefined }>>,
  Expect<Equal<OptionalUndefined<{ value: string; desc: string }, 'value'>, { value: string; desc: string }>>,
  Expect<Equal<OptionalUndefined<{ value: string | undefined; desc: string }, 'value'>, { value?: string; desc: string }>>,
  Expect<Equal<OptionalUndefined<{ value: string | undefined; desc: string | undefined }, 'value'>, { value?: string | undefined; desc: string | undefined }>>,
  Expect<Equal<OptionalUndefined<{ value: string | undefined; desc: string }, 'value' | 'desc'>, { value?: string; desc: string }>>,
  Expect<Equal<OptionalUndefined<{ value: string | undefined; desc: string | undefined }>, { value?: string; desc?: string }>>,
  Expect<Equal<OptionalUndefined<{ value?: string }, 'value'>, { value?: string }>>,
  Expect<Equal<OptionalUndefined<{ value?: string }>, { value?: string }>>,
]

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/28143/answer
  > View solutions: https://tsch.js.org/28143/solutions
  > More Challenges: https://tsch.js.org
*/
