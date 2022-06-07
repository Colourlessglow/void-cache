import { createStorageLikeCache } from '@void-cache/storage-like'

export const sessionStorageCache = createStorageLikeCache({
  storageLike: sessionStorage,
  support: () => !!window.sessionStorage,
})
