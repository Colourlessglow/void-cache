# @void-cache/web-storage

![npm (scoped)](https://img.shields.io/npm/v/@void-cache/web-storage?style=flat-square)

[void-cache](https://gitee.com/white-kite/void-cache) 内存 实现

🇨🇳国内用户可访问[国内镜像](https://gitee.com/white-kite/void-cache)

## localStorageCache

### Demo

```ts
import {localStorageCache} from '@void-cache/web-storage'

localStorageCache.get('foo')
localStorageCache.set('foo', 'bar')
localStorageCache.has('foo')
localStorageCache.clear()
localStorageCache.remove('foo')
```

## sessionStorageCache

### Demo

```ts
import {sessionStorageCache} from '@void-cache/web-storage'


sessionStorageCache.get('foo')
sessionStorageCache.set('foo', 'bar')
sessionStorageCache.has('foo')
sessionStorageCache.clear()
sessionStorageCache.remove('foo')
```


