import { AsyncDriver } from '../driver'

export const createAsyncCacheModel = <T = Promise<any>>(driver: AsyncDriver<T>) => {
  const support = driver.support ? driver.support() : true

  function get(key: string) {
    if (!support) {
      return Promise.reject('get is not support')
    }
    return driver.get(key)
  }

  function set(key: string, value: T) {
    if (!support) {
      return Promise.reject('delete is not support')
    }
    return driver.set(key, value)
  }

  function _delete(key: string) {
    if (!support || !driver.delete) {
      return Promise.reject('delete is not support')
    }
    return driver.delete(key)
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
    if (driver.delete && driver.keys) {
      return driver.keys().then((k) => Promise.all(k.map((key) => driver.delete!(key))))
    }
    return Promise.reject('clear is not support')
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
