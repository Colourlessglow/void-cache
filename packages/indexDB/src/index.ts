import { defineAsyncDriver, createAsyncCacheModel } from '@void-cache/core'
import { createStore, get, set, del, clear, keys } from 'idb-keyval'

export interface IndexDBDriverOption {
  dbName: string
  storeName: string
}

export const indexDBDriver = defineAsyncDriver<IndexDBDriverOption, any>(
  ({ dbName, storeName }) => {
    const db = createStore(dbName, storeName)

    return {
      get: (key) => get(key, db) as Promise<any>,
      set: (key, value) => set(key, value as any, db),
      remove: (key) => del(key, db),
      clear: () => clear(db),
      has: (key) => keys(db).then((k) => k.includes(key)),
      keys: () => keys(db),
      support: () =>
        // @ts-ignore
        !!(window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB),
    }
  }
)

export const createIndexDBCache = (opts: IndexDBDriverOption) =>
  createAsyncCacheModel(indexDBDriver(opts))

export const indexDBCache = createIndexDBCache({
  dbName: 'void-cache',
  storeName: 'void-cache',
})
