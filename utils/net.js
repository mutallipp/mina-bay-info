import { getToken } from './request'
const { host,api } = require('../config/index')
/**
 * 获取code
 */
export const getCode = () => {
  return new Promise((resolve,reject) => {
    wx.login({
      success (res) {
        if (res.code) {
          //发起网络请求
          console.log(res.code);
          resolve(res.code)
        } else {
          console.log('code获取失败！' + res.errMsg)
          reject(false)
        }
      },
      fail:(err)=> {
        console.log('ode获取失败！' + err.errMsg)
        reject(false)
      }
      
    })
  })
}
/**
 * 上传图片
 */
export const uploadFile = (filePath) =>{
  return new Promise((resolve,reject) =>{
    getToken().then(res=>{
      wx.uploadFile({
        url: host+api.uploadImg, //自己的Java后台接口地址
        filePath,
        name: 'file',
        header: {
          "Content-Type": "multipart/form-data",
          'accept': 'application/json',
          'Authorization': res || ''//若有token，此处换上你的token，没有的话省略
        },
        success: function (res) {
          console.log(`上传成功`, res.data)
          resolve(JSON.parse(res.data))
        },
        fail(res) {
          console.log(`上传失败`, res.data)
          resolve(JSON.parse(res.data))
        }
      })
    })
    }).catch(err =>{
      console.log(err);
    })
    
  
}


