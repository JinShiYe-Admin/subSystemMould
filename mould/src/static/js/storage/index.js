import { qs } from '@/static/js/axios'

const { APP_CODE, UNIT_CODE, SYSTEM_URL, SYSTEM_CODE } = CONFIG

/**
 * 应用系统缓存属性名
 * @type {string}
 */
const locationParams = qs.parse(location.search.slice(1))
const appPrefix = locationParams.app_code ? locationParams.app_code.slice(0, -1) : (APP_CODE).slice(0, -1)

export const cacheKey = `${appPrefix}_${SYSTEM_CODE}`

/**
 * 设置本地缓存
 * @param key
 * @param value
 */
export function setStorage(key, value) {
  const storage = JSON.parse(localStorage.getItem(cacheKey))

  localStorage.setItem(cacheKey, JSON.stringify({ ...storage, [key]: value }))
}

/**
 * 获取本地缓存
 * @param key
 * @returns {any}
 */
export function getStorage(key) {
  const storage = JSON.parse(localStorage.getItem(cacheKey))

  if (storage) {
    return storage[key]
  }

  return undefined
}

/**
 * 清除所有缓存
 */
export function clearStorage() {
  localStorage.clear()
}

/**
 * 设置多条缓存
 * @param object
 */
export function setManyStorage(object) {
  for (let args of Object.entries(object)) {
    setStorage(...args)
  }
}

/**
 * 设置登录信息缓存
 */
export function setLoginInfoStorage(responseData) {
  setManyStorage({
    access_token: responseData.access_token,
    id: responseData.user.id,
    img_url: responseData.user.img_url,
    login_name: responseData.user.login_name,
    name: responseData.user.name,
    platform_code: responseData.user.platform_code,
    platform_name: responseData.user.platform_name,
    school_code: responseData.user.school_code,
    school_name: responseData.user.school_name,
    sex: responseData.user.sex,
    type_code: responseData.user.type_code,

    app_code: APP_CODE,
    unit_code: UNIT_CODE,
    system_url: SYSTEM_URL,
    error_page_url: `${SYSTEM_URL}/#/error/`,

    modifyFlag: 999,
  })
}
