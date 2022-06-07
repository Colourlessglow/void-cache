import { AsyncDriver } from '../driver'
import { AsyncCacheModel } from './types'

export const createAsyncCacheModel = <T = Promise<any>>(
  driver: AsyncDriver<T>
): AsyncCacheModel<T> => {
  const support = driver.support ? driver.support() : true

  function get<R = T>(key: string): Promise<R> {
    if (!support) {
      return Promise.reject('get is not support')
    }
    return driver.get(key) as any
  }

  function set<R = T>(key: string, value: R) {
    if (!support) {
      return Promise.reject('delete is not support')
    }
    return driver.set(key, value)
  }

  function remove(key: string) {
    if (!support || !driver.remove) {
      return Promise.reject('delete is not support')
    }
    return driver.remove(key)
  }

  function has(key: string) {
    if (!support || !driver.has) {
      return Promise.reject('has is not support')
    }
    return driver.has(key)
  }

  function keys() {
    if (!support || !driver.keys) {
      return Promise.resolve([])
    }
    return driver.keys()
  }

  function size() {
    return keys().then((k) => k.length)
  }

  function clear() {
    if (!support) {
      return Promise.reject('clear is not support')
    }
    if (driver.clear) {
      return driver.clear()
    }
    if (driver.remove && driver.keys) {
      return driver.keys().then((k) => Promise.all(k.map((key) => driver.remove!(key))))
    }
    return Promise.reject('clear is not support')
  }

  return {
    get,
    set,
    remove,
    has,
    keys,
    size,
    clear,
  }
}
