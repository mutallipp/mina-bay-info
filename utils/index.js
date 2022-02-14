/**
 * 本地存储（同步）
 * @param {*} key 
 * @param {*} value 
 */
export const setStorage = (key,value) =>{
  wx.setStorage({
    key:key,
    data:value
  })
}
/**
 * 本地获取值（同步）
 * @param {*} key 
 */
export const getStorage = (key) =>{
  return new Promise((revolse,reject) =>{
    wx.getStorage({
      key,
      success (res) {
        revolse(res.data)
      },
      fail(err){
        console.log('getStorage读取失败',key);
        revolse(false)
      }
    })
  })

}
/**
 * 本地存储（异步）
 * @param {*} key 
 * @param {*} value 
 */
export const setStorageAsync = (key,value) =>{
  try {
    wx.setStorageSync(key, value)
  } catch (e) {
    console.log('setStorageAsync失败',key);
   }
}
/**
 * 本地获取（异步）
 * @param {} key 
 */
export const getStorageAsync = (key) =>{
  try {
    var value = wx.getStorageSync('key')
    if (value) {
      return value
    }
  } catch (e) {
    console.log('storageAsync读取失败',key);
    return false
  }
}
export const removeStorage = (key) =>{
  wx.removeStorage({
    key,
    success (res) {
      console.log('removeStorage成功',key)
    },
    fail(err){
      console.log('removeStorage失败',key)
    }
  })
}
/**
 * 防抖
 * @param {*} fn 
 * @param {*} dely 
 */
export const debounce = (fn,dely) =>{
  let timer;
  return function(){
    if(timer) clearTimeout(timer)
  }
}
// 节流 时间戳版
export function throttle (fn, delay = 500) {
  let last = 0
  return function () {
    const context = this, args = arguments
    let now = Date.now()
    
    if (now - last > delay) {
      last = now
      fn.call(context, ...arguments)
    }
  }
}
