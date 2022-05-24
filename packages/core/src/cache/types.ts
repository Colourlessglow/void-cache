import { Driver, AsyncDriver } from '../driver'

export interface CacheModel<T = any> extends Required<Omit<Driver<T>, 'support'>> {
  size: () => number
}

export interface AsyncCacheModel<T = any> extends Required<Omit<AsyncDriver<T>, 'support'>> {
  size: () => Promise<number>
}
