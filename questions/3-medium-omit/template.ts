type MyOmit<T, K extends keyof T> = {
    [F in Exclude<keyof T, K>]: T[F]
}
  
