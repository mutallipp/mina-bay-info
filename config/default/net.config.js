const api = {
  // 用户登陆
  userLogin:              '/api/mina/member/login',
  goodsSave:              '/api/product/save',
  goodsList:              '/api/product/list',
  goodsDetail:            '/api/product/detail',
  uploadImg:              '/productImg/upLoadImage',
  goodsCategory:          '/api/productCategory/list',
  goodsCategoryItem:      '/goods-category-item',
  banner:                 '/api/product/home',
  // 推荐商品
  recommendList:            '/api/product/recommendList',
  tagList:            '/api/tag/list',

}

/**
 * @description 导出默认网路配置
 **/
const network = {
  // host:'http://localhost:8081',
  host:'https://mina.mutallip.cn',

  //配后端数据的接收方式application/json;charset=UTF-8 或 application/x-www-form-urlencoded;charset=UTF-8
  contentType: 'application/json;charset=UTF-8',
  //消息框消失时间
  messageDuration: 3000,
  //最长请求时间
  requestTimeout: 10000,
  //操作正常code，支持String、Array、int多种类型
  successCode: [200, 0],
}
module.exports = {
  network,
  api,
}