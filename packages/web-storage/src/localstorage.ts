import { createStorageLikeCache } from '@void-cache/storage-like'

export const localStorageCache = createStorageLikeCache({
  storageLike: localStorage,
  support: () => !!window.localStorage,
})
