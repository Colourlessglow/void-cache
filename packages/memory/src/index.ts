import { defineDriver, createCacheModel } from '@void-cache/core'

export const memoryCacheDriver = defineDriver(() => {
  const memoryStorage = new Map<string, any>()
  return {
    get: (key) => memoryStorage.get(key),
    set: (key, value) => memoryStorage.set(key, value as any),
    delete: (key) => memoryStorage.delete(key),
    clear: () => memoryStorage.clear(),
    has: (key) => memoryStorage.has(key),
    keys: () => Array.from(memoryStorage.keys()),
  }
})

export const createMemoryCache = () => createCacheModel(memoryCacheDriver())

export const memoryCache = createMemoryCache()
