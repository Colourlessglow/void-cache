import { Driver } from '../driver'
import { CacheModel } from './types'

export const createCacheModel = <T = any>(driver: Driver<T>): CacheModel<T> => {
  const support = driver.support ? driver.support() : true

  function get(key: string) {
    if (!support) {
      throw new Error('get is not support')
    }
    return driver.get(key)
  }

  function set(key: string, value: T) {
    if (!support) {
      throw new Error('delete is not support')
    }
    return driver.set(key, value)
  }

  function _delete(key: string) {
    if (!support || !driver.delete) {
      throw new Error('delete is not support')
    }
    return driver.delete(key)
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
    if (driver.delete && driver.keys) {
      driver.keys().forEach((key) => {
        driver.delete!(key)
      })
      return
    }
    throw new Error('clear is not support')
  }

  return {
    get,
    set,
    delete: _delete,
    has,
    keys,
    size,
    clear,
  }
}
