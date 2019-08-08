# Jsy Separation Framework

前后端分离框架 - 登录界面及用户控制菜单

#### 安装教程

1. 安装依赖： npm install
2. 启动服务： npm start
3. 构建打包： npm run build

################### 使用
1. 文件引入src/static
    1. js包含错误页、打印、协议请求、生成签名、存取值等
    2. less为样式文件，直接引入index.less即可，override.less为公司定义的样式，覆盖蚂蚁自带的样式


ps:存取值:
    import { getStorage, clearStorage,setStorage } from '@/static/js/storage';
        存：setStorage('key',value);
        取：let value = getStorage('key');

协议请求:
    import { post } from '@/static/js/axios';
        const api = `${CONFIG.API_SSO_SYSTEM}/api/school/list`;
        const params = {
            platform_code: CONFIG.PLATFORM_CODE, //平台代码
            app_code: CONFIG.APP_CODE, //应用系统代码
            pageNumber:pageIndex,//分页页码
            pageSize:this.state.pagesize,//每页数据条数
        }
        const poster = post(api, params, { disableMessage: true });
        poster.then(({ data: menus }) => {
            console.log('menus:'+JSON.stringify(menus));
            this.setState({
                loading: false,
                data: menus.list,
                total:menus.totalRow,
            });
        })

样式文件，只需要在自己全局的样式中，引入统一样式


<!-- 框架postmessage数据，data为框架中缓存的数据 -->
iframe.contentWindow.postMessage(data, '*')

<!-- 子系统通过postmessage，监听框架传过来的数据 -->
window.addEventListener('message', function(ev) {
                let data=ev.data.cache;
                if(data){
                    
                }else{

                }
            }, false);

            
<!-- 子系统错误处理，res.data.code子系统协议请求时，得到的code码 -->
<!-- CONFIG.ErrorPage为框架点击子系统时，通过postmessage传到子系统的error_page_url -->
if (res.data.code === 'sup_0006') {
            window.location.href = CONFIG.ErrorPage+'/:0006';
          }