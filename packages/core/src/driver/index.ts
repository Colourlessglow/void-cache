export interface Driver<T = any> {
  get: (key: string) => T
  set: (key: string, value: T) => any
  delete?: (key: string) => any
  keys?: () => string[]
  clear?: () => any
  has?: (key: string) => boolean
  support?: () => boolean
}

export type DefineDriver<T, V> = (opts: T) => Driver<V>

export interface AsyncDriver<T = any> {
  get: (key: string) => Promise<T>
  set: (key: string, value: T) => Promise<any>
  delete?: (key: string) => Promise<any>
  keys?: () => Promise<string[]>
  clear?: () => Promise<any>
  has?: (key: string) => Promise<boolean>
  support?: () => boolean
}

export type AsyncDefineDriver<T, V> = (opts: T) => AsyncDriver<V>

export function defineDriver<T, V = any>(fn: DefineDriver<T, V>) {
  return (opts: any) => {
    return fn(opts)
  }
}

export function defineAsyncDriver<T, V = any>(fn: AsyncDefineDriver<T, V>) {
  return (opts: any) => {
    return fn(opts)
  }
}
