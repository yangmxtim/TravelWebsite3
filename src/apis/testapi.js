import httpInstance  from "@/utils/http";
//測試axios 是否能正常運行
export function getCategory(){
    return httpInstance ({
        url:'home/category/head'
    })
}