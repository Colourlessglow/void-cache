import { defineDriver, createCacheModel, CacheModel, Driver } from '@void-cache/core'

export interface StorageLikeDriverOptions {
  storageLike: Storage
  support?: () => boolean
}

export const storageLikeDriver = defineDriver<StorageLikeDriverOptions, string | null>(
  ({ storageLike, support }) =>
    ({
      get: (key) => storageLike.getItem(key),
      set: (key, value) => storageLike.setItem(key, value as any),
      remove: (key) => storageLike.removeItem(key),
      clear: () => storageLike.clear(),
      has: (key) => Object.prototype.hasOwnProperty.call(storageLike, key),
      keys: () => Object.keys(storageLike),
      support,
    } as Driver<string | null>)
)

export const createStorageLikeCache = (
  options: StorageLikeDriverOptions
): CacheModel<string | null> => createCacheModel(storageLikeDriver(options))
