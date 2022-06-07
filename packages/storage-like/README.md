# @void-cache/storage-like

![npm (scoped)](https://img.shields.io/npm/v/@void-cache/storage-like?style=flat-square)

[void-cache](https://gitee.com/white-kite/void-cache) 的indexDB 实现

🇨🇳国内用户可访问[国内镜像](https://gitee.com/white-kite/void-cache)

## 创建一个新实例使用

### Demo

```ts
import {createStorageLikeCache} from '@void-cache/storage-like'

export const store = createStorageLikeCache({
  storageLike: localStorage,
})

store.get('foo')
store.set('foo', 'bar')
store.has('foo')
store.clear()
store.remove('foo')
```


