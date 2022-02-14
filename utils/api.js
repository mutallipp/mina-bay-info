const app = getApp();
const { rest,setToken, getToken } = require('./request')
const { getCode } = require('./net')
const { api } = require('../config/index')
import { setStorageAsync,getStorage } from './index'

/**
 * wx登陆
 */
export const login = async () =>{
  return await getToken()
}
/**
 * 商品保存
 */
export const goodsSave = async (data) =>{
  return rest.post(api.goodsSave,{...data})
}/**
 * 获取商品
 */
export const getGoodsList = async (data) =>{
  return rest.get(api.goodsList,{...data})
}
/**
 * 根据id获取商品信息
 * @param {*} data 
 */
export const getGoodsDetail = async (data) =>{
  return rest.get(api.goodsDetail,{...data})
}
/**
 * 获取推荐商品
 * @param {*} data 
 */
export const getRecommendList = async (data) =>{
  return rest.get(api.recommendList,{...data})
}
/**
 * 获取商品类目
 */
export const getGoodsCategory = async (data={}) =>{
  return rest.get(api.goodsCategory,data)
}
/**
 * 获取上传商品类目二级
 */
export const getGoodsCategoryItem = async (data={}) =>{
  return rest.get(api.goodsCategoryItem,data)
}
/**
 * 上传页获取上传商品类目二级
 */
export const getUploadGoodsCategory = async (data={}) =>{
  return rest.get(api.goodsCategory,data)
}/**
 * 获取轮首页数据
 */
export const getHomeData = async (data={}) =>{
  return rest.get(api.banner,data)
}
/**
 * tagList
 */
export const getTagList = async (data={}) =>{
  return rest.get(api.tagList,data)
}
