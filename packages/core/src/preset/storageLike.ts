import { defineDriver } from '../driver'
import { createCacheModel } from '../cache'

export interface StorageLikeDriverOptions {
  storageLike: Storage
  support?: () => boolean
}

export const storageLikeDriver = defineDriver<StorageLikeDriverOptions, string | null>(
  ({ storageLike, support }) => ({
    get: (key) => storageLike.getItem(key),
    set: (key, value) => storageLike.setItem(key, value as any),
    delete: (key) => storageLike.removeItem(key),
    clear: () => storageLike.clear(),
    has: (key) => Object.prototype.hasOwnProperty.call(storageLike, key),
    keys: () => Object.keys(storageLike),
    support,
  })
)

export const createStorageLikeCache = (options: StorageLikeDriverOptions) =>
  createCacheModel(storageLikeDriver(options))
