# void-cache

![npm (scoped)](https://img.shields.io/npm/v/void-cache?style=flat-square)

一个为了统一开发中各种key-value储存方案API的小工具

## 同步版

### Demo

```ts
import {defineDriver} from 'void-cache'

export const storageLikeDriver = defineDriver<Storage>(
  (storageLike) => ({
    get: (key) => storageLike.getItem(key),
    set: (key, value) => storageLike.setItem(key, value as any),
    delete: (key) => storageLike.removeItem(key),
    clear: () => storageLike.clear(),
    has: (key) => Object.prototype.hasOwnProperty.call(storageLike, key),
    keys: () => Object.keys(storageLike),
  })
)

export const localStorageCache = createCacheModel(storageLikeDriver(localStorage))

localStorageCache.get('foo')
localStorageCache.set('foo', 'bar')
localStorageCache.has('foo')
localStorageCache.clear()
localStorageCache.remove('foo')
```

## 异步版

### Demo

```ts
import {defineAsyncDriver} from 'void-cache'

export const storageLikeDriver = defineAsyncDriver<Storage>(
  (storageLike) => ({
    get: (key) => Promise.resolve(storageLike.getItem(key)),
    set: (key, value) => Promise.resolve(storageLike.setItem(key, value as any)),
    delete: (key) => Promise.resolve(storageLike.removeItem(key)),
    clear: () => Promise.resolve(storageLike.clear()),
    has: (key) => Promise.resolve(Object.prototype.hasOwnProperty.call(storageLike, key)),
    keys: () => Promise.resolve(Object.keys(storageLike)),
  })
)

export const localStorageCache = createAsyncCacheModel(storageLikeDriver(localStorage))

await localStorageCache.get('foo')
await localStorageCache.set('foo', 'bar')
await localStorageCache.has('foo')
await localStorageCache.clear()
await localStorageCache.remove('foo')
```

## 预设

- @void-cache/indexdb indexDB 
- @void-cache/memory 内存
- @void-cache/storage-like 与localstorage API 数据结构相同
- @void-cache/web-storage localStorage + sessionStorage
