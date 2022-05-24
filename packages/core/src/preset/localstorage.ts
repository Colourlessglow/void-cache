import { createStorageLikeCache } from './storageLike'

export const localstorageCache = createStorageLikeCache({
  storageLike: localStorage,
  support: () => !!globalThis.localStorage,
})
