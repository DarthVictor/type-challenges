type PrimitiveOrFunction = string | number | boolean | undefined | null | Function;

type DeepReadonly<T> = {
    readonly [F in keyof T]:
    T[F] extends PrimitiveOrFunction ? T[F] : {
        readonly [G in keyof T[F]]: DeepReadonly<T[F][G]>
    }
}
