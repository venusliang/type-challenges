type OverloadUnion<F, S = unknown> = F extends (...args: infer T) => infer R
  ? S extends F
    ? never
    : ((...args: T) => R) | OverloadUnion<S & F, S & ((...args: T) => R)>
  : never;

type OverloadToUnion<F> = Exclude<
  OverloadUnion<(() => never) & F>,
  () => never
>;

type s1 = {
  (queryInfo: string, callback: (result: number[]) => void): void;
  (queryInfo: string): Promise<number[]>;
};

type ss = OverloadToUnion<s1>;
