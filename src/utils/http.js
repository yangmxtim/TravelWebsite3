//axios 基礎的封裝
import axios from "axios";

const httpInstance= axios.create({
    //設定基礎的url （可更改）
    baseURL:'http://pcapi-xiaotuxian-front-devtest.itheima.net',
    //配置超時時間
    timeout:5000
})
//攔截器

//axios 請求攔截器
httpInstance.interceptors.request.use(config=>{
    return config
},e =>Promise.reject(e))


//axios 響應式攔截器
httpInstance.interceptors.response.use(res=>res.data,e => {
    return Promise.reject(e)
})

//將他匯出
export default httpInstance

