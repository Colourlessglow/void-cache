# @void-cache/indexdb

![npm (scoped)](https://img.shields.io/npm/v/@void-cache/indexdb?style=flat-square)

[void-cache](https://gitee.com/white-kite/void-cache) 的indexDB 实现

🇨🇳国内用户可访问[国内镜像](https://gitee.com/white-kite/void-cache)


## 直接使用

### Demo

```ts
import {indexDBCache} from '@void-cache/indexdb'

await indexDBCache.get('foo')
await indexDBCache.set('foo', 'bar')
await indexDBCache.has('foo')
await indexDBCache.clear()
await indexDBCache.remove('foo')
```

## 创建一个新实例使用

### Demo

```ts
import {createIndexDBCache} from '@void-cache/indexdb'

export const store = createIndexDBCache({
  dbName: 'void-cache',
  storeName: 'void-cache',
})

await store.get('foo')
await store.set('foo', 'bar')
await store.has('foo')
await store.clear()
await store.remove('foo')
```


