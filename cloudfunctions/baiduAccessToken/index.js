const rq = require('request-promise')
// 
/**
 * 获取百度ai AccessToken
 */
exports.main = async(event, context) => {
  let apiKey = '0vPWCrt3ct0UPiGrN0G9uo9E',
    grantType = 'client_credentials',
    secretKey = 'zSGXqtd3ITiQWZZ1sGBqDttPtYzqrDI4',
    url = 'https://aip.baidubce.com/oauth/2.0/token?grant_type=client_credentials&client_id=0vPWCrt3ct0UPiGrN0G9uo9E&client_secret=zSGXqtd3ITiQWZZ1sGBqDttPtYzqrDI4&'

   return  await rq({
        method: 'POST',
        url,
        form: {
          "grant_type": grantType,
          "client_secret": secretKey,
          "client_id": apiKey
        },
        json: true
      }).then(data=>{
        return Promise.resolve({
          code: 0,
          data,
          info: '操作成功！'
        })
     }).catch(error=>{
        console.log(error)
        if (!error.code){
          return Promise.reject(error)
        } 
        return error
      })
}