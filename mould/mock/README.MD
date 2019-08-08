# 模拟数据

该文件夹用于存放前端模拟测试数据，不参与生产模式下的打包构建

### 使用方式

```javascript
import { mock } from 'mockjs'

mock(api, {
  "msg": "获取成功！",
  "code": "0000",
  "data": {},
  "state": "ok"
})
```

### 注意事项

- 创建模拟数据时的文件结构尽可能与 `src` 目录的结构保持一致
