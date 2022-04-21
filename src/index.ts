// 取得第一个元素
type TupleHead<T extends any[]> = T[0];

// 去除第一个元素
type TupleTail<T extends any[]> = T extends [x: any, ...other: infer R] ? R : []

// 取得最后一个元素
type TupleLast<T extends any[]> = T extends [x: any, ...other: infer R] ? T[R['length']] : undefined


// 从头部加入一个元素
type TupleUnshift<T extends any[], X> = [X, ...T]

// 
type TuplePush<T extends any[], X> = [...T, X]

type TupleInit<T extends any[]> = T extends [...f: infer R1, l: infer _R2] ? R1 : undefined

type TypeToTypeRecursively<T1 extends any[], T2, Result extends T2[]> = {
    1: Result;
    0: TypeToTypeRecursively_<T1, T2, Result>;
}[T1 extends [] ? 1 : 0];

type TypeToTypeRecursively_<T1 extends any[], T2, Result extends T2[]> = TypeToTypeRecursively<TupleInit<T1>, T2, TuplePush<Result, T2>>

type TypeToType<D extends any[], T> = TypeToTypeRecursively<D, T, []>;

type B = TypeToType<[string, string, string, string, string, string, string], number>

// 2
type S2B<A extends string[]> = {
    [I in keyof A]: number;
}

// 3
type A2A<A extends any[], B> = {
    [I in keyof A]: B;
}

type S = A2A<[string, string], number>