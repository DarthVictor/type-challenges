type MyReadonly2<T, K extends keyof T = keyof T> = {
    readonly[F in K]: T[F];
} & {
    [F in Exclude<keyof T, K>]: T[F]
}
