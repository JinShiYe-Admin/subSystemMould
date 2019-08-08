import { mock } from 'mockjs'

/**
 * 模拟菜单列表数据
 */
mock(`${CONFIG.API_SSO_SYSTEM}/api/acl/menu`, {
  "msg": "获取成功！",
  "code": "0000",
  "data": [{
    "access": "kw#",
    "name": "学校考务系统",
    "icon": null,
    "pid": 2246,
    "childList": [{
      "access": "kw#yuejuan",
      "name": "阅卷",
      "icon": null,
      "pid": 2256,
      "childList": [
        {
          "access": "kw#Question:index",
          "name": "录原题",
          "icon": null,
          "pid": 2257,
          "id": 2474,
          "url": "http://127.0.0.1:3001"
        }
      ],
      "id": 2257,
      "url": null
    }],
    "id": 2256,
    "url": null
  }],
  "state": "ok"
})
