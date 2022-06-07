import { Driver } from '../driver'
import { CacheModel } from './types'

export const createCacheModel = <T = any>(driver: Driver<T>): CacheModel<T> => {
  const support = driver.support ? driver.support() : true

  function get<R = T>(key: string): R {
    if (!support) {
      throw new Error('get is not support')
    }
    return driver.get(key) as any
  }

  function set<R = T>(key: string, value: R) {
    if (!support) {
      throw new Error('delete is not support')
    }
    return driver.set(key, value)
  }

  function remove(key: string) {
    if (!support || !driver.remove) {
      throw new Error('delete is not support')
    }
    return driver.remove(key)
  }

  function has(key: string) {
    if (!support || !driver.has) {
      throw new Error('has is not support')
    }
    return driver.has(key)
  }

  function keys() {
    if (!support || !driver.keys) {
      return []
    }
    return driver.keys()
  }

  function size() {
    return keys().length
  }

  function clear() {
    if (!support) {
      throw new Error('clear is not support')
    }
    if (driver.clear) {
      return driver.clear()
    }
    if (driver.remove && driver.keys) {
      driver.keys().forEach((key) => {
        driver.remove!(key)
      })
      return
    }
    throw new Error('clear is not support')
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
