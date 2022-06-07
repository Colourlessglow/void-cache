export interface Driver<T = any> {
  get<R = T>(key: string): R

  set<R = T>(key: string, value: R): any

  remove?(key: string): any

  keys?(): string[]

  clear?(): any

  has?(key: string): boolean

  support?(): boolean
}

export type DefineDriver<T, V> = (opts: T) => Driver<V>

export interface AsyncDriver<T = any> {
  get<R = T>(key: string): Promise<R>

  set<R = T>(key: string, value: R): Promise<any>

  remove?(key: string): Promise<any>

  keys?(): Promise<string[]>

  clear?(): Promise<any>

  has?(key: string): Promise<boolean>

  support?(): boolean
}

export type AsyncDefineDriver<T, V> = (opts: T) => AsyncDriver<V>

export function defineDriver<T, V = any>(fn: DefineDriver<T, V>) {
  return (opts?: any) => {
    return fn(opts)
  }
}

export function defineAsyncDriver<T, V = any>(fn: AsyncDefineDriver<T, V>) {
  return (opts: any) => {
    return fn(opts)
  }
}
