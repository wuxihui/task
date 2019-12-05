import http from '@/untils/http'

const Api = {
  //登录
  login(params) {
    return http.get('/gateway')
    // return http({
    //   url: "/gateway",
    //   method: "get",
    //   data: params
    // })
  },
  //http://m.maoyan.com/ajax/comingList?ci=30&token=&limit=10
  //注册
  // resign(params) {
  //   return http.post('/users/resign')
  // }
}

export default Api