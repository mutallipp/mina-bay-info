//index.js
//获取应用实例
const app = getApp()
import top from '../template/top/top.js'
import { getGoodsCategory,getHomeData,getGoodsList } from '../../utils/api'
import * as utils from '../../utils/index'

Page({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    bgImg:"https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg",
    motto: 'Hi 开发者！',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    // 类目数据
    goodBarData:[],
    // 商品数据
    goodsList:[],
    pageNum:1,
    pageSize:5,
    isMore:true,
    goodsListThrottle:null,
    tabList:['推荐',"最新发布","最新回复"],
    gridCol:4,
    TabCur: 0,
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  chickGood:function (params) {
    
    top.chickGood(params)
  },
  tabSelect(e) {
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      scrollLeft: (e.currentTarget.dataset.id-1)*60
    })
  },
  /**
   * 获取goodBarData
   */
  async getGoodsCategoryData(){
    const { code, data} = await getGoodsCategory()
    if(code!==200){
      return
    }
    this.setData({goodBarData:data.list})
  },
  /**
   * 获取轮播图
   */
  async getHomeData(){
    const { code, data} = await getHomeData({bannerType:1})
    if(code!==200){
      return
    }
    this.setData({
      swiperList:data.swiperImgList,
      goodBarData:data.categoriesList,
      goodsList:data.productList
    })
  },
  /**getGoodsList
   * 获取商品
   */
  async getGoodsListData(pageNum,pageSize){
    const { code, data} = await getGoodsList({
      pageNum:pageNum,
      pageSize:pageSize
    })
    if(code!==200){
      return
    }
    const isMore = pageNum < data.totalPage
    const { goodsList } = this.data
    if(data.list&&data.list.length>1){
      goodsList.push(data.list)
    }
    this.setData({
      goodsList,
      pageNum,
      isMore
    })
  },
  getData(){
    app.globalData.isLogin.then(res=>{
      this.getHomeData()
    })

  },

  onLoad: function () {
    this.swiperComponnet = this.selectComponent('#swiper');
    let t=this;
    this.getData()
    // app.logger(this.selectComponent('#swiper').init())
    // t.swiperComponnet.init(t.data.swiperList)
    // if (app.globalData.userInfo) {
    //   this.setData({
    //     userInfo: app.globalData.userInfo,
    //     hasUserInfo: true
    //   })
    // } else if (this.data.canIUse){
    //   // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //   // 所以此处加入 callback 以防止这种情况
    //   app.userInfoReadyCallback = res => {
    //     this.setData({
    //       userInfo: res.userInfo,
    //       hasUserInfo: true
    //     })
    //   }
    // } else {
    //   // 在没有 open-type=getUserInfo 版本的兼容处理
    //   wx.getUserInfo({
    //     success: res => {
    //       app.globalData.userInfo = res.userInfo
    //       this.setData({
    //         userInfo: res.userInfo,
    //         hasUserInfo: true
    //       })
    //     }
    //   })
    // }
  },
  /**
   * 滑动到底部加载
   */
  onReachBottom() {
    if(this.data.isMore){
      // 做节流
      if(!this.data.goodsListThrottle) this.setData({goodsListThrottle:utils.throttle(this.getGoodsListData,500)})
      this.data.goodsListThrottle(this.data.pageNum+1,this.data.pageSize)
    }
  },

  DotStyle(e) {
    this.setData({
      DotStyle: e.detail.value
    })
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

})
