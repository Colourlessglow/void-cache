# @void-cache/memory

![npm (scoped)](https://img.shields.io/npm/v/@void-cache/memory?style=flat-square)

[void-cache](https://gitee.com/white-kite/void-cache) 内存 实现

🇨🇳国内用户可访问[国内镜像](https://gitee.com/white-kite/void-cache)


## 直接使用

### Demo

```ts
import {memoryCache} from '@void-cache/memory'

memoryCache.get('foo')
memoryCache.set('foo', 'bar')
memoryCache.has('foo')
memoryCache.clear()
memoryCache.remove('foo')
```

## 创建一个新实例使用

### Demo

```ts
import {createMemoryCache} from '@void-cache/memory'

export const store = createMemoryCache()

store.get('foo')
store.set('foo', 'bar')
store.has('foo')
store.clear()
store.remove('foo')
```


