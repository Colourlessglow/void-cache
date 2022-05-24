import { createStorageLikeCache } from './storageLike'

export const sessionStorageCache = createStorageLikeCache({
  storageLike: sessionStorage,
  support: () => !!globalThis.sessionStorage,
})
