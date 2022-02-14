// import { host } from '/config/index'
const app = getApp()
const { host,api } = require('../config/index')
const { getCode } = require('./net')
const utils = require('./util')
import { login } from './api'
import { removeStorage,setStorageAsync } from './index'

let TOKEN     = null;
let isReqFaild = false
// 设置TOKEN
export const setToken =( token )=> {
  TOKEN = token;
}
/**
 * 获取token
 * @param {}} token 
 */
export const getToken = ()=> {
  let token = TOKEN;
  return new Promise((resolve,reject) =>{
    if(!token){
      getCode().then(code=>{
        if (!code) {
          console.log('code 无效');
          resolve(false)
        }
        rest.post(api.userLogin,{code}).then(result=>{
          if (result.code !==200){
            console.log('登陆失败',result.msg);
            return
          }
          token = `${result.data.tokenHead} ${result.data.token}`
          TOKEN = token
          setStorageAsync('token',token)
          resolve(token)
        }).catch(err=>{
          console.log(err);
        })
      }).catch(err=>{
        console.log(err);
      })
    }else{
      setToken(token)
      setStorageAsync('token',token)
      console.log('apitoken',token);
      resolve(token)
    }
   
  })
  // if (!token){
  //   console.log('sssss');
  //   const code = await getCode()
  //   if (!code) {
  //     console.log('code 无效');
  //     return
  //   }
  //   console.log('ffff');
  //   // const {code, data,msg } = rest.post(api.userLogin,{code})
  //   const result = await rest.post(api.userLogin,{code})
  //   console.log('aaaa');
  //   if (result.code !==200){
  //     console.log('登陆失败',result.msg);
  //     return
  //   }
  //   token = `${result.data.tokenHead} ${result.data.token}`
  //   TOKEN = token
  // }
  // setToken(token)
  // setStorageAsync('token',token)
  // console.log('apitoken',token);
  // return token
  // return TOKEN;
}

const http = async ( url, data = {}, method = 'POST',config={} ) => {
  // const token = await getToken();

  return new Promise((resolve, reject) => {
    const {
      autoErrorRes = true,
      autoErrorData = true,
      hiddenLoading = false,
      paramsType = 'application/json',
      target = 'from-hermes',
    } = config
    // loading 显示或者隐藏
    if (!hiddenLoading){
      wx.showLoading({
          title: '请稍等',
        })
    }
    // 判断token
    if(!TOKEN&&url !== api.userLogin){
      getToken().then(res=>{
        // console.log('sssss',res);
        if(res){
          wx.request({
            url: `${host}${url}`,
            method,
            data,
            header: {
              //   'Content-Type': 'application/x-www-form-urlencoded',
              //   'Content-Type': 'application/json',
                'Content-Type': paramsType,
                'Authorization':res || ''
            },
            success: (res) => {
                if (res.statusCode !== 200) {
                  if(autoErrorRes){
                    const msg = '服务器忙，请稍后重试'
                    utils.toast.error(msg)
                  }
                    reject({
                      code : 500,
                      hints: msg,
                    });
                }else if(res.data.code === 200) {
                    resolve(res.data);
                }else {
                  switch(res.data.code){
                    case 401:{
                      // 先清除本地缓存然后再登陆
                      // removeStorage('token')
                      // 未登录
                      // login()
                      break
                    }
                    default:
                      reject(res.data);
                        break
                  }
                  // 自动处理错误信息
                  if(autoErrorRes){
                    wx.showToast({
                        title: res.data.msg,
                        icon: 'error',
                      })
                  }
                }
            },
            fail: (res) => {
              isReqFaild = true
                const msg = '网络错误'
                utils.toast.error(msg)
                reject({
                    code : 0,
                    hints: msg,
                });
              },
              complete:(res) =>{
                if(isReqFaild){
                  setTimeout(()=>{
                    wx.hideLoading({
                      success: (res) => {},
                    })
                  },1500)
                }else{
                  wx.hideLoading({
                    success: (res) => {},
                  })
                }
                 
              }
            
        });
        }else{
          console.log('token获取失败');
          reject(false)
        }
      })
    }else{
      wx.request({
        url: `${host}${url}`,
        method,
        data,
        header: {
          //   'Content-Type': 'application/x-www-form-urlencoded',
          //   'Content-Type': 'application/json',
            'Content-Type': paramsType,
            'Authorization':TOKEN || ''
        },
        success: (res) => {
            if (res.statusCode !== 200) {
              const msg = '服务器忙，请稍后重试'
              utils.toast.error(msg)
                reject({
                  code : 500,
                  hints: msg,
                });
            }else if(res.data.code === 200) {
                resolve(res.data);
            }else {
              switch(res.data.code){
                case 401:{
                  // 先清除本地缓存然后再登陆
                  // removeStorage('token')
                  // 未登录
                  // login()
                  break
                }
                default:
                  reject(res.data);
                    break
              }
              // 自动处理错误信息
              if(autoErrorRes){
                wx.showToast({
                    title: res.data.msg,
                    icon: 'error',
                  })
              }
            }
        },
        fail: (res) => {
          isReqFaild= true
          const msg = '网络错误'
          utils.toast.error(msg)
            reject({
                code : 0,
                hints: msg,
            });
          },
          complete:(res) =>{
            if(isReqFaild){
              setTimeout(()=>{
                wx.hideLoading({
                  success: (res) => {},
                })
              },1500)
            }else{
              wx.hideLoading({
                success: (res) => {},
              })
            }
          }
        
    });
    }
  });
};

export const rest = {
    get:(url,data,config ={})=> http(url,data,'GET',config),
    post:(url,data,config ={})=> http(url,data,'POST',config),

}


