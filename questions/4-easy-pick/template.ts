type MyPick<T, K extends keyof T> = {
  [F in K]: T[F]
}
