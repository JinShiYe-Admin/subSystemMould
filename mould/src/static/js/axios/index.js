/**
 * 基于 axios 的数据请求模块
 * @see https://github.com/axios/axios
 */
import axios from 'axios'
import qs from 'qs'
import Promise from 'es6-promise'
import get from '@/static/js/axios/get'
import post from '@/static/js/axios/post'
import all from '@/static/js/axios/all'
import { RequestInterceptor, ResponseInterceptor } from '@/static/js/axios/interceptors'

const instanceAxios = axios.create()
const requestInterceptor = new RequestInterceptor()
const responseInterceptor = new ResponseInterceptor()

instanceAxios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
instanceAxios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8'

instanceAxios.interceptors.request.use(requestInterceptor.before, requestInterceptor.exception)
instanceAxios.interceptors.response.use(responseInterceptor.before, responseInterceptor.exception)

export default instanceAxios

export { axios, qs, post, get, all }
